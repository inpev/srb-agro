# Jobs

Tareas programadas y procesos automáticos.

## Propósito

Ejecutar procesos enbackground sin intervención manual:
- **Tareas programadas**: Ejecución periódica
- **Procesos batch**: Actualizaciones masivas
- **Mantenimiento**: Limpieza y optimización

## Estructura

```
jobs/
└── schedulers/
    └── nombre.scheduler.ts
```

## Ejemplos de Tareas

### Diarias
- Resumen de actividad
- Notificaciones
- Reportes automáticos

### Semanales
- Estadísticashebdomadales
- Respaldo de datos

### Mensuales
- Reportes formales
- Auditoría complta

## Implementación

```typescript
@Cron('0 0 * * *')  // Diario a midnight
async handleTask() {
  // Lógica de la tarea
}
```

## Uso

```bash
# Iniciar scheduler
await app.init();
```