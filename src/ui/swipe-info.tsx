import { useState, useEffect } from 'react';
import swipeGif from '@/assets/images/animaitons/swipe.gif';
import Image from 'next/image';

interface SwipeInfoProps {
  hideTrigger?: boolean;
}

const SwipeInfo = ({ hideTrigger = false }: SwipeInfoProps) => {
  // Use hideTrigger only for manually hiding on swipe
  const [hidden, setHidden] = useState(false);

  // Respond to the hideTrigger prop (e.g. when the user swipes)
  useEffect(() => {
    if (hideTrigger) {
      setHidden(true);
    }
  }, [hideTrigger]);

  return (
    <div className={`swipe-info ${hidden ? 'swipe-info-hidden' : ''}`} aria-hidden={hidden}>
      <div className="swipe-indicator">
        <Image src={swipeGif} alt="Swipe" width={50} height={50} className="swipe-gif" />
      </div>
      <p>Posunout prstem</p>
    </div>
  );
};

export default SwipeInfo;
