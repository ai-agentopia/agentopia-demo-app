# CLAUDE.md — Agentopia Demo App

## What This Is

**Agentopia Showcase Portal** — a production Next.js app that serves as:
1. Public landing page for the Agentopia platform
2. Live dashboard showing bot activity, workflow status, review history
3. Integration testbed for validating Agentopia delivery workflows

Every feature on this site is built by the Agentopia bot team through the delivery workflow.

## Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (auto-deploy from main)
- **Package Manager**: pnpm

## Architecture Decisions

- Server Components by default — client components only when needed (interactivity, hooks)
- No external UI library — Tailwind only, keep bundle small
- API data from Agentopia backend (`dev.agentopia.vn`) via Server Components fetch
- Dark theme first — light theme secondary
- Mobile-responsive from day 1
- No authentication required for public pages — dashboard data is read-only

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, theme, nav)
│   ├── page.tsx            # Landing / hero page
│   ├── dashboard/
│   │   └── page.tsx        # Live bot dashboard
│   ├── showcase/
│   │   └── page.tsx        # Workflow showcase / activity feed
│   └── api/                # API routes (if needed for proxy)
├── components/             # Shared React components
│   ├── ui/                 # Base UI primitives
│   └── sections/           # Page sections (hero, features, etc.)
└── lib/                    # Utilities, API clients, types
    ├── api.ts              # Agentopia API client
    └── types.ts            # Shared TypeScript types
```

## Agentopia Integration

- **Code Review**: PRs reviewed by `demo-apa-code-review` bot (Fireworks Kimi K2.5)
- **Delivery Workflow**: Features planned and implemented by bot team via Temporal workflow
- **Review Policy**: `.agentopia/review-policy.yml` — TypeScript stack, security + schema lanes

## API Endpoints (Agentopia Backend)

| Endpoint | Purpose |
|---|---|
| `GET /api/v1/bots/` | List all bots with status |
| `GET /api/v1/bots/{name}/status` | Single bot live status |
| `GET /api/v1/providers` | Provider catalog |
| `GET /api/v1/review/runs?repo_owner=...&repo_name=...` | Review run history |
| `GET /health` | Backend health check |

## Delivery Plan

Requirements are delivered incrementally. Each requirement = one delivery workflow cycle.

### Phase 1 — Foundation (R01–R03)
| ID | Requirement | Status |
|---|---|---|
| R01 | Initialize Next.js 15 + TypeScript + Tailwind CSS + pnpm | pending |
| R02 | Root layout with dark theme, responsive nav, footer | pending |
| R03 | Landing page — hero section, value props, CTA | pending |

### Phase 2 — Dashboard (R04–R06)
| ID | Requirement | Status |
|---|---|---|
| R04 | Bot roster page — fetch and display all bots with status | pending |
| R05 | Bot detail card — model, provider, uptime, role badge | pending |
| R06 | Provider distribution chart (Opus vs Sonnet vs Kimi) | pending |

### Phase 3 — Showcase (R07–R09)
| ID | Requirement | Status |
|---|---|---|
| R07 | Review activity feed — recent PR reviews with findings count | pending |
| R08 | Workflow timeline — show delivery workflow phases | pending |
| R09 | Live activity indicator — real-time bot activity pulse | pending |

### Phase 4 — Polish (R10–R12)
| ID | Requirement | Status |
|---|---|---|
| R10 | SEO metadata, Open Graph tags, favicon | pending |
| R11 | Performance optimization — loading states, error boundaries | pending |
| R12 | Analytics integration + deployment to Vercel | pending |

## Rules for Bot Team

- Use Server Components for data fetching — no `useEffect` + `fetch` pattern
- All API calls go through `lib/api.ts` — single source for base URL and error handling
- Tailwind only — no CSS modules, no styled-components
- Test: at minimum, pages should render without errors (`pnpm build` must pass)
- Keep components small — max ~150 lines per file
- Images in `public/` — use `next/image` for optimization
