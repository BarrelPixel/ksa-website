'use client';

import { useState } from 'react';
import Link from 'next/link';

// Placeholder FAQs - replace with actual content
const faqs = [
  {
    question: 'What types of projects does Kevin Schweizer Architect handle?',
    answer:
      'We specialize in residential, commercial, and interior design projects. Our work includes new construction, renovations, historic preservation, and custom home design throughout Florida and beyond.',
  },
  {
    question: 'What is organic architecture?',
    answer:
      'Organic architecture is a philosophy that promotes harmony between human habitation and nature. Rooted in the principles of Frank Lloyd Wright, it emphasizes integrating structures with their sites, using natural materials, and creating spaces that feel connected to the environment.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. A residential design project typically takes 3-6 months for design development, with construction timelines depending on the contractor and project size. We provide detailed schedules during our initial consultation.',
  },
  {
    question: 'Do you work on projects outside of Florida?',
    answer:
      'Yes, while our studio is based in New Smyrna Beach, we work on projects throughout Florida and have experience with projects in other states. We can discuss your specific location during our consultation.',
  },
  {
    question: 'What should I expect during the design process?',
    answer:
      'Our process begins with an initial consultation to understand your vision, site, and budget. We then move through schematic design, design development, and construction documents, with regular client meetings throughout. We believe in collaborative design that reflects your unique needs.',
  },
];

// Placeholder mentions - replace with actual press/awards
const mentions = [
  {
    title: 'Florida Architecture Magazine',
    description: 'Featured project: Coastal Modern Residence',
    year: '2024',
  },
  {
    title: 'New Smyrna Beach Historic Preservation Award',
    description: 'Recognition for Canal Street restoration project',
    year: '2023',
  },
  {
    title: 'AIA Florida Design Awards',
    description: 'Merit Award for Residential Design',
    year: '2022',
  },
];

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        {/* Background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative h-full flex items-end px-6 lg:px-12 pb-16">
          <div className="max-w-4xl">
            <span className="text-xs tracking-widest uppercase text-white/70 mb-4 block">
              About the Studio
            </span>
            <h1 className="text-4xl lg:text-5xl font-semibold text-white">
              Kevin Schweizer
              <br />
              Architect
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl lg:text-3xl font-[family-name:var(--font-playfair)] italic text-gray-800 leading-relaxed">
              Architecture that honors the harmony between human structures and
              the natural environment.
            </p>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Kevin Schweizer&apos;s deep passion for architecture stems from his
              upbringing, heavily influenced by his father, Nils M. Schweizer, a
              disciple of Frank Lloyd Wright. This background inspired Kevin&apos;s
              dedication to organic architecture, a design philosophy that
              emphasizes harmony between human structures and the natural
              environment.
            </p>
            <p>
              Kevin&apos;s design process is rooted in a creative approach,
              integrating the unique characteristics of each site and the
              client&apos;s needs. His projects are crafted to enhance the natural
              features of the land and views, while also incorporating
              sustainable practices, including energy-efficient systems, all
              adding long-term value to the owner&apos;s lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-6 block">
            Design Style
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Design Philosophy</h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Kevin&apos;s architectural designs use intricate, organic forms to stand
            out from the surrounding landscape. His work highlights the
            authenticity of natural materials while skillfully incorporating
            industrial elements, resulting in architecture that is both honest
            and enduring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">Organic Architecture</h3>
              <p className="text-gray-600 leading-relaxed">
                Rooted in the principles of Frank Lloyd Wright, our designs
                emphasize harmony between human structures and the natural
                environment, integrating the unique characteristics of each site.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Material Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                We celebrate the authenticity of natural materials while
                skillfully incorporating industrial elements, creating
                architecture that is honest, pure, and built to endure.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Timeless Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Kevin&apos;s personal values shine through in his designs—the
                integrity of his approach reflects in the purity and timelessness
                of the structures he creates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-widest uppercase text-gray-500 mb-6 block">
              Our Location
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
              New Smyrna Beach, Florida
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our studio is located in the historic district of New Smyrna Beach,
              a vibrant coastal community known for its arts scene, beautiful
              beaches, and rich architectural heritage.
            </p>
            <div className="space-y-4 text-gray-800">
              <div>
                <span className="block text-xs tracking-widest uppercase text-gray-500 mb-1">
                  Address
                </span>
                145 Canal Street
                <br />
                New Smyrna Beach, FL
              </div>
              <div>
                <span className="block text-xs tracking-widest uppercase text-gray-500 mb-1">
                  Hours
                </span>
                {/* TODO: Add Kevin's business hours */}
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="aspect-square bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span className="text-sm">Map placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-gray-500 mb-6 block">
              Common Questions
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-gray-400 flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentions Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-gray-500 mb-6 block">
              Recognition
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Press & Mentions
            </h2>
          </div>

          <div className="space-y-8">
            {mentions.map((mention, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-gray-200 last:border-0"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {mention.title}
                  </h3>
                  <p className="text-gray-600">{mention.description}</p>
                </div>
                <span className="text-sm text-gray-400 md:flex-shrink-0">
                  {mention.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Whether you&apos;re planning a new home, renovating a historic property,
            or developing a commercial project, we&apos;d love to hear about your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block text-xs tracking-widest uppercase px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 transition-all"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
