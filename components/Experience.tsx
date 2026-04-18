import React from 'react';

interface ShippedItem {
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

const primary: ShippedItem[] = [
  {
    company: 'RAY AI',
    role: 'Founder',
    type: 'Own product · Live',
    period: 'May 2025 — Present',
    location: '',
    description: [
      'AI marking workflow for tuition centres — automated assessment and feedback that replaces manual grading.',
      'Full-stack build, production deployed, real paying users.',
    ],
    tags: ['LLM', 'Full-stack', 'EdTech', 'Founder'],
    color: '#FFDD00',
    link: 'https://rayfeedback.ai',
  },
  {
    company: 'Tsinghua University',
    role: 'Research Assistant · World Model for Minecraft',
    type: 'Published research · arxiv',
    period: 'Nov 2024 — Mar 2025',
    location: 'Beijing, China',
    description: [
      'Designed an autonomous agent powered by a learned world model for Minecraft.',
      'First-author paper accepted and published on arxiv (2502.05907).',
    ],
    tags: ['Reinforcement Learning', 'LLM', 'AI Agents', 'Python'],
    color: '#9B72CF',
    link: 'https://arxiv.org/pdf/2502.05907',
  },
];

const prior: ShippedItem[] = [
  {
    company: 'Microsoft',
    role: 'Software Engineer',
    type: 'Internship',
    period: 'Sep 2025 — Jan 2026',
    location: 'Beijing · Hybrid',
    description: [
      'Improved Bing Shopping title quality with a hybrid of rules + LLM rewrites.',
      'Built an LLM evaluation pipeline for output quality.',
    ],
    tags: ['C#', '.NET', 'LLM', 'Search'],
    color: '#00A4EF',
  },
  {
    company: 'HSBC',
    role: 'Software Engineer',
    type: 'Internship',
    period: 'Jul 2025 — Sep 2025',
    location: 'Hong Kong · On-site',
    description: [
      'Org-wide microservices visualization dashboard (React + Spring Boot).',
      'Auto-discovering Kubernetes services, surfacing live metadata.',
    ],
    tags: ['Java', 'React', 'Spring Boot', 'Kubernetes'],
    color: '#DB0011',
  },
  {
    company: 'UNSW · School of Aviation',
    role: 'Research Assistant',
    type: 'DatAviation Lab · Tourism Australia',
    period: 'Nov 2023 — Jun 2024',
    location: 'Sydney, Australia',
    description: [
      'Ranked airline sustainability using regression, permutation testing, SVM, and clustering.',
    ],
    tags: ['Python', 'R', 'Statistics', 'ML'],
    color: '#F4763B',
  },
];

function ShippedCard({ item, index, compact = false }: { item: ShippedItem; index: number; compact?: boolean }) {
  return (
    <div className={`reveal reveal-delay-${(index % 4) + 1} relative`}>
      <div className="exp-card">
        <div
          style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: 5,
            background: item.color,
          }}
        />

        <div style={{ padding: compact ? '20px 24px 22px 30px' : '26px 30px 26px 36px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 8,
              marginBottom: compact ? 12 : 18,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div
                  style={{
                    width: compact ? 11 : 13, height: compact ? 11 : 13,
                    background: item.color,
                    border: '2px solid #1A1A1A',
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="font-mono font-bold uppercase text-navy"
                  style={{ fontSize: compact ? 14 : 17, letterSpacing: '0.04em' }}
                >
                  {item.company}
                </h3>
              </div>
              <p className="font-body text-navy" style={{ fontSize: compact ? 12.5 : 13.5, opacity: 0.6, marginLeft: 23 }}>
                {item.role} · {item.type}
              </p>
            </div>

            <div
              className="font-mono text-navy"
              style={{ fontSize: compact ? 10 : 11, opacity: 0.45, textAlign: 'right', fontWeight: 700, flexShrink: 0 }}
            >
              <div>{item.period}</div>
              {item.location && (
                <div style={{ marginTop: 2, fontWeight: 400 }}>{item.location}</div>
              )}
            </div>
          </div>

          <ul style={{ marginBottom: 14, marginLeft: 23, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {item.description.map((desc, i) => (
              <li
                key={i}
                className="font-body text-navy"
                style={{ fontSize: compact ? 13.5 : 14.5, lineHeight: 1.6, opacity: 0.75, display: 'flex', alignItems: 'flex-start', gap: 8 }}
              >
                <span style={{ color: item.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>—</span>
                {desc}
              </li>
            ))}
          </ul>

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono font-bold uppercase"
              style={{
                fontSize: 11,
                letterSpacing: '0.08em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                textDecoration: 'none',
                marginLeft: 23,
                marginBottom: 14,
                color: '#1A1A1A',
                borderBottom: `2px solid ${item.color}`,
                paddingBottom: 2,
              }}
            >
              {item.link.includes('arxiv') ? '↗ READ THE PAPER' : `↗ ${item.link.replace(/^https?:\/\//, '')}`}
            </a>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginLeft: 23 }}>
            {item.tags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

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
      style={{ padding: '88px 0 104px' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 48 }}>
          <p
            className="font-mono font-bold uppercase text-orange"
            style={{ fontSize: 11, letterSpacing: '0.14em', marginBottom: 12 }}
          >
            SHIPPED
          </p>
          <h2
            className="font-mono font-bold uppercase text-navy"
            style={{
              fontSize: 'clamp(2.3rem, 5.5vw, 4.25rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            WHAT I'VE<br />
            <span style={{ color: '#F4763B' }}>BUILT</span>
          </h2>
          <div style={{ marginTop: 14, width: 48, height: 4, background: '#1A1A1A' }} />
        </div>

        {/* Primary: own products + research */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 64 }}>
          {primary.map((item, index) => (
            <ShippedCard key={item.company} item={item} index={index} />
          ))}
        </div>

        {/* Prior divider */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <p
            className="font-mono font-bold uppercase"
            style={{ fontSize: 10, letterSpacing: '0.2em', color: '#1A1A1A', opacity: 0.45, flexShrink: 0 }}
          >
            ↓ PRIOR &nbsp; WORK
          </p>
          <div style={{ flex: 1, height: 1, background: '#1A1A1A', opacity: 0.2 }} />
        </div>

        {/* Prior: intern + earlier RA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {prior.map((item, index) => (
            <ShippedCard key={item.company} item={item} index={index} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
