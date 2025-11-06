import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Angel Sprouts',
    price: '$399',
    cadence: 'per month',
    description: 'Part-time care (3 days/week)',
    features: [
      'Up to 6 hours/day',
      'Healthy snacks included',
      'Weekly progress notes',
      'Secure photo updates'
    ],
    highlight: false,
  },
  {
    name: 'Little Wings',
    price: '$699',
    cadence: 'per month',
    description: 'Full-time care (5 days/week)',
    features: [
      'Up to 9 hours/day',
      'Organic meals & snacks',
      'Daily learning activities',
      'Priority parent support'
    ],
    highlight: true,
  },
  {
    name: 'Glow Care',
    price: '$30',
    cadence: 'per hour',
    description: 'Flexible drop-in (when available)',
    features: [
      'Same-day booking',
      'All safety protocols',
      'Play & nap areas',
      'Friendly, trained staff'
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-sky-50 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-sky-900 md:text-4xl">Simple, family-friendly pricing</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sky-700/80">
          Transparent plans that flex with your schedule. No surprise fees, ever.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-6 text-left shadow-lg ring-1 ring-sky-100 transition-transform hover:-translate-y-1 ${
                plan.highlight ? 'border-2 border-sky-300 shadow-sky-200' : ''
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 right-4 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white shadow">Best value</span>
              )}
              <h3 className="text-xl font-bold text-sky-900">{plan.name}</h3>
              <p className="mt-1 text-sky-700/80">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-sky-900">{plan.price}</span>
                <span className="text-sky-700/60">{plan.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sky-800/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-sky-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white shadow hover:bg-sky-700">
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* bubbly divider */}
      <svg className="pointer-events-none mt-16 block w-full" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden>
        <path fill="#F0F9FF" d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,90.7C840,96,960,128,1080,128C1200,128,1320,96,1380,80L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
    </section>
  );
}
