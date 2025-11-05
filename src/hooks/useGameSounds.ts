import { useEffect, useRef, useState } from "react";

export const useGameSounds = () => {
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize Audio Context
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create background music using oscillators
    if (isMusicEnabled && !backgroundMusicRef.current) {
      playBackgroundMusic();
    }
    
    return () => {
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isMusicEnabled) {
      playBackgroundMusic();
    } else {
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current = null;
      }
    }
  }, [isMusicEnabled]);

  const playBackgroundMusic = () => {
    if (!audioContextRef.current) return;
    
    // Create a simple cheerful melody using Web Audio API
    const ctx = audioContextRef.current;
    const gainNode = ctx.createGain();
    gainNode.gain.value = 0.1; // Low volume for background
    gainNode.connect(ctx.destination);

    const playNote = (frequency: number, startTime: number, duration: number) => {
      const osc = ctx.createOscillator();
      osc.frequency.value = frequency;
      osc.type = 'sine';
      
      const noteGain = ctx.createGain();
      noteGain.gain.setValueAtTime(0, startTime);
      noteGain.gain.linearRampToValueAtTime(0.3, startTime + 0.01);
      noteGain.gain.linearRampToValueAtTime(0, startTime + duration);
      
      osc.connect(noteGain);
      noteGain.connect(gainNode);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    // Simple cheerful melody (C major scale pattern)
    const melody = [262, 294, 330, 349, 392, 440, 494, 523]; // C, D, E, F, G, A, B, C
    const pattern = [0, 2, 4, 2, 0, 2, 4, 2, 4, 5, 7, 4, 5, 7];
    
    let currentTime = ctx.currentTime;
    const noteDuration = 0.3;
    
    const playMelody = () => {
      pattern.forEach((note, index) => {
        playNote(melody[note], currentTime + (index * noteDuration), noteDuration);
      });
    };

    playMelody();
    
    // Loop the melody
    const loopInterval = setInterval(() => {
      if (isMusicEnabled) {
        currentTime = ctx.currentTime;
        playMelody();
      } else {
        clearInterval(loopInterval);
      }
    }, pattern.length * noteDuration * 1000);
  };

  const playDiceRoll = () => {
    if (!isSoundEnabled || !audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const duration = 0.5;
    
    for (let i = 0; i < 10; i++) {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'square';
      osc.frequency.value = Math.random() * 200 + 100;
      
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.05 + 0.05);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start(ctx.currentTime + i * 0.05);
      osc.stop(ctx.currentTime + i * 0.05 + 0.05);
    }
  };

  const playMove = () => {
    if (!isSoundEnabled || !audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.value = 400;
    
    gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  const playLadder = () => {
    if (!isSoundEnabled || !audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const frequencies = [262, 330, 392, 523]; // C, E, G, C (ascending)
    
    frequencies.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.value = freq;
      
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime + index * 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + index * 0.1 + 0.2);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start(ctx.currentTime + index * 0.1);
      osc.stop(ctx.currentTime + index * 0.1 + 0.2);
    });
  };

  const playSnake = () => {
    if (!isSoundEnabled || !audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const frequencies = [523, 392, 330, 262]; // C, G, E, C (descending)
    
    frequencies.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      
      gainNode.gain.setValueAtTime(0.2, ctx.currentTime + index * 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + index * 0.1 + 0.2);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start(ctx.currentTime + index * 0.1);
      osc.stop(ctx.currentTime + index * 0.1 + 0.2);
    });
  };

  const playVictory = () => {
    if (!isSoundEnabled || !audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const frequencies = [262, 330, 392, 523, 659, 784, 880, 1047]; // C major scale up
    
    frequencies.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.value = freq;
      
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime + index * 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + index * 0.08 + 0.3);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start(ctx.currentTime + index * 0.08);
      osc.stop(ctx.currentTime + index * 0.08 + 0.3);
    });
  };

  const toggleMusic = () => {
    setIsMusicEnabled(!isMusicEnabled);
  };

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  return {
    playDiceRoll,
    playLadder,
    playSnake,
    playVictory,
    playMove,
    toggleMusic,
    toggleSound,
    isMusicEnabled,
    isSoundEnabled,
  };
};
