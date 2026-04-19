# SRB Agro API

Backend de la plataforma SRB Agro para el control y seguimiento del ganado bovino en Bolivia.

## Propósito

La API es el núcleo central del sistema SRB Agro, una plataforma blockchain para:
- Trazabilidad completa del ganado bovino
- Registro y verificación de animales
- Control de propietarios y transferencias
- Prevención de hurto de ganado
- Generación de reportes oficiales

## Tecnologías

- **NestJS** (v11) - Framework server-side en TypeScript
- **Supabase** - Base de datos PostgreSQL + autenticación
- **JWT** - Autenticación basada en tokens
- **Zod** - Validación de esquemas
- **Passport** - Estrategias de autenticación

## Ejecución

```bash
# Instalar dependencias
npm install

# Desarrollo (con hot-reload)
npm run start:dev

# Producción
npm run start:prod

# Tests
npm run test
npm run test:cov
```

## Variables de Entorno

Copiar `.env.example` a `.env` y configurar:

| Variable | Descripción | Ejemplo |
|----------|------------|--------|
| DATABASE_URL | Conexión PostgreSQL | postgresql://... |
| SUPABASE_URL | URL del proyecto Supabase | https://xxx.supabase.co |
| SUPABASE_KEY | Clave pública anon | eyJ... |
| SUPABASE_SERVICE_KEY | Clave servicio (admin) | eyJ... |
| PORT | Puerto del servidor | 3000 |
| NODE_ENV | Entorno | development |
| JWT_SECRET | Secret para JWT | string-largo-32+ |
| JWT_EXPIRES_IN | Expiración token | 7d |

## Estructura

```
src/
├── config/          # Configuración global
├── common/        # Elementos compartidos
├── database/       # Acceso a datos
├── modules/        # Módulos de dominio
├── ia/            # Inteligencia artificial
├── jobs/          # Tareas programadas
└── logs/          # Registros
```