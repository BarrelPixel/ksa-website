import Link from 'next/link';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/ksa-website' : '';

const navigation = [
  { name: 'Works', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="px-6 lg:px-12 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand & Philosophy */}
          <div className="md:col-span-5">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src={`${basePath}/images/ksa-logo-transparent.svg`}
                alt="Kevin Schweizer Architect"
                width={140}
                height={80}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-[family-name:var(--font-playfair)] italic">
              {/* TODO: Add Kevin's firm philosophy/tagline */}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-gray-500">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-gray-500">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="block text-white">Address</span>
                145 Canal Street
                <br />
                New Smyrna Beach, FL
              </li>
              <li className="pt-2">
                <span className="block text-white">Phone</span>
                <a
                  href="tel:+1000000000"
                  className="hover:text-white transition-colors"
                >
                  {/* TODO: Add Kevin's phone */}
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-white">Email</span>
                <a
                  href="mailto:info@example.com"
                  className="hover:text-white transition-colors"
                >
                  {/* TODO: Add Kevin's email */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Kevin Schweizer Architect. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            New Smyrna Beach, Florida
          </p>
        </div>
      </div>
    </footer>
  );
}
