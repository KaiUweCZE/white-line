import { useEffect, useState } from "react";

export const useWindowSize = (breakpoint = 1000) => {
  const [isSmall, setIsSmall] = useState<boolean | null>(null);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmall(window.innerWidth < breakpoint);
    };

    if (typeof window !== "undefined") {
      checkWindowSize();

      window.addEventListener("resize", checkWindowSize);

      return () => window.removeEventListener("resize", checkWindowSize);
    }
  }, [breakpoint]);

  return isSmall;
};
