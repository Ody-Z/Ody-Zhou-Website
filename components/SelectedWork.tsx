import React from 'react';

interface Product {
  name: string;
  url: string;
  tagline: string;
  blurb: string;
  image: string;
  accent: string;
  shadow: string;
  tags: string[];
}

const products: Product[] = [
  {
    name: 'RAY AI',
    url: 'rayfeedback.ai',
    tagline: 'Instant AI Marking',
    blurb: 'Replaces 80–90% of the manual grading labour at tuition centres. Live, paying users.',
    image: '/work/ray-ai.png',
    accent: '#FFDD00',
    shadow: '#F0DA70',
    tags: ['LLM', 'Full-stack', 'EdTech'],
  },
  {
    name: 'AGENT-ID',
    url: 'agent-id.dev',
    tagline: 'Identity layer for AI agents',
    blurb: 'Email, SMS and wallet APIs that give autonomous agents their own working identity.',
    image: '/work/agent-id.png',
    accent: '#9B72CF',
    shadow: '#C9B3E6',
    tags: ['Agents', 'API', 'Infra'],
  },
  {
    name: 'GLASSBOX',
    url: 'glassbox.build',
    tagline: 'Turn blackbox agents into glassbox',
    blurb: 'Make every agent action transparent — observable, auditable, debuggable in one view.',
    image: '/work/glassbox.png',
    accent: '#4A90D9',
    shadow: '#A3C8ED',
    tags: ['Agents', 'Observability', 'DevTool'],
  },
];

function BrowserChrome({ url, accent }: { url: string; accent: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 14px',
        background: '#F0EBDF',
        borderBottom: '2px solid #1A1A1A',
      }}
    >
      <div style={{ display: 'flex', gap: 6 }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E63946', border: '1.5px solid #1A1A1A' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFDD00', border: '1.5px solid #1A1A1A' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#52B788', border: '1.5px solid #1A1A1A' }} />
      </div>
      <div
        style={{
          flex: 1,
          marginLeft: 8,
          padding: '4px 10px',
          background: 'white',
          border: '1.5px solid #1A1A1A',
          fontFamily: '"Space Mono", monospace',
          fontSize: 10.5,
          letterSpacing: '0.04em',
          color: '#1A1A1A',
          opacity: 0.7,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span style={{ width: 6, height: 6, background: accent, borderRadius: '50%', flexShrink: 0 }} />
        {url}
      </div>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`reveal reveal-delay-${(index % 3) + 1}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 36,
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
          gap: 40,
          alignItems: 'center',
          direction: isReversed ? 'rtl' : 'ltr',
        }}
        className="product-row"
      >
        {/* Image / mockup */}
        <div style={{ direction: 'ltr', position: 'relative' }}>
          <div
            style={{
              border: '2.5px solid #1A1A1A',
              background: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <BrowserChrome url={product.url} accent={product.accent} />
            <div
              style={{
                aspectRatio: '16 / 10',
                background: '#F8F5EE',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={product.image}
                alt={`${product.name} screenshot`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Placeholder pattern visible until image loads */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'repeating-linear-gradient(45deg, transparent 0 18px, rgba(26,26,26,0.04) 18px 19px)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* Offset shadow */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              border: '2.5px solid #1A1A1A',
              transform: 'translate(8px, 8px)',
              background: product.shadow,
              zIndex: -1,
              pointerEvents: 'none',
            }}
          />

          {/* Color accent corner */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: -14,
              left: isReversed ? 'auto' : -14,
              right: isReversed ? -14 : 'auto',
              width: 44,
              height: 44,
              background: product.accent,
              border: '2.5px solid #1A1A1A',
              transform: 'rotate(8deg)',
            }}
          />
        </div>

        {/* Copy */}
        <div style={{ direction: 'ltr' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 14,
              padding: '5px 10px',
              background: product.accent,
              border: '2px solid #1A1A1A',
            }}
          >
            <span
              className="font-mono font-bold uppercase text-navy"
              style={{ fontSize: 10, letterSpacing: '0.14em' }}
            >
              {String(index + 1).padStart(2, '0')} / LIVE
            </span>
          </div>

          <h3
            className="font-mono font-bold uppercase text-navy"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              marginBottom: 8,
            }}
          >
            {product.name}
          </h3>

          <p
            className="font-mono uppercase"
            style={{
              fontSize: 12,
              letterSpacing: '0.08em',
              color: product.accent === '#FFDD00' ? '#1A1A1A' : product.accent,
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            {product.tagline}
          </p>

          <p
            className="font-body text-navy"
            style={{ fontSize: 15.5, lineHeight: 1.6, opacity: 0.78, marginBottom: 20 }}
          >
            {product.blurb}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
            {product.tags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>

          <a
            href={`https://${product.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold uppercase"
            style={{
              fontSize: 11,
              letterSpacing: '0.1em',
              color: '#1A1A1A',
              textDecoration: 'none',
              borderBottom: `2.5px solid ${product.accent}`,
              paddingBottom: 3,
            }}
          >
            ↗ VISIT {product.url}
          </a>
        </div>
      </div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      className="relative bg-cream border-t-2 border-navy"
      style={{ padding: '88px 0 104px' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p
            className="font-mono font-bold uppercase text-orange"
            style={{ fontSize: 11, letterSpacing: '0.14em', marginBottom: 12 }}
          >
            SHIPPED
          </p>
          <h2
            className="font-mono font-bold uppercase text-navy"
            style={{
              fontSize: 'clamp(2.3rem, 5.5vw, 4.25rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            SELECTED<br />
            <span style={{ color: '#F4763B' }}>WORK</span>
          </h2>
          <div style={{ marginTop: 14, width: 48, height: 4, background: '#1A1A1A' }} />
          <p
            className="font-body text-navy"
            style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.65, marginTop: 18, maxWidth: 540 }}
          >
            Three live products. Each one shipped end-to-end — design, build, deploy.
          </p>
        </div>

        {/* Product rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 88 }}>
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .product-row {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
