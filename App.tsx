import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { BlogPage } from './components/blog/BlogPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = useCallback((path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  }, []);

  // Listen for browser back/forward
  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Scroll-reveal observer — re-run when path changes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPath]);

  const isBlog = currentPath === '/blog';

  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden">
      <Navbar navigate={navigate} currentPath={currentPath} />
      <main>
        {isBlog ? (
          <BlogPage />
        ) : (
          <>
            <Hero />
            <Experience />
            <Skills />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
