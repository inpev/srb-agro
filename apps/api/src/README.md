# Source

Código fuente principal de la aplicación.

## Arquitectura

### Patrón Modular (Domain-Driven Design)

La aplicación sigue una arquitectura modular basada en dominios:
- **Capa de presentación**: Controllers (endpoints HTTP)
- **Capa de negocio**: Services (lógica de dominio)
- **Capa de datos**: Repositories (acceso a Supabase)
- **Capa de validacion**: DTOs y Pipes

### Estructura por Capas

```
src/
├── config/         # Configuración centralizada
├── common/         # Decorators, guards, filtros compartidos
├── database/       # Cliente Supabase + repositories
├── modules/        # Módulos de dominio
├── ia/            # Agentes IA
├── jobs/          # Tareas programadas
└── logs/          # Archivo de logs
```

### Flujo de una Solicitud

```
1. Request HTTP
   ↓
2. Controller (valida DTO)
   ↓
3. Service (lógica de negocio)
   ↓
4. Repository (acceso a datos)
   ↓
5. Supabase (PostgreSQL)
   ↓
6. Response
```

### Módulos de Dominio

| Módulo | Descripción |
|--------|-------------|
| auth | Autenticación y JWT |
| usuarios | Gestión de usuarios del sistema |
| ganaderos | Productores de ganado |
| animales | Registro de cabeza de ganado |
| municipios | Ubicación geográfica |
| gobernaciones | Niveldepartamental |
| instituciones | Organismos oficiales |
| gremios | Associations de ganaderos |
| control-ganadero | Verificación y rastreo |
| reportes | Estadísticas y exportación |