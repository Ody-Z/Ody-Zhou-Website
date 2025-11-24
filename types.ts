export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export interface SoundContextType {
  playHover: () => void;
  playClick: () => void;
  playBoot: () => void;
  playTyping: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}
