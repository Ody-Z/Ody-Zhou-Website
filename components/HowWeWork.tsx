import React, { useState } from 'react';

interface Phase {
  num: string;
  name: string;
  duration: string;
  color: string;
  textOnColor: string;
  weeks: number;
  activities: string[];
  deliverable: string;
}

const phases: Phase[] = [
  {
    num: '01',
    name: 'Decide',
    duration: '~1 week',
    color: '#FFDD00',
    textOnColor: '#1A1A1A',
    weeks: 1,
    activities: ['Learn your business.', 'Pick ONE thing worth building.'],
    deliverable: 'Decision memo + build plan',
  },
  {
    num: '02',
    name: 'Build',
    duration: '~4 weeks',
    color: '#F4763B',
    textOnColor: '#1A1A1A',
    weeks: 4,
    activities: ['Write the code.', 'Daily commits.', 'Weekly demos.'],
    deliverable: 'Working system in staging',
  },
  {
    num: '03',
    name: 'Launch',
    duration: '~1 week + 30d',
    color: '#1A1A1A',
    textOnColor: '#EDE8DC',
    weeks: 1,
    activities: ['Ship to production.', 'Handover docs.', '30-day async support.'],
    deliverable: 'Live in production',
  },
];

const totalUnits = phases.reduce((sum, p) => sum + p.weeks, 0) + 1;

export function HowWeWork() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="how-we-work"
      className="relative bg-cream border-t-2 border-navy"
      style={{ padding: '88px 0 104px' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <p
            className="font-mono font-bold uppercase text-orange"
            style={{ fontSize: 11, letterSpacing: '0.14em', marginBottom: 12 }}
          >
            HOW WE WORK
          </p>
          <h2
            className="font-mono font-bold uppercase text-navy"
            style={{
              fontSize: 'clamp(2.3rem, 5.5vw, 4.25rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.02,
            }}
          >
            6 WEEKS.<br />
            3 PHASES.<br />
            <span style={{ color: '#F4763B' }}>ONE THING SHIPPED.</span>
          </h2>
          <div style={{ marginTop: 18, width: 48, height: 4, background: '#1A1A1A' }} />
        </div>

        {/* Timeline */}
        <div className="reveal reveal-delay-1" style={{ position: 'relative', marginBottom: 56 }}>
          {/* Graph paper background */}
          <div className="how-grid-bg" aria-hidden />

          {/* Week tick marks */}
          <div style={{ position: 'relative', height: 18, marginBottom: 6 }}>
            {[1, 2, 3, 4, 5, 6].map((w) => (
              <div
                key={w}
                style={{
                  position: 'absolute',
                  left: `${((w - 1) / totalUnits) * 100}%`,
                  top: 0,
                }}
              >
                <div
                  className="font-mono font-bold"
                  style={{ fontSize: 10, letterSpacing: '0.1em', color: '#1A1A1A', opacity: 0.45 }}
                >
                  W{w}
                </div>
              </div>
            ))}
            <div style={{ position: 'absolute', right: 4, top: 0 }}>
              <div
                className="font-mono font-bold"
                style={{ fontSize: 10, letterSpacing: '0.1em', color: '#1A1A1A', opacity: 0.45 }}
              >
                +30D
              </div>
            </div>
          </div>

          {/* Phase bands */}
          <div
            style={{
              display: 'flex',
              position: 'relative',
              height: 88,
              border: '2.5px solid #1A1A1A',
              background: 'white',
              overflow: 'hidden',
            }}
          >
            {phases.map((p, i) => {
              const isDimmed = hovered !== null && hovered !== p.num;
              return (
                <div
                  key={p.num}
                  onMouseEnter={() => setHovered(p.num)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    flex: p.weeks,
                    position: 'relative',
                    background: p.color,
                    borderRight: '2.5px solid #1A1A1A',
                    opacity: isDimmed ? 0.45 : 1,
                    transition: 'opacity 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ textAlign: 'center', padding: '0 8px' }}>
                    <div
                      className="font-mono font-bold"
                      style={{
                        fontSize: 11,
                        color: p.textOnColor,
                        letterSpacing: '0.14em',
                        opacity: 0.5,
                        marginBottom: 2,
                      }}
                    >
                      PHASE {p.num}
                    </div>
                    <div
                      className="font-mono font-bold uppercase"
                      style={{
                        fontSize: 'clamp(14px, 2vw, 22px)',
                        color: p.textOnColor,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {p.name}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* +30d dashed tail */}
            <div
              style={{
                flex: 1,
                position: 'relative',
                background:
                  'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(26,26,26,0.1) 6px, rgba(26,26,26,0.1) 7px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                className="font-mono font-bold"
                style={{ fontSize: 10, color: '#1A1A1A', opacity: 0.5, letterSpacing: '0.12em' }}
              >
                SUPPORT
              </div>
            </div>
          </div>
        </div>

        {/* Descriptions */}
        <div
          className="how-descriptions reveal reveal-delay-2"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 36, marginBottom: 48 }}
        >
          {phases.map((p) => {
            const isDimmed = hovered !== null && hovered !== p.num;
            return (
              <div
                key={p.num}
                onMouseEnter={() => setHovered(p.num)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  opacity: isDimmed ? 0.45 : 1,
                  transition: 'opacity 0.2s ease',
                  borderTop: `5px solid ${p.color}`,
                  paddingTop: 20,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                  <span
                    className="font-mono font-bold"
                    style={{ fontSize: 13, opacity: 0.4, letterSpacing: '0.06em' }}
                  >
                    {p.num}
                  </span>
                  <h3
                    className="font-mono font-bold uppercase text-navy"
                    style={{ fontSize: 22, letterSpacing: '0.04em' }}
                  >
                    {p.name}
                  </h3>
                </div>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    opacity: 0.5,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: 18,
                  }}
                >
                  {p.duration}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
                  {p.activities.map((a, i) => (
                    <li
                      key={i}
                      className="font-body text-navy"
                      style={{ fontSize: 15, lineHeight: 1.55, display: 'flex', gap: 10 }}
                    >
                      <span style={{ color: p.color === '#1A1A1A' ? '#F4763B' : p.color, fontWeight: 700, flexShrink: 0 }}>
                        —
                      </span>
                      <span style={{ opacity: 0.85 }}>{a}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ paddingTop: 14, borderTop: '1px dashed rgba(26,26,26,0.22)' }}>
                  <p
                    className="font-mono font-bold uppercase"
                    style={{ fontSize: 9, letterSpacing: '0.16em', opacity: 0.4, marginBottom: 6 }}
                  >
                    DELIVERABLE
                  </p>
                  <p
                    className="font-body text-navy"
                    style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}
                  >
                    → {p.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inline meta line */}
        <div
          className="reveal reveal-delay-3 font-mono uppercase"
          style={{
            fontSize: 11,
            letterSpacing: '0.14em',
            color: '#1A1A1A',
            opacity: 0.55,
            textAlign: 'center',
            marginTop: 8,
          }}
        >
          Stop after any phase &nbsp;·&nbsp; You own the code &nbsp;·&nbsp; AUD $15–25k total
        </div>
      </div>
    </section>
  );
}
