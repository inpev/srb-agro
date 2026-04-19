# Gremios

Gestión de gremios (asociaciones de productores).

## Propósito

Administrar las associations de productores de ganado:
- **Agrupación**: Ganaderos por zona/interés
- **Representación**: Voz coletiva
- **Beneficios**: Programas conjunttos

## Información

```typescript
interface Gremio {
  id: string;
  nombre: string;
  sigla: string;            // Abreviatura
  municipioId: string;      // Ubicación
  descripcion?: string;
  activo: boolean;
}
```

## Relación con Ganaderos

```
Gremio (1) → Ganaderos (n)
 Un gremios agrupa múltiplés ganaderos.
```

## Endpoints

| Método | Ruta | Descripción |
|--------|-----|-------------|
| GET | /gremios | Listar |
| GET | /gremios/:id | Ver |
| GET | /gremios/:id/ganaderos | Ganaderos |
| POST | /gremios | Crear |

## Uso

- Agrupación de productores
- Estadísticas por gremio
- Comunicación collective