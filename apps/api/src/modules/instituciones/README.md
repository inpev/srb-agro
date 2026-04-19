# Instituciones

Gestión de instituciones oficiales.

## Propósito

Administrar organismos gubernamentales y entidades oficiales:
- ** SENASAG **: Servicio Nacional de Salud Animal
- ** Gobernaciones **: Viceministerios
- ** Municipalidades **: Alcaldías
- ** otras **: Entidades relacionadas

## Niveles

| Nivel | Descripción |
|-------|-------------|
| nacional | Nivel central (SENASAG) |
| regional | Gobernaciones |
| municipal | Alcaldías |

## Información

```typescript
interface Institucion {
  id: string;
  nombre: string;
  codigo: string;           // Identificador
  nivel: 'nacional' | 'regional' | 'municipal';
  gobernacionId?: string;  // Para nivel regional
  municipioId?: string; // Para nivel municipal
  activo: boolean;
}
```

## Endpoints

| Método | Ruta | Descripción |
|--------|-----|-------------|
| GET | /instituciones | Listar |
| GET | /instituciones/:id | Ver |
| POST | /instituciones | Crear |
| PATCH | /instituciones/:id | Actualizar |

## Uso

- Asignar permisos por institución
- Rutas deapproval
- Reportes oficiales