import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { companyLogo } from "../../config/images";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { useLanguage } from "../../context/LanguageContext";

export default function NavigationBar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const { translate } = useLanguage();

  const [servicesAnchorEl, setServicesAnchorEl] = React.useState<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const navItems = [
    { labelKey: "home", path: "/" },
    { labelKey: "aboutUs", path: "/aboutUs" },
    { labelKey: "company", path: "https://pearlyskyplc.com" },
    { labelKey: "services", path: "/services", isDropdown: true },  
    { labelKey: "ourCustomers", path: "/customer_page" }, 
    { labelKey: "career", path: "/career" },     
    { labelKey: "ourLocations", path: "/our-locations" },    
    { labelKey: "contactUs", path: "/contactUsPage" },
  ];

  const serviceDropdownItems = [
    { labelKey: "nregularBasicCleaning", path: "/regular-basic-cleaning" },
    { labelKey: "noneTimeCleaning", path: "/one-time-cleaning" },
    { labelKey: "nlastMinuteCleaning", path: "/last-minute-cleaning" },
    { labelKey: "ndeepCleaning", path: "/deep_cleaning" },
    { labelKey: "nmoveInOutCleaning", path: "/move_in_out_cleaning" },
    { labelKey: "npostConstructionCleaning", path: "/post_constructor_cleaning" },
    { labelKey: "nairbnbCleaning", path: "/airbnb_and_short_service" },
    { labelKey: "nchildCareCleaning", path: "/child_care_cleaning" },
    { labelKey: "nelderCareCleaning", path: "/elder_care_cleaning" },   
    { labelKey: "ncommercialOfficeCleaning", path: "/commercial_cleaning" },
    { labelKey: "nsanitizationDisinfection", path: "/sanitization_cleaning" },
    { labelKey: "ncarpetCleaning", path: "/carpet_cleaning" },
    { labelKey: "nmoveInOutTransportService", path: "/move_in_out_and_transport_cleaning" },
    { labelKey: "nsteamCleaning", path: "/steam_cleaning" },
    { labelKey: "neventCleaning", path: "/special_event_cleaning" },
    { labelKey: "npoolCleaning", path: "/pool_cleaning" },
    { labelKey: "npressureWashing", path: "/pressure_washing" },
    { labelKey: "nlaundryServices", path: "/upcomming" },
  ];

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleCloseDropdowns = () => {
    setServicesAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    handleCloseDropdowns();
  };

  const toggleServicesDropdown = () => {
    setServicesOpen(!servicesOpen);
  };
  
  const MobileDrawer = () => (
    <Drawer
      anchor="top"
      open={mobileMenuOpen}
      onClose={toggleMobileMenu}
      sx={{
        "& .MuiDrawer-paper": {
          width: "100%",
          marginTop: "64px",
          backgroundColor: "#002F6D",
        },
      }}
    >
      <List>
        {navItems.map((item) => (
          item.isDropdown ? (
            <React.Fragment key={item.labelKey}>
              <ListItem
                component="div"
                onClick={toggleServicesDropdown}
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  padding: "10px 16px",
                }}
              >
                <ListItemText primary={translate('services')} />
                <KeyboardArrowDownIcon
                  sx={{
                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </ListItem>

              {servicesOpen && (
                <List sx={{ pl: 4, backgroundColor: "#003366" }}>
                  {serviceDropdownItems.map((subItem) => (
                    <ListItem
                      key={subItem.labelKey}
                      component={Link}
                      to={subItem.path}
                      onClick={toggleMobileMenu}
                      sx={{
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(111, 163, 179, 0.1)",
                        },
                      }}
                    >
                      <ListItemText primary={translate(subItem.labelKey)} />
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ) : (
            <ListItem
              key={item.labelKey}
              component={Link}
              to={item.path}
              onClick={toggleMobileMenu}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(111, 163, 179, 0.1)",
                },
              }}
            >
              <ListItemText primary={translate(item.labelKey)} />
            </ListItem>
          )
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#002F6D", width: "100%", left: 0, top: 0 }}>
      <ScrollToTop />
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <img src={companyLogo} alt={translate('companyLogoAlt')} style={{ width: isMobile ? "30%" : "40%" }} />
          </Link>
        </Box>
        {isMobile ? (
          <IconButton color="inherit" aria-label="menu" onClick={toggleMobileMenu} edge="start">
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {navItems.map(({ labelKey, path, isDropdown }) => (
              <Box key={labelKey} sx={{ display: "flex", alignItems: "center" }}>
                {isDropdown ? (
                  <>
                    <IconButton
                      onClick={handleServicesClick}
                      sx={{
                        color: "white",
                        fontWeight: location.pathname.includes(path) ? "bold" : "normal",
                        borderBottom: location.pathname.includes(path) ? "2px solid white" : "none",
                        transition: "border-bottom 0.3s",
                      }}
                    >
                      <Typography>{translate(labelKey)}</Typography>
                      <KeyboardArrowDownIcon
                        sx={{
                          color: "white",
                          fontSize: "20px",
                          transform: servicesAnchorEl ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s",
                        }}
                      />
                    </IconButton>
                    <Menu
                      anchorEl={servicesAnchorEl}
                      open={Boolean(servicesAnchorEl)}
                      onClose={handleCloseDropdowns}
                      disableScrollLock
                      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                      transformOrigin={{ vertical: "top", horizontal: "center" }}
                      sx={{ "& .MuiPaper-root": { marginTop: "8px" } }}
                    >
                      {serviceDropdownItems.map((subItem) => (
                        <MenuItem key={subItem.labelKey} onClick={() => handleMenuItemClick(subItem.path)}>
                          <Typography>{translate(subItem.labelKey)}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Link
                    to={path}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      padding: "0 10px",
                      fontWeight: location.pathname === path ? "bold" : "normal",
                      borderBottom: location.pathname === path ? "2px solid white" : "none",
                      transition: "border-bottom 0.3s",
                    }}
                  >
                    <Typography>{translate(labelKey)}</Typography>
                  </Link>
                )}
              </Box>
            ))}
          </Box>
        )}
        {isMobile && <MobileDrawer />}
      </Toolbar>
    </AppBar>
  );
}