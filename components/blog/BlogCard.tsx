import React from 'react';
import type { BlogArticle, Language } from '../../data/blog-articles';

interface BlogCardProps {
  article: BlogArticle;
  language: Language;
  expanded: boolean;
  onToggle: () => void;
  delayClass?: string;
}

export function BlogCard({ article, language, expanded, onToggle, delayClass = '' }: BlogCardProps) {
  const localized = article[language];
  const paragraphs = localized.content.split('\n\n');

  return (
    <div
      className={`exp-card rounded-none p-0 cursor-pointer reveal ${delayClass}`}
      onClick={onToggle}
    >
      {/* Color accent bar */}
      <div style={{ height: 5, background: article.color }} />

      <div className="p-5 sm:p-6">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="font-mono font-bold"
            style={{ fontSize: 11, color: '#888', letterSpacing: '0.06em' }}
          >
            {article.date}
          </span>
          <span
            className="font-mono"
            style={{ fontSize: 11, color: '#888' }}
          >
            {article.readingTime[language]}
          </span>
        </div>

        {/* Title & subtitle */}
        <h3
          className="font-body font-semibold leading-snug mb-1"
          style={{ fontSize: 21, color: '#1A1A1A' }}
        >
          {localized.title}
        </h3>
        <p
          className="font-sans mb-4"
          style={{ fontSize: 14, color: '#666', lineHeight: 1.5 }}
        >
          {localized.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {article.tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Expand / collapse indicator */}
        <div
          className="font-mono font-bold flex items-center gap-2"
          style={{ fontSize: 11, color: article.color === '#FFDD00' ? '#1A1A1A' : article.color, letterSpacing: '0.06em' }}
        >
          <span>{expanded ? (language === 'zh' ? '收起' : 'COLLAPSE') : (language === 'zh' ? '阅读全文' : 'READ MORE')}</span>
          <span style={{ transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block' }}>
            ▼
          </span>
        </div>

        {/* Expanded content */}
        {expanded && (
          <div
            className="mt-5 pt-5"
            style={{ borderTop: '1.5px solid #ddd' }}
            onClick={(e) => e.stopPropagation()}
          >
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-sans mb-4 last:mb-0"
                style={{ fontSize: 15, lineHeight: 1.8, color: '#333' }}
              >
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
