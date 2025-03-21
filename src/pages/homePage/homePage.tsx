import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  homePageImage1,
  homePageImage4,
  homePageImage2,
  homePageImage3,
} from "../../config/images";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import CookieConsentAlert from "../../components/welcomeAlert/WelcomeAlert"; // Import the new component
import "./HomePage.css";

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { translate } = useLanguage();

  const allImages = [
    homePageImage1,
    homePageImage2,
    homePageImage3,
    homePageImage4,
  ];
  const imagePairs = [
    [homePageImage1, homePageImage2],
    [homePageImage3, homePageImage4],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
          setIsAnimating(false);
        }, 500);
      } else {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
          setIsAnimating(false);
        }, 500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, allImages.length, imagePairs.length]);

  const handlePrevImage = () => {
    if (isMobile && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    } else if (!isMobile && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? imagePairs.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleNextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        if (isMobile) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
        }
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        p: isMobile ? 2 : 6,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Cookie Consent Popup */}
      <CookieConsentAlert />

      {/* Header */}
      <Typography
        variant={isMobile ? "h5" : "h4"}
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(90deg, #002F6D, #0D90C8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
          mt: 5,
          px: isMobile ? 2 : 0,
        }}
      >
        {translate('welcomeTitle')}
      </Typography>

      {/* Sub-description */}
      <Typography
        variant={isMobile ? "body1" : "h6"}
        sx={{
          color: "#555",
          mb: 3,
          maxWidth: "700px",
          margin: "auto",
          px: isMobile ? 2 : 0,
        }}
      >
        {translate('welcomeDescription')}
      </Typography>

      {/* Contact Us Button */}
      <Button
        variant="contained"
        component={Link}
        to="/contactUsPage"
        sx={{
          backgroundColor: "#002F6D",
          borderRadius: "12px",
          padding: "6px 20px",
          fontSize: isMobile ? "14px" : "16px",
          textTransform: "none",
          marginTop: "3%",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#125ea6" },
        }}
      >
        {translate('contactUs')}
      </Button>

      {/* Space */}
      <Box sx={{ height: isMobile ? 2 : 1 }} />

      {/* Images Section */}
      <Box
        sx={{
          mt: 5,
          px: isMobile ? 2 : 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {isMobile ? (
          <Box sx={{ position: "relative", height: "300px", mb: 4 }}>
            <AnimatePresence>
              {allImages.map(
                (imgSrc, i) =>
                  currentIndex === i && (
                    <motion.div
                      key={i}
                      className={`image-container ${
                        isAnimating ? "animating" : ""
                      }`}
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { duration: 0.8 },
                      }}
                      exit={{
                        opacity: 0,
                        filter: "blur(10px)",
                        transition: { duration: 0.5 },
                      }}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "300px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
                      }}
                    >
                      <div className="image-background-animation">
                        <img
                          src={imgSrc}
                          alt={translate('homePageImageAlt')}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Navigation Icons */}
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
                zIndex: 2,
              }}
              aria-label={translate('previousImage')}
            >
              <ChevronLeftIcon sx={{ color: "#002F6D" }} />
            </IconButton>

            <IconButton
              onClick={handleNextImage}
              sx={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
                zIndex: 2,
              }}
              aria-label={translate('nextImage')}
            >
              <ChevronRightIcon sx={{ color: "#002F6D" }} />
            </IconButton>

            {/* Image Navigation Dots */}
            <Box
              sx={{
                position: "absolute",
                bottom: "15px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "8px",
                zIndex: 1,
              }}
            >
              {allImages.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => !isAnimating && setCurrentIndex(i)}
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: currentIndex === i ? "#002F6D" : "#BBB",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  aria-label={translate('goToImage') + (i + 1)}
                />
              ))}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              position: "relative",
            }}
          >
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: "absolute",
                left: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
                zIndex: 2,
              }}
              aria-label={translate('previousImage')}
            >
              <ChevronLeftIcon sx={{ color: "#002F6D" }} />
            </IconButton>

            <AnimatePresence>
              {imagePairs[currentIndex].map((imgSrc, i) => (
                <motion.div
                  key={i}
                  className="image-container"
                  initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                    transition: { duration: 0.8 },
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    scale: 0.95,
                    transition: { duration: 0.5 },
                  }}
                  style={{
                    width: "45%",
                    height: "400px",
                    overflow: "hidden",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
                  }}
                >
                  <div className="image-background-animation">
                    <img
                      src={imgSrc}
                      alt={translate('homePageImageAlt')}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <IconButton
              onClick={handleNextImage}
              sx={{
                position: "absolute",
                right: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
                zIndex: 2,
              }}
              aria-label={translate('nextImage')}
            >
              <ChevronRightIcon sx={{ color: "#002F6D" }} />
            </IconButton>

            {/* Image Navigation Dots */}
            <Box
              sx={{
                position: "absolute",
                bottom: "-25px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "8px",
                zIndex: 1,
              }}
            >
              {imagePairs.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => !isAnimating && setCurrentIndex(i)}
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: currentIndex === i ? "#002F6D" : "#BBB",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  aria-label={translate('goToImage') + (i + 1)}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}