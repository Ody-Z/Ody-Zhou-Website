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
    color: '#FDB900',
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
      'Developed algorithms ranking sustainability of different airlines using regression, permutation testing, SVM, and clustering.',
    ],
    tags: ['Python', 'R', 'Statistics', 'SVM', 'Clustering', 'Regression'],
    color: '#FFE600',
  },
];

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number; key?: string }) {
  return (
    <div
      className={`reveal reveal-delay-${(index % 4) + 1}`}
    >
      <div className="card-glow group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
        {/* Top accent line */}
        <div
          className="absolute top-0 left-8 right-8 h-px opacity-40 group-hover:opacity-80 transition-opacity duration-400"
          style={{
            background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
          }}
        />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            {/* Company dot */}
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary group-hover:text-brand transition-colors duration-200">
                {item.company}
              </h3>
              <p className="text-sm text-text-secondary">
                {item.role} · {item.type}
              </p>
            </div>
          </div>
          <div className="text-sm text-text-muted sm:text-right pl-6 sm:pl-0">
            <p>{item.period}</p>
            {item.location && <p className="text-xs mt-0.5">{item.location}</p>}
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-5 pl-6">
          {item.description.map((desc, i) => (
            <li key={i} className="text-sm md:text-base text-text-secondary/90 leading-relaxed relative">
              <span className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-white/10" />
              {desc}
            </li>
          ))}
        </ul>

        {/* Paper link */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-light transition-colors mb-4"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View Paper (arXiv)
          </a>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.06] text-text-secondary group-hover:border-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="text-sm font-medium text-brand tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Experience
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-brand to-accent" />
        </div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <ExperienceCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
