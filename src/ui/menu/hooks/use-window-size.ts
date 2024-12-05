import { useEffect, useState } from "react";

export const useWindowSize = (breakpoint = 640) => {
  const [isSmall, setIsSmall] = useState<boolean | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const checkWindowSize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setIsSmall(window.innerWidth < breakpoint);
      }, 50); // 50ms debounce
    };

    if (typeof window !== "undefined") {
      checkWindowSize();

      window.addEventListener("resize", checkWindowSize);

      return () => {
        window.removeEventListener("resize", checkWindowSize);
        clearTimeout(timeoutId);
      };
    }
  }, [breakpoint]);

  return isSmall;
};
