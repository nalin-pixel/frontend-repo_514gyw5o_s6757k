import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Sparkles, Star, Baby } from 'lucide-react';

const floating = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* Spline Cover - full width/height, interactive */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlays must not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/10 to-slate-950/60" />
      </div>

      {/* Playful floating shapes */}
      <motion.div
        variants={floating}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute left-6 top-24 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
      />
      <motion.div
        variants={floating}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute right-10 top-10 h-32 w-32 rounded-3xl bg-fuchsia-400/20 blur-2xl"
        style={{ animationDelay: '1s' }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-24 md:grid-cols-2 md:gap-12 md:pt-32">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-sky-100 ring-1 ring-white/20 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-sky-300" />
            Futuristic, cozy, and oh-so-playful
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 font-[800] tracking-tight text-white"
            style={{ fontFamily: 'Mona Sans, Inter, system-ui' }}
          >
            <span className="block text-5xl leading-tight md:text-6xl">
              Baby Angel Daycare
            </span>
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              Play. Learn. Shine.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-sky-100/80"
          >
            A vibrant, safety-first space where curiosity blossoms. Small groups, certified
            caregivers, nutritious meals, and a day packed with smiles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:translate-y-[-2px] hover:bg-sky-600 active:translate-y-0"
            >
              <Baby className="h-5 w-5" />
              Book a Tour
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
            >
              <Star className="h-5 w-5 text-amber-300" />
              View Pricing
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] w-full md:h-[540px]" />
      </div>

      {/* Curved bottom divider */}
      <svg className="pointer-events-none -mb-px block w-full" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden>
        <path fill="#F0F9FF" d="M0,32L60,26.7C120,21,240,11,360,32C480,53,600,107,720,112C840,117,960,75,1080,74.7C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
    </section>
  );
}
