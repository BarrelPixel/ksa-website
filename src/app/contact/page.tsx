export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl">
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-6">Contact</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Ready to start your project? We&apos;d love to hear from you.
            Fill out the form below or reach out directly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-accent focus:ring-0 bg-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-accent focus:ring-0 bg-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-accent focus:ring-0 bg-transparent transition-colors"
                    placeholder="(386) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">
                    Project Type
                  </label>
                  <select className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-accent focus:ring-0 bg-transparent transition-colors">
                    <option value="">Select a type</option>
                    <option value="residential-new">Residential - New Construction</option>
                    <option value="residential-renovation">Residential - Renovation</option>
                    <option value="commercial-new">Commercial - New Construction</option>
                    <option value="commercial-renovation">Commercial - Renovation</option>
                    <option value="historic">Historic Preservation</option>
                    <option value="planning">Planning & Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-accent focus:ring-0 bg-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="text-xs tracking-widest uppercase px-8 py-4 bg-primary text-white hover:bg-primary-light transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12">
            <div className="space-y-12">
              <div>
                <span className="block text-xs tracking-widest uppercase text-gray-500 mb-3">
                  Office
                </span>
                <p className="text-lg">
                  145 Canal Street
                  <br />
                  New Smyrna Beach, FL
                </p>
              </div>

              <div>
                <span className="block text-xs tracking-widest uppercase text-gray-500 mb-3">
                  Phone
                </span>
                <a
                  href="tel:+1000000000"
                  className="text-lg hover:text-accent transition-colors"
                >
                  {/* TODO: Add Kevin's phone */}
                </a>
              </div>

              <div>
                <span className="block text-xs tracking-widest uppercase text-gray-500 mb-3">
                  Email
                </span>
                <a
                  href="mailto:info@example.com"
                  className="text-lg hover:text-accent transition-colors"
                >
                  {/* TODO: Add Kevin's email */}
                </a>
              </div>

              <div>
                <span className="block text-xs tracking-widest uppercase text-gray-500 mb-3">
                  Hours
                </span>
                <p className="text-lg">
                  Monday – Friday
                  <br />
                  9:00 AM – 5:00 PM
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12 aspect-video bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-sm">Map placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
