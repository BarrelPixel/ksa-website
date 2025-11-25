# Kevin Schweizer Architect Website

A modern, responsive website for Kevin Schweizer Architect, built with Next.js and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Geist, Playfair Display
- **Language**: TypeScript

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, featured project, about teaser, selected works, services preview |
| Works | `/projects` | Project gallery with category filters (Residential, Commercial, Interior) |
| About | `/about` | Bio, design philosophy, location, FAQs, press & mentions |
| Services | `/services` | Full service descriptions with process overview |
| Contact | `/contact` | Contact form and studio information |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page (with FAQs & Mentions)
│   ├── projects/page.tsx  # Works page (with filtering)
│   ├── services/page.tsx  # Services page
│   ├── contact/page.tsx   # Contact page
│   └── layout.tsx         # Root layout
├── components/
│   └── layout/
│       ├── Header.tsx     # Navigation header
│       └── Footer.tsx     # Site footer
└── styles/
    └── globals.css        # Global styles & Tailwind config
```

## Navigation Structure

The site uses a simplified 4-item navigation:

- **WORKS** - Project portfolio with photos/videos, filterable by category
- **ABOUT** - Studio information, FAQs, and press mentions
- **SERVICES** - Architectural services offered
- **CONTACT** - Contact form and studio details

## Deployment

Deploy on [Vercel](https://vercel.com) for optimal Next.js performance:

```bash
npm run build
```

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
