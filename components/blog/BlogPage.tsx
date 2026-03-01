import React, { useState } from 'react';
import type { Language } from '../../data/blog-articles';
import { BLOG_ARTICLES } from '../../data/blog-articles';
import { LanguageToggle } from './LanguageToggle';
import { BlogCard } from './BlogCard';

export function BlogPage() {
  const [language, setLanguage] = useState<Language>('en');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      className="relative bg-cream border-t-2 border-navy"
      style={{ padding: '80px 0 96px' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <p
            className="font-mono font-bold uppercase text-orange"
            style={{ fontSize: 11, letterSpacing: '0.14em', marginBottom: 12 }}
          >
            BLOG
          </p>
          <h2
            className="font-mono font-bold uppercase text-navy"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            {language === 'en' ? 'SELECTED WRITINGS' : '精选文章'}
          </h2>
          <div style={{ marginTop: 14, width: 48, height: 4, background: '#1A1A1A' }} />
          <div style={{ marginTop: 24 }}>
            <LanguageToggle language={language} onChange={setLanguage} />
          </div>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {BLOG_ARTICLES.map((article, index) => (
            <div
              key={article.id}
              className={expandedId === article.id ? 'md:col-span-2' : ''}
            >
              <BlogCard
                article={article}
                language={language}
                expanded={expandedId === article.id}
                onToggle={() =>
                  setExpandedId(expandedId === article.id ? null : article.id)
                }
                delayClass={`reveal-delay-${(index % 4) + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
