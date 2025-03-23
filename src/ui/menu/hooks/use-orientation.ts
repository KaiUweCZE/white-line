import { useEffect, useState } from 'react';

type Orientation = 'landscape' | 'portrait';

export const useOrientation = () => {
  const [orientation, setOrientation] = useState<Orientation>('landscape');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
      setWindowWidth(window.innerWidth);
    };

    updateOrientation();

    window.addEventListener('resize', updateOrientation);

    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  return { orientation: orientation, windowWidth };
};
