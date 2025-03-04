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
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4 bg-gray-100">
      {videoItems.slice(0, 2).map((item, index) => (
        <div
          key={index}
          className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg transform transition-transform"
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={item.video}
            className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl"
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