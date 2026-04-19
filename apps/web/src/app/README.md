# Sistema de Rutas - App Router

## Uso de Next.js App Router

Rutas basadas en el sistema de archivos usando Next.js App Router (Next.js 16+).

## Diferencia entre Rutas Públicas y Privadas

- `(public)/` - Rutas accessibles sin autenticación (login, registro)
- `(dashboard)/` - Rutas privadas que requieren autenticación y permisos

## Organización

```
app/
├── (public)/        # Rutas públicas
│   ├── login/
│   └── registro/
└── (dashboard)/   # Área privada
    ├── usuarios/
    ├── ganaderos/
    ├── municipios/
    ├── gobernaciones/
    ├── nacional/
    ├── instituciones/
    ├── gremios/
    ├── control-ganadero/
    └── reportes/
```

## Layouts

- `layout.tsx` raíz define el layout base
- Cada grupo `(public)` y `(dashboard)` tiene su propio layout
- Layout de dashboard incluye sidebar y navegación