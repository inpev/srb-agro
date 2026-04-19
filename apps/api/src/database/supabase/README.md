# Supabase

Cliente de conexión a Supabase/PostgreSQL.

## Propósito

Proveer acceso centralizado a la base de datos:
- **Singleton**: Una sola conexión
- **Configuración**: Desde AppConfig
- **Tipo-seguro**: TypeScript

## Uso

```typescript
import { getSupabaseClient } from './supabase.client';

const supabase = getSupabaseClient();
const { data } = await supabase.from('tabla').select('*');
```

## Tablas

- `usuarios`
- `ganaderos`
- `animales`
- `municipios`
- `gobernaciones`
- `instituciones`
- `gremios`
- `registros`
- `denuncias`