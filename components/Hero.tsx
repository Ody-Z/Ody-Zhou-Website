import React from 'react';

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Floating shapes */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-brand/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-[10%] w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-float-delayed" />
      <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-brand/40 animate-float" />
      <div className="absolute top-[30%] right-[25%] w-2 h-2 rounded-full bg-brand/30 animate-float-delayed" />
      <div className="absolute bottom-[25%] left-[35%] w-2 h-2 rounded-full bg-accent/30 animate-float-slow" />

      {/* Decorative ring */}
      <div className="absolute top-[20%] right-[10%] w-32 h-32 border border-brand/10 rounded-full animate-spin-slow hidden lg:block" />
      <div className="absolute bottom-[20%] left-[8%] w-20 h-20 border border-white/5 rounded-full animate-spin-slow hidden lg:block" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse-glow" />
          <span className="text-sm text-brand font-medium">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-slide-up">
          <span className="block text-text-primary">Hi, I'm</span>
          <span className="gradient-text">Ody Zhou</span>
        </h1>

        {/* Title */}
        <p
          className="text-xl md:text-2xl text-text-secondary font-light mb-8 animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          Software Engineer &amp; AI Researcher
        </p>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-base md:text-lg text-text-secondary/80 leading-relaxed mb-12 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Building intelligent systems at the intersection of AI and software engineering.
          From empowering Bing Shopping at{' '}
          <span className="text-text-primary font-medium">Microsoft</span> to designing
          autonomous AI agents at{' '}
          <span className="text-text-primary font-medium">Tsinghua University</span>,
          I bring ideas to life through code.
        </p>

        {/* CTAs */}
        <div
          className="flex items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.45s' }}
        >
          <a
            href="#experience"
            className="px-6 py-3 rounded-full bg-brand text-surface font-semibold text-sm hover:bg-brand-dark transition-all duration-200 hover:shadow-lg hover:shadow-brand/20"
          >
            View My Work
          </a>
          <a
            href="mailto:ody.zhou@outlook.com"
            className="px-6 py-3 rounded-full border border-white/10 text-text-primary font-medium text-sm hover:border-brand/30 hover:bg-white/5 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
