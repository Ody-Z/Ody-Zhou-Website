import React from 'react';

export const CRTOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden h-full w-full">
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none z-50"></div>
      
      {/* Moving Scanline Bar */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[15px] w-full animate-scanline pointer-events-none z-50"></div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-40"></div>
      
      {/* Screen Curvature / Bezel Shadow */}
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] pointer-events-none z-50"></div>
      
      {/* RGB Shift/Chromatic Aberration helper (applied to text via class) */}
      
      {/* Noise/Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-40 mix-blend-overlay"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}
      ></div>
    </div>
  );
};
