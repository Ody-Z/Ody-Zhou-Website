import React from 'react';

/* ─── Duck mascot ─── */
function Duck({ width = 155 }: { width?: number }) {
  return (
    <svg
      viewBox="0 0 160 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      style={{ filter: 'drop-shadow(2px 4px 0 rgba(0,0,0,0.12))' }}
    >
      {/* Body */}
      <ellipse cx="80" cy="128" rx="55" ry="50" fill="white" stroke="#1A1A1A" strokeWidth="3" />
      {/* Head */}
      <circle cx="102" cy="76" r="36" fill="white" stroke="#1A1A1A" strokeWidth="3" />
      {/* Beak */}
      <path d="M133 72 L155 67 L152 79 L133 77 Z" fill="#F4763B" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Eye */}
      <circle cx="115" cy="67" r="6" fill="#1A1A1A" />
      <circle cx="117" cy="65" r="2.2" fill="white" />
      {/* Blush */}
      <ellipse cx="128" cy="80" rx="9" ry="5" fill="#FFB5B5" opacity="0.5" />
      {/* Wing */}
      <path d="M34 120 Q18 100 26 84 Q50 92 44 120 Z" fill="white" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Left foot */}
      <line x1="63" y1="174" x2="52" y2="185" stroke="#F4763B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="63" y1="174" x2="58" y2="186" stroke="#F4763B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="63" y1="174" x2="69" y2="185" stroke="#F4763B" strokeWidth="3.5" strokeLinecap="round" />
      {/* Right foot */}
      <line x1="90" y1="176" x2="79" y2="185" stroke="#F4763B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="90" y1="176" x2="85" y2="186" stroke="#F4763B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="90" y1="176" x2="96" y2="185" stroke="#F4763B" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Floating geometric decorations ─── */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden>

      {/* Orange filled triangle — top-left */}
      <div className="absolute animate-float" style={{ top: '18%', left: '6%' }}>
        <svg width="28" height="28" viewBox="0 0 28 28">
          <polygon points="14,2 26,24 2,24" fill="#F4763B" stroke="#1A1A1A" strokeWidth="2.5" />
        </svg>
      </div>

      {/* Teal rotated square — top-right */}
      <div className="absolute animate-float-2" style={{ top: '22%', right: '10%' }}>
        <div style={{ width:18, height:18, background:'#30C9B8', border:'2.5px solid #1A1A1A', transform:'rotate(22deg)' }} />
      </div>

      {/* Yellow starburst — left-mid, spinning */}
      <div className="absolute animate-spin-slow" style={{ top: '44%', left: '3.5%' }}>
        <svg width="38" height="38" viewBox="0 0 38 38">
          <polygon
            points="19,1 22,14 35,10 25,19 35,28 22,24 19,37 16,24 3,28 13,19 3,10 16,14"
            fill="#FFDD00" stroke="#1A1A1A" strokeWidth="1.8"
          />
        </svg>
      </div>

      {/* Red circle — right-mid */}
      <div className="absolute animate-float-3" style={{ top: '53%', right: '6%' }}>
        <div style={{ width:24, height:24, borderRadius:'50%', background:'#E63946', border:'2.5px solid #1A1A1A' }} />
      </div>

      {/* Green diamond — bottom-left */}
      <div className="absolute animate-float" style={{ bottom: '33%', left: '13%' }}>
        <svg width="22" height="22" viewBox="0 0 22 22">
          <polygon points="11,0 22,11 11,22 0,11" fill="#52B788" stroke="#1A1A1A" strokeWidth="2" />
        </svg>
      </div>

      {/* Outline starburst — top center-right */}
      <div className="absolute animate-float-2" style={{ top: '11%', right: '27%' }}>
        <svg width="46" height="46" viewBox="0 0 46 46">
          <polygon
            points="23,2 26.5,18 42,14 31,23 42,32 26.5,28 23,44 19.5,28 4,32 15,23 4,14 19.5,18"
            fill="none" stroke="#1A1A1A" strokeWidth="1.8"
          />
        </svg>
      </div>

      {/* Blue filled triangle — bottom-right area */}
      <div className="absolute animate-float-3" style={{ bottom: '30%', right: '16%' }}>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <polygon points="10,1 19,17 1,17" fill="#4A90D9" stroke="#1A1A1A" strokeWidth="2" />
        </svg>
      </div>

      {/* Small coral circle — mid-left */}
      <div className="absolute animate-float-2" style={{ top: '38%', left: '22%' }}>
        <div style={{ width:12, height:12, borderRadius:'50%', background:'#FF8C5A', border:'2px solid #1A1A1A' }} />
      </div>

      {/* Purple starburst — far right */}
      <div className="absolute animate-wiggle" style={{ top: '32%', right: '2.5%' }}>
        <svg width="28" height="28" viewBox="0 0 28 28">
          <polygon
            points="14,1 16.5,10 26,7 19,14 26,21 16.5,18 14,27 11.5,18 2,21 9,14 2,7 11.5,10"
            fill="#9B72CF" stroke="#1A1A1A" strokeWidth="1.5"
          />
        </svg>
      </div>

    </div>
  );
}

/* ─── Cloud SVG component ─── */
function Cloud() {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%">
      <ellipse cx="110" cy="82" rx="88" ry="44" fill="white" stroke="#1A1A1A" strokeWidth="2.2" />
      <ellipse cx="70"  cy="65" rx="52" ry="38" fill="white" stroke="#1A1A1A" strokeWidth="2.2" />
      <ellipse cx="152" cy="70" rx="58" ry="36" fill="white" stroke="#1A1A1A" strokeWidth="2.2" />
      <ellipse cx="110" cy="55" rx="64" ry="38" fill="white" stroke="#1A1A1A" strokeWidth="2.2" />
    </svg>
  );
}

/* ─── Cloud strip at bottom of hero ─── */
function HeroClouds() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
      style={{ height: 120 }}
    >
      <div className="cloud-1 absolute" style={{ bottom: 0, left: '3%',  width: 230 }}><Cloud /></div>
      <div className="cloud-2 absolute" style={{ bottom: -12, left: '28%', width: 190 }}><Cloud /></div>
      <div className="cloud-3 absolute" style={{ bottom: 4,  right: '12%', width: 210 }}><Cloud /></div>
    </div>
  );
}

/* ─── Hero section ─── */
export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream"
      style={{ minHeight: '100vh', paddingTop: 72, paddingBottom: 140 }}
    >
      <FloatingShapes />

      {/* Main content */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center"
        style={{ paddingTop: 64 }}
      >
        {/* Tagline */}
        <div
          className="hero-1 inline-flex items-center gap-2 bg-white border-2 border-navy mb-10"
          style={{ padding: '8px 16px' }}
        >
          <span
            className="font-mono font-bold uppercase text-navy"
            style={{ fontSize: 11, letterSpacing: '0.14em' }}
          >
            Builder consultant for small teams
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-2 font-mono font-bold text-navy"
          style={{
            fontSize: 'clamp(2.4rem, 7.5vw, 6rem)',
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
          }}
        >
          You teach me
          <br />
          your business.
          <br />
          I'll <span style={{ color: '#F4763B' }}>build the AI</span>
          <br />
          that fits.
        </h1>

        {/* CTAs */}
        <div className="hero-4 flex flex-col sm:flex-row items-center gap-4" style={{ marginTop: 44 }}>
          <a href="#contact" className="btn-primary">LET'S TALK →</a>
        </div>
      </div>

      {/* 10x BUILDER floating card — desktop only, upper right */}
      <div
        className="hero-duck absolute hidden lg:block animate-float-2"
        style={{ zIndex: 10, top: '13rem', right: '6%' }}
        aria-hidden
      >
        <div style={{ position: 'relative' }}>
          <div
            style={{
              background: 'white',
              border: '2.5px solid #1A1A1A',
              padding: '18px 24px 20px',
              transform: 'rotate(3deg)',
              boxShadow: '5px 5px 0 #1A1A1A',
              textAlign: 'center',
              minWidth: 210,
            }}
          >
            {/* Lightning bolt */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F4763B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 8px', display: 'block' }}>
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#FFDD00" />
            </svg>
            <p
              className="font-mono font-bold uppercase text-navy"
              style={{ fontSize: 14, letterSpacing: '0.04em', marginBottom: 8 }}
            >
              10x BUILDER
            </p>
            <p
              className="font-mono text-navy"
              style={{ fontSize: 11, letterSpacing: '0.02em', lineHeight: 1.5, opacity: 0.6 }}
            >
              Ship fast.<br />Break things.<br />AI-native founder mode.
            </p>
          </div>
          {/* Tiny red dot accent */}
          <div
            style={{
              position: 'absolute',
              bottom: -8,
              right: 16,
              width: 16,
              height: 16,
              borderRadius: '50%',
              background: '#E63946',
              border: '2px solid #1A1A1A',
            }}
          />
        </div>
      </div>

      {/* Duck mascot + speech bubble — desktop only, lower right */}
      <div
        className="hero-duck absolute hidden lg:flex flex-col items-center"
        style={{ zIndex: 10, bottom: '8rem', right: '7%', gap: 4 }}
      >
        {/* Speech bubble */}
        <div
          className="speech-bubble speech-bubble--down"
          style={{ marginBottom: 18, transform: 'rotate(-2deg)' }}
        >
          <span
            className="font-mono font-bold uppercase text-navy"
            style={{ fontSize: 12, letterSpacing: '0.08em' }}
          >
            LET'S BUILD!
          </span>
        </div>
        {/* Duck — wiggles side to side */}
        <div className="animate-wiggle" style={{ transformOrigin: '50% 90%' }}>
          <Duck width={140} />
        </div>
      </div>

      {/* Photo polaroid — desktop only, left side */}
      <div
        className="hero-duck absolute hidden lg:block"
        style={{ zIndex: 10, bottom: '7rem', left: '5%' }}
      >
        <div
          style={{
            background: 'white',
            border: '2.5px solid #1A1A1A',
            padding: '8px 8px 36px 8px',
            transform: 'rotate(-4deg)',
            boxShadow: '5px 5px 0 #1A1A1A',
          }}
        >
          <img
            src="/ody.jpg"
            alt="Ody Zhou"
            style={{ width: 210, height: 210, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
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
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-4 absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
      >
        <span
          className="font-mono text-navy"
          style={{ fontSize: 9, letterSpacing: '0.22em', opacity: 0.35 }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1.5,
            height: 32,
            background: 'linear-gradient(to bottom, rgba(26,26,26,0.35), transparent)',
          }}
        />
      </div>

      <HeroClouds />
    </section>
  );
}
