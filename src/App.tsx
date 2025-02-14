import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import TopBar from "./components/topBar/topBar";
import NavigationBar from "./components/navigationBar/navigationBar";
import HomePage from "./pages/homePage/homePage";
import SecondPage from './pages/secondPage/secondPage';
import OurServicePage from './pages/ourServicePage/ourServicePage';
import GalleryPage from './pages/galleryPage/galleryPage';
import InformationPage from './pages/informationPage/informationPage';
import TeamOfExpertsPage from './pages/teamOfExpertsPage/teamOfExpertsPage';
import OurShowcasePage from './pages/ourShowCasePage/ourShowCasePage';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: `'Poppins', sans-serif`,
    },
    palette: {
      mode: 'light', // Ensures light mode
      text: {
        primary: 'rgba(3, 3, 3, 0.87)',
      },
      background: {
        default: '#ffffff',
      },
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      
      <Router>
      <NavigationBar />
      <HomePage />
      <SecondPage />
      <OurServicePage />
      <InformationPage/>
      <GalleryPage />
      <TeamOfExpertsPage/>
      <OurShowcasePage/>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/services" element={<ServicesPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/other-services" element={<OtherServicesPage />} /> */}
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;



