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
  const REC_MIME =
    mimeType ??
    (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
      ? 'audio/webm;codecs=opus'
      : 'audio/webm');

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

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const recorder = new MediaRecorder(stream, { mimeType: REC_MIME });

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const finalBlob = new Blob(audioChunks.current, { type: REC_MIME });
        const url = URL.createObjectURL(finalBlob);
        setAudioURL(url);
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
