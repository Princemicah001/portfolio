import { useEffect, useRef, useState } from "react";

type InViewConfig = {
  once?: boolean;
};

export function useInView<T extends Element>(
  options?: IntersectionObserverInit,
  config: InViewConfig = {},
) {
  const { once = false } = config;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    let hasIntersected = false;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          hasIntersected = true;
          if (once) {
            obs.unobserve(entry.target);
          }
        } else if (!once || !hasIntersected) {
          setInView(false);
        }
      });
    }, options || { threshold: 0.15 });

    observer.observe(node);

    return () => observer.disconnect();
  }, [options, once]);

  return { ref, inView } as const;
}

export default useInView;
