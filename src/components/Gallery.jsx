import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  {
    id: 1,
    className: 'col-span-2 row-span-2 rounded-3xl bg-gradient-to-br from-sky-200 to-blue-200',
  },
  {
    id: 2,
    className: 'rounded-3xl bg-gradient-to-br from-rose-200 to-orange-200',
  },
  {
    id: 3,
    className: 'rounded-3xl bg-gradient-to-br from-violet-200 to-fuchsia-200',
  },
  {
    id: 4,
    className: 'rounded-3xl bg-gradient-to-br from-emerald-200 to-teal-200',
  },
  {
    id: 5,
    className: 'col-span-2 rounded-3xl bg-gradient-to-br from-amber-200 to-pink-200',
  },
  {
    id: 6,
    className: 'rounded-3xl bg-gradient-to-br from-cyan-200 to-sky-200',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-sky-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-8 md:grid-cols-[1.2fr,0.8fr]">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-sky-900 md:text-5xl">
              Moments that sparkle
            </h2>
            <p className="mt-3 max-w-xl text-sky-700/80">
              Playtime giggles, curious discoveries, and cozy nap snuggles. A peek into our joyful, safe world.
            </p>
          </div>
          <p className="text-right text-sky-700/70 md:pl-10">
            We share secure photo updates with parents throughout the day so you can follow the fun in real-time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:auto-rows-[160px]">
          {photos.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`relative overflow-hidden ${p.className}`}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.6),transparent_40%)]" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <svg className="pointer-events-none mt-20 block w-full" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden>
        <path fill="#FFFFFF" d="M0,64L60,80C120,96,240,128,360,117.3C480,107,600,53,720,48C840,43,960,85,1080,96C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
    </section>
  );
}
