# Decorators

Decoradores personalizados NestJS.

## Propósito

Extender funcionalidad con decoradores reutilizables:
- `@CurrentUser()` - Obtener usuario actual
- `@Roles()` - Definir roles requeridos
- `@Public()` - Endpoint público

## Ejemplos

```typescript
@CurrentUser() user: User

@Roles('admin', 'nacional')
@UseGuards(JwtAuthGuard)
```