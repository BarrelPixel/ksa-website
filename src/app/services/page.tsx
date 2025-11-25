import Link from 'next/link';

const services = [
  {
    id: 'architectural',
    title: 'Architectural',
    subtitle: 'Full-Service Architecture',
    description:
      'As a smaller architectural firm, our expertise extends beyond mere design; we are dedicated to facilitating the entire construction process. Architects serve as the vital link between clients and contractors, transforming a vision into reality.',
    features: [
      {
        title: 'Conceptual Design',
        description:
          'We collaborate closely with clients to understand their aspirations and develop innovative design concepts that resonate with their vision.',
      },
      {
        title: 'Project Planning and Management',
        description:
          'From initial sketches to final inspections, we oversee every phase of the project. Our meticulous planning ensures that timelines are met and budgets are respected.',
      },
      {
        title: 'Regulatory Compliance',
        description:
          'Navigating local building codes can be daunting. Our architects possess an in-depth understanding of these regulations and work diligently to ensure that designs comply with all requirements, securing necessary permits efficiently.',
      },
      {
        title: 'Sustainable Design Solutions',
        description:
          'We prioritize environmentally friendly practices, integrating sustainable materials and energy-efficient systems into our designs to create spaces that are both beautiful and responsible.',
      },
      {
        title: 'Collaboration with Engineers and Consultants',
        description:
          'By fostering strong relationships with structural engineers and local consultants, we ensure that our designs are not only aesthetically pleasing but also structurally sound and practical.',
      },
      {
        title: 'Construction Administration',
        description:
          'During construction, our team remains actively involved, ensuring that the project adheres to the original design intent and quality standards, while addressing any challenges that may arise on-site.',
      },
    ],
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    subtitle: 'Personalized Spaces',
    description:
      'We are passionate about crafting spaces that reflect our clients\' individuality and enhance their daily lives. Interior designers serve as essential guides, transforming a client\'s vision into beautifully functional environments. While some may focus solely on aesthetics, we combine creative flair with practical insights to deliver holistic design solutions.',
    features: [
      {
        title: 'Personalized Design Consultation',
        description:
          'We begin by understanding our clients\' needs and preferences, ensuring that every design choice aligns with their lifestyle and vision.',
      },
      {
        title: 'Space Planning',
        description:
          'Utilizing our expertise in spatial relationships, we create layouts that maximize functionality while enhancing flow and comfort within a space.',
      },
      {
        title: 'Material and Finish Selection',
        description:
          'We curate a range of materials, furnishings, and finishes, guiding clients in choosing options that are both visually appealing and suitable for their intended use.',
      },
      {
        title: 'Color and Lighting Design',
        description:
          'Our designers understand the profound impact of color and lighting on mood and ambiance. We develop cohesive color schemes and lighting plans that elevate the overall aesthetic of the space.',
      },
      {
        title: 'Sustainable Design Practices',
        description:
          'We are committed to incorporating sustainable and eco-friendly materials, ensuring that our designs not only look good but also contribute to a healthier environment.',
      },
      {
        title: 'Vendor Coordination and Project Management',
        description:
          'We handle the logistics of sourcing and coordinating with vendors, ensuring that the project runs smoothly from concept to completion.',
      },
      {
        title: 'Installation Oversight',
        description:
          'Our involvement doesn\'t end at the design stage. We oversee the installation process to guarantee that the final outcome aligns with our original vision and quality standards.',
      },
    ],
  },
  {
    id: '3d-modeling',
    title: '3D Modeling',
    subtitle: 'Visualization Services',
    description:
      'At KSA we are passionate about crafting spaces that reflect our clients\' individuality and enhance their daily lives. Our 3D modeling services serve as an essential tool in transforming your vision into beautifully functional environments.',
    features: [
      {
        title: 'Personalized Design Consultation',
        description:
          'We start by diving deep into your needs and preferences, ensuring that every design choice resonates with your lifestyle and vision.',
      },
      {
        title: '3D Modeling and Visualization',
        description:
          'Our advanced 3D modeling techniques bring your ideas to life, allowing you to visualize every detail before the first blueprint is drawn. This immersive experience ensures alignment with your goals.',
      },
      {
        title: 'Space Planning',
        description:
          'Utilizing our expertise in spatial relationships, we craft layouts that maximize functionality while enhancing flow and comfort within your space.',
      },
      {
        title: 'Material and Finish Selection',
        description:
          'We curate a range of materials, furnishings, and finishes, guiding you through choices that are both visually stunning and practical for your intended use.',
      },
      {
        title: 'Color and Lighting Design',
        description:
          'Understanding the profound impact of color and lighting on mood and ambiance, we develop cohesive color schemes and lighting plans that elevate your space\'s overall aesthetic.',
      },
      {
        title: 'Sustainable Design Practices',
        description:
          'Committed to eco-friendly solutions, we incorporate sustainable materials and practices, ensuring that our designs not only look good but also contribute to a healthier environment.',
      },
      {
        title: 'Vendor Coordination and Project Management',
        description:
          'We take care of the logistics, sourcing and coordinating with trusted vendors to ensure your project runs smoothly from concept to completion.',
      },
      {
        title: 'Installation Oversight',
        description:
          'Our involvement extends beyond design. We oversee the installation process to guarantee that the final outcome meets our original vision and quality standards.',
      },
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl">
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
            What We Do
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-6">Services</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            We offer comprehensive architectural services across residential,
            commercial, and civic sectors. Each project receives our full attention
            and expertise, regardless of scale.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`py-24 px-6 lg:px-12 ${
              index % 2 === 1 ? 'bg-gray-50' : ''
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="text-xs tracking-widest uppercase text-accent mb-4 block">
                  {service.subtitle}
                </span>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="space-y-6">
                  {service.features.map((feature) => (
                    <div key={feature.title} className="flex gap-4">
                      <svg
                        className="w-5 h-5 text-accent flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image placeholder */}
              <div
                className={`aspect-[4/3] bg-gray-200 relative ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-6 block">
            Our Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-16">
            How We Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                number: '01',
                title: 'Discovery',
                description:
                  'We begin by listening—understanding your goals, constraints, and vision for the project.',
              },
              {
                number: '02',
                title: 'Design',
                description:
                  'Through iterative design, we develop solutions that respond to your unique requirements.',
              },
              {
                number: '03',
                title: 'Documentation',
                description:
                  'We prepare comprehensive construction documents that clearly communicate the design.',
              },
              {
                number: '04',
                title: 'Delivery',
                description:
                  'We remain engaged through construction, ensuring the design is realized as intended.',
              },
            ].map((step) => (
              <div key={step.number}>
                <span className="text-4xl font-bold text-accent mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
            Ready to Start?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Every project begins with a conversation. Tell us about your vision
            and let&apos;s explore how we can help bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-block text-xs tracking-widest uppercase px-8 py-4 bg-primary text-white hover:bg-primary-light transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
