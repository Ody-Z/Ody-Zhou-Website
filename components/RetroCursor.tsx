import React, { useEffect, useState } from 'react';

export const RetroCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over a clickable element
      const target = e.target as HTMLElement;
      const computedCursor = window.getComputedStyle(target).cursor;
      // We set global cursor:none, so we check if tag is usually clickable 
      // or if it has a specific class we might add later.
      // Since we forced cursor:none in CSS, we look for tag names or specific roles
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.onclick !== null ||
        target.closest('button') !== null ||
        target.closest('a') !== null;

      setIsPointer(isClickable);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[100] mix-blend-difference"
      style={{ 
        left: position.x, 
        top: position.y,
        transform: 'translate(-50%, -50%)' 
      }}
    >
      {/* Main Crosshair */}
      <div className={`relative transition-all duration-100 ease-out flex items-center justify-center
        ${isClicking ? 'scale-75' : 'scale-100'}
      `}>
        {/* Horizontal Line */}
        <div className={`absolute bg-crt-amber h-[2px] shadow-[0_0_4px_#ffb000] transition-all duration-200
            ${isPointer ? 'w-0' : 'w-8'}
        `}></div>
        
        {/* Vertical Line */}
        <div className={`absolute bg-crt-amber w-[2px] shadow-[0_0_4px_#ffb000] transition-all duration-200
            ${isPointer ? 'h-0' : 'h-8'}
        `}></div>

        {/* Center Dot / Diamond state */}
        <div className={`absolute border-2 border-crt-amber transition-all duration-200
            ${isPointer ? 'w-6 h-6 rotate-45 bg-crt-amber/20' : 'w-2 h-2 rotate-0 bg-transparent'}
        `}></div>
        
        {/* Outer Ring (Only visible on pointer) */}
        <div className={`absolute border border-crt-cyan rounded-full transition-all duration-300 opacity-0
             ${isPointer ? 'w-12 h-12 opacity-40 scale-100' : 'w-4 h-4 scale-0'}
        `}></div>
      </div>
      
      {/* Coordinate Text (Optional cool detail) */}
      <div className="absolute top-4 left-4 text-[10px] font-retro text-crt-amber opacity-60 whitespace-nowrap">
        X:{Math.round(position.x)} Y:{Math.round(position.y)}
      </div>
    </div>
  );
};