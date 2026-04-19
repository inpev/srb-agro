# Common

Elementos reutilizables de forma global en toda la aplicación.

## Propósito

Contiene código compartido entre todos los módulos:
- **Decoradores personalizados**
- **Guards de seguridad**
- **Filtros de excepción**
- **Interceptores**
- **Pipes de validación**
- **Utilidades**

## Estructura

```
common/
├── decorators/      # @CurrentUser, @Roles, etc.
├── guards/          # JWT, Roles, Authorize
├── interceptors/    # Logging, Transformación respuesta
├── filters/         # Manejo errores HTTP
├── pipes/           # Validación personalizada
└── utils/           # Funciones helper
```

## Ejemplo de Uso

```typescript
// Decorador personalizado
@CurrentUser() user: User

// Guard
@UseGuards(JwtAuthGuard)

// Pipe
app.useGlobalPipes(new ValidationPipe(...))
```

## Beneficios

- DRY (Don't Repeat Yourself)
- Consistencia en toda la app
- Fácil mantenimiento