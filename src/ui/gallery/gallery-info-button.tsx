import { Info } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import GalleryButton from './gallery-button';

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
    <GalleryButton
      onClick={() => setShowInfo((prev) => !prev)}
      isFullscreen={isFullscreen}
      showInfo={showInfo}
      specialClass={`group bottom-0 right-0 info-button  ${
        isFullscreen ? 'pl-5 pt-5' : 'pl-4 pt-4'
      }`}
    >
      <Info
        className={`group-hover:scale-110 transition duration-300 ${
          isFullscreen ? 'h-7 w-7' : 'h-6 w-6'
        }  ${showInfo ? 'text-gray-200' : 'text-white'}`}
        strokeWidth={3}
      />
    </GalleryButton>
  );
};

export default GalleryInfoButton;
