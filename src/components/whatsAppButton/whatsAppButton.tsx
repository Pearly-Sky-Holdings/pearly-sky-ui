import { useState, FC } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fab, Tooltip, SxProps, Theme, useTheme } from "@mui/material";

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

const WhatsAppButton: FC<WhatsAppButtonProps> = ({ phoneNumber = "94123456789" }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const theme = useTheme();

  const whatsappStyle: SxProps<Theme> = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    backgroundColor: "#25D366",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1da851",
    },
    transition: "transform 0.3s ease",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    width: 56, // Default size
    height: 56, 
    [theme.breakpoints.down("sm")]: {
      width: 48, // Smaller size for mobile
      height: 48,
      bottom: "15px",
      right: "15px",
    },
  };

  const handleWhatsAppClick = (): void => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Tooltip title="Chat with us on WhatsApp" arrow>
      <Fab
        sx={whatsappStyle}
        color="primary"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;
