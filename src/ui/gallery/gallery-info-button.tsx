import { Info } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface GalleryInfoButtonProps {
  currentLabel: string;
  showInfo: boolean;
  isFullscreen: boolean;
  setShowInfo: Dispatch<SetStateAction<boolean>>;
}

const GalleryInfoButton = ({
  currentLabel,
  showInfo,
  setShowInfo,
  isFullscreen,
}: GalleryInfoButtonProps) => {
  if (!currentLabel) return null;

  return (
    <button
      onClick={() => setShowInfo((prev) => !prev)}
      className={`absolute bottom-0 right-0 z-10 ${isFullscreen ? 'p-3' : 'p-2'} rounded-sm ${
        showInfo ? 'bg-transparent' : 'bg-slate-900/80'
      } transition-colors`}
      aria-label={showInfo ? 'Skrýt informace o obrázku' : 'Zobrazit informace o obrázku'}
    >
      <Info
        className={`${isFullscreen ? 'h-7 w-7' : 'h-6 w-6'} info-button ${
          showInfo ? 'text-gray-200' : 'text-white'
        }`}
        strokeWidth={3}
      />
    </button>
  );
};

export default GalleryInfoButton;
