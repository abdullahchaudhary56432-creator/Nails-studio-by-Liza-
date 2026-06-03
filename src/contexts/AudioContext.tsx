import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playClick: () => void;
  playPop: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isMuted: true,
  toggleMute: () => {},
  playClick: () => {},
  playPop: () => {},
});

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    const savedMute = localStorage.getItem('site_muted');
    if (savedMute !== null) {
      setIsMuted(savedMute === 'true');
    }
  }, []);

  const initAudio = useCallback(() => {
    if (!audioCtx) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioCtx(ctx);
    }
  }, [audioCtx]);

  const toggleMute = () => {
    setIsMuted(prev => {
      const newVal = !prev;
      localStorage.setItem('site_muted', String(newVal));
      if (!newVal && !audioCtx) {
        initAudio();
      }
      return newVal;
    });
  };

  useEffect(() => {
    const resumeAudio = () => {
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    };
    window.addEventListener('click', resumeAudio);
    return () => window.removeEventListener('click', resumeAudio);
  }, [audioCtx]);

  const playClick = useCallback(() => {
    if (isMuted) return;
    let currentCtx = audioCtx;
    if (!currentCtx) {
      currentCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioCtx(currentCtx);
    }
    const t = currentCtx.currentTime;
    const osc = currentCtx.createOscillator();
    const gain = currentCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, t);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);
    
    gain.gain.setValueAtTime(0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    
    osc.connect(gain);
    gain.connect(currentCtx.destination);
    
    osc.start(t);
    osc.stop(t + 0.05);
  }, [isMuted, audioCtx]);

  const playPop = useCallback(() => {
    if (isMuted) return;
    let currentCtx = audioCtx;
    if (!currentCtx) {
      currentCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioCtx(currentCtx);
    }
    const t = currentCtx.currentTime;
    const osc = currentCtx.createOscillator();
    const gain = currentCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(1200, t + 0.1);
    
    gain.gain.setValueAtTime(0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
    
    osc.connect(gain);
    gain.connect(currentCtx.destination);
    
    osc.start(t);
    osc.stop(t + 0.1);
  }, [isMuted, audioCtx]);

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playClick, playPop }}>
      {children}
    </AudioContext.Provider>
  );
};
