# Hooks

## Descripción

Los hooks son funciones reutilizables que encapsulan lógica compleja de React. Permiten separarla lógica de negocio de la UI.

## Conceptos Fundamentales

### Debounce

**Debounce** retrasa la ejecución de una función hasta que el usuario **deja de escribir** por un tiempo determinado.

#### Sin Debounce
```
Usuario escribe: "C", "Ca", "Car", "Carl", "Carlo", "Carlos"
API recibe: 6 llamadas inmediatas - SATURA EL SERVER
```

#### Con Debounce (300ms)
```
Usuario escribe: "C" -> espera 300ms -> "Ca" -> espera 300ms -> ...
API recibe: 1 llamada cuando para de escribir - OPTIMIZADO
```

#### Para qué sirve

- **Evita saturar la API** con muchas peticiones
- **Mejora rendimiento** de la app
- **Reduce costos** en llamadas HTTP

## Hooks Disponibles

### Autenticación

#### `useAuth`
Manejo de autenticación y sesión de usuario.

```tsx
const { user, login, logout, isAuthenticated, isLoading } = useAuth();

if (isAuthenticated) {
  // Usuario logueado
}
```

**Retorna:**
- `user` - Datos del usuario actual
- `login(credentials)` - Función para iniciar sesión
- `logout()` - Función para cerrar sesión
- `isAuthenticated` - Boolean de estado

---

### Datos

#### `useFetch`
Peticiones HTTP wrapper para llamadas a la API.

```tsx
const { data, loading, error, execute } = useFetch();

const buscar = async () => {
  await execute(() => fetch('/api/ganaderos'));
};
```

**Retorna:**
- `data` - Respuesta de la API
- `loading` - Estado de carga
- `error` - Error si existe
- `execute(fn)` - Ejecutar función

#### `useSearch`
Búsqueda con debounce integrado.

```tsx
const { query, results, isSearching, search, clear } = useSearch({
  onSearch: async (q) => await buscarAPI(q),
  debounceMs: 300
});

// El usuario escribe y solo se ejecuta 300ms después de parar
search("Carlos")
```

**Retorna:**
- `query` - Texto actual de búsqueda
- `results` - Resultados de la búsqueda
- `isSearching` - Estado de búsqueda
- `search(query)` - Función para buscar
- `clear()` - Limpiar búsqueda

#### `usePagination`
Paginación de datos para listas grandes.

```tsx
const { 
  page,        // Página actual
  pageSize,   // Elementos por página
  totalPages, // Total de páginas
  totalItems, // Total de elementos
  nextPage,   // Ir a siguiente página
  prevPage,   // Ir a página anterior
  goToPage(n) // Ir a página específica
} = usePagination({
  initialPage: 1,
  initialPageSize: 10,
  totalItems: 100
});
```

---

### Permisos

#### `usePermissions`
Control de acceso basado en roles.

```tsx
const { can, hasRole, permissions } = usePermissions();

can("crear_ganadero") // Boolean - puede crear?
hasRole("administrator") // Boolean - es admin?
can("editar:ganadero") && can("eliminar:ganadero")
```

**Retorna:**
- `can(permission)` - Verificar permiso
- `hasRole(role)` - Verificar rol
- `permissions` - Lista de permisos

---

### UI/UX

#### `useI18n`
Internacionalización (ES/EN). No requiere configuración extra.

```tsx
const { t, locale, setLocale, translations } = useI18n();

// Traducciones incluidas:
// ES: "auth.login" -> "Iniciar sesión"
// EN: "auth.login" -> "Login"

// Con parámetros:
t("validation.minLength", { min: 8 })
// ES: "Mínimo 8 caracteres"
// EN: "Minimum 8 characters"

setLocale("en") // Cambiar a inglés
```

**Traducciones disponibles:**
- Comunes: loading, save, cancel, edit, delete, search, filter, export, error, success
- Auth: login, logout, register
- Dashboard: title, welcome, stats
- Ganaderos: list, create, edit, view, cedula, name, phone
- Animales: ferrete, especie, raza, color, genero, edad
- Validaciones: required, email, cedula, minLength, phone, password
- Roles: administrator, ganadero, control, institucion, gremio
- Regiones: nacional, gobernacion, municipio

#### `useToast`
Notificaciones toast (success, error, warning, info).

```tsx
const { success, error, warning, info, dismiss, clear } = useToast();

success("Ganadero creado exitosamente");
error("Error al guardar los datos");
warning("Datos incompletos");
info("Actualización disponible");
```

**Tipos:**
- `success` - Verde, operación exitosa
- `error` - Rojo, error
- `warning` - Amarillo, precaución
- `info` - Azul, información

**Funciones:**
- `dismiss(id)` - Cerrar toast específico
- `clear()` - Cerrar todos los toasts

#### `useModal`
Control de modales y diálogos.

```tsx
const { isOpen, open, close, toggle } = useModal({
  defaultOpen: false,
  onOpen: () => console.log("Abierto"),
  onClose: () => console.log("Cerrado")
});

<button onClick={toggle}>Abrir Modal</button>
{isOpen && <Modal onClose={close} />}
```

#### `useMediaQuery`
_detecta tipo de dispositivo.

```tsx
const { isMatching, isMobile, isTablet, isDesktop } = useMediaQuery({
  breakpoint: "md" // sm, md, lg, xl, 2xl
});

const { isMobile, isTablet, isDesktop } = useMedia();
```

---

### Utilidades

#### `useLocation`
Geolocalización GPS del dispositivo.

```tsx
const { location, error, isLoading, getLocation } = useLocation({
  enableHighAccuracy: true,
  timeout: 10000
});

getLocation();
// location = { lat: 4.7110, lng: -74.0721 }
```

#### `useOffline`
Detecta estado de conexión a internet.

```tsx
const { isOnline, isOffline, connection } = useOffline();

// isOnline = true/false
// isOffline = !isOnline
// connection = { downlink, effectiveType, rtt, saveData }
```

#### `useLocalStorage`
Persistencia de datos en el navegador.

```tsx
const { value, setValue, remove } = useLocalStorage(
  "user_preferences",
  { theme: "dark", language: "es" },
  {
    serializer: JSON.stringify,
    parser: JSON.parse
  }
);
```

#### `useDebounce`
Retraso en valores para evitar actualizaciones frecuentes.

```tsx
// Valor con delay
const debouncedValue = useDebounce(value, 500);
// value cambia inmediatamente
// debouncedValue cambia 500ms después

// Callback con delay
const debouncedFn = useDebouncedCallback(fn, 300);
```

---

## Reglas

1. **Encapsulan lógica compleja** - No repetir código
2. **Reutilizables en componentes** -DRY (Don't Repeat Yourself)
3. **Tipados con TypeScript** - type safety
4. **Solo un propósito** - Cada hook hace una cosa
5. **Sin lógica de UI** - Solo lógica de negocio

---

## Uso en Componentes

```tsx
// Ejemplo: Página de ganaderos con múltiples hooks
export default function GanaderosPage() {
  const { t } = useI18n();
  const { can } = usePermissions();
  const { results, search, isSearching } = useSearch({
    onSearch: buscarGanaderos
  });
  const { page, totalPages, nextPage, prevPage } = usePagination();
  const { success, error } = useToast();
  const { isOpen, open, close } = useModal();

  return (
    <div>
      <h1>{t("ganaderos.title")}</h1>
      <input onChange={(e) => search(e.target.value)} />
      {isSearching ? <Spinner /> : <List data={results} />}
      <Pagination page={page} total={totalPages} onNext={nextPage} />
      {can("crear_ganadero") && <button onClick={open}>Agregar</button>}
      {isOpen && <Modal onClose={close} />}
    </div>
  );
}
```