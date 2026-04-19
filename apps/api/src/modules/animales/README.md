# Animales

Gestión del registro de cabezas de ganado bovino.

## Propósito

Controlar cada animal del sistema con trazabilidad completa:
- **Registro**: Alta de nuevos animales
- **Identificación**: Ferrete único
- **Historial**: Trazabilidad desde nacimiento
- **Transferencias**: Cambio de propietario

## Información del Animal

```typescript
interface Animal {
  id: string;
  ferrete: string;              // Identificador único
  ganaderoId: string;           // Propietario actual
  raza: string;
  color: string;
  sexo: 'M' | 'H';
  fechaNacimiento?: Date;
  madreId?: string;             // Madre (opcional)
  padreId?: string;             // Padre (opcional)
  estado: 'activo' | 'transferido' | 'muerto' | 'sacrificado';
  ubicacionActual: string;
  fechaRegistro: Date;
}
```

## Relación con Ganadero

```
Animal (muchos) → Ganadero (uno)
Cada animal pertenece a un ganadero.
El ganadero puede tener múltiples animales.
```

## Flujo de Vida

```
1. Nacimiento → Registro con ferrete
2. Propio → Animal activo
3. Venta → Transferencia (nuevo ganadero)
4. Muerte → Estado final (registrado)
```

## Endpoints

| Método | Ruta | Descripción |
|--------|-----|-------------|
| GET | /animales | Listar animales |
| GET | /animales/:id | Ver animal |
| GET | /animales/ferrete/:ferrete | Buscar por ferrete |
| POST | /animales | Registrar animal |
| PATCH | /animales/:id | Actualizar |
| POST | /animales/:id/transferir | Transferir propiedad |

## Ferrete

Identificador físico del animal (marca en la piel).
Debe ser único en todo el sistema.