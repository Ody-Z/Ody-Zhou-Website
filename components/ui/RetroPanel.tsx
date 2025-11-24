import React from 'react';
import { retroAudio } from '../../utils/sound';

interface RetroPanelProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  borderColor?: 'amber' | 'cyan' | 'rose';
  glow?: boolean;
}

export const RetroPanel: React.FC<RetroPanelProps> = ({ 
  children, 
  className = '', 
  title, 
  borderColor = 'amber',
  glow = false
}) => {
  const borderColors = {
    amber: 'border-crt-amber text-crt-amber',
    cyan: 'border-crt-cyan text-crt-cyan',
    rose: 'border-crt-rose text-crt-rose'
  };

  const glowClass = glow ? `shadow-[0_0_15px_rgba(var(--color-${borderColor}),0.3)]` : '';

  return (
    <div 
      className={`relative border-2 bg-crt-panel/80 backdrop-blur-sm p-6 group transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg ${borderColors[borderColor]} ${glowClass} ${className}`}
      style={{
        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
      }}
      onMouseEnter={() => retroAudio.playHover()}
    >
      {/* Decorative Corner Lines */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-current opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-current opacity-50" style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}></div>

      {title && (
        <div className="absolute -top-3 left-6 px-2 bg-crt-bg border border-current text-xs font-retro tracking-widest uppercase">
          {title}
        </div>
      )}
      
      {children}
    </div>
  );
};
