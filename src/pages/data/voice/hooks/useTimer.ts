import { useRef, useState, useEffect, useCallback } from 'react';

export const useTimer = (tickMs: number = 500) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastStartRef = useRef<number | null>(null);
  const accumulatedMsRef = useRef<number>(0);

  const start = useCallback(() => {
    if (isRunning) {
      return;
    }
    lastStartRef.current = Date.now();

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setInterval(() => {
      const runningMs = lastStartRef.current ? Date.now() - lastStartRef.current : 0;
      const totalMs = accumulatedMsRef.current + runningMs;
      setSeconds(Math.floor(totalMs / 1000));
    }, tickMs);

    setIsRunning(true);
  }, [isRunning, tickMs]);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (lastStartRef.current) {
      accumulatedMsRef.current += Date.now() - lastStartRef.current;
      lastStartRef.current = null;
    }
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    lastStartRef.current = null;
    accumulatedMsRef.current = 0;
    setSeconds(0);
    setIsRunning(false);
  }, []);

  const format = useCallback((totalSeconds: number) => {
    const min = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, '0');
    const sec = (totalSeconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return {
    seconds,
    isRunning,
    start,
    stop,
    reset,
    format,
  };
};
