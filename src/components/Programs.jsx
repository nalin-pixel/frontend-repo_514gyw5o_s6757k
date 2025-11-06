import React from 'react';
import { BookOpen, Hearts, Palette, Puzzle } from 'lucide-react';

const items = [
  {
    icon: Hearts,
    title: 'Nurture & Care',
    desc: 'A loving environment focused on trust, safety, and emotional growth.'
  },
  {
    icon: BookOpen,
    title: 'Early Learning',
    desc: 'Daily activities for language, numbers, and curious, confident minds.'
  },
  {
    icon: Palette,
    title: 'Creative Play',
    desc: 'Music, art, and sensory stations that spark imagination and joy.'
  },
  {
    icon: Puzzle,
    title: 'Motor Skills',
    desc: 'Balance, coordination, and fine motor fun with age-appropriate play.'
  },
];

export default function Programs() {
  return (
    <section className="relative bg-sky-100/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-sky-900 md:text-4xl">Playful programs with purpose</h2>
          <p className="mt-3 text-sky-700/80">Designed by early childhood educators to balance learning, play, and rest.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-sky-900">{title}</h3>
              <p className="mt-2 text-sky-700/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
