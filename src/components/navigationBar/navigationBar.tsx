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
  const [otherServicesAnchorEl, setOtherServicesAnchorEl] = React.useState<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services", isDropdown: true },
    { label: "Company", path: "" },
    { label: "Contact Us", path: "/contactUsPage" },
    { label: "Careers", path: "/career" },
    { label: "Other Services", path: "/otherServices", isDropdown2: true },
    { label: "Our Locations", path: "/our-locations" },
    { label: "Login", path: "/login" },
  ];

  const serviceDropdownItems = [
    { label: "Regular Basic Cleaning", path: "/regular-basic-cleaning" },
    { label: "One Time Cleaning", path: "/one-time-cleaning" },
    { label: "Last Minute Cleaning", path: "/last-minute-cleaning" },
    { label: "Deep Cleaning", path: "/deep_cleaning" },
    { label: "Move In/Out Cleaning", path: "/move_in_out_cleaning" },
    {label: "Post Construction & Renovation Cleaning", path: "/post_constructor_cleaning",},
    { label: "Airbnb And Short Term Rental Cleaning", path: "/airbnb_and_short_service" },
    { label: "Child Care Cleaning", path: "/child_care_cleaning" },
    { label: "Elder Care Cleaning", path: "/elder_care_cleaning" },

    { label: "Sanitization & Disinfection Booking", path: "/upcomming" },
    { label: "Office and Commercial Cleaning", path: "/upcomming" },
    { label: "Carpet & Upholstery Cleaning Booking", path: "/upcomming" },
    { label: "Move In/Out Transport Service Booking", path: "/upcomming" },
    { label: "Steam Cleaning Booking", path: "/upcomming" },
    { label: "Pressure Washing Booking", path: "/upcomming",},
    { label: "Event Cleaning", path: "/upcomming" },
    { label: "Pool cleaning Booking", path: "/upcomming" },
    { label: "Laundry Services", path: "/upcomming" },
  ];

  const otherServiceDropdownItems = [
    { label: "Pearly Sky cleaning services", path: "/upcomming" },
    { label: "Pearly Sky Engineering and Construction", path: "/upcomming" },
    { label: "Pearly Sky facility maintenance", path: "/upcomming" },
    { label: "Pearly Sky  interior and architectural designing", path: "/upcomming" },
    { label: "Pearly Sky swimming pool and landscaping", path: "/upcomming" },
    { label: "Pearly Sky Hotel and restaurant ", path: "/upcomming" },
    { label: "Pearly Sky cargo services", path: "/upcomming" },
    { label: "Pearly Sky propety magment ", path: "/upcomming" },
    { label: "Pearly Sky real estate", path: "/upcomming" },
  ];


  const handleServicesMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleOtherServicesMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setOtherServicesAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setServicesAnchorEl(null);
    setOtherServicesAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path); 
    handleMouseLeave(); 
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
          <React.Fragment key={item.label}>
            <ListItem
              component={item.isDropdown || item.isDropdown2 ? "div" : Link}
              to={!item.isDropdown && !item.isDropdown2 ? item.path : undefined}
              onClick={() => {
                if (!item.isDropdown && !item.isDropdown2) {
                  toggleMobileMenu();
                } else {
                  handleDropdownClick(item.label);
                }
              }}
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                "&:hover": {
                  backgroundColor: "rgba(111, 163, 179, 0.1)",
                },
              }}
            >
              <ListItemText primary={item.label} />
              {(item.isDropdown || item.isDropdown2) && (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    transform:
                      openDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              )}
            </ListItem>

            {item.isDropdown && openDropdown === item.label && (
              <Box sx={{ pl: 4, backgroundColor: "#003F7D" }}>
                {serviceDropdownItems.map((subItem) => (
                  <ListItem
                    key={subItem.label}
                    component={Link}
                    to={subItem.path}
                    onClick={toggleMobileMenu}
                    sx={{
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgba(111, 163, 179, 0.2)",
                      },
                    }}
                  >
                    <ListItemText primary={subItem.label} />
                  </ListItem>
                ))}
              </Box>
            )}

            {item.isDropdown2 && openDropdown === item.label && (
              <Box sx={{ pl: 4, backgroundColor: "#003F7D" }}>
                {otherServiceDropdownItems.map((subItem) => (
                  <ListItem
                    key={subItem.label}
                    component={Link}
                    to={subItem.path}
                    onClick={toggleMobileMenu}
                    sx={{
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgba(111, 163, 179, 0.2)",
                      },
                    }}
                  >
                    <ListItemText primary={subItem.label} />
                  </ListItem>
                ))}
              </Box>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#002F6D", width: "100%", left: 0, top: 0 }}
    >
      <ScrollToTop />
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        {/* Left side: Company Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <img
              src={companyLogo}
              alt="logo"
              style={{ width: isMobile ? "30%" : "40%" }}
            />
          </Link>
        </Box>

        {/* Mobile Menu Icon */}
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        ) : (
          /* Desktop Navigation Items */
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {navItems.map(({ label, path, isDropdown, isDropdown2 }) => (
              <Box
                key={label}
                sx={{ display: "flex", alignItems: "center" }}
                onMouseEnter={
                  isDropdown || isDropdown2
                    ? label === "Services"
                      ? handleServicesMouseEnter
                      : handleOtherServicesMouseEnter
                    : undefined
                }
                onMouseLeave={isDropdown || isDropdown2 ? handleMouseLeave : undefined}
              >
                {isDropdown || isDropdown2 ? (
                  <>
                    <IconButton
                      sx={{
                        color: "white",
                        fontWeight: location.pathname.includes(path)
                          ? "bold"
                          : "normal",
                        borderBottom: location.pathname.includes(path)
                          ? "2px solid white"
                          : "none",
                        transition: "border-bottom 0.3s",
                      }}
                    >
                      <Typography>{label}</Typography>
                      <KeyboardArrowDownIcon
                        sx={{ color: "white", fontSize: "20px" }}
                      />
                    </IconButton>
                    <Menu
                      anchorEl={
                        label === "Services" ? servicesAnchorEl : otherServicesAnchorEl
                      }
                      open={Boolean(
                        label === "Services" ? servicesAnchorEl : otherServicesAnchorEl
                      )}
                      onClose={handleMouseLeave}
                      disableScrollLock // Prevents page shift
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      sx={{
                        "& .MuiPaper-root": {
                          marginTop: "8px", // Adjust as needed
                        },
                      }}
                    >
                      {(label === "Services" ? serviceDropdownItems : otherServiceDropdownItems).map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          onClick={() => handleMenuItemClick(subItem.path)} // Navigate and close dropdown
                        >
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

        {/* Mobile Menu Drawer */}
        {isMobile && <MobileDrawer />}
      </Toolbar>
    </AppBar>
  );
}