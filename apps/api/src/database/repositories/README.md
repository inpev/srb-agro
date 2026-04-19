# Repositories

Patrón Repository para acceso a datos.

## Propósito

Abstraer consultas a la base de datos:
- `UsuarioRepository`
- `GanaderoRepository`
- `AnimalRepository`
- etc.

## Estructura

```typescript
class XxxRepository {
  async findAll(): Promise<Xxx[]>
  async findById(id: string): Promise<Xxx>
  async create(data: CreateDto): Promise<Xxx>
  async update(id: string, data: UpdateDto): Promise<Xxx>
  async delete(id: string): Promise<void>
}
```