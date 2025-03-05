import { useRef, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface VideoItem {
  video: string;
}

interface VideoFrameProps {
  videoItems: VideoItem[];
}

const VideoFrame = ({ videoItems }: VideoFrameProps) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        p: 2,
        bgcolor: "grey.100",
      }}
    >
      {videoItems.slice(0, 2).map((item, index) => (
        <Box
          key={index}
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
            height: {
              xs: "250px",
              md: "400px",
            },
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={item.video}
            style={{
              width: "100%",
              height: "100%",
              objectFit: isMobile ? "contain" : "fill",
              borderRadius: "12px",
            }}
            autoPlay
            muted
            loop
            playsInline
          />
        </Box>
      ))}
    </Box>
  );
};

export default VideoFrame;
