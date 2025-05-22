"use client";
import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const isSmall =
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState<boolean>(isSmall);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}

export const useIsSmall = () => useMediaQuery("(max-width: 40rem)");
