import { useState, ChangeEvent, FormEvent } from "react";
import { loginPageImage } from "../../config/images.ts";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import {
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import instance from "../../services/AxiosOrder"; 

// Define form data
interface FormData {
  name: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Define errors
interface FormErrors {
  name: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const [dialogOpen, setDialogOpen] = useState(false); // State to control dialog visibility
  const [dialogMessage, setDialogMessage] = useState(""); // State to store dialog message

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Validate individual fields
  const validateField = (name: keyof FormData, value: string): string => {
    let error = "";
    switch (name) {
      case "name":
        if (!value) error = "Name is required";
        break;
      case "contactNumber":
        if (!value) error = "Contact Number is required";
        else if (!/^\d{10}$/.test(value)) error = "Invalid Contact Number";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid Email";
        break;
      case "password":
        if (!value) error = "Password is required";
        else if (value.length < 8) error = "Password must be at least 8 characters";
        break;
      case "confirmPassword":
        if (!value) error = "Please confirm your password";
        else if (value !== formData.password) error = "Passwords do not match";
        break;
      default:
        break;
    }
    return error;
  };

  // Handle input changes and validate fields in real-time
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name as keyof FormData, value) });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors: FormErrors = { ...errors };

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) formIsValid = false;
      newErrors[fieldName] = error;
    });

    setErrors(newErrors);

    if (formIsValid) {
      try {
        // Prepare the data for the API call
        const payload = {
          first_name: formData.name.split(" ")[0], 
          last_name: formData.name.split(" ")[1] || "", 
          company: " ", 
          country: " ", 
          contact: formData.contactNumber,
          email: formData.email,
          password: formData.password,
        };

        // Make the API call
        const response = await instance.post("saveCustomer", payload);

        if (response.data) {
          console.log("API Response:", response.data);
          setDialogMessage("Signup successful!"); // Set success message
          setDialogOpen(true); // Open the dialog
        } else {
          console.error("API Error:", response.statusText);
          setDialogMessage("Signup failed. Please try again."); // Set error message
          setDialogOpen(true); // Open the dialog
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setDialogMessage("An error occurred. Please try again."); // Set error message
        setDialogOpen(true); // Open the dialog
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 10, borderRadius: 5 }}>
      <Grid container spacing={0} sx={{ backgroundColor: "#002F6D", borderRadius: 5 }}>
        {/* Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: "100%",
              display: { xs: "none", md: "block" },
              height: "auto",
              objectFit: "cover",
              borderRadius: 2,
            }}
            alt="Signup"
            src={loginPageImage} 
          />
        </Grid>

        {/* Form */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: 5,
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
              Signup
            </Typography>

            {/* Form */}
            <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
              {/* Name Field */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                autoFocus
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "gray", fontSize: "20px", ml: 1 }} />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "3px",
                    height: "40px",
                    fontSize: "14px",
                  },
                }}
                sx={{ mb: 1 }}
              />

              {/* Contact Number Field */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter your contact number"
                autoComplete="tel"
                value={formData.contactNumber}
                onChange={handleChange}
                error={!!errors.contactNumber}
                helperText={errors.contactNumber}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{ color: "gray", fontSize: "20px", ml: 1 }} />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "3px",
                    height: "40px",
                    fontSize: "14px",
                  },
                }}
                sx={{ mb: 1 }}
              />

              {/* Email Field */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "gray", fontSize: "20px", ml: 1 }} />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "3px",
                    height: "40px",
                    fontSize: "14px",
                  },
                }}
                sx={{ mb: 1 }}
              />

              {/* Password Field */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"} 
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: "gray", fontSize: "20px", ml: 1 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                        sx={{ color: "gray", mr: 1 }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "3px",
                    height: "40px",
                    fontSize: "14px",
                  },
                }}
                sx={{ mb: 1 }}
              />

              {/* Confirm Password Field */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                placeholder="Confirm your password"
                type={showConfirmPassword ? "text" : "password"} 
                id="confirmPassword"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: "gray", fontSize: "20px", ml: 1 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                        sx={{ color: "gray", mr: 1 }}
                      >
                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "3px",
                    height: "40px",
                    fontSize: "14px",
                  },
                }}
                sx={{ mb: 2 }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1, borderRadius: "10px", backgroundColor: "white", color: "#002F6D", fontWeight: "bold" }}
              >
                Signup
              </Button>
            </Box>

            {/* Login Link */}
            <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
              Already have an account? <a href="/login" style={{ textDecoration: "underline" }}>Login</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Dialog for Success/Error Messages */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="xs" 
        fullWidth 
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px", 
          },
        }}
      >
        <DialogTitle sx={{ background: "#0D90C8", color: "white" ,textAlign:"center"}}>Message</DialogTitle>
        <DialogContent>
        <DialogContentText sx={{mt:3 ,textAlign:"center"}}>{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SignUp;