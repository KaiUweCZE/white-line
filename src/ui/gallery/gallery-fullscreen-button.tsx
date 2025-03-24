import { Maximize2, X } from 'lucide-react';

interface GalleryFullscreenButtonProps {
  fullscreen: boolean;
  isFullscreen: boolean;
  onFullscreenToggle: () => void;
}

const GalleryFullscreenButton = ({
  fullscreen,
  isFullscreen,
  onFullscreenToggle,
}: GalleryFullscreenButtonProps) => {
  if (!fullscreen) return null;

  return (
    <button
      onClick={onFullscreenToggle}
      className={`absolute top-0 right-0 z-10 ${
        isFullscreen ? 'p-3' : 'p-2'
      } bg-slate-800 transition-colors`}
      aria-label={isFullscreen ? 'Ukončit režim celé obrazovky' : 'Zobrazit na celou obrazovku'}
    >
      {isFullscreen ? (
        <X className="h-7 w-7" strokeWidth={3} color="white" />
      ) : (
        <Maximize2 className="h-5 w-5 hover:scale-125 transition duration-300" color="white" />
      )}
    </button>
  );
};

export default GalleryFullscreenButton;
