import { useEffect } from "react";

export const useParallax = (selector = "[data-parallax]") => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    );

    if (!elements.length) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      elements.forEach((element) => {
        element.style.transform = "";
      });
      return;
    }

    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      elements.forEach((element) => {
        const speed = Number(element.dataset.speed ?? "0.15");
        element.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [selector]);
};

export default useParallax;
