import { type RefObject, useRef, useState, useCallback, useEffect } from 'react';

interface ExtendedWindow extends Window {
  webkitAudioContext?: typeof AudioContext;
}

interface UseVisualizerOptions {
  fftSize?: number;
  width?: number;
  height?: number;
  barColor?: string;
}

interface UseVisualizerReturn {
  start: (_stream: MediaStream) => Promise<void>;
  stop: () => void;
  isRunning: boolean;
}

const visCleanupMap = new WeakMap<AudioContext, () => void>();

export const useVisualizer = (
  canvasRef: RefObject<HTMLCanvasElement | null>,
  { fftSize = 64, width = 600, height = 80, barColor = '#f87171' }: UseVisualizerOptions = {},
): UseVisualizerReturn => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const analyserRef = useRef<AnalyserNode | null>(null);
  const freqArrayRef = useRef<Uint8Array | null>(null);
  const timeArrayRef = useRef<Uint8Array | null>(null);
  const animationRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const safeClose = useCallback(async (ctx: AudioContext | null) => {
    if (!ctx) {
      return;
    }
    if (ctx.state !== 'closed') {
      try {
        await ctx.close();
      } catch (e) {
        void e;
      }
    }
  }, []);

  const start = useCallback(
    async (_stream: MediaStream) => {
      if (isRunning || !_stream) {
        return;
      }

      const AC =
        typeof AudioContext !== 'undefined'
          ? AudioContext
          : (window as ExtendedWindow).webkitAudioContext;
      if (!AC) {
        throw new Error('이 브라우저에서는 오디오 기능을 지원하지 않습니다.');
      }

      const audioCtx = new AC();
      audioCtxRef.current = audioCtx;

      if (audioCtx.state === 'suspended') {
        try {
          await audioCtx.resume();
        } catch (e) {
          void e;
        }
      }

      const analyser = audioCtx.createAnalyser();
      const source = audioCtx.createMediaStreamSource(_stream);

      const mute = audioCtx.createGain();
      mute.gain.value = 0;
      source.connect(analyser);
      analyser.connect(mute);
      mute.connect(audioCtx.destination);

      analyser.fftSize = fftSize;
      analyser.smoothingTimeConstant = 0.8;

      const bufferLength = analyser.frequencyBinCount;
      freqArrayRef.current = new Uint8Array(bufferLength);
      timeArrayRef.current = new Uint8Array(analyser.fftSize);
      analyserRef.current = analyser;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) {
        return;
      }

      const computeSizes = () => {
        const dpr = window.devicePixelRatio || 1;
        const cssW = Math.floor((canvas.clientWidth || width) ?? 600);
        const cssH = Math.floor((canvas.clientHeight || height) ?? 80);

        canvas.style.width = `${cssW}px`;
        canvas.style.height = `${cssH}px`;
        canvas.width = Math.max(1, Math.round(cssW * dpr));
        canvas.height = Math.max(1, Math.round(cssH * dpr));
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);

        return { logicalW: cssW, logicalH: cssH };
      };

      let { logicalW, logicalH } = computeSizes();

      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      resizeObserverRef.current = new ResizeObserver(() => {
        const s = computeSizes();
        logicalW = s.logicalW;
        logicalH = s.logicalH;
      });
      resizeObserverRef.current.observe(canvas);

      setIsRunning(true);

      let zeroFrames = 0;
      const ZERO_FRAMES_THRESHOLD = 12;

      const draw = () => {
        if (!analyserRef.current || !freqArrayRef.current || !timeArrayRef.current) {
          return;
        }
        animationRef.current = requestAnimationFrame(draw);

        const analyser = analyserRef.current;
        const freq = freqArrayRef.current;
        const time = timeArrayRef.current;

        analyser.getByteFrequencyData(freq);
        const sum = freq.reduce((a, b) => a + b, 0);
        zeroFrames = sum === 0 ? zeroFrames + 1 : 0;

        ctx.clearRect(0, 0, logicalW, logicalH);

        if (zeroFrames >= ZERO_FRAMES_THRESHOLD) {
          analyser.getByteTimeDomainData(time);
          ctx.beginPath();
          const slice = logicalW / time.length;
          let x = 0;
          for (let i = 0; i < time.length; i++) {
            const v = time[i] / 128.0;
            const y = (v * logicalH) / 2;
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
            x += slice;
          }
          ctx.lineWidth = 2;
          ctx.strokeStyle = barColor;
          ctx.stroke();
          return;
        }

        const barWidth = (logicalW / freq.length) * 1.5;
        let x = 0;
        for (let i = 0; i < freq.length; i++) {
          const barHeight = freq[i] / 2;
          ctx.fillStyle = barColor;
          ctx.fillRect(x, logicalH - barHeight, barWidth, barHeight);
          x += barWidth + 1;
        }
      };
      draw();

      const onVis = async () => {
        const ctx = audioCtxRef.current;
        if (document.visibilityState === 'visible' && ctx && ctx.state === 'suspended') {
          try {
            await ctx.resume();
          } catch (e) {
            void e;
          }
        }
      };
      document.addEventListener('visibilitychange', onVis, { passive: true });
      visCleanupMap.set(audioCtx, () => {
        document.removeEventListener('visibilitychange', onVis);
      });
    },
    [barColor, canvasRef, fftSize, height, isRunning, width, safeClose],
  );

  const stop = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    const ctx = audioCtxRef.current;
    if (ctx) {
      visCleanupMap.get(ctx)?.();
      visCleanupMap.delete(ctx);
      void safeClose(ctx);
      audioCtxRef.current = null;
    }

    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect();
      resizeObserverRef.current = null;
    }

    analyserRef.current = null;
    freqArrayRef.current = null;
    timeArrayRef.current = null;
    setIsRunning(false);
  }, [safeClose]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      const ctx = audioCtxRef.current;
      if (ctx) {
        visCleanupMap.get(ctx)?.();
        visCleanupMap.delete(ctx);
        void safeClose(ctx);
        audioCtxRef.current = null;
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
    };
  }, [safeClose]);

  return { start, stop, isRunning };
};
