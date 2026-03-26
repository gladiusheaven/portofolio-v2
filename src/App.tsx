import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  BrainCircuit,
  Workflow,
  Layers,
  Code2,
  Cloud,
  ArrowUpRight,
  ChevronRight,
  Mail,
  Linkedin,
  Github,
  ShieldCheck,
  Briefcase,
  Moon,
  Sun
} from 'lucide-react';
import { EXPERIENCES, SKILLS, CERTIFICATIONS, SERVICES, PROJECTS, SKILL_PROFICIENCY } from './constants';

const iconMap = {
  Users: Briefcase,
  Layers,
  Workflow,
  BrainCircuit,
  Code2,
  Cloud
};

type Theme = 'dark' | 'light';

const stats = [
  { value: '3,000+', label: 'Employees Impacted' },
  { value: '99%', label: 'Process Time Reduced' },
  { value: '9+', label: 'Custom HR Apps Delivered' },
  { value: '90%+', label: 'AI Response Accuracy' }
];

const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

const App = () => {
  const [theme, setTheme] = React.useState<Theme>('dark');

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--bg-main)/.85] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <Sparkles size={16} className="text-[var(--accent)]" />
            Putranto Pratama
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]">
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full border border-[var(--line)] bg-[var(--surface)] p-2 text-[var(--text-main)] transition hover:border-[var(--accent)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-7xl px-6 pb-24">
        <section className="grid min-h-[85vh] items-center gap-10 py-16 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-1 text-xs font-medium text-[var(--text-soft)]"
            >
              <Sparkles size={14} className="text-[var(--accent)]" />
              Senior Solutions Architect • AI Builder • Full-stack Leader
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black leading-tight md:text-6xl"
            >
              Crafting enterprise systems
              <span className="block bg-gradient-to-r from-[var(--accent)] to-sky-400 bg-clip-text text-transparent">
                that feel intelligent, human, and scalable.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]"
            >
              I transform complex HR and enterprise ecosystems into streamlined digital experiences through AI orchestration,
              hyper-automation, and robust architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110">
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)]">
                Let’s Collaborate <ChevronRight size={16} />
              </a>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
                <p className="text-3xl font-black text-[var(--accent)]">{stat.value}</p>
                <p className="mt-2 text-sm text-[var(--text-soft)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-14">
          <h2 className="section-title">Services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Layers;
              return (
                <article key={service.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]">
                  <Icon className="mb-4 text-[var(--accent)]" size={24} />
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="py-14">
          <h2 className="section-title">Experience Highlights</h2>
          <div className="mt-6 space-y-4">
            {EXPERIENCES.map((experience) => (
              <article key={`${experience.company}-${experience.role}`} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{experience.role}</h3>
                  <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--text-soft)]">{experience.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">{experience.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">{experience.description}</p>
                <ul className="mt-4 grid gap-2">
                  {experience.accomplishments.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-soft)]">
                      <ShieldCheck size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-14">
          <h2 className="section-title">Core Capabilities</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
              {SKILL_PROFICIENCY.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-[var(--text-soft)]">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--line)]">
                    <div className="h-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-sky-400" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4">
              {SKILLS.map((skillGroup) => (
                <article key={skillGroup.category} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
                  <h3 className="font-semibold">{skillGroup.category}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="rounded-full border border-[var(--line)] bg-[var(--bg-main)] px-3 py-1 text-xs text-[var(--text-soft)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-14">
          <h2 className="section-title">Featured Projects</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {PROJECTS.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                ) : null}
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wide text-[var(--accent)]">{project.label}</p>
                  <h3 className="mt-2 font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-soft)]">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[var(--bg-main)] px-2.5 py-1 text-xs text-[var(--text-soft)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]" href={project.link} target="_blank" rel="noreferrer">
                      Explore <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="py-14">
          <h2 className="section-title">Certifications</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {CERTIFICATIONS.map((certification) => (
              <article key={`${certification.name}-${certification.credentialId}`} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">{certification.category}</p>
                <h3 className="mt-2 font-semibold">{certification.name}</h3>
                <p className="text-sm text-[var(--text-soft)]">{certification.issuer} • {certification.year}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="rounded-3xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--bg-main)] p-8 text-center">
            <h2 className="text-3xl font-black">Let’s build your next breakthrough.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[var(--text-soft)]">
              Open for strategic architecture consulting, AI product development, and enterprise automation initiatives.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:putranto.pratama@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">
                <Mail size={16} /> Email Me
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] px-4 py-2 text-sm font-semibold">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/gladiusheaven" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] px-4 py-2 text-sm font-semibold">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] py-6 text-center text-sm text-[var(--text-soft)]">
        © {new Date().getFullYear()} Putranto Pratama • Designed for enterprise impact.
      </footer>
    </div>
  );
};

export default App;
