"use client";

import { useState, useEffect, useCallback } from "react";

type Serializer<T> = (value: T) => string;
type Parser<T> = (value: string) => T;

interface UseLocalStorageOptions<T> {
  serializer?: Serializer<T>;
  parser?: Parser<T>;
  onError?: (error: Error) => void;
}

interface UseLocalStorageReturn<T> {
  value: T | null;
  setValue: (value: T) => void;
  remove: () => void;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options: UseLocalStorageOptions<T> = {}
): UseLocalStorageReturn<T> {
  const { serializer = JSON.stringify, parser = JSON.parse, onError } = options;

  const [value, setValue] = useState<T | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        setValue(parser(stored));
      } else {
        setValue(initialValue);
      }
      setIsInitialized(true);
    } catch (error) {
      onError?.(error as Error);
      setValue(initialValue);
      setIsInitialized(true);
    }
  }, [key, initialValue, parser, onError]);

  const updateValue = useCallback(
    (newValue: T) => {
      try {
        localStorage.setItem(key, serializer(newValue));
        setValue(newValue);
      } catch (error) {
        onError?.(error as Error);
      }
    },
    [key, serializer, onError]
  );

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setValue(null);
    } catch (error) {
      onError?.(error as Error);
    }
  }, [key, onError]);

  return {
    value: isInitialized ? value : null,
    setValue: updateValue,
    remove,
  };
}