# Agentopia Demo App

A production-ready web application built and maintained by Agentopia's AI bot team.

This project serves two purposes:
1. **Live demo** — showcasing what Agentopia bots can build, review, and ship autonomously
2. **Integration testbed** — validating the full Agentopia delivery workflow (plan → dev → review → merge)

## Agentopia Integration

This repo is connected to the Agentopia platform:

- **Code Review**: PRs are automatically reviewed by the Agentopia reviewer bot via GitHub Actions
- **Delivery Workflow**: Features are planned, implemented, and reviewed through Agentopia's orchestrated bot team

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## License

MIT
