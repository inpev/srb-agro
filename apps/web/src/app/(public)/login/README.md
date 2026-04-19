# Página de Login

## Descripción

Página de autenticación para usuarios existentes.

## Flujo

1. Usuario ingresa credenciales (email/password)
2. Validación de datos en cliente
3. Solicitud a backend para autenticación
4. Respuesta con token de sesión
5. Redirección a dashboard según rol

## Integración con Backend

- Endpoint: `POST /auth/login`
- Respuesta: `{ token, user }`
- Almacenamiento: Cookie segura o localStorage