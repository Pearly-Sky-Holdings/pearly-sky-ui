import { useRef, useEffect } from "react";

interface VideoItem {
  video: string;
}

interface VideoFrameProps {
  videoItems: VideoItem[];
}

const VideoFrame = ({ videoItems }: VideoFrameProps) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play();
        video.muted = true;
        video.loop = true;
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center gap-4 p-4 bg-gray-100">
      {videoItems.slice(0, 2).map((item, index) => (
        <div
          key={index}
          className="w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={item.video}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>
      ))}
    </div>
  );
};

export default VideoFrame;