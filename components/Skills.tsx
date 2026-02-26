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
    title: 'LANGUAGES',
    num: '01',
    skills: ['Python', 'C#', 'Java', 'JavaScript', 'TypeScript', 'R'],
    accent: '#F4763B',
    shadowColor: '#F9C4A8',
  },
  {
    title: 'AI & ML',
    num: '02',
    skills: ['Large Language Models', 'Reinforcement Learning', 'AI Agents', 'SVM', 'Clustering', 'Regression', 'Permutation Testing'],
    accent: '#9B72CF',
    shadowColor: '#C9B3E6',
  },
  {
    title: 'BACKEND & INFRA',
    num: '03',
    skills: ['.NET Framework', 'Spring Boot', 'Kubernetes', 'Liquibase', 'Microservices', 'Linux Server'],
    accent: '#4A90D9',
    shadowColor: '#A3C8ED',
  },
  {
    title: 'FRONTEND & TOOLS',
    num: '04',
    skills: ['React', 'TypeScript', 'Data Visualization', 'Statistics', 'Data Analysis'],
    accent: '#30C9B8',
    shadowColor: '#A0E4DA',
  },
  {
    title: 'PRODUCT & STRATEGY',
    num: '05',
    skills: ['Market Research', 'Rapid Prototyping', 'Idea Validation', 'User Interviews', 'Growth Experiments', 'Product Roadmapping'],
    accent: '#FFDD00',
    shadowColor: '#FFEE80',
  },
  {
    title: 'LEADERSHIP & COMMUNICATION',
    num: '06',
    skills: ['Public Speaking', 'Sales & Pitching', 'Stakeholder Management', 'Cross-functional Collaboration', 'Team Building', 'Technical Writing'],
    accent: '#E63946',
    shadowColor: '#F2A0A6',
  },
];

/* ─── Cloud SVG ─── */
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
      style={{ background: '#7DC7E8', padding: '80px 0 120px' }}
    >
      {/* ── Background clouds ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="cloud-1 absolute" style={{ left: '-80px', top: 20, width: 280 }}>
          <Cloud />
        </div>
        <div className="cloud-2 absolute" style={{ right: '-60px', top: 40, width: 250 }}>
          <Cloud />
        </div>
        <div className="cloud-3 absolute" style={{ left: '18%', bottom: 50, width: 200 }}>
          <Cloud />
        </div>
        <div className="cloud-4 absolute" style={{ right: '22%', bottom: 70, width: 220 }}>
          <Cloud />
        </div>
        <div className="cloud-1 absolute" style={{ left: '46%', top: 0, width: 175, opacity: 0.75 }}>
          <Cloud />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section header */}
        <div className="reveal text-center" style={{ marginBottom: 56 }}>
          <p
            className="font-mono font-bold uppercase text-navy"
            style={{ fontSize: 11, letterSpacing: '0.14em', marginBottom: 12, opacity: 0.55 }}
          >
            TOOLKIT
          </p>
          <h2
            className="font-mono font-bold uppercase text-navy"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            SKILLS &amp;<br />TECHNOLOGIES
          </h2>
          <div style={{ marginTop: 14, width: 48, height: 4, background: '#1A1A1A', margin: '14px auto 0' }} />
        </div>

        {/* Skill grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className={`reveal reveal-delay-${(index % 4) + 1} relative`}
            >
              <div className="skill-card">
                {/* Top accent bar */}
                <div style={{ height: 5, background: cat.accent }} />

                <div style={{ padding: '20px 22px 22px' }}>
                  {/* Number + title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div
                      style={{
                        width: 36, height: 36,
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

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
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

              {/* Card shadow */}
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

      {/* ── Bottom cloud divider into footer ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ lineHeight: 0 }}
      >
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <ellipse cx="320"  cy="72" rx="240" ry="65" fill="white" />
          <ellipse cx="160"  cy="80" rx="180" ry="55" fill="white" />
          <ellipse cx="480"  cy="78" rx="210" ry="60" fill="white" />
          <ellipse cx="1080" cy="68" rx="260" ry="68" fill="white" />
          <ellipse cx="920"  cy="78" rx="200" ry="55" fill="white" />
          <ellipse cx="1260" cy="76" rx="220" ry="58" fill="white" />
          <rect x="0" y="74" width="1440" height="6" fill="#EDE8DC" />
        </svg>
      </div>
    </section>
  );
}
