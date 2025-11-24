import React, { useState } from 'react';
import { BootScreen } from './components/BootScreen';
import { Dashboard } from './components/Dashboard';
import { CRTOverlay } from './components/CRTOverlay';
import { RetroCursor } from './components/RetroCursor';
import { retroAudio } from './utils/sound';

// Using a reliable synthwave track from a known source (Cyberpunk/Synthwave style)
// This is a direct MP3 link.
const BGM_URL = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Three_Chain_Links/Phantoms/Three_Chain_Links_-_10_-_Phantoms.mp3"; 

// Start Screen Component to handle Audio Context interaction policy
const StartScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
    return (
        <div className="h-screen w-screen bg-crt-bg flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 grid grid-cols-[40px_1fr] grid-rows-[40px_1fr] opacity-10 pointer-events-none">
                 <div className="border-r border-b border-crt-amber/50"></div>
                 <div className="border-b border-crt-amber/50"></div>
                 <div className="border-r border-crt-amber/50"></div>
                 <div></div>
             </div>
             
             <button 
                onClick={onStart}
                className="group relative px-8 py-4 bg-transparent border-2 border-crt-amber text-crt-amber font-display text-xl tracking-[0.2em] hover:bg-crt-amber hover:text-crt-bg transition-all duration-200 focus:outline-none z-50 cursor-none"
             >
                <span className="absolute -inset-1 border border-crt-amber opacity-30 scale-105 group-hover:scale-110 transition-transform duration-500"></span>
                INITIALIZE_SYSTEM
             </button>
             
             <div className="absolute bottom-10 text-crt-amber/50 font-mono text-xs animate-pulse">
                 AWAITING USER INPUT...
             </div>
        </div>
    );
};

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);

  const handleStart = () => {
    retroAudio.playBoot();
    retroAudio.playBGM(BGM_URL); // Play the music file
    setHasStarted(true);
  };

  const handleBootComplete = () => {
      setBootComplete(true);
  };

  return (
    <div className="min-h-screen bg-crt-bg text-crt-amber relative font-mono selection:bg-crt-amber selection:text-crt-bg cursor-none">
      <RetroCursor />
      <CRTOverlay />
      
      {!hasStarted ? (
          <StartScreen onStart={handleStart} />
      ) : !bootComplete ? (
          <BootScreen onComplete={handleBootComplete} />
      ) : (
          <div className="h-screen overflow-y-auto custom-scrollbar">
              <Dashboard />
          </div>
      )}
      
      {/* Background Grid Perspective (Pure CSS) */}
      <div 
        className="fixed bottom-0 left-0 w-full h-[50vh] opacity-20 pointer-events-none z-0"
        style={{
            background: 'linear-gradient(transparent 0%, var(--crt-amber-dim) 100%)',
            perspective: '500px',
        }}
      >
        <div 
            className="w-full h-full absolute bottom-0 origin-bottom"
            style={{
                backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 176, 0, .3) 25%, rgba(255, 176, 0, .3) 26%, transparent 27%, transparent 74%, rgba(255, 176, 0, .3) 75%, rgba(255, 176, 0, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 176, 0, .3) 25%, rgba(255, 176, 0, .3) 26%, transparent 27%, transparent 74%, rgba(255, 176, 0, .3) 75%, rgba(255, 176, 0, .3) 76%, transparent 77%, transparent)',
                backgroundSize: '50px 50px',
                transform: 'rotateX(60deg) scale(2)',
                animation: 'scanline 20s linear infinite' // Reusing scanline animation for simple movement
            }}
        ></div>
      </div>
    </div>
  );
}