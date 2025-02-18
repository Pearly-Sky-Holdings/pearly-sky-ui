import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from "./components/topBar/topBar";
import NavigationBar from "./components/navigationBar/navigationBar";
import HomePage from "./pages/homePage/homePage";
import SecondPage from './pages/secondPage/secondPage';
import OurServicePage from './pages/ourServicePage/ourServicePage';
import GalleryPage from './pages/galleryPage/galleryPage';
import InformationPage from './pages/informationPage/informationPage';
import TeamOfExpertsPage from './pages/teamOfExpertsPage/teamOfExpertsPage';
import OurShowcasePage from './pages/ourShowCasePage/ourShowCasePage';
import Footer from './pages/footerPage/footerPage';
import UiContactUsPage from './pages/HomeContactUsPage/uiContactUsPage.tsx';
import ContactUsPage from './pages/contactUsPage/contactUsPage';
import OurLocations from "./pages/ourLocationPage/ourLocationPage.tsx";
import CleanServices from './pages/cleanServices/cleanServices';
import CircularProgress from '@mui/material/CircularProgress';
import LoginPage from './pages/loginPage/looginPage.tsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: `'Poppins', sans-serif`,
    },
    palette: {
      mode: 'light',
      text: {
        primary: 'rgba(3, 3, 3, 0.87)',
      },
      background: {
        default: '#ffffff',
      },
    },
  });

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgba(37, 150, 190, 0.2)',
      }}>
        <CircularProgress size={100} />
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopBar />
        <NavigationBar />
        <Routes>
          {/* Main one-page scrollable site */}
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <SecondPage />
                <OurServicePage />
                <InformationPage/>
                <GalleryPage />
                <TeamOfExpertsPage />
                <OurShowcasePage />
                <CleanServices />
                <UiContactUsPage />
                <Footer />
              </>
            }
          />
          {/* Standalone OurLocations page */}
          <Route
            path="/our-locations"
            element={
              <>
                <OurLocations />
                <Footer />
              </>
            }
          />
          <Route
            path="/contactUsPage"
            element={
              <>
                <ContactUsPage />
                <Footer />
              </>              
            }
          />
          <Route
            path="/login"
            element={
              <>
                <LoginPage />
                
              </>              
            }                       
           />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;