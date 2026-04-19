# Gobernaciones

Gestión de gobernaciones (departamentos).

## Propósito

Administrar el nivel territorial departamental:
- **División**: 9 gobernaciones de Bolivia
- **Administración**: Viceministerios
- **Supervisión**: Control regional

## Jerarquía

```
Nacional
└── Gobernaciones (9 departamentos)
    └── Municipios
```

## Gobernaciones de Bolivia

| Código | Nombre |
|--------|--------|
| LP | La Paz |
| CB | Cochabamba |
| SC | Santa Cruz |
| OR | Oruro |
| PT | Potosí |
| TJ | Tarija |
| BE | Beni |
| PA | Pando |
| CQ | Chuquisaca |

## Información

```typescript
interface Gobernacion {
  id: string;
  nombre: string;
  codigo: string;         # INE
  capital: string;
  activo: boolean;
}
```

## Endpoints

| Método | Ruta | Descripción |
|--------|-----|-------------|
| GET | /gobernaciones | Listar |
| GET | /gobernaciones/:id | Ver |
| GET | /gobernaciones/:id/municipios | Municipios |

## Relación

```
Gobernacion (1) → Municipios (n)
 Cada gobernación tiene varios municipios.
```