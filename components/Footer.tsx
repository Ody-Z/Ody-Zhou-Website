import React from 'react';

const SOCIALS = [
  {
    label: 'GITHUB',
    href: 'https://github.com/Ody-Z',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/ody-zhou-84a78628a/',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X / TWITTER',
    href: 'https://x.com/odyzhou',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'EMAIL',
    href: 'mailto:zhouodywork@gmail.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="0" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-cream border-t-2 border-navy">
      <div className="max-w-5xl mx-auto px-6" style={{ paddingTop: 72, paddingBottom: 56 }}>

        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 40,
            marginBottom: 56,
          }}
        >
          {/* Left — identity */}
          <div>
            <div
              className="font-display font-extrabold text-orange"
              style={{ fontSize: 52, letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              OZ
            </div>
            <p
              className="font-mono uppercase text-navy"
              style={{ fontSize: 11, letterSpacing: '0.1em', marginTop: 10, opacity: 0.5, lineHeight: 1.6 }}
            >
              Software Engineer<br />& AI Researcher
            </p>
          </div>

          {/* Right — CTA */}
          <div style={{ maxWidth: 320 }}>
            <h3
              className="font-mono font-bold uppercase text-navy"
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: 22,
              }}
            >
              LET'S BUILD<br />SOMETHING.
            </h3>
            <a href="mailto:zhouodywork@gmail.com" className="btn-primary">
              GET IN TOUCH →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '2px solid #1A1A1A', marginBottom: 28 }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          {/* Social links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            {SOCIALS.map((s, i) => (
              <React.Fragment key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    border: '2px solid #1A1A1A',
                    padding: '7px 12px',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.07em',
                    color: '#1A1A1A',
                    textDecoration: 'none',
                    transition: 'background 0.12s ease, color 0.12s ease, transform 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#1A1A1A';
                    (e.currentTarget as HTMLElement).style.color = '#EDE8DC';
                    (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = '#1A1A1A';
                    (e.currentTarget as HTMLElement).style.transform = 'none';
                  }}
                  aria-label={s.label}
                >
                  {s.icon}
                  {s.label}
                </a>
                {i < SOCIALS.length - 1 && (
                  <div style={{ width: 1.5, height: 28, background: '#1A1A1A', opacity: 0.15 }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="font-mono uppercase text-navy"
            style={{ fontSize: 10, letterSpacing: '0.08em', opacity: 0.35 }}
          >
            © {new Date().getFullYear()} ODY ZHOU
          </p>
        </div>
      </div>
    </footer>
  );
}
