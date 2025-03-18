interface GalleryInfoTextProps {
  showInfo: boolean;
  currentLabel: string;
}

const GalleryInfoText = ({ showInfo, currentLabel }: GalleryInfoTextProps) => {
  if (!showInfo || !currentLabel) return null;

  return (
    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
      <p className="text-white text-sm">{currentLabel}</p>
    </div>
  );
};

export default GalleryInfoText;
