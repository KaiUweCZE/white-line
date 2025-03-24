import { Maximize2, X } from 'lucide-react';
import GalleryButton from './gallery-button';

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
    <GalleryButton
      onClick={onFullscreenToggle}
      isFullscreen={isFullscreen}
      specialClass={`group top-0 right-0 rounded-bl-full  ${
        isFullscreen ? 'pl-5 pb-5' : 'pl-4 pb-4'
      }`}
      aria-label="Změnit zobrazení na fullscreen"
    >
      {isFullscreen ? (
        <X className="h-7 w-7" strokeWidth={3} color="white" />
      ) : (
        <Maximize2
          className="h-5 w-5 group-hover:scale-125 transition duration-300"
          color="white"
        />
      )}
    </GalleryButton>
  );
};

export default GalleryFullscreenButton;
