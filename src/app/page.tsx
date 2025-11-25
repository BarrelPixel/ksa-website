import Link from 'next/link';
import Image from 'next/image';

const featuredProject = {
  title: 'Homeport',
  category: 'Residential',
  year: '1992',
  image: '/images/home/homeport.webp',
};

const selectedProjects = [
  {
    id: '1',
    title: 'Coastal Residence',
    category: 'Residential',
    image: '/images/project-1.jpg',
  },
  {
    id: '2',
    title: 'Canal Street Office',
    category: 'Commercial',
    image: '/images/project-2.jpg',
  },
  {
    id: '3',
    title: 'Historic Restoration',
    category: 'Historic',
    image: '/images/project-3.jpg',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section - OH Architecture Style */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-800">
          <Image
            src="/images/home/homeport.webp"
            alt="Homeport - Kevin Schweizer's Residence"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between px-6 lg:px-12 py-8">
          {/* Spacer for header */}
          <div />

          {/* Featured Project Info - Middle/Lower */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-8 lg:gap-16">
              <span className="text-xs tracking-widest uppercase opacity-70">
                Featured Project
              </span>
              <h2 className="text-2xl lg:text-3xl font-semibold">
                {featuredProject.title}
              </h2>
              <span className="hidden lg:block text-sm opacity-70">
                {featuredProject.year}
              </span>
            </div>
            <Link
              href="/projects"
              className="text-xs tracking-widest uppercase flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              View Project
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-end text-white">
            {/* Philosophy Statement */}
            <p className="max-w-md text-lg lg:text-xl font-[family-name:var(--font-playfair)] italic opacity-90 leading-relaxed">
              {/* TODO: Add Kevin's firm philosophy/tagline */}
            </p>

            {/* Scroll Indicator */}
            <span className="hidden lg:block text-xs tracking-widest uppercase opacity-50">
              (Scroll Down)
            </span>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-4xl">
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-6 block">
            About the Studio
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-8">
            {/* TODO: Add Kevin's firm headline */}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
            {/* TODO: Add Kevin's firm description */}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary hover:opacity-70 transition-opacity"
          >
            Learn More About Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
              Selected Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold">Our Projects</h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary hover:opacity-70 transition-opacity"
          >
            View All Projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects`}
              className="group relative aspect-[4/3] bg-gray-300 overflow-hidden"
            >
              {/* Placeholder - will be replaced with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500" />
              {/* Uncomment when images are available:
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              */}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

              {/* Project Info - visible on hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs tracking-widest uppercase text-white/70 mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold">Our Services</h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary hover:opacity-70 transition-opacity"
          >
            View All Services
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Residential',
              description: 'Custom homes and renovations that embrace Florida living.',
            },
            {
              title: 'Commercial',
              description: 'Office buildings, retail spaces, and mixed-use developments.',
            },
            {
              title: 'Historic Preservation',
              description: 'Thoughtful restoration of significant structures.',
            },
            {
              title: 'Planning',
              description: 'Master planning and development consulting.',
            },
          ].map((service) => (
            <div key={service.title} className="group">
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your vision and explore how we can bring it to life
            with thoughtful, enduring architecture.
          </p>
          <Link
            href="/contact"
            className="inline-block text-xs tracking-widest uppercase px-8 py-4 border border-white text-white hover:bg-white hover:text-primary transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
