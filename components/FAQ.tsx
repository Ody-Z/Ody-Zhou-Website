import React, { useState } from 'react';

interface QA {
  num: string;
  q: string;
  a: React.ReactNode;
}

const items: QA[] = [
  {
    num: '01',
    q: 'Who is this for?',
    a: 'Small-business owners with a manual process they want to automate — or an "AI opportunity" they can\'t scope. 2 to 50 people. You know your business better than any consultant ever will.',
  },
  {
    num: '02',
    q: 'Who is this not for?',
    a: 'Enterprise (500+ people) — you need McKinsey, not me. Price shoppers — I\'m not the cheapest. People who want to be told "AI will solve everything" — I won\'t say that.',
  },
  {
    num: '03',
    q: 'What if AI isn\'t the right answer for my business?',
    a: 'Phase 1 is designed to figure that out. If an off-the-shelf tool covers it, or the problem isn\'t AI-shaped, I\'ll say so — and you only pay Phase 1. That\'s the value of the decision phase.',
  },
  {
    num: '04',
    q: 'Can I stop mid-engagement?',
    a: 'Yes. Each phase is independent with its own scope and deliverable. Stop after any phase, no lock-in, no hard feelings.',
  },
  {
    num: '05',
    q: 'Do I own the code?',
    a: 'Yes — fully, with documentation. Your next engineer (internal or external) can extend it. I don\'t keep you dependent on me.',
  },
  {
    num: '06',
    q: 'What does it cost?',
    a: (
      <>
        <strong>AUD $15k – $25k total</strong>, depending on scope and integration complexity. Paid in three milestones, one per phase. 50% on start, 50% on delivery. Net 14.
      </>
    ),
  },
  {
    num: '07',
    q: 'Do you take referral fees from vendors?',
    a: 'No. My tool recommendations are independent. If I recommend Orb over Stripe Billing, or Metronome over Lago, it\'s because it fits your business — not because someone paid me.',
  },
  {
    num: '08',
    q: 'What industries do you work in?',
    a: 'Any. The engagement isn\'t shaped around a specific vertical — it\'s shaped around you teaching me your business and us finding where AI fits. If there\'s a team with a real problem, we\'ll find out in Phase 1 whether I\'m the right person.',
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative bg-cream border-t-2 border-navy"
      style={{ padding: '88px 0 104px' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div
          className="reveal"
          style={{
            marginBottom: 56,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <p
              className="font-mono font-bold uppercase text-orange"
              style={{ fontSize: 11, letterSpacing: '0.14em', marginBottom: 12 }}
            >
              QUESTIONS
            </p>
            <h2
              className="font-mono font-bold uppercase text-navy"
              style={{
                fontSize: 'clamp(2.3rem, 5.5vw, 4.25rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}
            >
              ASKED &amp;<br />
              <span style={{ color: '#F4763B' }}>ANSWERED</span>
            </h2>
            <div style={{ marginTop: 14, width: 48, height: 4, background: '#1A1A1A' }} />
          </div>

          <a
            href="mailto:zhouodywork@gmail.com"
            className="font-mono font-bold uppercase"
            style={{
              fontSize: 11,
              letterSpacing: '0.1em',
              color: '#1A1A1A',
              textDecoration: 'none',
              borderBottom: '2px solid #F4763B',
              paddingBottom: 3,
              marginBottom: 8,
            }}
          >
            HAVE A DIFFERENT Q? → EMAIL
          </a>
        </div>

        {/* FAQ items */}
        <div
          style={{
            border: '2.5px solid #1A1A1A',
            background: 'white',
            position: 'relative',
          }}
        >
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={item.num}
                className={`reveal reveal-delay-${(i % 4) + 1}`}
                style={{
                  borderBottom: i < items.length - 1 ? '1.5px solid rgba(26,26,26,0.12)' : 'none',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    gap: 20,
                    alignItems: 'center',
                    padding: '20px 24px 20px 28px',
                    background: isOpen ? 'rgba(244,118,59,0.06)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) e.currentTarget.style.background = 'rgba(26,26,26,0.03)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span
                    className="font-mono font-bold"
                    style={{
                      fontSize: 14,
                      color: '#F4763B',
                      letterSpacing: '0.04em',
                      flexShrink: 0,
                      width: 28,
                    }}
                  >
                    {item.num}
                  </span>
                  <h3
                    className="font-mono font-bold uppercase text-navy"
                    style={{
                      fontSize: 14,
                      letterSpacing: '0.02em',
                      lineHeight: 1.4,
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    {item.q}
                  </h3>
                  <span
                    aria-hidden
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      border: '2px solid #1A1A1A',
                      background: isOpen ? '#1A1A1A' : 'transparent',
                      color: isOpen ? '#FFDD00' : '#1A1A1A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: '"Space Mono", monospace',
                      fontWeight: 700,
                      fontSize: 16,
                      lineHeight: 1,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {isOpen ? '–' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 24px 80px',
                      animation: 'faqFade 0.2s ease',
                    }}
                  >
                    <p
                      className="font-body text-navy"
                      style={{
                        fontSize: 15,
                        lineHeight: 1.65,
                        opacity: 0.78,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
          <style>{`
            @keyframes faqFade {
              from { opacity: 0; transform: translateY(-4px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {/* Offset shadow */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              border: '2.5px solid #1A1A1A',
              transform: 'translate(5px, 5px)',
              zIndex: -1,
              background: '#C8C3B7',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Closing CTA */}
        <div
          className="reveal"
          style={{
            marginTop: 48,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <p
            className="font-mono uppercase text-navy"
            style={{ fontSize: 11, letterSpacing: '0.16em', opacity: 0.55 }}
          >
            ↓ READY TO START ?
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            TELL ME ABOUT YOUR BUSINESS →
          </a>
        </div>
      </div>
    </section>
  );
}
