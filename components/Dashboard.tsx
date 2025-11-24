import React, { useState, useRef } from 'react';
import { RetroPanel } from './ui/RetroPanel';
import { GlitchText } from './ui/GlitchText';
import { retroAudio } from '../utils/sound';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 'ray-ai',
    role: 'FOUNDER',
    company: 'RAY AI',
    period: 'MAY 2025 - PRESENT',
    description: 'Building AI marking assistants to reduce operational overhead. I believe AI should handle the computation so humans can focus on connection.',
    tech: ['AI/ML', 'Next.js', 'Founder']
  },
  {
    id: 'msft',
    role: 'SOFTWARE ENGINEER',
    company: 'MICROSOFT',
    period: 'SEP 2025 - PRESENT',
    description: 'Empowering Bing shopping using AI Agents & .NET ecosystem. High-scale distributed systems implementation.',
    tech: ['C#', '.NET', 'AI Agents']
  },
  {
    id: 'hsbc',
    role: 'SOFTWARE ENGINEER',
    company: 'HSBC',
    period: 'JUL 2025 - SEP 2025',
    description: 'Architected microservices visualization dashboard. Implemented Liquibase for versioned DB changes.',
    tech: ['Java', 'Spring Boot', 'K8s', 'React']
  },
  {
    id: 'tsinghua',
    role: 'RESEARCH ASSISTANT',
    company: 'TSINGHUA UNI',
    period: 'NOV 2024 - MAR 2025',
    description: 'Autonomous agent implementation via World Model in Minecraft environments. Paper: 2502.05907',
    tech: ['Python', 'RL', 'LLMs']
  },
  {
    id: 'tax7',
    role: 'SOFTWARE ENGINEER',
    company: 'TAX7',
    period: 'APR 2025 - AUG 2025',
    description: 'Full-stack tax service solution. AI-driven autofill pipeline reducing manual entry by 80%.',
    tech: ['Node.js', 'AWS ECS', 'Docker']
  }
];

export const Dashboard: React.FC = () => {
  const [isMuted, setIsMuted] = useState(retroAudio.isMuted);

  // Refs for scrolling
  const bioRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const commsRef = useRef<HTMLDivElement>(null);

  const toggleAudio = () => {
      const newState = retroAudio.toggleMute();
      setIsMuted(newState);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
      retroAudio.playClick();
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col gap-8 h-full">
      
      {/* Header Tape */}
      <header className="flex flex-col md:flex-row justify-between items-end border-b-2 border-crt-amber pb-6 relative shrink-0">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-crt-amber via-transparent to-crt-amber opacity-30"></div>
         <div>
            <div className="text-xs font-retro text-crt-amber/60 mb-1 tracking-widest">// IDENTITY_CONFIRMED</div>
            <GlitchText text="ODY ZHOU" as="h1" className="text-5xl md:text-7xl font-display text-crt-amber tracking-tighter" />
         </div>
         <div className="mt-4 md:mt-0 flex flex-col items-end">
             <div className="bg-crt-cyan/10 border-l-4 border-crt-cyan px-3 py-1 text-crt-cyan font-retro text-xl">
                 FULL-STACK ENGINEER & FOUNDER
             </div>
             <div className="flex gap-4 mt-2 text-xs font-mono text-crt-amber/70 items-center">
                 <span>LOC: SYD/BEIJING</span>
                 <span>SYS: ONLINE</span>
                 <button 
                    onClick={toggleAudio}
                    className="border border-crt-amber/30 px-2 py-0.5 hover:bg-crt-amber hover:text-crt-bg transition-colors flex items-center gap-2"
                 >
                     <span>AUDIO:</span>
                     <span className={isMuted ? 'text-crt-rose' : 'text-crt-cyan animate-pulse'}>
                         {isMuted ? 'OFF' : 'ON'}
                     </span>
                 </button>
             </div>
         </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full">
        
        {/* Navigation / Control Column (Sticky) */}
        <div className="lg:col-span-3 lg:sticky lg:top-8 z-20">
             <RetroPanel className="min-h-[200px]" title="NAV_SYSTEM">
                <nav className="flex flex-col gap-2">
                    <button 
                        onClick={() => scrollToSection(bioRef)}
                        onMouseEnter={() => retroAudio.playHover()}
                        className="text-left px-4 py-3 font-display tracking-wide border border-crt-amber/30 text-crt-amber hover:bg-crt-amber hover:text-crt-bg hover:border-crt-amber transition-all"
                    >
                        {`> BIO_DATA`}
                    </button>
                    <button 
                        onClick={() => scrollToSection(logRef)}
                        onMouseEnter={() => retroAudio.playHover()}
                        className="text-left px-4 py-3 font-display tracking-wide border border-crt-cyan/30 text-crt-cyan hover:bg-crt-cyan hover:text-crt-bg hover:border-crt-cyan transition-all"
                    >
                        {`> LOG_DATA`}
                    </button>
                    <button 
                        onClick={() => scrollToSection(commsRef)}
                        onMouseEnter={() => retroAudio.playHover()}
                        className="text-left px-4 py-3 font-display tracking-wide border border-crt-rose/30 text-crt-rose hover:bg-crt-rose hover:text-crt-bg hover:border-crt-rose transition-all"
                    >
                        {`> COMMS_LINK`}
                    </button>
                </nav>
                <div className="mt-8 border-t border-crt-amber/20 pt-4">
                   <div className="text-crt-cyan text-xs font-mono mb-2">MEMORY: 640K OK</div>
                   <div className="w-full h-2 bg-crt-bg border border-crt-cyan/50 p-0.5">
                       <div className="h-full bg-crt-cyan w-[85%] animate-pulse"></div>
                   </div>
                </div>
             </RetroPanel>
        </div>

        {/* Content Area (Scrollable Stream) */}
        <div className="lg:col-span-9 flex flex-col gap-12 pb-20">
            
            {/* BIO SECTION */}
            <div ref={bioRef} className="scroll-mt-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-[2px] bg-crt-amber flex-grow"></div>
                    <h2 className="font-display text-2xl text-crt-amber shrink-0">BIO_DATA</h2>
                </div>
                <RetroPanel borderColor="amber" className="animate-flicker" title="USER_PROFILE">
                    <div className="font-mono text-lg leading-relaxed text-crt-amber/90">
                        <p className="mb-6">
                            <span className="text-crt-cyan font-bold">{'>'}</span> Initiating user profile dump...
                        </p>
                        <p className="mb-6">
                            I am the founder of <span className="text-crt-cyan font-bold bg-crt-cyan/10 px-1">RAY AI</span>. 
                            My mission is to build tools that return time to educators. 
                            I believe AI should handle the computation (marking, admin) so humans can focus on connection.
                        </p>
                        <p className="mb-6">
                            Also bullish on Web3 financial transformation. When not shipping code, I'm at the piano or training martial arts.
                        </p>
                        <div className="p-4 border border-crt-amber/30 bg-crt-amber/5 mt-8">
                            <h4 className="font-retro text-xl mb-2 text-crt-amber">ADDITIONAL_DATA</h4>
                            <ul className="space-y-2 text-sm">
                                <li>{'>'} RESEARCH: Sign Language Recognition & 3D Motion Gen [PyTorch]</li>
                                <li>{'>'} RESEARCH: Airline Sustainability Algorithms [R/Python]</li>
                                <li>{'>'} EDUCATION: Bach. Advanced Computing, USYD (Data Science & Math)</li>
                            </ul>
                        </div>
                    </div>
                </RetroPanel>
            </div>

            {/* LOG SECTION */}
            <div ref={logRef} className="scroll-mt-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-[2px] bg-crt-cyan flex-grow"></div>
                    <h2 className="font-display text-2xl text-crt-cyan shrink-0">LOG_DATA</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp) => (
                        <RetroPanel key={exp.id} borderColor="cyan" className="group" title={`ID: ${exp.id.toUpperCase()}`}>
                            <div className="flex justify-between items-start mb-4 border-b border-dashed border-crt-cyan/30 pb-2">
                                <div>
                                    <h3 className="font-display text-lg text-white group-hover:text-crt-cyan transition-colors">{exp.role}</h3>
                                    <div className="text-crt-cyan text-sm font-bold">{exp.company}</div>
                                </div>
                                <div className="font-retro text-gray-400 text-sm">{exp.period}</div>
                            </div>
                            <p className="font-mono text-sm text-gray-300 mb-4 leading-relaxed">
                                {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map(t => (
                                    <span key={t} className="text-[10px] font-mono bg-crt-cyan/10 border border-crt-cyan/40 text-crt-cyan px-2 py-0.5 uppercase">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </RetroPanel>
                    ))}
                </div>
            </div>

            {/* COMMS SECTION */}
            <div ref={commsRef} className="scroll-mt-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-[2px] bg-crt-rose flex-grow"></div>
                    <h2 className="font-display text-2xl text-crt-rose shrink-0">COMMS_LINK</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <RetroPanel borderColor="rose" title="ESTABLISH_CONNECTION" className="text-center py-16">
                         <h2 className="font-display text-3xl md:text-5xl text-crt-rose mb-6">SIGNAL_READY</h2>
                         <p className="font-mono text-gray-400 mb-8 max-w-md mx-auto">
                            Whether it's EdTech, AI, or the next big thing—I'm down to collaborate. Uplink available via secure channels below.
                         </p>
                         <div className="flex flex-wrap justify-center gap-6">
                             <a 
                                href="#" 
                                className="px-8 py-3 border-2 border-crt-rose text-crt-rose font-display hover:bg-crt-rose hover:text-white transition-all uppercase tracking-widest"
                                onMouseEnter={() => retroAudio.playHover()}
                                onClick={() => retroAudio.playClick()}
                             >
                                LinkedIn
                             </a>
                             <a 
                                href="#" 
                                className="px-8 py-3 border-2 border-crt-rose text-crt-rose font-display hover:bg-crt-rose hover:text-white transition-all uppercase tracking-widest"
                                onMouseEnter={() => retroAudio.playHover()}
                                onClick={() => retroAudio.playClick()}
                             >
                                GitHub
                             </a>
                             <a 
                                href="#" 
                                className="px-8 py-3 border-2 border-crt-rose text-crt-rose font-display hover:bg-crt-rose hover:text-white transition-all uppercase tracking-widest"
                                onMouseEnter={() => retroAudio.playHover()}
                                onClick={() => retroAudio.playClick()}
                             >
                                Email
                             </a>
                         </div>
                    </RetroPanel>
                </div>
            </div>

        </div>
      </div>
      
      <footer className="mt-auto pt-8 text-center text-crt-amber/40 font-retro text-sm pb-4">
          NOSTROMO TERMINAL UI v2.5 // © 2025 ODY ZHOU // END_OF_LINE
      </footer>

    </div>
  );
};