import { Info } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface GalleryInfoButtonProps {
  currentLabel: string;
  showInfo: boolean;
  setShowInfo: Dispatch<SetStateAction<boolean>>;
}

const GalleryInfoButton = ({ currentLabel, showInfo, setShowInfo }: GalleryInfoButtonProps) => {
  if (!currentLabel) return null;

  return (
    <button
      onClick={() => setShowInfo((prev) => !prev)}
      className="absolute bottom-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
      aria-label={showInfo ? 'Skrýt informace o obrázku' : 'Zobrazit informace o obrázku'}
    >
      <Info className="h-5 w-5" color="white" />
    </button>
  );
};

export default GalleryInfoButton;
