import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Code2, 
  Database, 
  Globe, 
  Mail, 
  Linkedin, 
  Github, 
  Instagram,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  BrainCircuit,
  Workflow,
  ShieldCheck,
  Award,
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Users,
  Cloud,
  Sun,
  Moon,
  Layout
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
import { EXPERIENCES, SKILLS, CERTIFICATIONS, SKILL_PROFICIENCY, SERVICES, PROJECTS } from './constants';

const Navbar = ({ theme, toggleTheme }: { theme: 'dark' | 'light', toggleTheme: () => void }) => {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  const menuItems = [
    {
      label: 'Services',
      id: 'services',
      subItems: SERVICES.map(s => ({ title: s.title, description: s.description, icon: s.icon, id: s.title.toLowerCase().replace(/ /g, '-') }))
    },
    {
      label: 'About Me',
      id: 'about-me',
      subItems: [
        { title: 'Experience', description: 'My professional journey and roles.', icon: 'Workflow', id: 'experience' },
        { title: 'Skills', description: 'Technical arsenal and proficiency.', icon: 'Cpu', id: 'skills' },
        { title: 'Projects', description: 'Featured work and contributions.', icon: 'Layers', id: 'projects' },
        { title: 'Certifications', description: 'Professional credentials and awards.', icon: 'Award', id: 'certifications' }
      ]
    },
    {
      label: 'Portfolio',
      id: 'portfolio',
      href: '#portfolio'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users size={18} />;
      case 'Layers': return <Layers size={18} />;
      case 'Workflow': return <Workflow size={18} />;
      case 'BrainCircuit': return <BrainCircuit size={18} />;
      case 'Code2': return <Code2 size={18} />;
      case 'Cloud': return <Cloud size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      case 'Award': return <Award size={18} />;
      default: return <Layers size={18} />;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black/80 border-white/10' : 'bg-[#fdfbf7]/80 border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <span className="text-black font-bold text-lg">P</span>
          </div>
          <span className={`font-mono text-sm tracking-tighter uppercase font-bold transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Putranto.Pratama</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group"
              onMouseEnter={() => item.subItems && setActiveMenu(item.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a 
                href={item.href || `#${item.id}`}
                className={`text-[10px] uppercase tracking-widest flex items-center gap-1 transition-colors ${
                  theme === 'dark' ? 'text-white/60 hover:text-blue-400' : 'text-black/60 hover:text-blue-600'
                }`}
              >
                {item.label}
                {item.subItems && <ChevronDown size={12} className={`transition-transform duration-300 ${activeMenu === item.id ? 'rotate-180' : ''}`} />}
              </a>

              <AnimatePresence>
                {activeMenu === item.id && item.subItems && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full -left-4 w-[400px] mt-2 p-4 rounded-2xl border shadow-2xl ${
                      theme === 'dark' ? 'bg-[#0f172a] border-white/10' : 'bg-[#fdfbf7] border-black/10 shadow-xl'
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {item.subItems.map((sub) => (
                        <a 
                          key={sub.id} 
                          href={`#${sub.id}`}
                          className={`flex items-start gap-4 p-3 rounded-xl transition-all ${
                            theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            theme === 'dark' ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-500/10 text-blue-600'
                          }`}>
                            {getIcon(sub.icon)}
                          </div>
                          <div>
                            <h4 className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                              theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>{sub.title}</h4>
                            <p className={`text-[10px] leading-relaxed ${
                              theme === 'dark' ? 'text-white/40' : 'text-black/40'
                            }`}>{sub.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-white/5 text-white/60 hover:text-white' : 'bg-black/5 text-black/60 hover:text-black'
            }`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a 
            href="https://wa.me/6281513357006"
            target="_blank"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
              theme === 'dark' ? 'bg-white text-black hover:bg-blue-500' : 'bg-black text-white hover:bg-blue-600'
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ theme }: { theme: 'dark' | 'light' }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          className={`absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] ${
            theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/5'
          }`}
        />
        <motion.div 
          style={{ y: y2 }}
          className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[120px] ${
            theme === 'dark' ? 'bg-blue-700/10' : 'bg-blue-700/5'
          }`}
        />
        <motion.div 
          style={{ y: y3 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] ${
            theme === 'dark' ? 'bg-blue-900/5' : 'bg-blue-900/2'
          }`}
        />
        {theme === 'dark' && (
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" 
          />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] uppercase tracking-[0.2em] font-bold mb-6 ${
            theme === 'dark' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-500/5 border-blue-500/10 text-blue-600'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
              }`}></span>
            </span>
            Available for Strategic Architecture
          </div>

          <h1 className={`text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            SENIOR SOLUTIONS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              ARCHITECT & AI
            </span>
          </h1>

          <p className={`max-w-xl text-lg leading-relaxed mb-10 font-light ${
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          }`}>
            Bridging enterprise complexity with intelligent automation. 
            Specializing in <span className={theme === 'dark' ? 'text-white' : 'text-black'}>AI Orchestration</span>, 
            <span className={theme === 'dark' ? 'text-white' : 'text-black'}>Applied Agentic AI</span>, and 
            <span className={theme === 'dark' ? 'text-white' : 'text-black'}>Hyper-automation</span> for large-scale digital transformation.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/putrantopratama/" target="_blank" className={`transition-colors ${
                theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'
              }`}>
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/gladiusheaven" target="_blank" className={`transition-colors ${
                theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'
              }`}>
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/putranto.pratama/" target="_blank" className={`transition-colors ${
                theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'
              }`}>
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/6281513357006" target="_blank" className={`transition-colors ${
                theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'
              }`}>
                <MessageSquare size={20} />
              </a>
            </div>
            <div className={`h-px w-12 self-center mx-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />
            <div className="flex items-center gap-4">
               <span className={`text-[10px] uppercase tracking-widest font-bold ${
                 theme === 'dark' ? 'text-white/40' : 'text-black/40'
               }`}>Based in Depok, Indonesia</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border shadow-2xl ${
            theme === 'dark' ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <img 
            src="https://picsum.photos/seed/architecture/1200/1200" 
            alt="Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`} />
          <div className="absolute bottom-8 left-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold mb-3">System Architecture</div>
            <div className="text-2xl font-bold text-white tracking-tight">Designing the Future <br /> of Intelligent Enterprises</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-6 flex items-center gap-4">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        <span className={`text-[10px] uppercase tracking-[0.3em] font-bold vertical-text rotate-180 ${
          theme === 'dark' ? 'text-white/20' : 'text-black/20'
        }`}>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  exp: typeof EXPERIENCES[0];
  index: number;
  theme: 'dark' | 'light';
  key?: React.Key;
}

const SectionDivider = ({ theme }: { theme: 'dark' | 'light' }) => (
  <div className={`w-full h-px bg-gradient-to-r from-transparent to-transparent ${
    theme === 'dark' ? 'via-blue-500/20' : 'via-blue-500/10'
  }`} />
);

const ExperienceCard = ({ exp, index, theme }: ExperienceCardProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`group relative grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 py-12 border-b px-6 rounded-xl transition-all ${
      theme === 'dark' 
        ? 'border-white/5 hover:bg-white/5' 
        : 'border-black/5 hover:bg-black/5'
    }`}
  >
    <div className="space-y-2">
      <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest">{exp.period}</span>
      <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{exp.company}</h3>
    </div>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className={`text-lg font-medium ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>{exp.role}</h4>
        <ChevronRight className={`transition-all ${
          theme === 'dark' ? 'text-white/20 group-hover:text-blue-500' : 'text-black/20 group-hover:text-blue-600'
        } group-hover:translate-x-1`} size={20} />
      </div>
      <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>{exp.description}</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {exp.accomplishments.map((item, i) => (
          <li key={i} className={`flex gap-3 text-xs leading-relaxed ${
            theme === 'dark' ? 'text-white/40' : 'text-black/40'
          }`}>
            <span className="text-blue-500 mt-1">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ServicesSection = ({ theme }: { theme: 'dark' | 'light' }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users size={24} />;
      case 'Layers': return <Layers size={24} />;
      case 'Workflow': return <Workflow size={24} />;
      case 'BrainCircuit': return <BrainCircuit size={24} />;
      case 'Code2': return <Code2 size={24} />;
      case 'Cloud': return <Cloud size={24} />;
      default: return <Layers size={24} />;
    }
  };

  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">What I Do</h2>
          <h3 className={`text-4xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Strategic Services</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl border transition-all hover:scale-[1.02] ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10 hover:border-blue-500/30' 
                  : 'bg-black/5 border-black/10 hover:border-blue-500/20 shadow-sm'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                theme === 'dark' ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-500/10 text-blue-600'
              }`}>
                {getIcon(service.icon)}
              </div>
              <h4 className={`text-lg font-bold uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{service.title}</h4>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioGallery = ({ theme }: { theme: 'dark' | 'light' }) => (
  <section id="portfolio" className="py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">Portfolio</h2>
        <h3 className={`text-4xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Featured Projects</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group rounded-3xl overflow-hidden border transition-all ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10 shadow-sm'
            }`}
          >
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <a 
                  href={project.link} 
                  target="_blank" 
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors"
                >
                  View on GitHub <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h4 className={`text-lg font-bold uppercase tracking-widest mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{project.title}</h4>
              <p className={`text-xs leading-relaxed mb-4 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className={`px-2 py-1 text-[9px] font-mono uppercase tracking-wider rounded ${
                    theme === 'dark' ? 'bg-white/5 text-white/40' : 'bg-black/5 text-black/40'
                  }`}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SkillSection = ({ theme }: { theme: 'dark' | 'light' }) => {
  const [isInView, setIsInView] = React.useState(false);

  const Counter = ({ target, duration = 1.5 }: { target: number, duration?: number }) => {
    const [count, setCount] = React.useState(0);
    
    React.useEffect(() => {
      if (!isInView) return;
      let start = 0;
      const end = target;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, [isInView, target, duration]);

    return <span>{count}%</span>;
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">Expertise</h2>
          <h3 className={`text-4xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Technical Arsenal</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {SKILLS.map((skill, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl border transition-all cursor-default group ${
                  theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/10 hover:bg-black/10 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    theme === 'dark' ? 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-black' : 'bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    {i === 0 && <Layers size={14} />}
                    {i === 1 && <BrainCircuit size={14} />}
                    {i === 2 && <Code2 size={14} />}
                    {i === 3 && <Globe size={14} />}
                  </div>
                  <h4 className={`text-[10px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-1">
                  {skill.items.map((item, j) => (
                    <span key={j} className={`text-[8px] px-1.5 py-0.5 rounded border transition-colors ${
                      theme === 'dark' ? 'text-white/40 bg-white/5 border-white/5 group-hover:border-blue-500/20' : 'text-black/40 bg-black/5 border-black/5 group-hover:border-blue-500/20'
                    }`}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true }}
            className={`lg:col-span-2 h-full min-h-[400px] border rounded-2xl p-6 flex flex-col ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500">Proficiency Index</h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className={`text-[10px] uppercase font-bold ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Primary</span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              {SKILL_PROFICIENCY.map((skill, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>{skill.name}</span>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      className="text-[10px] font-mono text-blue-500 font-bold"
                    >
                      <Counter target={skill.level} />
                    </motion.div>
                  </div>
                  <div className={`h-1.5 w-full rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AIFocus = ({ theme }: { theme: 'dark' | 'light' }) => (
  <section id="ai-focus" className="py-32 relative overflow-hidden">
    <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent`} />
    
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">Applied AI</h2>
          <h3 className={`text-5xl font-bold tracking-tight mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Architecting the <br />
            <span className="text-blue-500 italic">Agentic Future</span>
          </h3>
          <p className={`leading-relaxed mb-10 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            Moving beyond simple chatbots. I build custom AI orchestrations that integrate with enterprise workflows, 
            leveraging RAG (Retrieval-Augmented Generation) and autonomous agents to drive real business value.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Custom LLM Orchestration", desc: "Integration with OpenAI, LLaMa, and Azure AI Foundry.", icon: <Cpu size={18} /> },
              { title: "RAG Architectures", desc: "Building knowledge-aware systems with high response accuracy.", icon: <Database size={18} /> },
              { title: "Hyper-automation", desc: "Unifying fragmented workflows into seamless digital ecosystems.", icon: <Workflow size={18} /> }
            ].map((item, i) => (
              <div key={i} className={`flex gap-4 p-4 rounded-xl border transition-all ${
                theme === 'dark' ? 'bg-white/5 border-white/5 hover:border-blue-500/30' : 'bg-black/5 border-black/5 hover:border-blue-500/20'
              }`}>
                <div className="text-blue-500 mt-1">{item.icon}</div>
                <div>
                  <h4 className={`text-sm font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{item.title}</h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className={`aspect-square rounded-3xl border flex items-center justify-center p-12 overflow-hidden ${
            theme === 'dark' ? 'bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-white/10' : 'bg-gradient-to-br from-blue-500/10 to-blue-700/10 border-black/10'
          }`}>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
            <div className={`relative z-10 w-full h-full border border-blue-500/30 rounded-2xl flex flex-col items-center justify-center gap-6 backdrop-blur-xl ${
              theme === 'dark' ? 'bg-black/40' : 'bg-white/40'
            }`}>
              <BrainCircuit size={80} className="text-blue-500 animate-pulse" />
              <div className="text-center">
                <div className="text-xs font-mono text-blue-500 mb-2">ASTRID-GPT ENGINE</div>
                <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>89% ACCURACY</div>
                <div className={`text-[10px] uppercase tracking-widest mt-2 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Internal Testing Benchmark</div>
              </div>
            </div>
            <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-blue-500/50" />
            <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-blue-500/50" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Certifications = ({ theme }: { theme: 'dark' | 'light' }) => {
  const [showAll, setShowAll] = React.useState(false);
  const visibleCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 6);

  return (
    <section id="certifications" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">Validation</h2>
            <h3 className={`text-4xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Certifications & Awards</h3>
            <p className={`text-xs mt-4 uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
              {showAll ? 'All Credentials' : 'Latest 6 Credentials'}
            </p>
          </div>
          <div className={`text-sm max-w-xs ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
            Continuous learning and validation of expertise in emerging technologies.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {visibleCerts.map((cert, i) => (
              <motion.div 
                key={cert.name} 
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`flex items-center gap-6 p-6 border transition-all group ${
                  theme === 'dark' ? 'bg-zinc-900/50 border-white/5 hover:border-blue-500/30' : 'bg-white border-black/5 hover:border-blue-500/20 shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  theme === 'dark' ? 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-black' : 'bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                }`}>
                  <Award size={24} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{cert.name}</h4>
                  <div className={`flex items-center gap-3 text-[10px] uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                    <span>{cert.issuer}</span>
                    <div className={`w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`} />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {CERTIFICATIONS.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className={`px-8 py-4 text-[10px] font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 ${
                theme === 'dark' ? 'border-white/10 text-white hover:bg-white/5' : 'border-black/10 text-black hover:bg-black/5'
              }`}
            >
              {showAll ? 'Show Less' : 'See More Certifications'} 
              <ChevronDown size={14} className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const Footer = ({ theme }: { theme: 'dark' | 'light' }) => (
  <footer className={`py-20 border-t ${theme === 'dark' ? 'border-white/5 bg-black' : 'border-black/5 bg-[#fdfbf7]'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">P</span>
            </div>
            <span className={`font-mono text-xs tracking-tighter uppercase font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Putranto.Pratama</span>
          </div>
          <p className={`text-[10px] uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
            © 2026 Putranto Pratama. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="https://www.linkedin.com/in/putrantopratama/" target="_blank" className={`transition-colors ${theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}><Linkedin size={18} /></a>
          <a href="https://github.com/gladiusheaven" target="_blank" className={`transition-colors ${theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}><Github size={18} /></a>
          <a href="https://www.instagram.com/putranto.pratama/" target="_blank" className={`transition-colors ${theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}><Instagram size={18} /></a>
          <a href="https://wa.me/6281513357006" target="_blank" className={`transition-colors ${theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}><MessageSquare size={18} /></a>
        </div>

        <div className={`flex items-center gap-2 text-[10px] uppercase tracking-widest ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>
          <Terminal size={12} />
          <span>Built with React & Tailwind</span>
        </div>
      </div>
    </div>
  </footer>
);

const Chatbot = ({ theme }: { theme: 'dark' | 'light' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Hi! I'm Putranto's AI assistant. Ask me anything about his experience, skills, or projects!" }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: `You are an AI assistant for Putranto Pratama's personal portfolio. 
          Putranto is a Senior Solutions Architect & AI Engineer.
          Use the following context to answer questions:
          EXPERIENCES: ${JSON.stringify(EXPERIENCES)}
          SKILLS: ${JSON.stringify(SKILLS)}
          CERTIFICATIONS: ${JSON.stringify(CERTIFICATIONS)}
          
          Keep answers concise, professional, and helpful. If you don't know something, suggest contacting Putranto via WhatsApp at 081513357006.`,
        },
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`absolute bottom-20 right-0 w-[350px] h-[500px] rounded-2xl flex flex-col shadow-2xl overflow-hidden border ${
              theme === 'dark' ? 'bg-[#0f172a]/90 border-white/10 backdrop-blur-xl' : 'bg-white/90 border-black/10 backdrop-blur-xl'
            }`}
          >
            <div className={`p-4 border-b flex items-center justify-between ${
              theme === 'dark' ? 'border-white/10 bg-blue-500/10' : 'border-black/10 bg-blue-500/5'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <Bot size={18} className="text-black" />
                </div>
                <div>
                  <div className={`text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>AI Assistant</div>
                  <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Online</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className={`transition-colors ${theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}>
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500/20">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' 
                      : theme === 'dark' 
                        ? 'bg-white/5 text-white/80 border border-white/10 rounded-tl-none'
                        : 'bg-black/5 text-black/80 border border-black/10 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`p-3 rounded-2xl rounded-tl-none border ${
                    theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                  }`}>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={`p-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Putranto..."
                  className={`w-full border rounded-xl py-3 pl-4 pr-12 text-xs transition-colors focus:outline-none focus:border-blue-500/50 ${
                    theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'
                  }`}
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-black hover:bg-blue-400 transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -10, 0],
          boxShadow: [
            "0 10px 15px -3px rgba(59, 130, 246, 0.2)",
            "0 20px 25px -5px rgba(59, 130, 246, 0.4)",
            "0 10px 15px -3px rgba(59, 130, 246, 0.2)"
          ]
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-blue-500 shadow-xl flex items-center justify-center text-black relative group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-blue-500 selection:text-black ${
      theme === 'dark' ? 'bg-[#020617] text-white' : 'bg-[#fdfbf7] text-black'
    }`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <Hero theme={theme} />
      
      <SectionDivider theme={theme} />
      <ServicesSection theme={theme} />
      
      <SectionDivider theme={theme} />
      <section id="about-me">
        <section id="experience" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">The Journey</h2>
                <h3 className={`text-4xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Professional Experience</h3>
                <p className={`text-xs mt-4 uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Latest 3 Roles</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://linkedin.com/in/putrantopratama" 
                  target="_blank"
                  className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 ${
                    theme === 'dark' ? 'border-white/10 text-white hover:bg-white/5' : 'border-black/10 text-black hover:bg-black/5'
                  }`}
                >
                  See More on LinkedIn <ExternalLink size={12} />
                </a>
                <a 
                  href="#" 
                  className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all flex items-center gap-2 ${
                    theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  View Full CV <Layers size={12} />
                </a>
              </div>
            </div>
            <div className="space-y-2">
              {EXPERIENCES.slice(0, 3).map((exp, i) => (
                <ExperienceCard key={i} exp={exp} index={i} theme={theme} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider theme={theme} />
        <SkillSection theme={theme} />

        <SectionDivider theme={theme} />
        <AIFocus theme={theme} />

        <SectionDivider theme={theme} />
        <Certifications theme={theme} />
      </section>

      <SectionDivider theme={theme} />
      <PortfolioGallery theme={theme} />
      
      <SectionDivider theme={theme} />
      
      <section className={`py-32 text-center ${
        theme === 'dark' ? 'bg-blue-500 text-black' : 'bg-blue-600 text-white'
      }`}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-8">Ready to architect the next intelligent system?</h2>
          <p className="text-lg font-medium mb-10 opacity-80">
            Let's discuss how we can leverage AI and automation to transform your enterprise workflows.
          </p>
          <a 
            href="https://wa.me/6281513357006"
            target="_blank"
            className={`inline-flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-widest transition-all group ${
              theme === 'dark' ? 'bg-black text-white hover:bg-zinc-900' : 'bg-white text-black hover:bg-zinc-100'
            }`}
          >
            Get in Touch (WhatsApp)
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </section>

      <Footer theme={theme} />
      <Chatbot theme={theme} />
    </div>
  );
}
