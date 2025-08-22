import { useRef, useState, useEffect } from 'react';

export const useTTS = () => {
  const [speaking, setSpeaking] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(
    typeof window !== 'undefined' ? window.speechSynthesis : null,
  );

  useEffect(() => () => synthRef.current?.cancel(), []);

  const speak = (text: string) => {
    const synth = synthRef.current;
    if (!synth) {
      return;
    }

    synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ko-KR';
    utter.onstart = () => setSpeaking(true);
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    synth.speak(utter);
  };

  return { speak, speaking };
};
