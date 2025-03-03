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
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; 
import { loginPageImage } from "../../config/images.ts";

const LoginPage = () => {
  const navigate = useNavigate(); 

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
    <Box sx={{ minHeight: "80vh", display: "flex", alignItems: "center",  }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <Paper elevation={6} sx={{ display: "flex", overflow: "hidden", borderRadius: 3, height: "auto" }}>
             
              <Box
                sx={{
                  flex: 1,
                  display: { xs: "none", md: "block" },
                  width: "50%",
                  minWidth: "300px",
                  backgroundImage: `url(${loginPageImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              
              <Box sx={{ flex: 1, p: 4, backgroundColor: "#002F6D", width: "auto", height: "auto",justifyItems:'center'}}>
                
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <img src="/images/logo.png" alt="Logo" style={{ width: 100, height: "auto" }} />
                </Box>

                <Typography variant="h5" fontWeight="semibold" align="center" color="white" gutterBottom>
                  Login
                </Typography>

                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                  
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
                      sx: { borderRadius: "12px", backgroundColor: "#f5f5f5", height: "40px" },
                    }}
                  />

                  
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
                      sx: { borderRadius: "12px", backgroundColor: "#f5f5f5", height: "40px" },
                    }}
                  />

                 
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5, gap: 2 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="rememberMe"
                              checked={formData.rememberMe}
                              onChange={handleChange}
                              color="primary"
                            />
                          }
                          label="Remember me"
                          sx={{ whiteSpace: "nowrap", flexShrink: 0 ,color:'white'}}
                        />
                        <Typography
                          variant="body2"
                          color="white"
                          sx={{
                            cursor: "pointer",
                            fontWeight: "semibold",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}
                        >
                          Forgot Password?
                        </Typography>
                      </Box>

                  

                  
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      backgroundColor: "white",
                      color: "#002F6D",
                      padding: "8px 8px",
                      width: "100%",
                      borderRadius: "12px",
                      "&:hover": { backgroundColor: "#008CDA" },
                    }}
                  >
                    Login
                  </Button>

                 
                  <Typography variant="body2" textAlign="center" sx={{ mt: 2, color: "white" }}>
                    Don't have an account?{" "}
                    <Typography component="span" color="white" sx={{ cursor: "pointer", fontWeight: "semibold" }}>
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
