import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ExternalLink } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden rounded-3xl bg-black/90 ring-1 ring-white/10">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient and vignette overlays that don't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(168,85,247,0.18)_0%,rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur">
            <Rocket className="h-4 w-4 text-fuchsia-400" />
            <span className="text-xs uppercase tracking-widest text-fuchsia-200/80">Futuristic Portfolio</span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            USHNISH CHOWDHURY
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Full‑stack engineer crafting AI‑powered, real‑time experiences. I build responsive interfaces, scalable APIs, and
            data‑driven systems with React, FastAPI, WebSockets, and modern ML tooling.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-400"
            >
              View Projects
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/15"
            >
              Experience
            </a>
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Resume <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
