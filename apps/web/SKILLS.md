# Skills para el Frontend SRB Agro

Este documento lista las skills disponibles para desarrollar y mantener el frontend de SRB Agro.

---

## Proyecto

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Estructura**: features/, components/, hooks/, services/, store/

---

## Skills Disponibles

### 1. frontend-design

**Propósito**: Diseño UI/UX

**Utilidad**:
- Patrones de componentes
- Mejores prácticas de CSS
- Accesibilidad
- Responsive design

**Uso**:
```bash
npx skills use frontend-design
```

**Aplicación en SRB Agro**:
- Revisar `src/components/ui/`
- Validar diseño responsive
- Revisar accesibilidad

---

### 2. vercel-react-best-practices

**Propósito**: Mejores prácticas React/Next.js

**Utilidad**:
- Patrones de Next.js App Router
- Server/Client Components
- Optimización
- Data fetching

**Uso**:
```bash
npx skills use vercel-react-best-practices
```

**Aplicación en SRB Agro**:
- Revisar `src/app/`
- Optimizar rendering
- Revisar patterns

---

### 3. javascript-typescript-jest

**Propósito**: Testing con Jest

**Utilidad**:
- Tests unitarios
- mocking
- Coverage

**Uso**:
```bash
npx skills use javascript-typescript-jest
```

**Aplicación en SRB Agro**:
- Tests en `src/**/*.test.ts`
- Hooks testing

---

### 4. e2e-testing-patterns

**Propósito**: Testing E2E

**Utilidad**:
- Playwright
- Tests de flujo
- Integración

**Uso**:
```bash
npx skills use e2e-testing-patterns
```

**Aplicación en SRB Agro**:
- Tests de login
- Tests de navegación
- Tests de formularios

---

### 5. seo-audit

**Propósito**: SEO

**Utilidad**:
- Meta tags
- Performance
- Lighthouse

**Uso**:
```bash
npx skills use seo-audit
```

**Aplicación en SRB Agro**:
- Revisar `src/app/(public)/`
- SEO de páginas

---

### 6. docx, pdf, xlsx

**Propósito**: Documentos

**Utilidad**:
- Generación de reportes
- Exportación

**Uso**:
```bash
npx skills use docx
npx skills use pdf
npx skills use xlsx
```

---

## Skills Recomendadas para Instalar

### Tailwind CSS (si aplica)

```bash
npx skills find tailwind
npx skills add <skill> -g -y
```

### Playwright

```bash
npx skills find playwright
npx skills add <skill> -g -y
```

---

## Guía de Uso

### Directamente en opencode

> "Usa vercel-react-best-practices para revisar mis componentes"

> "Aplica e2e-testing al flujo de login"

> "Revisa el SEO de la página de login"

### Por comandos

```bash
cd C:\DevHub\srb-agro\apps\web
npx skills use <skill-name>
```

---

## Tabla de Uso Rápido

| Tarea | Skill |
|-------|-------|
| Componentes UI | `frontend-design` |
| Next.js/React | `vercel-react-best-practices` |
| Tests unitarios | `javascript-typescript-jest` |
| Tests E2E | `e2e-testing-patterns` |
| SEO | `seo-audit` |
| Documentos | `docx`, `pdf`, `xlsx` |

---

## Estructura del Proyecto

```
src/
├── app/               # Pages (Next.js App Router)
│   ├── (dashboard)/  # Rutas protegidas
│   └── (public)/    # Rutas públicas
├── components/        # Componentes reutilizables
│   ├── ui/
│   ├── layout/
│   └── charts/
├── features/         # Lógica por dominio
├── hooks/            # Custom hooks
├── services/         # API calls
├── store/            # Estado global
├── styles/           # CSS tokens
└── types/            # TypeScript types
```

---

**Nota**: Puedo usar cualquier skill directamente. Solo dime qué necesitas.