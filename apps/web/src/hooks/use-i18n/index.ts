"use client";

import { createContext, useContext, useCallback, useState, ReactNode } from "react";

type TranslationKey = string;
type TranslationValue = string;
type Translations = Record<TranslationKey, TranslationValue>;
type TranslationsMap = Record<string, Translations>;

interface I18nContextValue {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: TranslationKey, params?: Record<string, string>) => string;
  translations: Translations;
}

const translations: TranslationsMap = {
  es: {
    "common.loading": "Cargando...",
    "common.save": "Guardar",
    "common.cancel": "Cancelar",
    "common.edit": "Editar",
    "common.delete": "Eliminar",
    "common.search": "Buscar",
    "common.filter": "Filtrar",
    "common.export": "Exportar",
    "common.noData": "No hay datos",
    "common.error": "Error",
    "common.success": "Éxito",
    "common.confirm": "Confirmar",
    "common.back": "Volver",
    "common.next": "Siguiente",
    "common.previous": "Anterior",
    "common.actions": "Acciones",
    "common.status": "Estado",
    "common.date": "Fecha",
    "common.name": "Nombre",
    "common.email": "Correo electrónico",
    "common.phone": "Teléfono",
    "common.address": "Dirección",
    "auth.login": "Iniciar sesión",
    "auth.loginTitle": "Bienvenido",
    "auth.loginSubtitle": "Ingresa tus credenciales",
    "auth.logout": "Cerrar sesión",
    "auth.loginError": "Credenciales inválidas",
    "auth.sessionExpired": "Sesión expirada",
    "auth.loginButton": "Ingresar",
    "auth.forgotPassword": "¿Olvidaste tu contraseña?",
    "register.title": "Crear cuenta",
    "register.subtitle": "Regístrate en el sistema",
    "register.button": "Registrarse",
    "register.loginLink": "¿Ya tienes cuenta? Inicia sesión",
    "register.type": "Tipo de usuario",
    "register.ganadero": "Ganadero",
    "register.institucion": "Institución",
    "register.gremio": "Gremio",
    "register.administrator": "Administrador",
    "dashboard.title": "Panel de Control",
    "dashboard.welcome": "Bienvenido",
    "dashboard.totalGanaderos": "Total Ganaderos",
    "dashboard.totalAnimales": "Total Animales",
    "dashboard.totalVerificaciones": "Total Verificaciones",
    "dashboard.recientes": "Recientes",
    "ganaderos.title": "Ganaderos",
    "ganaderos.list": "Listado de Ganaderos",
    "ganaderos.create": "Crear Ganadero",
    "ganaderos.edit": "Editar Ganadero",
    "ganaderos.view": "Ver Detalles",
    "ganaderos.cedula": "Cédula",
    "ganaderos.name": "Nombre",
    "ganaderos.lastName": "Apellido",
    "ganaderos.phone": "Teléfono",
    "ganaderos.email": "Correo",
    "ganaderos.address": "Dirección",
    "ganaderos.municipio": "Municipio",
    "ganaderos.verifications": "Verificaciones",
    "animales.title": "Animales",
    "animales.list": "Listado de Animales",
    "animales.create": "Registrar Animal",
    "animales.edit": "Editar Animal",
    "animales.ferrete": "Número de Ferrete",
    "animales.especie": "Especie",
    "animales.raza": "Raza",
    "animales.color": "Color",
    "animales.genero": "Género",
    "animales.edad": "Edad",
    "animales.propietario": "Propietario",
    "municipios.title": "Municipios",
    "municipios.list": "Listado de Municipios",
    "municipios.select": "Seleccionar Municipio",
    "gobernaciones.title": "Gobernaciones",
    "gobernaciones.list": "Listado de Gobernaciones",
    "instituciones.title": "Instituciones",
    "instituciones.list": "Listado de Instituciones",
    "gremios.title": "Gremios",
    "gremios.list": "Listado de Gremios",
    "control.title": "Control Ganadero",
    "control.buscar": "Buscar por Ferrete",
    "control.buscarPlaceholder": "Ingresa número de ferrete",
    "control.hurto": "Reportar Hurto",
    "control.verificacion": "Verificación",
    "control.result": "Resultado de Búsqueda",
    "control.propietario": "Propietario",
    "control.ubicacion": "Ubicación",
    "control.fechaVerificacion": "Fecha de Verificación",
    "reportes.title": "Reportes",
    "reportes.generate": " Generar Reporte",
    "reportes.export": "Exportar",
    "reportes.dateRange": "Rango de Fechas",
    "usuarios.title": "Usuarios",
    "usuarios.create": "Crear Usuario",
    "usuarios.edit": "Editar Usuario",
    "usuarios.list": "Listado de Usuarios",
    "validation.required": "Este campo es requerido",
    "validation.email": "Correo electrónico inválido",
    "validation.cedula": "Cédula inválida",
    "validation.minLength": "Mínimo {min} caracteres",
    "validation.maxLength": "Máximo {max} caracteres",
    "validation.phone": "Teléfono inválido",
    "validation.password": "La contraseña debe tener al menos 8 caracteres",
    "validation.confirmPassword": "Las contraseñas no coinciden",
    "region.nacional": "Nivel Nacional",
    "region.gobernacion": "Gobernación",
    "region.municipio": "Municipio",
    "roles.administrator": "Administrador",
    "roles.ganadero": "Ganadero",
    "roles.control": "Controlador",
    "roles.institucion": "Institución",
    "roles.gremio": "Gremio",
  },
  en: {
    "common.loading": "Loading...",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.export": "Export",
    "common.noData": "No data",
    "common.error": "Error",
    "common.success": "Success",
    "common.confirm": "Confirm",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.actions": "Actions",
    "common.status": "Status",
    "common.date": "Date",
    "common.name": "Name",
    "common.email": "Email",
    "common.phone": "Phone",
    "common.address": "Address",
    "auth.login": "Login",
    "auth.loginTitle": "Welcome",
    "auth.loginSubtitle": "Enter your credentials",
    "auth.logout": "Logout",
    "auth.loginError": "Invalid credentials",
    "auth.sessionExpired": "Session expired",
    "auth.loginButton": "Sign in",
    "auth.forgotPassword": "Forgot password?",
    "register.title": "Create account",
    "register.subtitle": "Register in the system",
    "register.button": "Register",
    "register.loginLink": "Already have an account? Login",
    "register.type": "User type",
    "register.ganadero": "Farmer",
    "register.institucion": "Institution",
    "register.gremio": "Guild",
    "register.administrator": "Administrator",
    "dashboard.title": "Dashboard",
    "dashboard.welcome": "Welcome",
    "dashboard.totalGanaderos": "Total Farmers",
    "dashboard.totalAnimales": "Total Animals",
    "dashboard.totalVerifications": "Total Verifications",
    "dashboard.recientes": "Recent",
    "ganaderos.title": "Farmers",
    "ganaderos.list": "Farmers List",
    "ganaderos.create": "Create Farmer",
    "ganaderos.edit": "Edit Farmer",
    "ganaderos.view": "View Details",
    "ganaderos.cedula": "ID Number",
    "ganaderos.name": "Name",
    "ganaderos.lastName": "Last Name",
    "ganaderos.phone": "Phone",
    "ganaderos.email": "Email",
    "ganaderos.address": "Address",
    "ganaderos.municipio": "Municipality",
    "ganaderos.verifications": "Verifications",
    "animales.title": "Animals",
    "animales.list": "Animals List",
    "animales.create": "Register Animal",
    "animales.edit": "Edit Animal",
    "animales.ferrete": "Brand Number",
    "animales.especie": "Species",
    "animales.raza": "Breed",
    "animales.color": "Color",
    "animales.genero": "Gender",
    "animales.edad": "Age",
    "animales.propietario": "Owner",
    "municipios.title": "Municipalities",
    "municipios.list": "Municipalities List",
    "municipios.select": "Select Municipality",
    "gobernaciones.title": "Provinces",
    "gobernaciones.list": "Provinces List",
    "instituciones.title": "Institutions",
    "instituciones.list": "Institutions List",
    "gremios.title": "Guilds",
    "gremios.list": "Guilds List",
    "control.title": "Livestock Control",
    "control.buscar": "Search by Brand",
    "control.buscarPlaceholder": "Enter brand number",
    "control.hurto": "Report Theft",
    "control.verificacion": "Verification",
    "control.result": "Search Result",
    "control.propietario": "Owner",
    "control.ubicacion": "Location",
    "control.fechaVerificacion": "Verification Date",
    "reportes.title": "Reports",
    "reportes.generate": "Generate Report",
    "reportes.export": "Export",
    "reportes.dateRange": "Date Range",
    "usuarios.title": "Users",
    "usuarios.create": "Create User",
    "usuarios.edit": "Edit User",
    "usuarios.list": "Users List",
    "validation.required": "This field is required",
    "validation.email": "Invalid email",
    "validation.cedula": "Invalid ID",
    "validation.minLength": "Minimum {min} characters",
    "validation.maxLength": "Maximum {max} characters",
    "validation.phone": "Invalid phone",
    "validation.password": "Password must be at least 8 characters",
    "validation.confirmPassword": "Passwords do not match",
    "region.nacional": "National Level",
    "region.gobernacion": "Province",
    "region.municipio": "Municipality",
    "roles.administrator": "Administrator",
    "roles.ganadero": "Farmer",
    "roles.control": "Controller",
    "roles.institucion": "Institution",
    "roles.gremio": "Guild",
  },
};

const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  children: ReactNode;
  initialLocale?: string;
}

export function I18nProvider({ children, initialLocale = "es" }: I18nProviderProps) {
  const [locale, setLocale] = useState<string>(initialLocale);

  const t = useCallback(
    (key: TranslationKey, params?: Record<string, string>): string => {
      const currentTranslations = translations[locale] || translations.es;
      let value = currentTranslations[key] || translations.es[key] || key;

      if (params) {
        Object.entries(params).forEach(([paramKey, paramValue]) => {
          value = value.replace(`{${paramKey}}`, paramValue);
        });
      }

      return value;
    },
    [locale]
  );

  const value: I18nContextValue = {
    locale,
    setLocale,
    t,
    translations: translations[locale] || translations.es,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return context;
}

export { translations };