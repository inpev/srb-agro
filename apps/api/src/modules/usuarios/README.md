# Usuarios

Gestión de usuarios del sistema SRB Agro.

## Propósito

Administrar las cuentas de acceso a la plataforma:
- **Registro**: Crear cuentas de usuario
- **Gestión**: Perfiles y permisos
- **Roles**: Diferentes niveles de acceso

## Tipos de Usuario

| Tipo | Descripción |
|------|-------------|
| nacional | Usuario admin a nivel nacional |
| regional | Usuario de gobernación |
| institucional | Usuario de institución |
| ganadero | Productor registrado |
| apoyo | Personal de apoyo |

## Roles y Niveles

Sistema jerárquico de permisos:
```
nacional (nivel 1)
  ↓
regional (nivel 2)
  ↓
institucional (nivel 3)
  ↓
ganadero (nivel 4)
  ↓
apoyo (nivel 5)
```

## Endpoints

| Método | Ruta | Descripción |
|--------|-----|-------------|
| GET | /usuarios | Listar usuarios |
| GET | /usuarios/:id | Ver usuario |
| POST | /usuarios | Crear usuario |
| PATCH | /usuarios/:id | Actualizar usuario |
| DELETE | /usuarios/:id | Eliminar usuario |

## Entidad

```typescript
interface Usuario {
  id: string;
  email: string;
  nombre: string;
  apellido: string;
  tipo: 'nacional' | 'regional' | 'institucional' | 'ganadero' | 'apoyo';
  rol: string;
  activo: boolean;
  createdAt: Date;
}
```