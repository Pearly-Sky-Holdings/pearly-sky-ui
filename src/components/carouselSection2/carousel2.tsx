import { useRef, useState, useEffect } from 'react';

interface VideoItem {
  video: string;
}

interface CarouselProps {
  videoItems: VideoItem[];
}

const Carousel = ({ videoItems }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoItems.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [videoItems.length]);

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden">
        <div className="w-full h-[600px] relative flex-shrink-0">
          <video
            ref={videoRef}
            src={videoItems[currentIndex].video}
            className="w-full h-full"
            autoPlay
            muted
            loop
            onEnded={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % videoItems.length)}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;