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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  CircularProgress, // Import CircularProgress
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { loginPageImage } from "../../config/images.ts";
import { useDispatch } from "react-redux";
import { getAuth, getOtp, getForgotPassword } from "../../services/Auth/auth.tsx";
import store from "../../store/index.tsx";

const LoginPage = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({ email: "", password: "" });

  // State for Forgot Password Flow
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openOtpVerification, setOpenOtpVerification] = useState(false);
  const [openNewPassword, setOpenNewPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // State for Snackbar (Success and Error messages)
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  // State for Loading
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
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
      setIsLoading(true); // Start loading
      try {
        const result = await dispatch(
          getAuth({ email: formData.email, password: formData.password })
        );
        if (getAuth.fulfilled.match(result)) {
          localStorage.setItem("token", result.payload.token);
          const tokenExpiryTime = new Date().getTime() + 3600 * 1000;
          localStorage.setItem("tokenExpiry", tokenExpiryTime.toString());
          setSnackbarMessage("Login successful!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);

          setTimeout(() => {
            navigate(`/customer-dashboard/${result.payload.user.customer_id}`);
          }, 2000);
        } else if (getAuth.rejected.match(result)) {
          setSnackbarMessage("Login failed. Please check your credentials.");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      } catch (error: any) {
        setSnackbarMessage(
          error.payload || "Login failed. Please check your credentials."
        );
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } finally {
        setIsLoading(false); // Stop loading
      }
    }
  };

  // Handle Forgot Password Flow
  const handleForgotPasswordClick = () => {
    setOpenForgotPassword(true);
  };

  const handleForgotPasswordClose = () => {
    setOpenForgotPassword(false);
    setForgotPasswordEmail("");
  };

  const handleOtpVerificationClose = () => {
    setOpenOtpVerification(false);
    setOtp("");
  };

  const handleNewPasswordClose = () => {
    setOpenNewPassword(false);
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError("");
  };

  const handleForgotPasswordSubmit = async () => {
    if (!forgotPasswordEmail || !/\S+@\S+\.\S+/.test(forgotPasswordEmail)) {
      setSnackbarMessage("Please enter a valid email address");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    setIsLoading(true); // Start loading
    try {
      const result = await dispatch(getOtp({ email: forgotPasswordEmail }));
      if (getOtp.fulfilled.match(result)) {
        setOpenForgotPassword(false);
        setOpenOtpVerification(true);
        setSnackbarMessage("OTP has been sent to your email!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      } else {
        setSnackbarMessage("Failed to send OTP. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error: any) {
      setSnackbarMessage(error.payload || "Failed to send OTP");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleOtpSubmit = () => {
    if (!otp) {
      setSnackbarMessage("Please enter the OTP");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    setOpenOtpVerification(false);
    setOpenNewPassword(true);
  };

  const handlePasswordReset = async () => {
    if (!newPassword || !confirmPassword) {
      setPasswordError("Both password fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true); // Start loading
    try {
      const result = await dispatch(
        getForgotPassword({
          email: forgotPasswordEmail,
          otp: otp,
          password: newPassword,
        })
      );

      if (getForgotPassword.fulfilled.match(result)) {
        setOpenNewPassword(false);
        setSnackbarMessage("Password reset successful! Please login with your new password.");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        // Reset all states
        setForgotPasswordEmail("");
        setOtp("");
        setNewPassword("");
        setConfirmPassword("");
        setPasswordError("");

        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setSnackbarMessage("Failed to reset password. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error: any) {
      setSnackbarMessage(error.payload || "Failed to reset password");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Handle Snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                overflow: "hidden",
                borderRadius: 3,
                height: "auto",
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
                  height: "auto",
                }}
              >
                {/* Logo */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2,
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
                        height: { xs: "40px", md: "40px" },
                      },
                    }}
                    sx={{
                      mb: 1,
                      "& .MuiFormHelperText-root": {
                        color: "error.light",
                        marginLeft: 0,
                      },
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
                        height: { xs: "40px", md: "40px" },
                      },
                    }}
                    sx={{
                      mb: 1,
                      "& .MuiFormHelperText-root": {
                        color: "error.light",
                        marginLeft: 0,
                      },
                    }}
                  />

                  {/* Remember Me and Forgot Password */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      alignItems: { xs: "flex-start", sm: "center" },
                      mb: { xs: 3, sm: 4, md: 5 },
                      gap: { xs: 1, sm: 2 },
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          color="primary"
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label="Remember me"
                      sx={{
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        color: "white",
                        "& .MuiFormControlLabel-label": {
                          fontSize: { xs: "0.8rem", sm: "0.875rem" },
                        },
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
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      }}
                      onClick={handleForgotPasswordClick}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isLoading} // Disable button when loading
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
                    {isLoading ? (
                      <CircularProgress size={24} color="inherit" /> // Show loading spinner
                    ) : (
                      "Login"
                    )}
                  </Button>

                  {/* Signup Link */}
                  <Typography
                    variant="body2"
                    textAlign="center"
                    sx={{
                      mt: 2,
                      color: "white",
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
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

      {/* Forgot Password Email Dialog */}
      <Dialog
        open={openForgotPassword}
        onClose={handleForgotPasswordClose}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px",
            padding: "24px",
            width: "400px",
            maxWidth: "90%",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#002F6D",
            padding: 0,
            mb: 2,
          }}
        >
          Forgot Password
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#666",
              mb: 3,
            }}
          >
            Enter your email address to receive an OTP.
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter Your Email Address"
            variant="outlined"
            type="email"
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#f5f5f5",
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", padding: 0 }}>
          <Button
            onClick={handleForgotPasswordSubmit}
            variant="contained"
            disabled={isLoading} // Disable button when loading
            sx={{
              backgroundColor: "#002F6D",
              color: "white",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "10px 24px",
              width: "100%",
              "&:hover": { backgroundColor: "#0077B6" },
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" /> // Show loading spinner
            ) : (
              "Send OTP"
            )}
          </Button>
        </DialogActions>
      </Dialog>

      {/* OTP Verification Dialog */}
      <Dialog
        open={openOtpVerification}
        onClose={handleOtpVerificationClose}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px",
            padding: "24px",
            width: "400px",
            maxWidth: "90%",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#002F6D",
            padding: 0,
            mb: 2,
          }}
        >
          Enter OTP
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#666",
              mb: 3,
            }}
          >
            Please enter the OTP sent to your email.
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter OTP"
            variant="outlined"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#f5f5f5",
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", padding: 0 }}>
          <Button
            onClick={handleOtpSubmit}
            variant="contained"
            disabled={isLoading} // Disable button when loading
            sx={{
              backgroundColor: "#002F6D",
              color: "white",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "10px 24px",
              width: "100%",
              "&:hover": { backgroundColor: "#0077B6" },
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" /> // Show loading spinner
            ) : (
              "Verify OTP"
            )}
          </Button>
        </DialogActions>
      </Dialog>

      {/* New Password Dialog */}
      <Dialog
        open={openNewPassword}
        onClose={handleNewPasswordClose}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px",
            padding: "24px",
            width: "400px",
            maxWidth: "90%",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#002F6D",
            padding: 0,
            mb: 2,
          }}
        >
          Reset Password
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#666",
              mb: 3,
            }}
          >
            Enter your new password.
          </Typography>
          <TextField
            fullWidth
            placeholder="New Password"
            variant="outlined"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#f5f5f5",
              },
            }}
          />
          <TextField
            fullWidth
            placeholder="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#f5f5f5",
              },
            }}
          />
          {passwordError && (
            <Typography color="error" variant="body2" sx={{ mb: 2 }}>
              {passwordError}
            </Typography>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", padding: 0 }}>
          <Button
            onClick={handlePasswordReset}
            variant="contained"
            disabled={isLoading} // Disable button when loading
            sx={{
              backgroundColor: "#002F6D",
              color: "white",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "10px 24px",
              width: "100%",
              "&:hover": { backgroundColor: "#0077B6" },
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" /> // Show loading spinner
            ) : (
              "Reset Password"
            )}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Success/Error Messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;