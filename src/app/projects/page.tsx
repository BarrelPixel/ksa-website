'use client';

import { useState } from 'react';
import Link from 'next/link';

type Category = 'all' | 'residential' | 'commercial' | 'civic' | 'historic';

interface Project {
  id: string;
  title: string;
  category: Exclude<Category, 'all'>;
  subcategory: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Beachside Modern Residence',
    category: 'residential',
    subcategory: 'New Construction',
    year: '2024',
    image: '/images/projects/residential-1.jpg',
  },
  {
    id: '2',
    title: 'Canal Street Commercial',
    category: 'commercial',
    subcategory: 'New Construction',
    year: '2024',
    image: '/images/projects/commercial-1.jpg',
  },
  {
    id: '3',
    title: 'Historic District Restoration',
    category: 'historic',
    subcategory: 'Restoration',
    year: '2023',
    image: '/images/projects/historic-1.jpg',
  },
  {
    id: '4',
    title: 'Coastal Villa Renovation',
    category: 'residential',
    subcategory: 'Renovation',
    year: '2023',
    image: '/images/projects/residential-2.jpg',
  },
  {
    id: '5',
    title: 'City Hall Expansion',
    category: 'civic',
    subcategory: 'Government',
    year: '2023',
    image: '/images/projects/civic-1.jpg',
  },
  {
    id: '6',
    title: 'Waterfront Office Complex',
    category: 'commercial',
    subcategory: 'Renovation',
    year: '2022',
    image: '/images/projects/commercial-2.jpg',
  },
  {
    id: '7',
    title: 'Palm Coast Family Home',
    category: 'residential',
    subcategory: 'New Construction',
    year: '2022',
    image: '/images/projects/residential-3.jpg',
  },
  {
    id: '8',
    title: 'Downtown Mixed-Use Development',
    category: 'commercial',
    subcategory: 'New Construction',
    year: '2022',
    image: '/images/projects/commercial-3.jpg',
  },
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'civic', label: 'Civic' },
  { value: 'historic', label: 'Historic' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl">
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
            Our Work
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-6">Projects</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            A selection of residential, commercial, and civic projects showcasing
            our commitment to thoughtful design and quality craftsmanship.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 lg:px-12 mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 text-xs tracking-widest uppercase transition-all ${
                activeCategory === cat.value
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative aspect-[4/3] bg-gray-200 overflow-hidden"
            >
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />

              {/* Project Info */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top: Category & Year */}
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs tracking-widest uppercase text-white/80">
                    {project.subcategory}
                  </span>
                  <span className="text-xs tracking-widest text-white/60">
                    {project.year}
                  </span>
                </div>

                {/* Bottom: Title */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs tracking-widest uppercase text-white/70 mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Always visible title bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h2 className="text-lg font-semibold text-white">
                  {project.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
