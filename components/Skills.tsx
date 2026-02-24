import React from 'react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: ['Python', 'C#', 'Java', 'JavaScript', 'TypeScript', 'R'],
  },
  {
    title: 'AI & Machine Learning',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l-4 8h12l-4-8c1-1 2-2 2-4a4 4 0 0 0-4-4z" />
        <path d="M12 18v4" />
      </svg>
    ),
    skills: ['Large Language Models', 'Reinforcement Learning', 'AI Agents', 'SVM', 'Clustering', 'Regression', 'Permutation Testing'],
  },
  {
    title: 'Backend & Infrastructure',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <circle cx="6" cy="6" r="1" />
        <circle cx="6" cy="18" r="1" />
      </svg>
    ),
    skills: ['.NET Framework', 'Spring Boot', 'Kubernetes', 'Liquibase', 'Microservices', 'Linux Server'],
  },
  {
    title: 'Frontend & Tools',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    skills: ['React', 'Statistics', 'Data Analysis'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="text-sm font-medium text-brand tracking-widest uppercase mb-3">
            Toolkit
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Skills & Technologies
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-brand to-accent" />
        </div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`reveal reveal-delay-${(index % 4) + 1}`}
            >
              <div className="card-glow group h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:bg-brand/15 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm bg-white/[0.04] border border-white/[0.06] text-text-secondary hover:border-brand/20 hover:text-text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
