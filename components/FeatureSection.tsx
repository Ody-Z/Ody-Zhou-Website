import React from 'react';

/* ── Syntax-highlighted code lines ── */
const CODE_LINES: { tokens: { text: string; color: string }[] }[] = [
  {
    tokens: [
      { text: 'from ',       color: '#CBA6F7' },
      { text: 'ray_ai',      color: '#89DCEB' },
      { text: ' import ',    color: '#CBA6F7' },
      { text: 'AgentCore',   color: '#89B4FA' },
    ],
  },
  {
    tokens: [
      { text: 'from ',       color: '#CBA6F7' },
      { text: 'world_model', color: '#89DCEB' },
      { text: ' import ',    color: '#CBA6F7' },
      { text: 'Predictor',   color: '#89B4FA' },
    ],
  },
  { tokens: [{ text: '', color: '' }] },
  {
    tokens: [
      { text: 'agent',     color: '#CDD6F4' },
      { text: ' = ',       color: '#89DCEB' },
      { text: 'AgentCore', color: '#89B4FA' },
      { text: '(',         color: '#CDD6F4' },
    ],
  },
  {
    tokens: [
      { text: '    model',        color: '#A6E3A1' },
      { text: '=',                color: '#89DCEB' },
      { text: '"claude-3-5"',     color: '#FAB387' },
      { text: ',',                color: '#CDD6F4' },
    ],
  },
  {
    tokens: [
      { text: '    world_model', color: '#A6E3A1' },
      { text: '=',              color: '#89DCEB' },
      { text: 'Predictor()',    color: '#89B4FA' },
      { text: ',',              color: '#CDD6F4' },
    ],
  },
  {
    tokens: [
      { text: '    tools',  color: '#A6E3A1' },
      { text: '=[',         color: '#CDD6F4' },
      { text: '"search"',   color: '#FAB387' },
      { text: ', ',         color: '#CDD6F4' },
      { text: '"plan"',     color: '#FAB387' },
      { text: ', ',         color: '#CDD6F4' },
      { text: '"act"',      color: '#FAB387' },
      { text: '],',         color: '#CDD6F4' },
    ],
  },
  { tokens: [{ text: ')', color: '#CDD6F4' }] },
  { tokens: [{ text: '', color: '' }] },
  {
    tokens: [
      { text: '# autonomous task loop', color: '#6C7086', },
    ],
  },
  {
    tokens: [
      { text: 'result', color: '#89B4FA' },
      { text: ' = ',    color: '#89DCEB' },
      { text: 'await ', color: '#CBA6F7' },
      { text: 'agent',  color: '#89B4FA' },
      { text: '.run(',  color: '#CDD6F4' },
    ],
  },
  {
    tokens: [
      { text: '    "Build a marketing campaign"', color: '#FAB387' },
    ],
  },
  { tokens: [{ text: ')', color: '#CDD6F4' }] },
];

function Terminal() {
  return (
    <div className="terminal" style={{ position: 'relative' }}>
      {/* Title bar */}
      <div className="terminal-bar">
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', border: '1.5px solid #1A1A1A' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E', border: '1.5px solid #1A1A1A' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840', border: '1.5px solid #1A1A1A' }} />
        <span style={{ marginLeft: 14, color: '#6C7086', fontSize: 11, letterSpacing: '0.04em' }}>agent.py</span>
        <span
          style={{
            marginLeft: 'auto',
            background: '#FFDD00',
            color: '#1A1A1A',
            fontSize: 10,
            fontWeight: 700,
            padding: '2px 10px',
            letterSpacing: '0.06em',
            fontFamily: '"Space Mono", monospace',
          }}
        >
          RUNNING
        </span>
      </div>

      {/* Code body */}
      <div style={{ padding: '20px 24px 12px' }}>
        {CODE_LINES.map((line, i) => (
          <div key={i} style={{ color: '#CDD6F4', fontFamily: '"Space Mono", monospace', fontSize: 12.5, lineHeight: 1.8 }}>
            {line.tokens.map((tok, j) => (
              <span key={j} style={{ color: tok.color }}>{tok.text}</span>
            ))}
          </div>
        ))}

        {/* Result badge */}
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#A6E3A1', fontFamily: '"Space Mono", monospace', fontSize: 12, fontWeight: 700 }}>
            ✓ TASK COMPLETE
          </span>
          <span
            style={{
              background: '#FFDD00',
              color: '#1A1A1A',
              fontFamily: '"Space Mono", monospace',
              fontSize: 10,
              fontWeight: 700,
              padding: '2px 9px',
              letterSpacing: '0.06em',
            }}
          >
            3 STEPS
          </span>
        </div>
      </div>
    </div>
  );
}

export function FeatureSection() {
  return (
    <section
      className="relative bg-cream border-t-2 border-navy"
      style={{ padding: '80px 0' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — terminal window */}
          <div className="reveal relative">
            <Terminal />
            {/* Offset shadow */}
            <div
              style={{
                position: 'absolute', inset: 0,
                border: '2.5px solid #1A1A1A',
                transform: 'translate(7px, 7px)',
                zIndex: -1,
                background: '#FFDD00',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Right — text */}
          <div className="reveal reveal-delay-2">
            <p
              className="font-mono font-bold uppercase text-orange"
              style={{ fontSize: 11, letterSpacing: '0.14em', marginBottom: 14 }}
            >
              FEATURED PROJECT
            </p>
            <h2
              className="font-mono font-bold uppercase text-navy"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
                marginBottom: 20,
              }}
            >
              AI AGENT<br />FRAMEWORK
            </h2>
            <p
              className="font-body text-navy/65"
              style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}
            >
              Designed and implemented an autonomous AI agent powered by World Models at
              Tsinghua University. The agent operates in Minecraft, using predictive
              world modeling to plan and execute complex multi-step tasks without human
              supervision.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {['Python', 'LLM', 'World Models', 'RL', 'AI Agents', 'Linux'].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>

            <a
              href="https://arxiv.org/pdf/2502.05907"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              READ THE PAPER →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
