import React from 'react';
import { Experience } from './Experience';
import { Skills } from './Skills';

export function AboutPage() {
  return (
    <>
      {/* Intro / who we are */}
      <section
        className="relative bg-cream overflow-hidden"
        style={{ paddingTop: 88, paddingBottom: 96 }}
      >
        {/* Decorative shapes */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute animate-float" style={{ top: '14%', right: '8%' }}>
            <svg width="32" height="32" viewBox="0 0 32 32">
              <polygon points="16,2 30,28 2,28" fill="#FFDD00" stroke="#1A1A1A" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="absolute animate-float-2" style={{ top: '40%', left: '6%' }}>
            <div style={{ width: 22, height: 22, background: '#9B72CF', border: '2.5px solid #1A1A1A', transform: 'rotate(18deg)' }} />
          </div>
          <div className="absolute animate-spin-slow" style={{ bottom: '18%', right: '5%' }}>
            <svg width="42" height="42" viewBox="0 0 42 42">
              <polygon
                points="21,1 24,15 38,11 28,21 38,31 24,27 21,41 18,27 4,31 14,21 4,11 18,15"
                fill="#F4763B" stroke="#1A1A1A" strokeWidth="1.8"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="reveal">
            <p
              className="font-mono font-bold uppercase text-orange"
              style={{ fontSize: 11, letterSpacing: '0.14em', marginBottom: 12 }}
            >
              ABOUT
            </p>
            <h1
              className="font-mono font-bold uppercase text-navy"
              style={{
                fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.04,
              }}
            >
              ODY ZHOU<br />
              <span style={{ color: '#F4763B' }}>+ TEAM</span>
            </h1>
            <div style={{ marginTop: 16, width: 56, height: 4, background: '#1A1A1A' }} />
          </div>

          {/* Two-column intro */}
          <div
            className="reveal reveal-delay-1"
            style={{
              marginTop: 56,
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 220px) minmax(0, 1fr)',
              gap: 48,
              alignItems: 'flex-start',
            }}
          >
            {/* Polaroid */}
            <div
              style={{
                background: 'white',
                border: '2.5px solid #1A1A1A',
                padding: '8px 8px 36px 8px',
                transform: 'rotate(-3deg)',
                boxShadow: '6px 6px 0 #1A1A1A',
                width: 'fit-content',
              }}
            >
              <img
                src="/ody.jpg"
                alt="Ody Zhou"
                style={{ width: 200, height: 240, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: 9,
                  textAlign: 'center',
                  marginTop: 8,
                  color: '#1A1A1A',
                  opacity: 0.55,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                ODY ZHOU ✌
              </p>
            </div>

            {/* Bio */}
            <div>
              <p
                className="font-body text-navy"
                style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 18 }}
              >
                I'm Ody — software engineer, AI researcher, and the founder of a small team that builds AI products end-to-end.
              </p>
              <p
                className="font-body text-navy"
                style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.78, marginBottom: 18 }}
              >
                Before this I shipped at <strong>Microsoft</strong> and <strong>HSBC</strong>, did world-model research at <strong>Tsinghua</strong>, and built statistical ML pipelines at <strong>UNSW Aviation</strong>.
              </p>
              <p
                className="font-body text-navy"
                style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.78, marginBottom: 28 }}
              >
                Now I run my own products (<a href="https://rayfeedback.ai" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '2px solid #F4763B', color: '#1A1A1A', textDecoration: 'none', fontWeight: 600 }}>RAY AI</a>, <a href="https://agent-id.dev" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '2px solid #9B72CF', color: '#1A1A1A', textDecoration: 'none', fontWeight: 600 }}>agent-id.dev</a>, <a href="https://glassbox.build" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '2px solid #4A90D9', color: '#1A1A1A', textDecoration: 'none', fontWeight: 600 }}>Glassbox</a>) and partner with small businesses who want to figure out where AI fits in their workflow.
              </p>

              {/* Quick facts */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: 12,
                  marginTop: 8,
                }}
              >
                {[
                  { k: 'BASED', v: 'Sydney · Beijing' },
                  { k: 'TEAM', v: '2–4 builders' },
                  { k: 'WORKING SINCE', v: '2022' },
                ].map((f) => (
                  <div
                    key={f.k}
                    style={{
                      border: '2px solid #1A1A1A',
                      padding: '10px 12px',
                      background: '#F8F5EE',
                    }}
                  >
                    <p
                      className="font-mono font-bold uppercase"
                      style={{ fontSize: 9, letterSpacing: '0.14em', color: '#F4763B', marginBottom: 4 }}
                    >
                      {f.k}
                    </p>
                    <p
                      className="font-mono font-bold text-navy"
                      style={{ fontSize: 12, letterSpacing: '0.02em' }}
                    >
                      {f.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse existing Experience + Skills */}
      <Experience />
      <Skills />
    </>
  );
}
