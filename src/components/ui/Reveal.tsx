import React from "react";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  ...rest
}) => {
  const observerOptions = React.useMemo(
    () => ({ threshold, rootMargin }),
    [threshold, rootMargin],
  );

  const { ref, inView } = useInView<HTMLDivElement>(
    observerOptions,
    { once },
  );

  return (
    <div
      ref={ref}
      className={cn("reveal", className, inView && "is-visible")}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Reveal;
