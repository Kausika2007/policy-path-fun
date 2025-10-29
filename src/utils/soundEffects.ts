class SoundEffects {
  private audioContext: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  private playTone(frequency: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.3) {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;
    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  playSpinSound() {
    if (!this.audioContext) return;

    const duration = 4;
    const startFreq = 200;
    const endFreq = 100;
    
    // Create a swooshing sound that decreases in pitch
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const progress = i / 8;
        const frequency = startFreq + (endFreq - startFreq) * progress;
        this.playTone(frequency, 0.2, 'sawtooth', 0.15);
      }, i * 500);
    }

    // Add clicking sounds that slow down
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.playTone(800, 0.05, 'square', 0.1);
      }, i * (150 + i * 10));
    }
  }

  playLandSound() {
    if (!this.audioContext) return;

    // Triumphant landing sound
    this.playTone(523, 0.15, 'sine', 0.4); // C
    setTimeout(() => this.playTone(659, 0.15, 'sine', 0.4), 150); // E
    setTimeout(() => this.playTone(784, 0.3, 'sine', 0.4), 300); // G
  }

  playPointsSound() {
    if (!this.audioContext) return;

    // Cheerful ascending notes
    const notes = [523, 659, 784, 1047]; // C, E, G, C
    notes.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 0.2, 'triangle', 0.3);
      }, i * 100);
    });
  }

  playCelebrationSound() {
    if (!this.audioContext) return;

    // Big win sound - ascending scale with sparkle
    const scale = [523, 587, 659, 698, 784, 880, 988, 1047];
    scale.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 0.15, 'sine', 0.3);
        this.playTone(freq * 2, 0.15, 'triangle', 0.15); // Harmonic
      }, i * 80);
    });
  }

  playButtonClick() {
    if (!this.audioContext) return;
    this.playTone(800, 0.1, 'square', 0.2);
  }
}

export const soundEffects = new SoundEffects();
