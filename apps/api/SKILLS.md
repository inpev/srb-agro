# Skills para el Backend SRB Agro

Este documento lista las skills disponibles para desarrollar y mantener el backend de SRB Agro.

---

## Skills Instaladas

### 1. supabase-postgres-best-practices

**Propósito**: Mejores prácticas para PostgreSQL y Supabase

**Utilidad**:
- Revisar configuración de conexión
- Optimizar queries
- Patrones de diseño de BD

**Uso**:
```bash
npx skills use supabase-postgres-best-practices
```

**Aplicación en SRB Agro**:
- Revisar `src/database/supabase/supabase.client.ts`
- Optimizar queries en repositories

---

### 2. nestjs-best-practices

**Propósito**: Mejores prácticas para NestJS

**Utilidad**:
- Estructura de módulos
- Patrones de diseño
- Configuración

**Uso**:
```bash
npx skills use nestjs-best-practices
```

**Aplicación en SRB Agro**:
- Revisar estructura de `src/modules/`
- Validar configuración de módulos

---

### 3. nestjs-expert

**Propósito**: Experticia avanzada en NestJS

**Utilidad**:
- Patrones avanzados
- Middlewares personalizados
- Estrategias de autenticación

**Uso**:
```bash
npx skills use nestjs-expert
```

**Aplicación en SRB Agro**:
- Revisar `src/modules/auth/`
- Mejores prácticas de controllers y services

---

### 4. javascript-typescript-jest

**Propósito**: Testing con Jest

**Utilidad**:
- Escribir tests unitarios
- mocking
- Aserciones

**Uso**:
```bash
npx skills use javascript-typescript-jest
```

**Aplicación en SRB Agro**:
- Escribir tests en `src/**/*.spec.ts`
- Cobertura de código

---

## Skills Originales

| Skill | Propósito |
|-------|-----------|
| docx | Crear documentos Word |
| pdf | Trabajar con PDFs |
| xlsx | Archivos Excel |
| frontend-design | Diseño web |
| seo-audit | Revisiones SEO |
| find-skills | Buscar más skills |

---

## Cómo Usar las Skills

### Directamente en opencode

Simplemente dime qué necesitas:

> "Usa el skill de nestjs-best-practices para revisar mi módulo auth"

> "Aplica los tests de jest al módulo de animales"

> "Revisa la estructura con nestjs-expert"

### Por comandos

```bash
# Revisar configuración de Supabase
cd C:\DevHub\srb-agro\apps\api
npx skills use supabase-postgres-best-practices

# Revisar estructura NestJS
npx skills use nestjs-best-practices

# Aplicar testing
npx skills use javascript-typescript-jest
```

---

## Tabla de Uso Rápido

| Tarea | Skill a Usar |
|-------|-------------|
| Revisar conexión BD | `supabase-postgres-best-practices` |
| Estructura NestJS | `nestjs-best-practices` |
| Patrones avanzados | `nestjs-expert` |
| Escribir tests | `javascript-typescript-jest` |
| Documentos | `docx`, `pdf`, `xlsx` |
| SEO | `seo-audit` |

---

## Instalar Más Skills

```bash
# Buscar skills
npx skills find <query>

# Instalar skill
npx skills add <owner/repo@skill> -g -y

# Listar instalados
npx skills list
```

---

## Ejemplos Prácticos

### Revisar módulo auth
> "Usa nestjs-expert para revisar src/modules/auth/"

### Aplicar pruebas
> "Usa javascript-typescript-jest para crear tests del módulo animales"

### Optimizar BD
> "Usa supabase-postgres-best-practices para revisar queries"

### Revisar seguridad
> "Aplica las mejores prácticas de seguridad al código"

---

**Nota**: Al trabajar en el proyecto, puedo usar cualquier skill directamente. Solo dime qué necesitas.