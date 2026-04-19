# Auth

Módulo de autenticación y seguridad.

## Propósito

Gestionar el acceso al sistema:
- **Login**: Validar credenciales
- **Registro**: Crear nuevos usuarios
- **JWT**: Tokens de sesión
- **Protección**: Endpoints privados

## Estructura

```
auth/
├── auth.module.ts
├── controllers/
│   └── auth.controller.ts    # POST /auth/login, /auth/register
├── services/
│   └── auth.service.ts     # Lógica de auth
├── strategies/
│   └── jwt.strategy.ts     # Validar token JWT
├── guards/
│   └── jwt-auth.guard.ts   # Proteger endpoints
├── dto/
│   ├── login.dto.ts
│   └── register.dto.ts
└── README.md
```

## Endpoints

| Método | Ruta | Descripción |
|--------|-----|-------------|
| POST | /auth/login | Iniciar sesión |
| POST | /auth/register | Crear cuenta |

## Flujo

```
1. Usuario envía email + password
2. Service busca en DB
3. Compara password (bcrypt)
4. Genera JWT
5. Retorna token + datos usuario
```

## Seguridad

- Passwords hasheados con bcrypt
- Tokens JWT con expiración configurable
- Estrategia Bearer Token
- Guard global para rutas protegidas