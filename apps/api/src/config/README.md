# Config

Configuración global centralizada del sistema.

## Propósito

- **Gestión de variables de entorno**: Validación tipo-segura con Zod
- **Configuración centralizada**: Un solo punto de acceso
- **Carga al inicio**: Se valida al boot de la aplicación

## Archivos

```
config/
├── app.config.ts          # Singleton de configuración
└── env/
    └── validation.schema.ts  # Esquema Zod
```

## Uso

```typescript
import { AppConfig } from './config/app.config';

const config = AppConfig.getInstance();
const dbUrl = config.get('DATABASE_URL');
```
## Validación

Al iniciar, el esquema Zod valida todas las variables. Si falta algunarequired, el servidor no arranca.

## Variables Soportadas

- DATABASE_URL - Connection PostgreSQL
- SUPABASE_URL - URL proyecto Supabase
- SUPABASE_KEY - Clave pública
- SUPABASE_SERVICE_KEY - Clave admin
- PORT - Puerto HTTP
- NODE_ENV - Entorno
- JWT_SECRET - Secret JWT
- JWT_EXPIRES_IN - Expiración token