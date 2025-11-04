import React from 'react';
import Hero3D from './components/Hero3D';
import SkillsGrid from './components/SkillsGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGallery from './components/ProjectsGallery';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="text-sm font-semibold tracking-wide text-fuchsia-300">Ushnish • Portfolio</a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#experience" className="transition hover:text-white">Experience</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#education" className="transition hover:text-white">Education</a>
        </nav>
      </div>
    </header>
  );
}

function EducationSection() {
  return (
    <section id="education" className="mx-auto mt-20 max-w-7xl px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Education & Certifications</h2>
        <p className="mt-2 text-white/60">Formal background and recent credentials.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur">
          <h3 className="text-lg font-medium">Heritage Institute of Technology, Kolkata (2021 – 2025)</h3>
          <p className="mt-1 text-sm text-white/80">B.Tech in Chemical Engineering | 7.9 DGPA</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur">
          <ul className="space-y-2 text-sm">
            <li>• J.P. Morgan Chase Software Engineering Job Simulation — Forage (Sep 2025)</li>
            <li>• Oracle Cloud Infrastructure 2025 Certified Generative AI Professional — Oracle (Sep 2025)</li>
            <li>• Python Full – Complete Beginner to Advanced — GeeksforGeeks (Jul 2025)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto mt-20 max-w-7xl px-6 pb-10 text-white/60">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Ushnish Chowdhury. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#home" className="hover:text-white">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="mx-auto max-w-[1400px] space-y-10 px-4 py-6 sm:space-y-12 sm:px-6 sm:py-10">
        <Hero3D />
        <SkillsGrid />
        <ExperienceTimeline />
        <ProjectsGallery />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
