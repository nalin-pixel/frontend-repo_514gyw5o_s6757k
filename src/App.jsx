import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Checklist from './components/Checklist'
import Asymmetry from './components/Asymmetry'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="bg-sky-900 text-sky-50">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-lg font-extrabold">Baby Angel Daycare</div>
          <p className="mt-2 text-sky-200/80">Where little wings learn to fly safely, kindly, and joyfully.</p>
        </div>
        <div>
          <div className="font-semibold">Hours</div>
          <p className="text-sky-200/80">Mon–Fri 7:30am – 6:00pm</p>
          <p className="text-sky-200/80">Tours by appointment</p>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <p className="text-sky-200/80">(555) 123-4567</p>
          <p className="text-sky-200/80">hello@babyangeldaycare.com</p>
        </div>
      </div>
      <div className="border-t border-sky-800/60 py-4 text-center text-sm text-sky-300">© {new Date().getFullYear()} Baby Angel Daycare. All rights reserved.</div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="programs"><Programs /></section>
        <Asymmetry />
        <Gallery />
        <Checklist />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
