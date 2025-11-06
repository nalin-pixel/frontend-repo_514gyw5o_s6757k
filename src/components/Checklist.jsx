import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Shield, CalendarDays, Baby } from 'lucide-react';

const items = [
  { icon: FileText, title: 'Enrollment Form', desc: 'Simple application to capture family details and preferences.' },
  { icon: Shield, title: 'Immunization Record', desc: 'State-required vaccination record or exemption documentation.' },
  { icon: CalendarDays, title: 'Schedule & Start Date', desc: 'Choose your preferred days and projected start date.' },
  { icon: Baby, title: 'Comfort Plan', desc: 'Naps, allergies, routines, and soothing tips that help us care like you do.' },
];

export default function Checklist() {
  return (
    <section id="enroll" className="relative bg-gradient-to-b from-white to-sky-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr,0.8fr]">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-sky-900 md:text-5xl">Enrollment checklist</h2>
            <p className="mt-3 max-w-xl text-sky-700/80">Preparing for a smooth first day. Bring these items and you're golden.</p>

            <ul className="mt-8 space-y-4">
              {items.map(({ icon: Icon, title, desc }, i) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-sky-100"
                >
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sky-900">{title}</div>
                    <div className="text-sky-700/80">{desc}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-200 via-blue-200 to-cyan-200 p-6 shadow-xl"
          >
            <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-white/50 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-sky-800"><CheckCircle2 className="h-4 w-4" /> Pro tip</div>
              <p className="mt-2 text-sky-800/90">Label your child's bottles, clothing, and comfort items. Pack a spare outfit and a favorite small toy for smooth transitions.</p>
              <a href="#contact" className="mt-4 inline-flex rounded-xl bg-sky-600 px-4 py-2 font-semibold text-white shadow hover:bg-sky-700">Start enrollment</a>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/60 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-white/40 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
