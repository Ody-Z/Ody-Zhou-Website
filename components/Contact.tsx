import React from 'react';

interface Channel {
  label: string;
  value: string;
  href: string;
  hint: string;
  accent: string;
  shadow: string;
  icon: React.ReactNode;
}

const channels: Channel[] = [
  {
    label: 'EMAIL',
    value: 'zhouodywork@gmail.com',
    href: 'mailto:zhouodywork@gmail.com',
    hint: 'Best for project briefs',
    accent: '#FFDD00',
    shadow: '#F0DA70',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'WHATSAPP',
    value: '+61 476 882 350',
    href: 'https://wa.me/61476882350',
    hint: 'Fastest reply',
    accent: '#52B788',
    shadow: '#A8DBBD',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    label: 'LINKEDIN DM',
    value: '/in/ody-zhou',
    href: 'https://www.linkedin.com/in/ody-zhou-84a78628a/',
    hint: 'For intros & referrals',
    accent: '#4A90D9',
    shadow: '#A3C8ED',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-cream border-t-2 border-navy overflow-hidden"
      style={{ padding: '96px 0 112px' }}
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute animate-float" style={{ top: '18%', left: '7%' }}>
          <svg width="26" height="26" viewBox="0 0 26 26">
            <polygon points="13,2 24,22 2,22" fill="#F4763B" stroke="#1A1A1A" strokeWidth="2.2" />
          </svg>
        </div>
        <div className="absolute animate-spin-slow" style={{ top: '24%', right: '9%' }}>
          <svg width="36" height="36" viewBox="0 0 36 36">
            <polygon
              points="18,1 21,13 33,10 24,18 33,26 21,23 18,35 15,23 3,26 12,18 3,10 15,13"
              fill="#FFDD00" stroke="#1A1A1A" strokeWidth="1.6"
            />
          </svg>
        </div>
        <div className="absolute animate-float-2" style={{ bottom: '16%', left: '12%' }}>
          <div style={{ width: 18, height: 18, background: '#9B72CF', border: '2.5px solid #1A1A1A', transform: 'rotate(22deg)' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 48, textAlign: 'center' }}>
          <p
            className="font-mono font-bold uppercase text-orange"
            style={{ fontSize: 11, letterSpacing: '0.14em', marginBottom: 12 }}
          >
            CONTACT
          </p>
          <h2
            className="font-mono font-bold uppercase text-navy"
            style={{
              fontSize: 'clamp(2.3rem, 5.5vw, 4.25rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            TELL ME ABOUT<br />
            <span style={{ color: '#F4763B' }}>YOUR BUSINESS</span>
          </h2>
          <div style={{ margin: '16px auto 0', width: 48, height: 4, background: '#1A1A1A' }} />
          <p
            className="font-body text-navy"
            style={{ fontSize: 15.5, lineHeight: 1.65, opacity: 0.7, marginTop: 20, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Email, WhatsApp, or LinkedIn DM — whichever you prefer. I usually reply within a day.
          </p>
        </div>

        {/* Channel cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 22,
          }}
        >
          {channels.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                position: 'relative',
                textDecoration: 'none',
                color: '#1A1A1A',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget.querySelector('.contact-card') as HTMLElement | null;
                if (card) card.style.transform = 'translate(-3px, -3px)';
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.contact-card') as HTMLElement | null;
                if (card) card.style.transform = 'none';
              }}
            >
              <div
                className="contact-card"
                style={{
                  position: 'relative',
                  border: '2.5px solid #1A1A1A',
                  background: 'white',
                  padding: '24px 22px 22px',
                  transition: 'transform 0.15s ease',
                  zIndex: 1,
                }}
              >
                <div style={{ height: 5, background: c.accent, margin: '-24px -22px 18px' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      background: c.accent,
                      border: '2px solid #1A1A1A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1A1A1A',
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p
                      className="font-mono font-bold uppercase text-navy"
                      style={{ fontSize: 12, letterSpacing: '0.08em' }}
                    >
                      {c.label}
                    </p>
                    <p
                      className="font-mono"
                      style={{ fontSize: 10, letterSpacing: '0.04em', opacity: 0.55, marginTop: 2 }}
                    >
                      {c.hint}
                    </p>
                  </div>
                </div>

                <p
                  className="font-mono font-bold text-navy"
                  style={{
                    fontSize: 14,
                    letterSpacing: '0.01em',
                    wordBreak: 'break-all',
                    marginBottom: 14,
                  }}
                >
                  {c.value}
                </p>

                <span
                  className="font-mono font-bold uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    color: '#1A1A1A',
                    borderBottom: `2px solid ${c.accent}`,
                    paddingBottom: 2,
                  }}
                >
                  OPEN →
                </span>
              </div>

              {/* Offset shadow */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: '2.5px solid #1A1A1A',
                  background: c.shadow,
                  transform: 'translate(5px, 5px)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
