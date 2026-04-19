# Env

Definición de esquemas de validación de variables de entorno usando Zod.

## Propósito

Validar en tiempo de ejecución que el .env tenga todas las variables requeridas con tipos correctos.

## Esquema

```typescript
import { z } from 'zod';

export const envValidationSchema = z.object({
  DATABASE_URL: z.string().min(1),
  PORT: z.coerce.number().default(3000),
  // ...
});
```

## Beneficios

- Tipado estático con TypeScript
- Mensajes de error claros
- Fallo rápido si hay_configuración_inválida