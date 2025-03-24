import { ReactNode } from 'react';

interface GalleryButtonProps {
  onClick: () => void;
  position:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center-left'
    | 'center-right';
  ariaLabel: string;
  children: ReactNode;
  disabled?: boolean;
}

const GalleryButton = ({
  onClick,
  position,
  ariaLabel,
  children,
  disabled = false,
}: GalleryButtonProps) => {
  // Mapování pozic na CSS třídy
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'center-left': 'top-1/2 left-4 -translate-y-1/2',
    'center-right': 'top-1/2 right-4 -translate-y-1/2',
  };

  // Určení vzhledu na základě typu tlačítka (navigační vs. ovládací)
  const isNavigationButton = position === 'center-left' || position === 'center-right';

  const baseClasses = 'absolute z-10 transition-all duration-300 flex items-center justify-center';
  const styleClasses = isNavigationButton
    ? 'p-3 hover:bg-black/30 backdrop-blur-sm'
    : 'p-2 rounded-full bg-black/50 hover:bg-black/70';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${styleClasses} ${positionClasses[position]}`}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default GalleryButton;
