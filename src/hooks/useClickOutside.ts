import { RefObject, useEffect } from 'react';

type Handler = () => void;

export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, handler: Handler) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest('.hamburger')) {
        return;
      }

      if (!ref.current || ref.current.contains(target)) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
