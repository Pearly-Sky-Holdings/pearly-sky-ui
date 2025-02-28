import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { styled } from "@mui/system";

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    color: 'white',
    marginTop: theme.spacing(2),
}));

const UpdateComingSoon = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 100);

    const dotsTimer = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length >= 3) return '';
        return prevDots + '.';
      });
    }, 500);

    // Pulsing effect for logo
    const pulseTimer = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(progressTimer);
      clearInterval(dotsTimer);
      clearInterval(pulseTimer);
    };
  }, []);

  // Calculate pulsing glow intensity
  const glowIntensity = Math.sin(pulse * 0.1) * 0.5 + 0.5;
  const glowColor = `rgba(255, 255, 255, ${0.3 + glowIntensity * 0.7})`;
  
  return (
    <div className="flex flex-col items-center justify-cente bg-gradient-to-br from-blue-600 to-blue-200 text-white p-6">
       <div className="w-full bg-white/20 rounded-full h-2 mb-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl max-w-md w-full">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo placeholder with flickering effect */}
          <div 
            className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center mb-2 relative overflow-hidden"
            style={{
              boxShadow: `0 0 ${15 + glowIntensity * 20}px ${glowColor}`,
              transition: 'box-shadow 0.2s ease-in-out'
            }}
          >
            {/* Inner light effect */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(255,255,255,${0.1 + glowIntensity * 0.4}) 0%, rgba(255,255,255,0) 70%)`,
                opacity: 0.7 + glowIntensity * 0.3
              }}
            />
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 relative z-10" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{
                filter: `drop-shadow(0 0 ${3 + glowIntensity * 5}px rgba(255, 255, 255, ${0.7 + glowIntensity * 0.3}))`,
                opacity: 0.7 + glowIntensity * 0.3
              }}
            >
              <path d="M12 16V12M12 8h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold">Update Coming Soon</h1>
          
          
          <p className="text-lg text-white/80">
            We're working on something amazing for you. Please check back later.
          </p>
          

          <StyledCircularProgress size={60} thickness={5} />

         
          
          <p className="text-white/70 text-sm font-medium">
            Loading{dots}
          </p>
          
         
        </div>
      </div>
    </div>
  );
};

export default UpdateComingSoon;