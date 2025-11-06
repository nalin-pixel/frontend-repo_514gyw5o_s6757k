import React from 'react';
import { motion } from 'framer-motion';

export default function Asymmetry() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 py-28">
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_70%_30%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_10%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(60%_60%_at_80%_40%,rgba(99,102,241,0.25),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative order-2 md:order-1"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              A cosmic playground for curious minds
            </h2>
            <p className="mt-4 max-w-xl text-sky-200/80">
              We blend science-backed play with magical visuals so little ones feel both safe and inspired. Expect music jams, sensory stations, and calm, cozy nap spaces.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Licensed & CPR-certified', 'Parent app updates', 'Organic meals', 'Small group ratios'].map((chip) => (
                <span key={chip} className="rounded-full border border-sky-300/30 bg-white/5 px-4 py-2 text-sm text-sky-200/90 backdrop-blur">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-400/10 via-fuchsia-400/10 to-indigo-400/10 p-1 shadow-2xl">
              <div className="absolute inset-0 animate-pulse rounded-[1.8rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.3),rgba(236,72,153,0.18),rgba(79,70,229,0.25),rgba(56,189,248,0.3))] blur-3xl" />
              <div className="relative h-full w-full rounded-[1.8rem] bg-slate-950/70 p-6 backdrop-blur-xl">
                <div className="grid h-full grid-cols-3 grid-rows-3 gap-3">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 ring-1 ring-white/10"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
