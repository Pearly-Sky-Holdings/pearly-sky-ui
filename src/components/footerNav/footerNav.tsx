import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const FooterNav: React.FC = () => {
  const navigate = useNavigate();
  const { translate } = useLanguage();
  const [openServices, setOpenServices] = useState(false);

  const toggleServices = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpenServices(!openServices);
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const serviceLinks = [
    { labelKey: "nregularBasicCleaning", path: "/regular-basic-cleaning" },
    { labelKey: "noneTimeCleaning", path: "/one-time-cleaning" },
    { labelKey: "nlastMinuteCleaning", path: "/last-minute-cleaning" },
    { labelKey: "ndeepCleaning", path: "/deep_cleaning" },
    { labelKey: "nmoveInOutCleaning", path: "/move_in_out_cleaning" },
    { labelKey: "npostConstructionCleaning", path: "/post_constructor_cleaning" },
    { labelKey: "nairbnbCleaning", path: "/airbnb_and_short_service" },
    { labelKey: "nchildCareCleaning", path: "/child_care_cleaning" },
    { labelKey: "nelderCareCleaning", path: "/elder_care_cleaning" },
    { labelKey: "nsanitizationDisinfection", path: "/sanitization_cleaning" },
    { labelKey: "ncommercialOfficeCleaning", path: "/commercial_cleaning" },
    { labelKey: "ncarpetCleaning", path: "/carpet_cleaning" },
    { labelKey: "nmoveInOutTransportService", path: "/move_in_out_and_transport_cleaning" },
    { labelKey: "nsteamCleaning", path: "/steam_cleaning" },
    { labelKey: "npressureWashing", path: "/pressure_washing" },
    { labelKey: "neventCleaning", path: "/special_event_cleaning" },
    { labelKey: "npoolCleaning", path: "/pool_cleaning" },
    { labelKey: "nlaundryServices", path: "/upcomming" },
  ];

  const navigationLinks = [
    { labelKey: "aboutUs", path: "/aboutUs" },
    { labelKey: "company", path: "https://pearlyskyplc.com" },  
    { labelKey: "ourCustomers", path: "/customer_page" },
    { labelKey: "career", path: "/career" }, 
    { labelKey: "ourLocations", path: "/our-locations" },
    { labelKey: "contactUs", path: "/contactUsPage" },
  ];

  return (
    <Box
      sx={{
        marginLeft: { xs: 0, md: 2 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack spacing={2} alignItems={{ xs: "center" }}>
        <Typography
          component="a"
          href="/"
          onClick={(e) => handleNavigation(e, "/")}
          sx={linkStyle}
        >
          {translate('home')}
        </Typography>

        {/* Services with Collapsible Dropdown */}
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              "&:hover": { opacity: 0.8, color:"GrayText" },
              justifyContent: "center",
            }}
            onClick={toggleServices}
          >
            <Typography variant="body1" sx={linkStyle}>
              {translate('services')}
            </Typography>
            {openServices ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Box>
          {openServices && (
            <Stack
              spacing={1}
              sx={{
                mt: 1,
                alignItems: "center",
              }}
            >
              {serviceLinks.map((service, index) => (
                <Typography
                  key={index}
                  component="a"
                  href={service.path}
                  onClick={(e) => handleNavigation(e, service.path)}
                  sx={{ ...linkStyle, fontSize: "0.9rem" }}
                >
                  {translate(service.labelKey)}
                </Typography>
              ))}
            </Stack>
          )}
        </Box>

        {navigationLinks.map((link, index) => (
          <Typography
            key={index}
            component="a"
            href={link.path}
            onClick={(e) => handleNavigation(e, link.path)}
            sx={linkStyle}
          >
            {translate(link.labelKey)}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

const linkStyle = {
  cursor: "pointer",
  "&:hover": { opacity: 0.8 },
  textDecoration: "none",
  color: "inherit",
};

export default FooterNav;