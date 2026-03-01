import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'ABOUT',      href: '#about'      },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'SKILLS',     href: '#skills'     },
];

interface NavbarProps {
  navigate: (path: string) => void;
  currentPath: string;
}

export function Navbar({ navigate, currentPath }: NavbarProps) {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isBlog = currentPath === '/blog';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /** Handle section links — if on /blog, navigate home first then scroll */
  const handleSectionClick = (e: React.MouseEvent, href: string) => {
    if (isBlog) {
      e.preventDefault();
      // Navigate home, then scroll after render
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Yellow announcement bar ── */}
      <div
        className="marquee-wrap border-b-2 border-navy"
        style={{ background: '#FFDD00', height: 40 }}
      >
        <div className="marquee-track h-full flex items-center">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="font-mono font-bold text-navy whitespace-nowrap"
              style={{ fontSize: 11, letterSpacing: '0.12em', padding: '0 52px' }}
            >
              BUILDING THE FUTURE OF AI&nbsp;&nbsp;·&nbsp;&nbsp;RAY AI IS LIVE
              →&nbsp;&nbsp;·&nbsp;&nbsp;OPEN TO NEW OPPORTUNITIES&nbsp;&nbsp;·&nbsp;&nbsp;SOFTWARE
              AI PRODUCT BUILDER & RESEARCHER&nbsp;&nbsp;·
            </span>
          ))}
        </div>
      </div>

      {/* ── Nav bar ── */}
      <nav
        className="sticky top-0 z-50 border-b-2 border-navy transition-all duration-200"
        style={{
          background: scrolled ? 'rgba(237,232,220,0.96)' : '#EDE8DC',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 flex items-center justify-between"
          style={{ height: 64 }}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="font-display font-extrabold text-orange hover:text-navy transition-colors duration-150"
            style={{ fontSize: 26, letterSpacing: '-0.02em' }}
          >
            OZ
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={isBlog ? `/${href}` : href}
                onClick={(e) => handleSectionClick(e, href)}
                className="nav-link"
              >
                {label}
              </a>
            ))}
            <a
              href="/blog"
              onClick={(e) => {
                e.preventDefault();
                navigate('/blog');
                setMobileOpen(false);
              }}
              className="nav-link"
              style={isBlog ? { color: '#F4763B' } : undefined}
            >
              BLOG
            </a>
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-5">
            <a href="mailto:zhouodywork@gmail.com" className="nav-link">
              CONTACT
            </a>
            <a
              href="https://github.com/Ody-Z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              GITHUB →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 border-2 border-navy"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-5 bg-navy"
                style={{
                  height: 2,
                  marginTop: i > 0 ? 4 : 0,
                  transition: 'all 0.2s',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                  transform:
                    mobileOpen && i === 0
                      ? 'rotate(45deg) translate(2px, 6px)'
                      : mobileOpen && i === 2
                      ? 'rotate(-45deg) translate(2px, -6px)'
                      : 'none',
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t-2 border-navy bg-cream">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={isBlog ? `/${href}` : href}
                  onClick={(e) => handleSectionClick(e, href)}
                  className="nav-link"
                  style={{ fontSize: 12 }}
                >
                  {label}
                </a>
              ))}
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/blog');
                  setMobileOpen(false);
                }}
                className="nav-link"
                style={{ fontSize: 12, ...(isBlog ? { color: '#F4763B' } : {}) }}
              >
                BLOG
              </a>
              <a
                href="mailto:zhouodywork@gmail.com"
                onClick={() => setMobileOpen(false)}
                className="nav-link"
                style={{ fontSize: 12 }}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
