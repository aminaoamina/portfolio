import { useEffect, useState } from "react";
import { debounce } from "@/lib/utils";

/**
 * Hook to track scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsScrolling(true);

      // Reset isScrolling after a delay
      setTimeout(() => setIsScrolling(false), 150);
    }, 10);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollPosition, isScrolling };
}
