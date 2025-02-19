import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Dropdown icon
import { companyLogo } from "../../config/images"; // Import company logo

export default function NavigationBar() {
  const location = useLocation(); // Get current route
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState<null | HTMLElement>(null);
  const [otherServicesAnchorEl, setOtherServicesAnchorEl] = React.useState<null | HTMLElement>(null);

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

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#002F6D", width: "100vw", left: 0, top: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", marginRight: "5%" }}>
        {/* Left side: Company Logo */}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "5%" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <img
              src={companyLogo}
              alt="logo"
              style={{ width: "40%" }}
            />
          </Link>
        </Box>

        {/* Right side: Navigation Items */}
        <Box sx={{ display: "flex", alignItems: "center", marginRight: "5%", gap: 3 }}>
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services", isDropdown: true },
            { label: "Company", path: "/company" },
            { label: "Contact Us", path: "/contactUsPage" },
            { label: "Careers", path: "/careers" },
            { label: "Other Services", path: "/other-services", isDropdown: true },
            { label: "Our Locations", path: "/our-locations" },
          ].map(({ label, path, isDropdown }) => (
            <Box key={label} sx={{ display: "flex", alignItems: "center" }}>
              {isDropdown ? (
                <>
                  <IconButton
                    onClick={label === "Services" ? handleServicesClick : handleOtherServicesClick}
                    sx={{
                      color: "white",
                      fontWeight: location.pathname.includes(path) ? "bold" : "normal", // Bold for active tab
                      borderBottom: location.pathname.includes(path) ? "2px solid white" : "none", // Underline active tab
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

                        <MenuItem onClick={handleClose}>
                          <Link to="/one-time-cleaning" style={{ textDecoration: "none", color: "black" }}>
                            one-time-cleaning
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