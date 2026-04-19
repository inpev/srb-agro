# Reportes

Generación de reportes y estadísticas.

## Propósito

Proporcionar datos para análisis y toma de decisiones:
- **Estadísticas**: Conteo y métricas
- **Exportación**: PDF, Excel, CSV
- **Dashboards**: Vistas resumidas

## Tipos de Reporte

### Por Ganadero
- Total animales propios
- Historial de transferencias
- Estado del hato

### Por Municipio
- Cantidad de cabezas
- Productores registrados
- Animales por raza

### Por Departamento
- Estadísticas regionales
- Comparativas
- тенденции

### Generales
- Total nacional
- Por estado
- Denuncias reportadas

## Endpoints

| Método | Ruta | Descripción |
|--------|-----|-------------|
| GET | /reportes/resumen | Dashboard general |
| GET | /reportes/ganadero/:id | Por productor |
| GET | /reportes/municipio/:id | Por municipio |
| GET | /reportes/gobernacion/:id | Por departamento |
| GET | /reportes/exportar | Exportar datos |

## Exportación

Formatos disponibles:
- **JSON**: Datos crudos
- **CSV**: Hoja de cálculo
- **PDF**: Reporte formal

## Uso

```typescript
GET /reportes/resumen?fechaInicio=...&fechaFin=...
```