import React from "react";

export default function Typewriter({
  text = "",
  className = "",
  typingSpeed = 90,
  deletingSpeed = 50,
  pause = 2200,
}: {
  text: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const [display, setDisplay] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let id: ReturnType<typeof setInterval> | ReturnType<typeof setTimeout>;
    // Use setInterval-style loop tick as requested: repeat function that advances i
    id = setInterval(() => {
      setDisplay((prev) => {
        if (!isDeleting) {
          // typing
          if (prev.length < text.length) {
            return prev + text.charAt(prev.length);
          } else {
            // finished typing: switch to deleting after pause
            clearInterval(id as any);
            id = setTimeout(() => setIsDeleting(true), pause) as any;
            return prev;
          }
        } else {
          // deleting
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            // finished deleting: switch to typing
            clearInterval(id as any);
            id = setTimeout(() => setIsDeleting(false), 300) as any;
            return "";
          }
        }
      });
    }, isDeleting ? deletingSpeed : typingSpeed) as any;

    return () => {
      clearInterval(id as any);
    };
  }, [text, isDeleting, typingSpeed, deletingSpeed, pause]);

  return <span className={className}>{display}</span>;
}
