# Plan: Add a "Selected Projects" section

Add a separate "Selected Projects" section below the four main field cards on the homepage, so smaller or cross-sector work has its own curated space without mixing into the classified fields.

## What will change

- Add a new `selectedProjects: ProjectBlock[]` array in `src/content/home.ts` next to the existing `fields` array.
- Insert a new "Selected Projects" section on `src/pages/HomePage.tsx` between the Explore My Work cards and the Achievements section.
- Reuse the existing `ProjectBlock` shape (`title`, `summary`, `role`, `ledBullets`, `readMore`, images, `downloadUrl`, `liveUrl`, blur flags, etc.) so any project can carry the same detail level as the field pages.
- Render each selected project as a wide editorial card with a click-to-expand "Read more" pattern, matching the interaction used on `/work/:slug`.
- Add a new nav anchor `selected` and update `SiteNav.tsx` so mobile/desktop nav scrolls to the new section.

## Section design

- Section heading: eyebrow "Selected Projects", headline "Cross-sector work that doesn't fit one box." (or the user's preferred wording).
- Layout: single-column list of full-width cards, each with a leading image area (left) and text area (right) on desktop, stacked on mobile.
- Each card shows title, one-line summary, role tags, and a "Read more" button that expands to show bullets and any download/live links.
- Distinct but consistent: uses the same ivory cards, border, rounded corners, and spacing as the rest of the site.

## Content to populate after this plan is approved

- The user will attach project details/images for the selected projects.
- On the following build turn, I will upload any attached images/PDFs, generate asset pointers, and fill the `selectedProjects` array with the provided copy.

## Files to modify

- `src/content/home.ts` — add `selectedProjects` export.
- `src/pages/HomePage.tsx` — insert and render the new section.
- `src/components/portfolio/SiteNav.tsx` — add `selected` to the in-page nav.

## Out of scope

- No new route is created; selected projects live inline on the homepage.
- No changes to the four classified field pages or their routing.
