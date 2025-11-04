import React from 'react';
import { motion } from 'framer-motion';
import { Code, Boxes, Wrench, Brain } from 'lucide-react';

const skills = [
  {
    title: 'Languages',
    icon: Code,
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    hue: 'from-fuchsia-500 to-purple-500',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Boxes,
    items: ['React', 'FastAPI', 'Flask', 'Next.js', 'Pandas', 'WebSockets'],
    hue: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    items: ['Git', 'SQLite', 'PostgreSQL', 'Selenium'],
    hue: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'AI / ML',
    icon: Brain,
    items: ['Groq API', 'NLP', 'Machine Learning', 'Model Evaluation', 'LLM Fine-tuning'],
    hue: 'from-pink-500 to-rose-500',
  },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="mx-auto mt-20 max-w-7xl px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Skills</h2>
          <p className="mt-2 text-white/60">A stack focused on building performant, intelligent systems.</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ title, icon: Icon, items, hue }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur"
          >
            <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${hue} opacity-30 blur-2xl`} />
            <div className="relative flex items-center gap-3">
              <div className={`rounded-lg bg-gradient-to-br ${hue} p-2.5 text-white shadow-lg shadow-black/20`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
            </div>
            <ul className="relative mt-4 space-y-2 text-sm text-white/80">
              {items.map((item) => (
                <li key={item} className="rounded-md border border-white/5 bg-white/5 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
