'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'WORKS', href: '/projects' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/ksa-logo-transparent.svg"
            alt="Kevin Schweizer Architect"
            width={140}
            height={80}
            className="h-16 w-auto transition-all logo-primary"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-xs font-medium tracking-widest transition-colors hover:opacity-70 ${
                    scrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className={`text-xs font-medium tracking-widest px-5 py-2.5 border transition-all ${
              scrolled
                ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-gray-900'
            }`}
          >
            GET IN TOUCH
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <button
              className="absolute top-5 right-5 p-2 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Logo in mobile menu */}
            <Link href="/" className="block mb-12" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/images/ksa-logo-transparent.svg"
                alt="Kevin Schweizer Architect"
                width={140}
                height={80}
                className="h-16 w-auto"
              />
            </Link>

            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-sm font-medium tracking-widest text-gray-900 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 block text-center text-xs font-medium tracking-widest px-5 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
