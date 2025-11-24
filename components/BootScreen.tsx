import React, { useEffect, useState } from 'react';
import { retroAudio } from '../utils/sound';

interface BootScreenProps {
  onComplete: () => void;
}

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootText = [
    "BIOS DATE 01/24/92 16:32:04 VER 1.02",
    "CPU: NEC V60, SPEED: 16 MHz",
    "640K RAM SYSTEM... OK",
    "VIDEO ADAPTER... DETECTED (VGA)",
    "LOADING KERNEL... OK",
    "MOUNTING FILESYSTEMS...",
    "INITIALIZING NEURAL NET... 100%",
    "ESTABLISHING SECURE CONNECTION...",
    "USER IDENTITY VERIFIED: ODY ZHOU",
    "WELCOME TO NOSTROMO TERMINAL v2.5"
  ];

  useEffect(() => {
    let lineIndex = 0;
    
    // Add lines one by one
    const lineInterval = setInterval(() => {
      if (lineIndex < bootText.length) {
        setLines(prev => [...prev, bootText[lineIndex]]);
        retroAudio.playTyping();
        lineIndex++;
      } else {
        clearInterval(lineInterval);
      }
    }, 150);

    // Progress bar logic
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Completion timeout
    const totalTime = (bootText.length * 150) + 1000;
    const timeout = setTimeout(() => {
      onComplete();
    }, totalTime);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    }
  }, [onComplete]);

  return (
    <div className="h-screen w-screen bg-crt-bg text-crt-amber font-mono flex flex-col items-center justify-center p-8 z-[60]">
      <div className="w-full max-w-2xl">
        {lines.map((line, i) => (
          <div key={i} className="mb-1 text-sm md:text-base opacity-80">{`> ${line}`}</div>
        ))}
        <div className="mt-8 border-2 border-crt-amber p-1 w-full max-w-md mx-auto">
          <div 
            className="h-4 bg-crt-amber transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-2 text-xs animate-pulse">SYSTEM LOADING... {progress}%</div>
      </div>
    </div>
  );
};
