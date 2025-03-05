import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Paper,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; 
import { loginPageImage } from "../../config/images.ts";

const LoginPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Login Successful", formData);
      navigate("/dashboard"); 
    }
  };

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center",
      py: { xs: 2, sm: 3, md: 4 }
    }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Paper 
              elevation={6} 
              sx={{ 
                display: "flex", 
                flexDirection: { xs: 'column', md: 'row' },
                overflow: "hidden", 
                borderRadius: 3, 
                height: "auto" 
              }}
            >
              {/* Image Section */}
              <Box
                sx={{
                  flex: { md: 1 },
                  display: { xs: "none", md: "block" },
                  minHeight: { md: "500px" },
                  backgroundImage: `url(${loginPageImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  
                }}
              />

              {/* Form Section */}
              <Box 
                sx={{ 
                  flex: 1, 
                  p: { xs: 3, sm: 4 }, 
                  backgroundColor: "#002F6D", 
                  width: "100%",
                  height: "auto"
                }}
              >
                {/* Logo */}
                <Box 
                    sx={{ 
                      display: "flex", 
                      justifyContent: "center", 
                      alignItems: "center", 
                      mb: 2 
                    }}
                  >
                    <img 
                      src="/images/logo.png" 
                      alt="Logo" 
                      style={{ 
                        width: isMobile ? 80 : 100,
                        height: "auto",
                      }} 
                    />
                  </Box>
                  
                <Typography 
                  variant={isMobile ? "h6" : "h5"} 
                  fontWeight="semibold" 
                  align="center" 
                  color="white" 
                  gutterBottom
                >
                  Login
                </Typography>

                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                  {/* Email Field */}
                  <TextField
                    fullWidth
                    placeholder="Username"
                    variant="outlined"
                    margin="normal"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle sx={{ color: "#888" }} />
                        </InputAdornment>
                      ),
                      sx: { 
                        borderRadius: "12px", 
                        backgroundColor: "#f5f5f5", 
                        height: { xs: "40px", md: "40px" } 
                      },
                    }}
                    sx={{
                      mb: 1,
                      "& .MuiFormHelperText-root": {
                        color: "error.light",
                        marginLeft: 0
                      }
                    }}
                  />

                  {/* Password Field */}
                  <TextField
                    fullWidth
                    placeholder="Password"
                    variant="outlined"
                    type="password"
                    margin="normal"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: "#888" }} />
                        </InputAdornment>
                      ),
                      sx: { 
                        borderRadius: "12px", 
                        backgroundColor: "#f5f5f5", 
                        height: { xs: "40px", md: "40px" } 
                      },
                    }}
                    sx={{
                      mb: 1,
                      "& .MuiFormHelperText-root": {
                        color: "error.light",
                        marginLeft: 0
                      }
                    }}
                  />

                  {/* Remember Me and Forgot Password */}
                  <Box 
                    sx={{ 
                      display: "flex", 
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: "space-between", 
                      alignItems: { xs: 'flex-start', sm: 'center' }, 
                      mb: { xs: 3, sm: 4, md: 5 }, 
                      gap: { xs: 1, sm: 2 } 
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          color="primary"
                          sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
                        />
                      }
                      label="Remember me"
                      sx={{ 
                        whiteSpace: "nowrap", 
                        flexShrink: 0,
                        color: 'white',
                        '& .MuiFormControlLabel-label': {
                          fontSize: { xs: '0.8rem', sm: '0.875rem' }
                        }
                      }}
                    />
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{
                        color: "#008CDA",
                        cursor: "pointer",
                        fontWeight: "semibold",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' }
                      }}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      fontSize: { xs: "11px", sm: "12px" },
                      fontWeight: "bold",
                      backgroundColor: "white",
                      color: "#002F6D",
                      padding: { xs: "6px 6px", sm: "8px 8px" },
                      width: "100%",
                      borderRadius: "12px",
                      "&:hover": { backgroundColor: "#008CDA" },
                    }}
                  >
                    Login
                  </Button>

                  {/* Signup Link */}
                  <Typography 
                    variant="body2" 
                    textAlign="center" 
                    sx={{ 
                      mt: 2, 
                      color: "white",
                      fontSize: { xs: '0.75rem', sm: '0.875rem' }
                    }}
                  >
                    Don't have an account?{" "}
                    <Typography 
                      component="span" 
                      color="white" 
                      sx={{ 
                        cursor: "pointer",
                        fontWeight: "semibold", 
                        color: "#008CDA",
                      }}
                    >
                      Signup
                    </Typography>
                  </Typography>
                </form>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginPage;