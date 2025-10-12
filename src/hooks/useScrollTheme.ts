import { useEffect } from "react";

export const useScrollTheme = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const hue = 210 + progress * 120;
      const saturation = 65;
      const lightness = 12 + progress * 12;
      document.documentElement.style.setProperty(
        "--scroll-accent",
        `${hue.toFixed(2)} ${saturation}% ${lightness}%`,
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
};

export default useScrollTheme;
