# Control Ganadero

Sistema de verificación y rastreo de ganado.

## Propósito

Control y seguridad del ganado bovino:
- **Verificación**: Confirmar propiedad
- **Búsqueda**: Por ferrete
- **Denuncia**: Reporte de hurto
- **Historial**: Trazabilidad completa

## Funcionalidades

### Verificación de Propiedad

Verificar que un animal pertenece a un ganadero:
```typescript
POST /control-ganadero/verificar
{ ferrete: "ABC123", ganaderoId: "..." }
```

### Búsqueda por Ferrete

```typescript
GET /control-ganadero/ferrete/:ferrete
```

### Reporte de Hurto

```typescript
POST /control-ganadero/denunciar
{ ferrete: "...", fecha: "...", zona: "..." }
```

## Endpoints

| Método | Ruta | Descripción |
|--------|-----|-------------|
| POST | /control-ganadero/verificar | Verificar propiedad |
| GET | /control-ganadero/ferrete/:ferrete | Buscar animal |
| GET | /control-ganadero/historial/:animalId | Ver historial |
| POST | /control-ganadero/denunciar | Reportar hurto |
| GET | /control-ganadero/denuncias | Ver denuncias |

## Flujo de Verificación

```
1. Ingresar ferrete
2. Buscar en BD
3. Verificar propietario actual
4. Retornar datos completos
5. Registrar verificación
```

## Alertas

- Animal reportado como robado
- Transferencias sospechosas
- Verificaciones falsas