// A simple synthesizer for retro UI sounds and BGM management
class RetroAudio {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private bgmAudio: HTMLAudioElement | null = null;
  public isMuted: boolean = false;

  constructor() {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
      
      // Master Gain for SFX
      this.masterGain = this.ctx.createGain();
      this.masterGain.connect(this.ctx.destination);
      this.masterGain.gain.value = 0.2; // Lower SFX volume slightly

    } catch (e) {
      console.warn("Web Audio API not supported");
    }
  }

  private createOscillator(type: OscillatorType, freq: number, duration: number, fadeOut: boolean = true) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(e => console.warn("Audio Context resume failed", e));
    }

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    gain.connect(this.masterGain);
    osc.connect(gain);

    osc.start();
    
    if (fadeOut) {
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
    } else {
        osc.stop(this.ctx.currentTime + duration);
    }
    
    setTimeout(() => {
        osc.disconnect();
        gain.disconnect();
    }, duration * 1000 + 100);
  }

  public playBGM(url: string) {
    // Resume context if suspended (needed for some browsers even for HTMLAudio)
    if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
    }

    if (this.bgmAudio) {
        this.bgmAudio.pause();
        this.bgmAudio = null;
    }

    this.bgmAudio = new Audio(url);
    this.bgmAudio.loop = true;
    this.bgmAudio.volume = 0.5; // Background music volume (0.0 to 1.0)
    
    if (this.isMuted) {
        this.bgmAudio.muted = true;
    }

    // Explicitly handle the play promise
    const playPromise = this.bgmAudio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("BGM started successfully.");
        }).catch(error => {
            console.error("BGM Playback Failed:", error);
            // Fallback strategy could go here, but usually this means 
            // the interaction wasn't trusted or the URL is 404.
        });
    }
  }

  public stopBGM() {
    if (this.bgmAudio) {
        this.bgmAudio.pause();
        this.bgmAudio.currentTime = 0;
    }
  }

  public playHover() {
    // High pitch short blip
    this.createOscillator('sine', 800, 0.05);
  }

  public playClick() {
    // Lower mechanical thud
    this.createOscillator('square', 200, 0.1);
    setTimeout(() => this.createOscillator('sawtooth', 150, 0.05), 50);
  }

  public playBoot() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.frequency.setValueAtTime(110, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 1.5);
    
    gain.connect(this.masterGain);
    osc.connect(gain);
    
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 0.5);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.5);

    osc.start();
    osc.stop(this.ctx.currentTime + 1.5);
  }

  public playTyping() {
     this.createOscillator('triangle', 600 + Math.random() * 200, 0.03);
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    
    // Handle SFX Mute
    if (this.ctx && this.masterGain) {
        const now = this.ctx.currentTime;
        if (this.isMuted) {
            this.masterGain.gain.setTargetAtTime(0, now, 0.1);
        } else {
            this.masterGain.gain.setTargetAtTime(0.2, now, 0.1);
        }
    }

    // Handle BGM Mute
    if (this.bgmAudio) {
        this.bgmAudio.muted = this.isMuted;
    }

    return this.isMuted;
  }
}

export const retroAudio = new RetroAudio();