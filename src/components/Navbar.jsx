import React from 'react';
import { Baby, PhoneCall } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 ring-1 ring-sky-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200">
            <Baby className="h-5 w-5" />
          </div>
          <div className="font-extrabold tracking-tight text-sky-900">Baby Angel Daycare</div>
        </a>

        <nav className="hidden items-center gap-6 text-sky-800 md:flex">
          <a href="#programs" className="hover:text-sky-600">Programs</a>
          <a href="#pricing" className="hover:text-sky-600">Pricing</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
        </nav>

        <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700">
          <PhoneCall className="h-4 w-4" /> Book a Tour
        </a>
      </div>
    </header>
  );
}
