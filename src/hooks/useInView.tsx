import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setInView(entry.isIntersecting));
    }, options || { threshold: 0.15 });

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, options]);

  return { ref, inView } as const;
}

export default useInView;
