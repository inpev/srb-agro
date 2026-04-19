# Database

Capa de acceso a datos mediante Supabase.

## Propósito

Abstraer el acceso a la base de datos PostgreSQL:
- **Cliente Supabase**: Conexión centralizada
- **Repositories**: Patrón repositorio
- **Migraciones**: Control de esquema

## Estructura

```
database/
├── supabase/
│   └── supabase.client.ts    # Cliente singleton
├── repositories/            # Acceso a datos
└── migrations/              # EsquemaBD
```

## Cliente Supabase

```typescript
import { getSupabaseClient } from './database/supabase/supabase.client';

const supabase = getSupabaseClient();

// Query
const { data } = await supabase.from('animales').select('*');
```

## Repositories

Patrón Repository para abstraer queries:

```typescript
// repositories/usuario.repository.ts
export class UsuarioRepository {
  async findByEmail(email: string) { ... }
  async create(data: CreateUsuarioDto) { ... }
}
```

## Migraciones

Archivos SQL para crear/modificar tablas en Supabase.

## Tablas Principales

- usuarios - Usuarios del sistema
- ganaderos - Productores registrados
- animales - Cabezas de ganado
- municipios - Ubicaciones
- gobernaciones - Departamentos
- instituciones - Organismos
- gremios - Associations
- registros - Trazabilidad