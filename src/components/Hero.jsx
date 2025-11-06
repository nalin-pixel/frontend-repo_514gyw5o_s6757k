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
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50 to-sky-100">
      {/* Playful floating shapes */}
      <motion.div
        variants={floating}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute -left-10 top-20 h-40 w-40 rounded-full bg-sky-200/50 blur-2xl"
      />
      <motion.div
        variants={floating}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute right-10 top-10 h-32 w-32 rounded-3xl bg-blue-200/40 blur-xl"
        style={{ animationDelay: '1s' }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-20 md:grid-cols-2 md:gap-12 md:pt-24">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-sky-700 shadow-sm ring-1 ring-sky-200 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-sky-500" />
            Warm, modern care for tiny legends
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 font-[800] tracking-tight text-sky-900"
            style={{ fontFamily: 'Mona Sans, Inter, system-ui' }}
          >
            <span className="block text-5xl leading-tight md:text-6xl">
              Baby Angel Daycare
            </span>
            <span className="mt-2 block bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Play. Learn. Shine.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-sky-800/80"
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
              className="group inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-300/40 transition hover:translate-y-[-2px] hover:bg-sky-700 active:translate-y-0"
            >
              <Baby className="h-5 w-5" />
              Book a Tour
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-6 py-3 font-semibold text-sky-700 shadow ring-1 ring-sky-200 backdrop-blur transition hover:bg-white"
            >
              <Star className="h-5 w-5 text-amber-500" />
              View Pricing
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] w-full md:h-[540px]">
          {/* 3D Spline Scene */}
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Gradient overlays must not block interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-50/40 via-transparent to-blue-100/30" />
          </div>
        </div>
      </div>

      {/* Curved bottom divider */}
      <svg className="pointer-events-none -mb-px block w-full" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden>
        <path fill="#EFF6FF" d="M0,32L60,26.7C120,21,240,11,360,32C480,53,600,107,720,112C840,117,960,75,1080,74.7C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
    </section>
  );
}
