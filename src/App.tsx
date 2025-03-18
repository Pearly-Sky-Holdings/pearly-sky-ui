import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topBar/topBar";
import NavigationBar from "./components/navigationBar/navigationBar";
import HomePage from "./pages/homePage/homePage";
import SecondPage from "./pages/secondPage/secondPage";
import OurServicePage from "./pages/ourServicePage/ourServicePage";
import GalleryPage from "./pages/galleryPage/galleryPage";
import InformationPage from "./pages/informationPage/informationPage";
import TeamOfExpertsPage from "./pages/teamOfExpertsPage/teamOfExpertsPage";
import SectorPage from "./pages/sectorPage/sectorPage";
import OurShowcasePage from "./pages/ourShowCasePage/ourShowCasePage";
import Footer from "./pages/footerPage/footerPage";
import UiContactUsPage from "./pages/HomeContactUsPage/uiContactUsPage.tsx";
import ContactUsPage from "./pages/contactUsPage/contactUsPage";
import OurLocations from "./pages/ourLocationPage/ourLocationPage.tsx";
import CleanServices from "./pages/cleanServices/cleanServices";
import CircularProgress from "@mui/material/CircularProgress";
import LoginPage from "./pages/loginPage/looginPage.tsx";
import CheckoutPage from "./pages/checkoutPage/checkoutPage.tsx";
import RegularBasicCleaning from "./pages/servicesPages/regularbasicCleaningPage.tsx";
import OneTimeCleaning from "./pages/servicesPages/oneTimeCleaningPage.tsx";
import LastMinuteCleaningPage from "./pages/servicesPages/lastMinuteCleaningPage.tsx";
import DeepCleaningPage from "./pages/servicesPages/deepCleaningPage.tsx";
import MoveInOutCleaningPage from "./pages/servicesPages/moveInOutCleaningPage.tsx";
import PostConstructionCleaningPage from "./pages/servicesPages/postConstructionCleaningPage.tsx";
import AirbnbAndShortService from "./pages/servicesPages/AirbnbCleaning.tsx";
import ChildCareCleaningPage from "./pages/servicesPages/childCareCleaning.tsx";
import ElderCareCleaningPage from "./pages/servicesPages/elderCareCleaning.tsx";
import UpdateComingSoon from "./components/updateComingSoon/UpdateComingSoon.tsx";
import CleaningIndustryRegulation from "./pages/cleanServices/cleaningIndustryRegulation.tsx";
import RoboticsCleaning from "./pages/cleanServices/roboticsCleaning.tsx";
import CleaningHospitality from "./pages/cleanServices/cleaningHospitality.tsx";
import HygienePublicSpaces from "./pages/cleanServices/hygienePublicSpace.tsx";
import CareerPage from "./pages/careerPage/careerPage.tsx";
import SanitizationAndDisinfection from "./pages/servicesPages/SanitizationAndDisinfection.tsx";
import CustomerPage from "./pages/customerPage/customerPage.tsx";
import AboutUsPage from "./pages/aboutUsPage/aboutUsPage.tsx";
import Quotation from "./components/quotation/quotation.tsx";
import CommercialAndOfficeCleaning from "./pages/servicesPages/commercialAndOfficeCleaning.tsx";
import CarpetCleaning from "./pages/servicesPages/carpetCleaning.tsx";
import CustomerDashboard from "./pages/customerDashboard/customerDashboard.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import Settings from "./pages/customerDashboard/setting.tsx";
import Help from "./pages/customerDashboard/help.tsx";
import MoveInAndOutTransportCleaning from "./pages/servicesPages/MoveInAndOutTransportCleaning.tsx";
import { LanguageProvider } from './context/LanguageContext';
import SteamCleaning from "./pages/servicesPages/SteamCleaning.tsx";
import PressureWashing from "./pages/servicesPages/pressureWashing.tsx";
import SpecialEventCleaning from "./pages/servicesPages/specialEventCleaning.tsx";
import Poolcleaning from "./pages/servicesPages/poolCleaning.tsx";
import WelcomeAlert from './components/welcomeAlert/WelcomeAlert';
import CookiesPolicy from "./pages/cookiesPolicy/cookiesPolicy.tsx";
import TermsAndConditionsPage from "./pages/termsAndConditions/termsAndConditions.tsx";
import CleanersCareerAdvertisementPage from "./pages/jobAdvertisement/cleanerAdvertisment.tsx";
import ChildCareWorkerAdvertismentPage from "./pages/jobAdvertisement/childCareWorkerAdvertisment.tsx";
import EldersCareWorkerAdvertisment from "./pages/jobAdvertisement/eldersCareWorkerAdvertisment.tsx";
import CleanerForm from "./components/jobApplyForm/jobApplyForm.tsx";
import JobApplyForm from "./components/jobApplyForm/jobApplyForm.tsx";

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
      mode: "light",
      text: {
        primary: "rgba(3, 3, 3, 0.87)",
      },
      background: {
        default: "#ffffff",
      },
    },
  });

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "rgba(37, 150, 190, 0.2)",
        }}
      >
        <CircularProgress size={100} />
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <WelcomeAlert />
      <LanguageProvider>
      <Router>
      <TopBar />
      <NavigationBar />
        <Routes>
        <Route element={<MainLayout />}>
          <Route path="/customer-dashboard/:customerId" element={<CustomerDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Route>
        </Routes>
        

        

        <Routes>
          {/* Main one-page scrollable site */}
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <SecondPage />
                <OurServicePage />
                <InformationPage />
                <GalleryPage />
                <SectorPage />
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
            path="/regular-basic-cleaning"
            element={
              <>
                <RegularBasicCleaning />
                <Footer />
              </>
            }
          />

          <Route
            path="/one-time-cleaning"
            element={
              <>
                <OneTimeCleaning />
                <Footer />
              </>
            }
          />
          <Route
            path="/last-minute-cleaning"
            element={
              <>
                <LastMinuteCleaningPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/deep_cleaning"
            element={
              <>
                <DeepCleaningPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/move_in_out_cleaning"
            element={
              <>
                <MoveInOutCleaningPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/post_constructor_cleaning"
            element={
              <>
                <PostConstructionCleaningPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/airbnb_and_short_service"
            element={
              <>
                <AirbnbAndShortService />
                <Footer />
              </>
            }
          />
          <Route
            path="/child_care_cleaning"
            element={
              <>
                <ChildCareCleaningPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/elder_care_cleaning"
            element={
              <>
                <ElderCareCleaningPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/sanitization_cleaning"
            element={
              <>
                <SanitizationAndDisinfection />
                <Footer />
              </>
            }
          />
          <Route
            path="/commercial_cleaning"
            element={
              <>
                <CommercialAndOfficeCleaning />
                <Footer />
              </>
            }
          />
           <Route
            path="/carpet_cleaning"
            element={
              <>
                <CarpetCleaning />
                <Footer />
              </>
            }
          />
          <Route
            path="/move_in_out_and_transport_cleaning"
            element={
              <>
                <MoveInAndOutTransportCleaning />
                <Footer />
              </>
            }
          />
          <Route
            path="/steam_cleaning"
            element={
              <>
                <SteamCleaning />
                <Footer />
              </>
            }
          />
          <Route
            path="/pressure_washing"
            element={
              <>
                <PressureWashing/>
                <Footer />
              </>
            }
          />
          <Route
            path="/special_event_cleaning"
            element={
              <>
                <SpecialEventCleaning/>
                <Footer />
              </>
            }
          />
          <Route
            path="/pool_cleaning"
            element={
              <>
                <Poolcleaning/>
                <Footer />
              </>
            }
          />

          {/* Read more pages */}
          <Route
            path="/cleaning-industry-regulation"
            element={
              <>
                <CleaningIndustryRegulation />

                <Footer />
              </>
            }
          />
          <Route
            path="/robotics-cleaning"
            element={
              <>
                <RoboticsCleaning />

                <Footer />
              </>
            }
          />
          <Route
            path="/cleaning-hospitality"
            element={
              <>
                <CleaningHospitality />

                <Footer />
              </>
            }
          />

          <Route
            path="/hygiene-public-spaces"
            element={
              <>
                <HygienePublicSpaces />

                <Footer />
              </>
            }
          />

          {/* Career Page */}
          <Route
            path="/career"
            element={
              <>
                <CareerPage />
                <Footer />
              </>
            }
          />

          {/* Customer Page */}
          <Route
            path="/customer_page"
            element={
              <>
                <CustomerPage />
                <Footer />
              </>
            }
          />
          {/* AboutUs Page */}
          <Route
            path="/aboutUs"
            element={
              <>
                <AboutUsPage />
                <Footer />
              </>
            }
          />


           {/*Cookies Policy*/}
           <Route
            path="/cookie_policy"
            element={
              <>
                <CookiesPolicy />
                <Footer />
              </>
            }
          />

           {/*Terms And Conditions*/}
           <Route
            path="/terms_and_conditions_page"
            element={
              <>
                <TermsAndConditionsPage />
                <Footer />
              </>
            }
          />

          {/*Advertisement Page*/}
          <Route
            path="/application-form/1"
            element={
              <>
                <CleanersCareerAdvertisementPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/application-form/2"
            element={
              <>
                <ChildCareWorkerAdvertismentPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/application-form/3"
            element={
              <>
                <EldersCareWorkerAdvertisment />

          <Route
            path="/jobApplyForm"
            element={
              <>
                <JobApplyForm />

                <Footer />
              </>
            }
          />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/quotation" element={<Quotation />} />

          <Route path="/upcomming" element={<UpdateComingSoon />} />
        </Routes>
      </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;