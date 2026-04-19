# Rutas Públicas

## Descripción

Rutas accesibles sin necesidad de autenticación. Incluyen login y registro de usuarios.

## Características

- Acceso sin autenticación
- No requieren token de sesión
- Redirección automática al dashboard si ya hay sesión activa

## Flujo

1. Usuario sin sesión -> acceso a rutas públicas
2. Usuario con sesión -> redirección a `(dashboard)`
