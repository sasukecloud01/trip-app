# CLAUDE.md

## Project
Personal Trip App

## Tech Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui

## Real Project Location
You must ONLY work inside this real project:

`~/Desktop/trip-app`

Before editing any file, confirm it is inside this path.

## Do NOT Use
Do NOT create or use:

- `.claude/`
- `worktrees/`
- temp environments
- shadow copies
- duplicate apps
- parallel routes
- isolated rebuilds

All edits must happen directly in the real project.

## Existing Real Project Structure
Only build inside this existing structure:

- `src/app/`
- `src/components/trip/`
- `src/components/ui/`
- `src/data/trips/`
- `src/lib/`
- `src/types/`
- `public/images/trips/`

## Existing Core Files
Important existing files include:

- `src/app/trips/[slug]/page.tsx`
- `src/components/trip/trip-nav.tsx`
- `src/components/trip/trip-view.tsx`
- `src/components/trip/trip-card.tsx`
- `src/components/trip/day-card.tsx`
- `src/components/trip/timeline-item.tsx`
- `src/data/trips/vegas-zion.ts`
- `src/lib/trip-settings.tsx`
- `src/lib/i18n.ts`
- `src/types/trip.ts`

## Existing Systems Already Present
Do NOT rebuild these unless absolutely necessary:

- bilingual content system
- theme / dark mode system
- trip settings provider
- trip navigation
- trip data structure
- helper utilities

Always extend the existing real project instead of replacing architecture.

## File Creation Rules
When adding new code:

- prefer modifying existing files over creating new ones
- only create new files if truly necessary
- place new trip-related components under `src/components/trip/`
- place reusable UI primitives under `src/components/ui/`
- place trip content under `src/data/trips/`
- place helpers under `src/lib/`
- place types under `src/types/`

## Image Rules
Trip-related images must live under:

`public/images/trips/`

Image references should use absolute public paths, for example:

`/images/trips/vegas-zion/day1-arrive-las.jpg`

Do NOT use relative traversal paths like `../../`

## Working Rules
When given a task:

1. First list which files you plan to modify
2. Keep the plan concise
3. Do not refactor unrelated files
4. Do not create unnecessary architecture
5. Do not duplicate implementations

## Output Rules
After making changes, always report:

1. which files were modified
2. which new files were created (if any)
3. whether any old files should now be deleted
4. whether duplicate implementations exist

## Response Style
Keep responses concise and implementation-focused.
Do not over-explain unless asked.