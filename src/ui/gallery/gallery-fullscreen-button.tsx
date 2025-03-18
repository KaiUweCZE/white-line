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
      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
      aria-label={isFullscreen ? 'Ukončit režim celé obrazovky' : 'Zobrazit na celou obrazovku'}
    >
      {isFullscreen ? (
        <X className="h-6 w-6" color="white" />
      ) : (
        <Maximize2 className="h-5 w-5" color="white" />
      )}
    </button>
  );
};

export default GalleryFullscreenButton;
