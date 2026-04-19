# Municipios

Gestión de municipios (ubicación geográfica nivel 1).

## Propósito

Administrar la división territorial más básica:
- **Ubicación**: Dirección de propietarios y animales
- **Supervisión**: Control a nivel municipal
- **Reportes**: Estadísticas locales

## Jerarquía Geográfica

```
Bolivia
└── Gobernaciones (9 departamentos)
    └── Municipios (341 municipios)
```

## Información del Municipio

```typescript
interface Municipio {
  id: string;
  nombre: string;
  gobernacionId: string;     // Departamento
  codigo: string;         // INE
  activo: boolean;
}
```

## Endpoints

| Método | Ruta | Descripción |
|--------|-----|-------------|
| GET | /municipios | Listar municipios |
| GET | /municipios/:id | Ver municipio |
| GET | /municipios/gobernacion/:id | Por departamento |
| POST | /municipios | Crear municipio |

## Uso

- Asignar ganaderos a municipios
- Filtrar animales por ubicación
- Reportes por zona