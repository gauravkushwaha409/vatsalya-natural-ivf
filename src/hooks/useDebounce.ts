import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Start the timer whenever "value" changes
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: runs when value changes (before next effect)
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
