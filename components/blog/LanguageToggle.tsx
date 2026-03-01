import React from 'react';
import type { Language } from '../../data/blog-articles';

interface LanguageToggleProps {
  language: Language;
  onChange: (lang: Language) => void;
}

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div
      className="inline-flex border-2 font-mono font-bold uppercase"
      style={{ borderColor: '#1A1A1A', fontSize: 11, letterSpacing: '0.08em' }}
    >
      <button
        onClick={() => onChange('en')}
        className="px-4 py-1.5 transition-colors duration-150"
        style={{
          background: language === 'en' ? '#FFDD00' : 'transparent',
          color: '#1A1A1A',
          borderRight: '2px solid #1A1A1A',
        }}
      >
        EN
      </button>
      <button
        onClick={() => onChange('zh')}
        className="px-4 py-1.5 transition-colors duration-150"
        style={{
          background: language === 'zh' ? '#FFDD00' : 'transparent',
          color: '#1A1A1A',
        }}
      >
        中文
      </button>
    </div>
  );
}
