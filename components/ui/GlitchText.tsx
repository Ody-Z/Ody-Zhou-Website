import React from 'react';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, as: Component = 'span', className = '' }) => {
  return (
    <Component className={`relative inline-block group hover:animate-pulse ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-crt-rose opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] overflow-hidden truncate" aria-hidden="true">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-crt-cyan opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] overflow-hidden truncate" aria-hidden="true">
        {text}
      </span>
    </Component>
  );
};
