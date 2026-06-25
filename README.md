# Pantheon Quantum Website

Public-facing website for a staged, revenue-first quantum technology company. Built with Next.js, React, Tailwind CSS, and Framer Motion.

The site presents Pantheon Quantum as a practical services-first company with a long-term infrastructure vision. It uses a carbon-black visual system, metallic graphite panels, generated abstract quantum imagery, and subtle scroll-aware motion.

## Features

- Responsive App Router website with public pages for Home, About, Problem, Services, Applications, Roadmap, Space Vision, Investors, Partners, Contact, Privacy Policy, and Terms of Use.
- Premium high-contrast CTA styling for readable buttons and active navigation states.
- Local generated image assets in `public/images/` so deployments do not depend on external image hosts.
- Subtle Framer Motion reveal/parallax behavior with reduced-motion support.
- SEO metadata for each page.
- Frontend contact form placeholder ready for a future server action, CRM, or email provider integration.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project** and import the GitHub repository.
3. Keep the default framework preset as **Next.js**.
4. Use the default build command: `npm run build`.
5. Use the default output handling for Next.js.
6. Deploy and share the generated Vercel URL.

No environment variables are required for the current static/frontend-only version.

## Project Structure

- `app/` contains the App Router pages and global styles.
- `components/` contains the shared layout, navigation, cards, CTA, visual panels, and scroll animation primitives.
- `lib/siteData.js` contains reusable company, navigation, service, application, roadmap, revenue, and partner content.
- `public/images/` contains generated abstract visual assets used by the website.

## Notes

- The contact form is a polished frontend placeholder prepared for future integration with a server action, CRM, email provider, or Vercel-compatible form endpoint.
- Privacy Policy and Terms of Use are launch-ready placeholders and should be reviewed by qualified counsel before production use.
- Space communications content is intentionally framed as a long-term research frontier, not an immediate commercial claim.
- The company copy avoids claims that Pantheon Quantum currently owns quantum computers or that quantum teleportation enables instant communication.
