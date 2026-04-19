"use client";

import { useEffect, useState } from "react";

type MediaQuery = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

interface UseMediaQueryOptions {
  query?: string;
  breakpoint?: MediaQuery;
}

const breakpoints: Record<MediaQuery, string> = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
  "3xl": "(min-width: 1920px)",
  "4xl": "(min-width: 2560px)",
};

interface UseMediaReturn {
  isMatching: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useMediaQuery(options: UseMediaQueryOptions = {}): UseMediaReturn {
  const { query, breakpoint = "md" } = options;
  const mediaQuery = query || breakpoints[breakpoint];

  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mediaQuery.replace("@media ", ""));
    setIsMatching(media.matches);

    const listener = (e: MediaQueryListEvent) => setIsMatching(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [mediaQuery]);

  return {
    isMatching,
    isMobile: isMatching && breakpoint === "sm",
    isTablet: isMatching && breakpoint === "md",
    isDesktop: isMatching && (breakpoint === "lg" || breakpoint === "xl"),
  };
}

export function useMedia() {
  const [media, setMedia] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const checkMedia = () => {
      setMedia({
        isMobile: window.matchMedia("(max-width: 767px)").matches,
        isTablet:
          window.matchMedia("(min-width: 768px)").matches &&
          window.matchMedia("(max-width: 1023px)").matches,
        isDesktop: window.matchMedia("(min-width: 1024px)").matches,
      });
    };

    checkMedia();
    window.addEventListener("resize", checkMedia);

    return () => window.removeEventListener("resize", checkMedia);
  }, []);

  return media;
}