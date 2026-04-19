"use client";

import { createContext, useContext, useCallback, useState, ReactNode } from "react";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  toasts: Toast[];
  success: (message: string) => string;
  error: (message: string) => string;
  warning: (message: string) => string;
  info: (message: string) => string;
  dismiss: (id: string) => void;
  clear: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

interface ToastProviderProps {
  children: ReactNode;
  duration?: number;
}

export function ToastProvider({
  children,
  duration = 5000,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (message: string, type: ToastType): string => {
      const id = Math.random().toString(36).substring(2, 9);
      const toast: Toast = { id, message, type };

      setToasts((prev) => [...prev, toast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);

      return id;
    },
    [duration]
  );

  const success = useCallback(
    (message: string) => addToast(message, "success"),
    [addToast]
  );

  const error = useCallback(
    (message: string) => addToast(message, "error"),
    [addToast]
  );

  const warning = useCallback(
    (message: string) => addToast(message, "warning"),
    [addToast]
  );

  const info = useCallback(
    (message: string) => addToast(message, "info"),
    [addToast]
  );

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const clear = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, success, error, warning, info, dismiss, clear }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
}