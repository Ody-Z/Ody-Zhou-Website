import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  color: string;
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'RAY AI',
    role: 'Founder',
    type: 'Full-time',
    period: 'May 2025 — Present',
    location: '',
    description: [
      'Building an AI marketing assistant that saves businesses money and time through intelligent automation.',
    ],
    tags: ['AI', 'Marketing Tech', 'Startup', 'LLM'],
    color: '#FFDD00',
  },
  {
    company: 'Microsoft',
    role: 'Software Engineer',
    type: 'Full-time',
    period: 'Sep 2025 — Jan 2026',
    location: 'Beijing, China · Hybrid',
    description: [
      'Empowered Bing Shopping using AI to improve shopping title quality.',
      'Built a hybrid approach combining rule-based methods with LLM-powered rewrites.',
      'Developed an LLM evaluation pipeline for quality assessment.',
    ],
    tags: ['C#', '.NET', 'LLM', 'Search', 'AI'],
    color: '#00A4EF',
  },
  {
    company: 'HSBC',
    role: 'Software Engineer',
    type: 'Internship',
    period: 'Jul 2025 — Sep 2025',
    location: 'Hong Kong SAR · On-site',
    description: [
      'Architected org-wide microservices visualization dashboard with React and Spring Boot.',
      'Auto-discovering Kubernetes services and surfacing live metadata.',
      'Enforced safe, versioned database changes with Liquibase.',
      'Centralized configuration and visibility for all microservices.',
    ],
    tags: ['Java', 'React', 'Spring Boot', 'Kubernetes', 'Liquibase', 'Microservices'],
    color: '#DB0011',
  },
  {
    company: 'Tsinghua University',
    role: 'Research Assistant',
    type: 'Internship',
    period: 'Nov 2024 — Mar 2025',
    location: 'Beijing, China · On-site',
    description: [
      'Designed and implemented an autonomous agent empowered by World Model for Minecraft.',
    ],
    tags: ['Python', 'Reinforcement Learning', 'LLM', 'AI Agents', 'Linux'],
    color: '#82318E',
    link: 'https://arxiv.org/pdf/2502.05907',
  },
  {
    company: 'UNSW School of Aviation',
    role: 'Research Assistant',
    type: 'Internship',
    period: 'Nov 2023 — Jun 2024',
    location: 'Sydney, Australia',
    description: [
      'DatAviation lab sponsored by Tourism Australia.',
      'Developed algorithms ranking sustainability of airlines using regression, permutation testing, SVM, and clustering.',
    ],
    tags: ['Python', 'R', 'Statistics', 'SVM', 'Clustering', 'Regression'],
    color: '#F4763B',
  },
];

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <div className={`reveal reveal-delay-${(index % 4) + 1} relative`}>
      <div className="exp-card">
        {/* Left color stripe */}
        <div
          style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: 5,
            background: item.color,
          }}
        />

        <div style={{ padding: '24px 28px 24px 34px' }}>
          {/* Header row */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 8,
              marginBottom: 16,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div
                  style={{
                    width: 13, height: 13,
                    background: item.color,
                    border: '2px solid #1A1A1A',
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="font-mono font-bold uppercase text-navy"
                  style={{ fontSize: 16, letterSpacing: '0.04em' }}
                >
                  {item.company}
                </h3>
              </div>
              <p className="font-body text-navy" style={{ fontSize: 13, opacity: 0.55, marginLeft: 23 }}>
                {item.role} · {item.type}
              </p>
            </div>

            <div
              className="font-mono text-navy"
              style={{ fontSize: 11, opacity: 0.45, textAlign: 'right', fontWeight: 700, flexShrink: 0 }}
            >
              <div>{item.period}</div>
              {item.location && (
                <div style={{ marginTop: 2, fontWeight: 400 }}>{item.location}</div>
              )}
            </div>
          </div>

          {/* Description list */}
          <ul style={{ marginBottom: 16, marginLeft: 23, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {item.description.map((desc, i) => (
              <li
                key={i}
                className="font-body text-navy"
                style={{ fontSize: 14, lineHeight: 1.65, opacity: 0.7, display: 'flex', alignItems: 'flex-start', gap: 8 }}
              >
                <span style={{ color: item.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>—</span>
                {desc}
              </li>
            ))}
          </ul>

          {/* arXiv link */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono font-bold uppercase text-purple-shape"
              style={{
                fontSize: 11,
                letterSpacing: '0.06em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                textDecoration: 'none',
                marginLeft: 23,
                marginBottom: 14,
                transition: 'opacity 0.15s',
              }}
            >
              ↗ VIEW PAPER (ARXIV)
            </a>
          )}

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginLeft: 23 }}>
            {item.tags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Offset shadow */}
      <div
        style={{
          position: 'absolute', inset: 0,
          border: '2.5px solid #1A1A1A',
          transform: 'translate(5px, 5px)',
          zIndex: -1,
          background: '#C8C3B7',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
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
            CAREER
          </p>
          <h2
            className="font-mono font-bold uppercase text-navy"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            EXPERIENCE
          </h2>
          <div style={{ marginTop: 14, width: 48, height: 4, background: '#1A1A1A' }} />
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {experiences.map((item, index) => (
            <ExperienceCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
