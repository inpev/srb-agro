# SRB Agro - Frontend

## Propósito del Proyecto

Sistema de gestión y control ganadero para la seguimiento y verificación de ganado bovino en el territorio nacional. Permite la gestión de ganaderos, animales, instituciones y gremios, con controles de verificación en campo.

## EnfoqueArquitectural

- **App Router**: Next.js App Router para routing y rendering server-side
- **Feature-based**: Organización por dominio de negocio
- **Capas**: Separación clara entre UI, lógica de negocio y servicios

## Estructura General

```
src/
├── app/              # Rutas y páginas (Next.js App Router)
├── features/         # Lógica de negocio por dominio
├── components/      # Componentes reutilizables
├── hooks/           # Hooks personalizados
├── lib/             # Utilidades y configuración
├── services/        # Servicios globales
├── store/           # Estado global
├── styles/          # Sistema de estilos
└── types/           # Tipos TypeScript
```

## Relaciones

- **Backend**: Conexión via REST API (ver `lib/api/`)
- **Mobile**: API compartida con aplicaciones mobile