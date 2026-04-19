# Modules

Módulos de dominio de la aplicación.

## Arquitectura Modular

Cada módulo representa un dominio de negocio con responsabilidad única:
- **Controllers**: Endpoints HTTP
- **Services**: Lógica de negocio
- **DTOs**: Transferencia de datos
- **Entities**: Modelos de dominio
- **Guards**: Autorización específica
- **Strategies**: Autenticación personalizada

## Módulos Disponibles

| Módulo | Descripción |
|--------|-------------|
| auth | Autenticación JWT, login, registro |
| usuarios | Usuarios del sistema |
| ganaderos | Productores de ganado |
| animales | Registro de cabezas de ganado |
| municipios |Ubicación geográfica nivel 1 |
| gobernaciones | Niveldepartamental nivel 2 |
| instituciones | Organismos oficiales nivel 3 |
| gremios | Associations de productores |
| control-ganadero | Verificación y rastreo |
| reportes | Estadísticas y exportación |

## Estructura Común

```
modulo/
├── modulo.module.ts
├── controllers/
│   └── modulo.controller.ts
├── services/
│   └── modulo.service.ts
├── dto/
│   ├── create-modulo.dto.ts
│   └── update-modulo.dto.ts
├── entities/
│   └── modulo.entity.ts
├── guards/
│   └── modulo.guard.ts
└── strategies/
    └── modulo.strategy.ts
```