"use client";

import { useState, useEffect, useCallback } from "react";

interface NavigatorNetworkState {
  readonly downlink: number;
  readonly effectiveType: "slow-2g" | "2g" | "3g" | "4g";
  readonly rtt: number;
  readonly saveData: boolean;
}

interface UseOfflineReturn {
  isOnline: boolean;
  isOffline: boolean;
  connection: NavigatorNetworkState | null;
}

export function useOffline(): UseOfflineReturn {
  const [isOnline, setIsOnline] = useState(true);
  const [connection, setConnection] = useState<NavigatorNetworkState | null>(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    const handleConnectionChange = () => {
      const conn = (navigator as any).connection;
      if (conn) {
        setConnection({
          downlink: conn.downlink,
          effectiveType: conn.effectiveType,
          rtt: conn.rtt,
          saveData: conn.saveData,
        });
      }
    };

    setIsOnline(navigator.onLine);
    handleConnectionChange();

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const conn = (navigator as any).connection;
    if (conn) {
      conn.addEventListener("change", handleConnectionChange);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      if (conn) {
        conn.removeEventListener("change", handleConnectionChange);
      }
    };
  }, []);

  return {
    isOnline,
    isOffline: !isOnline,
    connection,
  };
}