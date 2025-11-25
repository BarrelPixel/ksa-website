'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Category = 'all' | 'residential' | 'commercial' | 'interior';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

interface Project {
  id: string;
  title: string;
  category: Exclude<Category, 'all'>;
  year: string;
  thumbnail: string;
  media: MediaItem[];
}

// Placeholder projects - replace with actual project data
const projects: Project[] = [
  {
    id: '1',
    title: 'Beachside Modern',
    category: 'residential',
    year: '2024',
    thumbnail: '/images/projects/residential-1.jpg',
    media: [{ type: 'image', url: '/images/projects/residential-1.jpg' }],
  },
  {
    id: '2',
    title: 'Canal Street',
    category: 'commercial',
    year: '2024',
    thumbnail: '/images/projects/commercial-1.jpg',
    media: [{ type: 'image', url: '/images/projects/commercial-1.jpg' }],
  },
  {
    id: '3',
    title: 'Kitchen Remodel',
    category: 'interior',
    year: '2023',
    thumbnail: '/images/projects/interior-1.jpg',
    media: [{ type: 'image', url: '/images/projects/interior-1.jpg' }],
  },
  {
    id: '4',
    title: 'Coastal Villa',
    category: 'residential',
    year: '2023',
    thumbnail: '/images/projects/residential-2.jpg',
    media: [{ type: 'image', url: '/images/projects/residential-2.jpg' }],
  },
  {
    id: '5',
    title: 'Open Concept',
    category: 'interior',
    year: '2023',
    thumbnail: '/images/projects/interior-2.jpg',
    media: [{ type: 'image', url: '/images/projects/interior-2.jpg' }],
  },
  {
    id: '6',
    title: 'Waterfront Office',
    category: 'commercial',
    year: '2022',
    thumbnail: '/images/projects/commercial-2.jpg',
    media: [{ type: 'image', url: '/images/projects/commercial-2.jpg' }],
  },
  {
    id: '7',
    title: 'Palm Coast Home',
    category: 'residential',
    year: '2022',
    thumbnail: '/images/projects/residential-3.jpg',
    media: [{ type: 'image', url: '/images/projects/residential-3.jpg' }],
  },
  {
    id: '8',
    title: 'Downtown Mixed-Use',
    category: 'commercial',
    year: '2022',
    thumbnail: '/images/projects/commercial-3.jpg',
    media: [{ type: 'image', url: '/images/projects/commercial-3.jpg' }],
  },
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'interior', label: 'Interior' },
];

// Staggered heights for visual interest
const heightPatterns = [
  'h-48 md:h-56',
  'h-56 md:h-72',
  'h-64 md:h-80',
  'h-52 md:h-64',
  'h-56 md:h-68',
  'h-60 md:h-76',
  'h-48 md:h-60',
  'h-56 md:h-80',
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Convert vertical scroll to horizontal scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    const page = pageRef.current;
    if (!container || !page) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent default vertical scroll
      e.preventDefault();

      // Apply horizontal scroll (use deltaY for vertical wheel movement)
      container.scrollLeft += e.deltaY + e.deltaX;

      // Update progress
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = scrollWidth > 0 ? Math.round((scrollLeft / scrollWidth) * 100) : 0;
      setScrollProgress(progress);
    };

    // Add wheel listener to the entire page
    page.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      page.removeEventListener('wheel', handleWheel);
    };
  }, [filteredProjects]);

  // Update progress on manual horizontal scroll (touch/drag)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = scrollWidth > 0 ? Math.round((scrollLeft / scrollWidth) * 100) : 0;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [filteredProjects]);

  return (
    <div
      ref={pageRef}
      className="h-screen overflow-hidden flex flex-col"
    >
      {/* Main Content Area - Gallery */}
      <div className="flex-1 flex items-center pt-20">
        {/* Horizontal Scrolling Gallery */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-hidden w-full scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex items-end gap-4 md:gap-6 px-6 lg:px-12 min-w-max">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex-shrink-0"
              >
                {/* Image Container with staggered heights */}
                <div
                  className={`w-44 md:w-52 lg:w-60 ${heightPatterns[index % heightPatterns.length]} bg-gray-200 overflow-hidden relative`}
                >
                  {/* Placeholder gradient - replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />

                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 px-6 w-full">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="px-6 lg:px-12 py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Large WORKS Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900">
            WORKS
          </h1>

          {/* Center - Scroll indicator */}
          <div className="hidden md:block text-center">
            <p className="text-[10px] tracking-widest uppercase text-gray-400">
              Scroll to explore ({scrollProgress.toString().padStart(2, '0')}%)
            </p>
          </div>

          {/* Right - Category Filters */}
          <div className="flex flex-row md:flex-col items-start md:items-end gap-3 md:gap-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`text-[10px] tracking-widest uppercase transition-all flex items-center gap-1 ${
                  activeCategory === cat.value
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat.label}
                {activeCategory === cat.value && (
                  <span className="text-xs">&#8599;</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
