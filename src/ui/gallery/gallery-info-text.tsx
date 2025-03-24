interface GalleryInfoTextProps {
  showInfo: boolean;
  currentLabel: string;
  expanded?: boolean;
  width?: number;
}

const GalleryInfoText = ({ showInfo, currentLabel, expanded, width }: GalleryInfoTextProps) => {
  if (!showInfo || !currentLabel) return null;

  const isExpanded = expanded ? 'w-fit text-2xl' : 'w-full';

  return (
    <figcaption
      style={{ maxWidth: width }}
      className={`absolute place-self-center text-white  ${isExpanded} bg-black/60 backdrop-blur-md label-show bottom-0 py-1 z-50 px-8 rounded-t-sm`}
    >
      {currentLabel}
    </figcaption>
  );
};

export default GalleryInfoText;
