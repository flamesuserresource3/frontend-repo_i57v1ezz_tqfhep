import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'kiln.AI - Cement Plant Optimisation',
    link: 'https://kiln-ai-1082217715979.asia-south1.run.app/',
    summary:
      'Full-stack platform processing 7,000+ data points across 20 variables with real-time alerts via WebSockets and modular FastAPI services.',
    tags: ['FastAPI', 'WebSockets', 'React', 'Auth', 'Optimiser'],
    hue: 'from-fuchsia-500/70 to-purple-500/70',
  },
  {
    title: 'InvSys - Inventory Management System',
    link: null,
    summary:
      'SPA with 15 RESTful endpoints, normalized SQLite schema, secure auth with hashed passwords, and real-time analytics/dashboard.',
    tags: ['Flask', 'SQLite', 'Analytics', 'Auth'],
    hue: 'from-indigo-500/70 to-blue-500/70',
  },
  {
    title: 'JARVIS - AI Desktop Voice Assistant',
    link: null,
    summary:
      'Voice-controlled assistant executing 15+ automations with custom NLP router across 7 services, sub-3s voice-to-response latency.',
    tags: ['Python', 'NLP', 'TTS/STT', 'Automation'],
    hue: 'from-emerald-500/70 to-teal-500/70',
  },
  {
    title: 'Airbnb Repurposed Website',
    link: null,
    summary:
      'Migrated 10-page static HTML site to Next.js 14 with App Router + SSR, cutting load time 57% and creating a reusable component library.',
    tags: ['Next.js 14', 'SSR', 'Performance'],
    hue: 'from-pink-500/70 to-rose-500/70',
  },
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="mx-auto mt-20 max-w-7xl px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
          <p className="mt-2 text-white/60">Real systems with performance, UX, and reliability in mind.</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link ?? '#'}
            target={p.link ? '_blank' : undefined}
            rel={p.link ? 'noreferrer' : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20"
          >
            <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.hue} opacity-40 blur-2xl`} />
            <div className="relative">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                {p.link && (
                  <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70 transition group-hover:text-white">
                    Live <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-white/80">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
