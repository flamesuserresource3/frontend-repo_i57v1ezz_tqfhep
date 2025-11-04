import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Junior Full Stack Engineer (Internship)',
    company: 'NeuralArt Solutions – Remote (Canada)',
    period: "Aug '25 – Present",
    bullets: [
      'Developing an AI-powered fraud detection system integrating Python ML backend with React dashboards',
      'Building RESTful APIs with FastAPI to process real-time transaction data and generate risk alerts',
      'Implementing responsive React components for underwriter workflow and pattern visualization',
    ],
  },
  {
    role: 'Freelance Data Annotation Specialist',
    company: 'DataAnnotation.tech – Remote',
    period: "Sep '25 – Present",
    bullets: [
      'Evaluated AI model responses across 6 projects for 4 clients to improve LLM accuracy',
      'Provided structured feedback on conversational AI outputs to enhance training datasets',
      'Reviewed and annotated text data for quality assurance in generative AI fine-tuning',
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto mt-20 max-w-7xl px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Experience</h2>
        <p className="mt-2 text-white/60">Hands-on roles blending full-stack engineering with applied AI.</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-fuchsia-500/60 via-white/10 to-transparent sm:left-1/2" />
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${idx % 2 === 0 ? '' : 'sm:[&>*:first-child]:order-last'}`}
            >
              <div className="relative">
                <div className="absolute left-3 top-2 h-3 w-3 -translate-x-1/2 rounded-full border border-fuchsia-400 bg-fuchsia-500 shadow shadow-fuchsia-500/30 sm:left-1/2" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur">
                  <h3 className="text-lg font-medium">{exp.role}</h3>
                  <p className="text-sm text-white/70">{exp.company}</p>
                  <p className="mt-1 text-xs text-white/60">{exp.period}</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur">
                <ul className="space-y-2 text-sm">
                  {exp.bullets.map((b) => (
                    <li key={b} className="leading-relaxed text-white/80">• {b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
