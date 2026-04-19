"use client";

import { useState, useCallback } from "react";

interface UseSearchOptions<T> {
  initialValue?: T[];
  onSearch?: (query: string) => Promise<T[]>;
  debounceMs?: number;
}

interface UseSearchReturn<T> {
  query: string;
  setQuery: (query: string) => void;
  results: T[];
  isSearching: boolean;
  error: string | null;
  search: (query: string) => Promise<void>;
  clear: () => void;
}

export function useSearch<T>({
  initialValue = [],
  onSearch,
  debounceMs = 300,
}: UseSearchOptions<T> = {}): UseSearchReturn<T> {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<T[]>(initialValue);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(
    async (searchQuery: string) => {
      setQuery(searchQuery);

      if (!searchQuery.trim()) {
        setResults(initialValue);
        return;
      }

      if (!onSearch) {
        return;
      }

      setIsSearching(true);
      setError(null);

      try {
        const searchResults = await onSearch(searchQuery);
        setResults(searchResults);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error en búsqueda");
      } finally {
        setIsSearching(false);
      }
    },
    [onSearch, initialValue]
  );

  const clear = useCallback(() => {
    setQuery("");
    setResults(initialValue);
    setError(null);
  }, [initialValue]);

  return { query, setQuery, results, isSearching, error, search, clear };
}