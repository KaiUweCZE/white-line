import { cn } from '@/lib/utils/cn';
import { ReactNode } from 'react';

interface GalleryButtonProps {
  onClick: () => void;
  children: ReactNode;
  specialClass?: string;
  disabled?: boolean;
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
}: GalleryButtonProps) => {
  return (
    <button
      className={cn(
        'absolute z-10 transition-all duration-300',
        isFullscreen ? 'p-3' : 'p-2',
        showInfo ? 'bg-slate-900' : 'bg-slate-900/50',
        specialClass
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default GalleryButton;
