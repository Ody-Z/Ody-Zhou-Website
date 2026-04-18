import React from 'react';

interface Category {
  title: string;
  num: string;
  skills: string[];
  accent: string;
  shadowColor: string;
}

const categories: Category[] = [
  {
    title: 'AI & AGENTS',
    num: '01',
    skills: ['LLMs', 'AI Agents', 'Reinforcement Learning', 'LLM Evaluation', 'Prompt Engineering', 'Claude / OpenAI SDKs'],
    accent: '#9B72CF',
    shadowColor: '#C9B3E6',
  },
  {
    title: 'ENGINEERING',
    num: '02',
    skills: ['Python', 'TypeScript', 'React', 'Node', '.NET', 'Spring Boot', 'Kubernetes', 'Microservices'],
    accent: '#4A90D9',
    shadowColor: '#A3C8ED',
  },
  {
    title: 'RESEARCH & DATA',
    num: '03',
    skills: ['Statistics', 'SVM', 'Clustering', 'Regression', 'Data Pipelines', 'Research Writing'],
    accent: '#F4763B',
    shadowColor: '#F9C4A8',
  },
];

function Cloud({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <ellipse cx="110" cy="82" rx="88" ry="44" fill="white" stroke="#1A1A1A" strokeWidth="2.2" />
      <ellipse cx="70"  cy="65" rx="52" ry="38" fill="white" stroke="#1A1A1A" strokeWidth="2.2" />
      <ellipse cx="152" cy="70" rx="58" ry="36" fill="white" stroke="#1A1A1A" strokeWidth="2.2" />
      <ellipse cx="110" cy="55" rx="64" ry="38" fill="white" stroke="#1A1A1A" strokeWidth="2.2" />
    </svg>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t-2 border-navy overflow-hidden"
      style={{ background: '#7DC7E8', padding: '72px 0 112px' }}
    >
      {/* Background clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="cloud-1 absolute" style={{ left: '-80px', top: 20, width: 260 }}>
          <Cloud />
        </div>
        <div className="cloud-2 absolute" style={{ right: '-60px', top: 40, width: 230 }}>
          <Cloud />
        </div>
        <div className="cloud-3 absolute" style={{ left: '20%', bottom: 80, width: 180 }}>
          <Cloud />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 44 }}>
          <p
            className="font-mono font-bold uppercase text-navy"
            style={{ fontSize: 11, letterSpacing: '0.14em', marginBottom: 10, opacity: 0.6 }}
          >
            TOOLKIT
          </p>
          <h2
            className="font-mono font-bold uppercase text-navy"
            style={{
              fontSize: 'clamp(2.3rem, 5.5vw, 4.25rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            STACK
          </h2>
          <div style={{ marginTop: 14, width: 48, height: 4, background: '#1A1A1A' }} />
        </div>

        {/* 3-col grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 22,
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className={`reveal reveal-delay-${(index % 3) + 1} relative`}
            >
              <div className="skill-card">
                <div style={{ height: 5, background: cat.accent }} />

                <div style={{ padding: '20px 22px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div
                      style={{
                        width: 34, height: 34,
                        background: cat.accent,
                        border: '2px solid #1A1A1A',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span
                        className="font-mono font-bold text-white"
                        style={{ fontSize: 11, letterSpacing: '0.04em' }}
                      >
                        {cat.num}
                      </span>
                    </div>
                    <h3
                      className="font-mono font-bold uppercase text-navy"
                      style={{ fontSize: 13, letterSpacing: '0.04em' }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="tech-tag"
                        style={{ background: '#F8F5EE' }}
                      >
                        {skill}
                      </span>
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
                  background: cat.shadowColor,
                  pointerEvents: 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom cloud divider into FAQ section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ lineHeight: 0 }}
      >
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <ellipse cx="320"  cy="72" rx="240" ry="65" fill="#EDE8DC" />
          <ellipse cx="160"  cy="80" rx="180" ry="55" fill="#EDE8DC" />
          <ellipse cx="480"  cy="78" rx="210" ry="60" fill="#EDE8DC" />
          <ellipse cx="1080" cy="68" rx="260" ry="68" fill="#EDE8DC" />
          <ellipse cx="920"  cy="78" rx="200" ry="55" fill="#EDE8DC" />
          <ellipse cx="1260" cy="76" rx="220" ry="58" fill="#EDE8DC" />
          <rect x="0" y="74" width="1440" height="6" fill="#EDE8DC" />
        </svg>
      </div>
    </section>
  );
}
