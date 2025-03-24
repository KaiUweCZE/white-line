import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface GalleryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  specialClass?: string;
  isFullscreen?: boolean;
  showInfo?: boolean;
}

const GalleryButton = ({
  onClick,
  children,
  specialClass,
  disabled = false,
  isFullscreen = false,
  showInfo = false,
  'aria-label': ariaLabel,
}: GalleryButtonProps) => {
  return (
    <button
      className={cn(
        'absolute z-10 transition-all duration-300',
        isFullscreen ? 'p-3' : 'p-2',
        showInfo ? 'bg-slate-600' : 'bg-slate-600/50',
        specialClass
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default GalleryButton;
