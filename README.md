# Flint & Steel

[![Deploy to Cloudflare][cloudflarebutton]]

A production-ready full-stack starter template for Cloudflare Workers and Pages. Built with TypeScript, React, Tailwind CSS, shadcn/ui, and Hono for a seamless developer experience.

## 🚀 Features

- **Full-Stack TypeScript**: End-to-end type safety with Cloudflare Workers backend (Hono) and Vite + React frontend.
- **Modern UI**: shadcn/ui components, Tailwind CSS with custom design system, dark/light theme support.
- **Performance Optimized**: Vite bundling, TanStack Query for data fetching, optimized assets.
- **Developer Experience**: Hot reload, error boundaries, client error reporting, ESLint + TypeScript.
- **Cloudflare Native**: Workers for API routes, Pages for static assets, automatic SPA handling.
- **Customization Ready**: Extend API routes in `worker/userRoutes.ts`, UI in `src/pages/HomePage.tsx`.
- **Responsive Design**: Mobile-first, sidebar layout option, animations, and glassmorphism effects.
- **Production Features**: CORS, logging, health checks, not-found/error handlers.

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion, TanStack Query, React Router, Sonner |
| **Backend** | Hono, Cloudflare Workers, TypeScript |
| **UI/UX** | Radix UI, Class Variance Authority, Tailwind Merge |
| **Utilities** | Zod, Immer, Zustand, React Hook Form |
| **Dev Tools** | Bun, ESLint, Wrangler, Vitest-ready |
| **Deployment** | Cloudflare Pages + Workers |

## ⚡ Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (package manager)
- [Cloudflare Account](https://dash.cloudflare.com/) with Wrangler CLI: `bunx wrangler@latest login`
- Node.js compatible environment (Bun handles this)

### Installation

```bash
bun install
```

### Development

Start the dev server (frontend + worker proxy):

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) (or `$PORT`).

- Frontend: Vite dev server with HMR.
- Backend: Local Worker emulation via Wrangler.
- API routes available at `/api/*`.

### Build for Production

```bash
bun build
```

Outputs optimized assets to `dist/`.

### Type Generation

Generate Worker types:

```bash
bun run cf-typegen
```

## 🌐 Usage

### Frontend Customization

- Edit `src/pages/HomePage.tsx` for homepage.
- Add routes in `src/main.tsx` (React Router).
- Use shadcn components from `@/components/ui/*`.
- Hooks: `useTheme`, `useMobile`.
- Layouts: `AppLayout` with optional sidebar.

### Backend API

Extend routes in `worker/userRoutes.ts` (e.g., `app.get('/api/test', ...)`).

Example API call from frontend:

```tsx
const { data } = useQuery({
  queryKey: ['test'],
  queryFn: () => fetch('/api/test').then(res => res.json())
});
```

Pre-built: `/api/health`, `/api/client-errors`.

### Client Error Reporting

Errors auto-report to `/api/client-errors` via `src/lib/errorReporter.ts`.

## ☁️ Deployment

1. Configure `wrangler.jsonc` with your Cloudflare settings (e.g., bindings).
2. **One-Click Deploy**:

[![Deploy to Cloudflare][cloudflarebutton]]

3. Or manual:

```bash
bun run deploy
```

- Deploys Worker + static assets to Cloudflare Pages.
- Assets served via `ASSETS` binding.
- SPA routing handled automatically.

**Custom Domain**: Bind in Cloudflare Dashboard after deploy.

### Environment Variables

Add secrets via Wrangler:

```bash
wrangler secret put YOUR_SECRET
```

Access in Worker: `env.YOUR_SECRET`.

## 🤝 Contributing

1. Fork & clone.
2. `bun install`.
3. `bun dev`.
4. Submit PR.

Lint: `bun lint`. Focus on new features in `userRoutes.ts` / `HomePage.tsx`.

## 📄 License

MIT. See [LICENSE](LICENSE) for details.

---

⭐ Star on GitHub · 👀 [Cloudflare Docs](https://developers.cloudflare.com/workers/) · 💬 Issues