# SRB-Agro Repository

## Structure

```
apps/
├── web/     # Next.js 16.2.4 (React 19.2.4) - frontend
├── api/     # NestJS - backend
└── mobile/  # Expo (React Native 0.81) with expo-router
```

## Commands by App

**Web** (Next.js):
- `cd apps/web && npm run dev` - dev server at localhost:3000
- `npm run lint` - ESLint
- `npm run build` - production build (includes typecheck via tsc)

**API** (NestJS):
- `cd apps/api && npm run start:dev` - watch mode
- `npm run test` - unit tests
- `npm run test:e2e` - e2e tests

**Mobile** (Expo):
- `cd apps/mobile && npm run start` - Expo dev
- `npm run web` - web preview
- `npm run lint` - ESLint

## Notes

- Next.js 16.2.4 has breaking changes from older versions; see `apps/web/AGENTS.md`
- Each app is independent - no shared workspace config
- No root-level scripts - run commands from within each app directory