import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // For demo: pretend to send, then clear
      await new Promise((res) => setTimeout(res, 800));
      e.currentTarget.reset();
      setStatus('Thanks! We\'ll be in touch shortly.');
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-sky-50 to-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-sky-900 md:text-4xl">Book a tour or ask a question</h2>
          <p className="mt-3 max-w-md text-sky-700/80">We\'re excited to meet your little one! Share a few details and we\'ll get back quickly.</p>

          <div className="mt-8 space-y-4 text-sky-800/90">
            <div className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-sky-600" /> (555) 123-4567</div>
            <div className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-sky-600" /> hello@babyangeldaycare.com</div>
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-sky-600" /> 123 Angel Lane, Cloud City</div>
          </div>

          <div className="mt-10 rounded-2xl bg-white p-5 ring-1 ring-sky-100 shadow-sm">
            <p className="text-sky-700/80">Hours: Mon–Fri 7:30am – 6:00pm</p>
            <p className="text-sky-700/80">Tours by appointment only</p>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-sky-100"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-sky-900">Parent name</label>
              <input required name="name" className="mt-1 w-full rounded-xl border-sky-200 bg-sky-50/50 px-4 py-3 outline-none ring-1 ring-inset ring-sky-200 focus:bg-white focus:ring-2 focus:ring-sky-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-sky-900">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-xl border-sky-200 bg-sky-50/50 px-4 py-3 outline-none ring-1 ring-inset ring-sky-200 focus:bg-white focus:ring-2 focus:ring-sky-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-sky-900">Phone</label>
              <input required type="tel" name="phone" className="mt-1 w-full rounded-xl border-sky-200 bg-sky-50/50 px-4 py-3 outline-none ring-1 ring-inset ring-sky-200 focus:bg-white focus:ring-2 focus:ring-sky-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-sky-900">Child age</label>
              <select name="age" className="mt-1 w-full rounded-xl border-sky-200 bg-sky-50/50 px-4 py-3 outline-none ring-1 ring-inset ring-sky-200 focus:bg-white focus:ring-2 focus:ring-sky-400">
                <option>0-12 months</option>
                <option>1-2 years</option>
                <option>2-3 years</option>
                <option>3-5 years</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-sky-900">Message</label>
              <textarea rows="4" name="message" className="mt-1 w-full rounded-xl border-sky-200 bg-sky-50/50 px-4 py-3 outline-none ring-1 ring-inset ring-sky-200 focus:bg-white focus:ring-2 focus:ring-sky-400" placeholder="Tell us about your schedule or questions..." />
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-300/40 transition hover:-translate-y-0.5 hover:bg-sky-700">
            <Send className="h-5 w-5" /> Send message
          </button>
          {status && <p className="mt-3 text-sm text-sky-800">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
