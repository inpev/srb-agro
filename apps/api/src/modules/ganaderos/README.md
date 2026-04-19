# Ganaderos

Gestión de productores de ganado (ganaderos).

## Propósito

Administrar el registro de productores de ganado bovino:
- **Registro**: Alta de nuevos productores
- **Datos principales**: Información de contacto y ubicación
- **Relaciones**: Vinculación con animales y gremios

## Información del Ganadero

```typescript
interface Ganadero {
  id: string;
  usuarioId: string;          // Relación con usuario
  ci: string;                 // Cédula de identidad
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  municipioId: string;       // Ubicación
  gremioId?: string;          // Association (opcional)
  activo: boolean;
}
```

## Relación con Otros Módulos

```
Ganadero
├── usuario (1:1) - Cuenta de acceso
├── municipio (n:1) - Ubicación
├── gremios (n:n) - Association
└── animales (1:n) - Cabezas de ganado
```

## Endpoints

| Método | Ruta | Descripción |
|--------|-----|-------------|
| GET | /ganaderos | Listar productores |
| GET | /ganaderos/:id | Ver productor |
| POST | /ganaderos | Registrar nuevo |
| PATCH | /ganaderos/:id | Actualizar datos |
| DELETE | /ganaderos/:id | Desactivar |

## Validaciones

- CI único en el sistema
- Email único
- Debe pertencer a un municipio