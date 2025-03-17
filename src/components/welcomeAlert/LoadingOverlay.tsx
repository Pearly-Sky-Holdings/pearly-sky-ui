import { Backdrop, CircularProgress, Typography } from "@mui/material";

interface LoadingOverlayProps {
  open: boolean;
  message?: string;
  subMessage?: string;
}

const LoadingOverlay = ({ open, message = "Processing your order...", subMessage = "Please wait while we confirm your booking" }: LoadingOverlayProps) => {
  return (
    <Backdrop
      sx={{ 
        color: '#fff', 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        flexDirection: 'column',
        gap: 2
      }}
      open={open}
    >
      <CircularProgress color="inherit" size={60} />
      <Typography variant="h6" component="div">
        {message}
      </Typography>
      <Typography variant="body2" component="div">
        {subMessage}
      </Typography>
    </Backdrop>
  );
};

export default LoadingOverlay;