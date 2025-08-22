import { useEffect, useRef, useState } from 'react';

interface UseRecorderOptions {
  mimeType?: string;
  timeSlice?: number;
  onStart?: (_stream: MediaStream) => void;
  onPause?: () => void;
  onStop?: () => void;
}

export const useRecorder = ({
  mimeType,
  timeSlice = 250,
  onStart,
  onPause,
  onStop,
}: UseRecorderOptions = {}) => {
  const pickSupportedMime = (): string | undefined => {
    try {
      if (mimeType && MediaRecorder.isTypeSupported(mimeType)) {
        return mimeType;
      }
    } catch {
      /* empty */
    }
    const candidates = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/ogg',
      'audio/mp4',
      'audio/mpeg',
    ];
    for (const c of candidates) {
      try {
        if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(c)) {
          return c;
        }
      } catch {
        // noop
      }
    }
    return undefined;
  };
  const REC_MIME = pickSupportedMime();

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const start = async () => {
    const r = mediaRecorderRef.current;
    if (r && r.state === 'recording') {
      return;
    }

    if (!mediaRecorderRef.current || mediaRecorderRef.current.state === 'inactive') {
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
        setAudioURL(null);
      }
      audioChunks.current = [];

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            channelCount: 1,
            noiseSuppression: true,
            echoCancellation: true,
            autoGainControl: true,
          },
        });
        streamRef.current = stream;

        let recorder: MediaRecorder;
        try {
          recorder = REC_MIME
            ? new MediaRecorder(stream, { mimeType: REC_MIME })
            : new MediaRecorder(stream);
        } catch {
          recorder = new MediaRecorder(stream);
        }

        recorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            audioChunks.current.push(event.data);
          }
          if (recorder.state === 'paused') {
            const previewBlob = new Blob(audioChunks.current, {
              type: REC_MIME ?? event.data.type,
            });
            const nextUrl = URL.createObjectURL(previewBlob);
            setAudioURL((prev) => {
              if (prev) {
                URL.revokeObjectURL(prev);
              }
              return nextUrl;
            });
            if (audioRef.current) {
              audioRef.current.srcObject = null;
              audioRef.current.src = nextUrl;
            }
          }
        };

        recorder.onstop = () => {
          const finalBlob = new Blob(audioChunks.current, { type: REC_MIME });
          const url = URL.createObjectURL(finalBlob);
          setAudioURL((prev) => {
            if (prev) {
              URL.revokeObjectURL(prev);
            }
            return url;
          });
          if (audioRef.current) {
            audioRef.current.srcObject = null;
            audioRef.current.src = url;
          }
          if (streamRef.current) {
            streamRef.current.getTracks().forEach((t) => t.stop());
            streamRef.current = null;
          }
          onStop?.();
        };

        mediaRecorderRef.current = recorder;
        recorder.start(timeSlice);
        setIsRecording(true);
        onStart?.(stream);
        return;
      } catch {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((t) => t.stop());
          streamRef.current = null;
        }
        mediaRecorderRef.current = null;
        setIsRecording(false);
        return;
      }
    }

    if (mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume();
      setIsRecording(true);
    }
  };

  const pause = () => {
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state === 'recording') {
      recorder.pause();
      setIsRecording(false);

      try {
        recorder.requestData();
      } catch {
        // noop
      }

      const previewBlob = new Blob(audioChunks.current, { type: REC_MIME });
      const url = URL.createObjectURL(previewBlob);
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
      setAudioURL(url);
      if (audioRef.current) {
        audioRef.current.srcObject = null;
        audioRef.current.src = url;
      }
      onPause?.();
    }
  };

  const stop = () => {
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== 'inactive') {
      recorder.stop();
      setIsRecording(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
      mediaRecorderRef.current = null;
    };
  }, [audioURL]);

  return {
    audioURL,
    isRecording,
    start,
    pause,
    stop,
    audioRef,
    mediaRecorderRef,
    streamRef,
    _internals: { audioChunks },
  };
};
