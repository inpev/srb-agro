# Features - Organización por Dominio

## Descripción

Las features organizan la lógica de negocio por dominio. Cada feature es autocontenida y sigue una estructura interna común.

## Estructura de una Feature

```
feature/
├── components/   # Componentes específicos del dominio
├── hooks/       # Hooks personalizados del dominio
└── services/   # Servicios y lógica de negocio
```

## Reglas

- Cada feature es independiente
- No debe depender de otras features directamente
- Usa tipos globales para datos compartidos
- Expone API clara para consumo