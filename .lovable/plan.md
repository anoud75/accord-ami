# Plan: Alanoud Alsamil Portfolio

Convert this Retrofly app into a personal portfolio website. The current retro/auth/backend functionality will be removed — this becomes a static marketing-style site driven by content files.

## Scope

A multi-page portfolio with 9 top-level routes, a unified editorial design system, and a recurring "Living Path" visual motif. english only used selectively for accent statements (not full translation).

## Information Architecture

Routes:

- `/` Home
- `/healthcare` Healthcare & Health Intelligence
- `/fintech` Fintech & Digital Trust
- `/environment` Environmental Intelligence
- `/ai-inclusion` Human-Centred AI & Inclusion
- `/brand` Brand & Experience Systems
- `/how-i-think` Methodology
- `/about` About
- `/contact` Contact / Resume

Sticky top nav (logo "Alanoud Alsamil" + sector links + contact CTA). Footer with bilingual signature line, contact links, and Living Path motif.

## Design System

Replace the existing tokens in `src/index.css` and `tailwind.config.ts`.

**Palette (HSL tokens)**

- `--background` Warm Ivory `#F6F1E8`
- `--foreground` / `--ink` Primary Ink `#111C2E`
- `--teal` Deep Teal `#0D5C63`
- `--aqua` Signal Aqua `#52D7CF`
- `--coral` Burnt Coral `#D86C4B`
- `--lavender` Dusty Lavender `#A69AD8`
- Sector accent tokens: `--sector-health`, `--sector-fintech`, `--sector-env`, `--sector-ai`, `--sector-brand`

Distribution: 65% ivory, 20% navy, 10% teal/aqua, 5% coral/lavender.

**Typography**

- Headings + body: IBM Plex Sans (Latin) + IBM Plex Sans Arabic (loaded via Google Fonts)
- Editorial scale: H1 clamp 3rem–5.5rem, tight tracking, medium weight
- Small uppercase eyebrow labels (`text-xs tracking-[0.18em] uppercase`)
- Bilingual pairings rendered as stacked statements with subtle divider

**Components / motifs**

- `LivingPath` — animated SVG curve that threads through hero, section dividers, and case study pages (subtle stroke, draws on scroll via framer-motion `useScroll`)
- `SectionEyebrow` — small uppercase label
- `BilingualStatement` — EN line + AR line, RTL-aware
- `ProjectCard` — editorial card with sector tag, role, "The Shift" line
- `WhyThisMatters` — recurring callout block (left border in sector accent)
- `CaseStudyLayout` — shared template: Shift → What I Led → System/Experience → Key Decisions → Evidence → Outcome → What I Learned
- `StatusBadge` — Delivered / In Progress / Concept / Independent Case Study / Confidential / Research

## Page Contents

Each page built from supplied copy verbatim. Highlights:

**Home** — Hero ("I turn complexity into clarity — and clarity into action."), capability strip, tools strip, 5 sector cards, 5 featured projects, closing statement.

**Healthcare** — Lens diagram (Evidence → Domain → Experience → Adoption → Outcomes), flagship Yamamah case study, 6 featured projects (Care Coordination, Life Sciences, Sleep Report AI, National Sleep Observatory, Between Dream & Wakefulness, Making Fragmented Work Visible), 4 confidential project cards.

**Fintech** — Mirsad flagship case study, Barq case study.

**Environment** — GreenShift + Murjan flagship case studies.

**AI & Inclusion** — Masmoa, Sign Translate, Shor.

**Brand** — Blue Spoon, Healthcare Learning Rebrand, selected brand work list.

**How I Think** — 5-stage framework + Discover/Define/Design/Deliver/Validate/Communicate + principles list.

**About** — Bio, professional focus, highlights, closing.

**Contact** — Bilingual closing, LinkedIn/Email/GitHub/Resume links. Resume PDF link from uploaded CV.

## Content Strategy

Store project content as TypeScript data in `src/content/`:

- `projects.ts` — all case studies with shift line, role, contributions, journey steps, principles, metrics, status
- `sectors.ts` — sector metadata (name, accent color, description, icon)
- `methodology.ts` — framework stages and delivery phases

Pages map over data, ensuring single source of truth.

## Assets

- Upload the CV PDF (`Alanoud_Alsamil_CV_2026.pdf`) as a Lovable asset; link from Contact + About.
- Reference PDFs (Barq, Shor, Mirsad) used only as content source — not embedded.
- No stock photography. Replace existing `hero-illustration.png` with an SVG Living Path composition (generated, no portrait).
- Portrait section in About left as a styled placeholder until user provides an editorial photo.

## Cleanup / Removal

Strip retro app code that won't be reused:

- Delete `src/pages/{LoginPage,DashboardPage,CreateRetroPage,RetroViewPage,AuthCallback}.tsx`
- Delete `src/components/retrofly/*` (keep `ErrorBoundary`, `PageTransition`, `SplitTextAnimation`, `BlurFade`-related helpers if used)
- Delete `src/contexts/AuthContext.tsx`, `src/components/ProtectedRoute.tsx`
- Delete all `src/hooks/use{Retros,Responses,...}` retro-specific hooks
- Delete `supabase/functions/*` and remove backend dependency from UI (Supabase client file left in place but unused)
- Update `App.tsx` routes, remove `AuthProvider`, `QueryClient` (keep if convenient but not required)
- Update `index.html` title + meta + favicon for SEO ("Alanoud Alsamil — Product Strategy, Experience Design & AI Delivery")

## Technical Details

- React Router routes listed above, each wrapped in `PageTransition`
- framer-motion for Living Path scroll animation and section reveals
- Tailwind tokens only — no hardcoded colors in components
- Each page file ≤250 lines (memory rule); split into section components under `src/components/portfolio/`
- New folder structure:
  ```text
  src/
    components/portfolio/   (LivingPath, ProjectCard, CaseStudyLayout, etc.)
    content/                (projects.ts, sectors.ts, methodology.ts)
    pages/                  (HomePage, HealthcarePage, FintechPage, ...)
  ```
- SEO: unique `<title>` and meta description per page via a small `<SEO>` helper; single H1; semantic sections; alt text on every image; JSON-LD Person schema on Home.

## Out of Scope (this pass)

- Full AR translation of body copy (only accent statements bilingual)
- CMS / admin UI
- Blog
- Animated case study microsites beyond shared template
- Real portrait photography (placeholder until provided)

## Deliverable

A complete static portfolio site replacing the retro app, ready to publish, with all 9 pages populated from the provided copy and styled per the supplied design direction.