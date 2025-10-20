import { useEffect } from "react";

export const useOpposingSlideIn = (selector = "[data-oppose]") => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    );

    if (!elements.length) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const body = document.body;
    body?.classList.add("oppose-init");

    if (motionQuery.matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      body?.classList.remove("oppose-init");
      return;
    }

    const revealIfInView = (element: HTMLElement) => {
      if (element.classList.contains("is-visible")) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const buffer = window.innerHeight * 0.1;

      if (rect.bottom >= -buffer && rect.top <= window.innerHeight + buffer) {
        element.classList.add("is-visible");
      }
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-visible");
            obs.unobserve(target);
          }
        });
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((element) => {
      revealIfInView(element);
      observer.observe(element);
    });

    const handleResize = () => {
      elements.forEach(revealIfInView);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      body?.classList.remove("oppose-init");
    };
  }, [selector]);
};

export default useOpposingSlideIn;
