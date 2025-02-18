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
import { Link, useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { companyLogo } from "../../config/images";

export default function NavigationBar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState<HTMLElement | null>(null);
  const [otherServicesAnchorEl, setOtherServicesAnchorEl] = React.useState<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services", isDropdown: true },
    { label: "Company", path: "/company" },
    { label: "Contact Us", path: "/contactUsPage" },
    { label: "Careers", path: "/careers" },
    { label: "Other Services", path: "/other-services", isDropdown: true },
    { label: "Our Locations", path: "/our-locations" },
  ];

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleOtherServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setOtherServicesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setServicesAnchorEl(null);
    setOtherServicesAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const MobileDrawer = () => (
    <Drawer
      anchor="top"
      open={mobileMenuOpen}
      onClose={toggleMobileMenu}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          marginTop: '64px',
          backgroundColor: '#002F6D',
        },
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.label}
            component={Link}
            to={item.path}
            onClick={toggleMobileMenu}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemText primary={item.label} />
            {item.isDropdown && (
              <KeyboardArrowDownIcon sx={{ color: 'white', fontSize: '20px' }} />
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#002F6D", width: "100%", left: 0, top: 0 }}>
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
            {navItems.map(({ label, path, isDropdown }) => (
              <Box key={label} sx={{ display: "flex", alignItems: "center" }}>
                {isDropdown ? (
                  <>
                    <IconButton
                      onClick={label === "Services" ? handleServicesClick : handleOtherServicesClick}
                      sx={{
                        color: "white",
                        fontWeight: location.pathname.includes(path) ? "bold" : "normal",
                        borderBottom: location.pathname.includes(path) ? "2px solid white" : "none",
                        transition: "border-bottom 0.3s",
                      }}
                    >
                      <Typography>{label}</Typography>
                      <KeyboardArrowDownIcon sx={{ color: "white", fontSize: "20px" }} />
                    </IconButton>
                    <Menu
                      anchorEl={label === "Services" ? servicesAnchorEl : otherServicesAnchorEl}
                      open={Boolean(label === "Services" ? servicesAnchorEl : otherServicesAnchorEl)}
                      onClose={handleClose}
                    >
                      {["Service 1", "Service 2"].map((service, index) => (
                        <MenuItem key={index} onClick={handleClose}>
                          <Link to={path} style={{ textDecoration: "none", color: "black" }}>
                            {service}
                          </Link>
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

                    <KeyboardArrowDownIcon
                      sx={{
                        color: "white", 
                        fontSize: "20px", 
                      }}
                    />
                  </IconButton>
                  <Menu
                    anchorEl={label === "Services" ? servicesAnchorEl : otherServicesAnchorEl}
                    open={Boolean(label === "Services" ? servicesAnchorEl : otherServicesAnchorEl)}
                    onClose={handleClose}
                  >
                    {label === "Services" ? (
                      <>
                        <MenuItem onClick={handleClose}>
                          <Link to="/regular-basic-cleaning" style={{ textDecoration: "none", color: "black" }}>
                            Regular Basic Cleaning
                          </Link>
                        </MenuItem>
                      </>
                    ) : (
                      <>
                        {/* Other services dropdown items */}
                      </>
                    )}
                  </Menu>
                </>
              ) : (
                <Link
                  to={path}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: "0 10px",
                    fontWeight: location.pathname === path ? "bold" : "normal", // Bold for active tab
                    borderBottom: location.pathname === path ? "2px solid white" : "none", // Underline active tab
                    transition: "border-bottom 0.3s",
                  }}
                >
                  <Typography>{label}</Typography>
                </Link>
              )}
            </Box>
          ))}
        </Box>

      </Toolbar>
    </AppBar>
  );
}