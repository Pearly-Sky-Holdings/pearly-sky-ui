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

export default function NavigationBar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [servicesAnchorEl, setServicesAnchorEl] = React.useState<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services", isDropdown: true },
    { label: "Company", path: "https://pearlyskyplc.com" },
    { label: "Contact Us", path: "/contactUsPage" },
    { label: "Careers", path: "/career" },
    { label: "Our Locations", path: "/our-locations" },
    { label: "About Us", path: "/about-us" },
  ];

  const serviceDropdownItems = [
    { label: "Regular Basic Cleaning", path: "/regular-basic-cleaning" },
    { label: "One Time Cleaning", path: "/one-time-cleaning" },
    { label: "Last Minute Cleaning", path: "/last-minute-cleaning" },
    { label: "Deep Cleaning", path: "/deep_cleaning" },
    { label: "Move In/Out Cleaning", path: "/move_in_out_cleaning" },
    { label: "Post Construction & Renovation Cleaning", path: "/post_constructor_cleaning" },
    { label: "Airbnb And Short Term Rental Cleaning", path: "/airbnb_and_short_service" },
    { label: "Child Care Cleaning", path: "/child_care_cleaning" },
    { label: "Elder Care Cleaning", path: "/elder_care_cleaning" },
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

  const [servicesOpen, setServicesOpen] = React.useState(false);

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
            <React.Fragment key={item.label}>
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
          <ListItemText primary="Services" />
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
                      key={subItem.label}
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
                      <ListItemText primary={subItem.label} />
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ) : (
            <ListItem
              key={item.label}
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
              <ListItemText primary={item.label} />
            </ListItem>
          )
        ))}
      </List>
    </Drawer>
  );
  

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#002F6D", width: "100%", left: 0, top: 0 }}>
      <ScrollToTop />
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <img src={companyLogo} alt="logo" style={{ width: isMobile ? "30%" : "40%" }} />
          </Link>
        </Box>
        {isMobile ? (
          <IconButton color="inherit" aria-label="menu" onClick={toggleMobileMenu} edge="start">
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {navItems.map(({ label, path, isDropdown }) => (
              <Box key={label} sx={{ display: "flex", alignItems: "center" }}>
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
                      <Typography>{label}</Typography>
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
                        <MenuItem key={subItem.label} onClick={() => handleMenuItemClick(subItem.path)}>
                          <Typography>{subItem.label}</Typography>
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
                    <Typography>{label}</Typography>
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
