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
        {/* Available badge */}
        <div className="hero-1 inline-flex items-center gap-2 bg-white border-2 border-navy px-4 py-2 mb-10">
          <div
            style={{
              width: 8, height: 8, borderRadius: '50%', background: '#22C55E',
              animation: 'pulse 2.5s ease-in-out infinite',
            }}
          />
          <span
            className="font-mono font-bold uppercase text-navy"
            style={{ fontSize: 11, letterSpacing: '0.12em' }}
          >
            Available for Opportunities
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-2 font-mono font-bold text-navy"
          style={{
            fontSize: 'clamp(2.8rem, 9vw, 7rem)',
            lineHeight: 1.04,
            letterSpacing: '-0.02em',
          }}
        >
          Landing Ideas
          <br />
          <span style={{ color: '#F4763B' }}>into</span>
          <br />
          Future
        </h1>

        {/* Sub-copy */}
        <p
          className="hero-3 font-body text-navy max-w-xl mx-auto"
          style={{ fontSize: 18, lineHeight: 1.65, opacity: 0.62, marginTop: 28, marginBottom: 44 }}
        >
          Ody Zhou — Product builder & Researcher building tools for the agentic world.
        </p>

        {/* CTAs */}
        <div className="hero-4 flex flex-col sm:flex-row items-center gap-4">
          <a href="#experience" className="btn-primary">VIEW MY WORK →</a>
          <a href="mailto:zhouodywork@gmail.com" className="btn-outline">GET IN TOUCH</a>
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

      {/* Duck mascot + speech bubble (desktop only) */}
      <div
        className="hero-duck absolute bottom-28 right-[7%] hidden lg:flex flex-col items-start"
        style={{ zIndex: 10 }}
      >
        <div className="speech-bubble speech-bubble--down" style={{ marginBottom: 22 }}>
          <span
            className="font-mono font-bold uppercase text-navy"
            style={{ fontSize: 11, letterSpacing: '0.1em' }}
          >
            OPEN TO WORK!
          </span>
        </div>
        <div className="animate-wiggle" style={{ transformOrigin: 'center bottom' }}>
          <Duck width={155} />
        </div>
      </div>

      {/* 10x Builder sticker — desktop only */}
      <div
        className="hero-duck absolute hidden lg:block"
        style={{ zIndex: 10, top: '38%', right: '5%' }}
      >
        <div
          style={{
            background: 'white',
            border: '2.5px solid #1A1A1A',
            padding: '16px 20px',
            transform: 'rotate(3deg)',
            boxShadow: '4px 4px 0 #1A1A1A',
            width: 200,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 32, lineHeight: 1, marginBottom: 8 }}>⚡</div>
          <p
            className="font-mono font-bold text-navy"
            style={{ fontSize: 14, letterSpacing: '0.04em', lineHeight: 1.4, margin: 0 }}
          >
            10x BUILDER
          </p>
          <p
            className="font-mono text-navy"
            style={{ fontSize: 10, letterSpacing: '0.06em', lineHeight: 1.5, margin: '6px 0 0', opacity: 0.55 }}
          >
            Ship fast. Break things.
            <br />
            AI-native founder mode.
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
