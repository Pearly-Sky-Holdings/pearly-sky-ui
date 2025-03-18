import React, { useState, FormEvent } from "react";
import instance from "../../services/AxiosOrder"; 
import {
  Grid,
  TextField,
  Typography,
  FormControl,
  Paper,
  FormLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

// Define the form data type
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  stateProvince: string;
  zipPostal: string;
  country: string;
  resume: File | null;
}

const countries = [
  { name: "France", code: "FR" },
  { name: "United Kingdom", code: "GB" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Scotland", code: "GB-SCT" },
  { name: "Germany", code: "DE" },
  { name: "Australia", code: "AU" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "Canada", code: "CA" },
  { name: "Finland", code: "FI" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Italy", code: "IT" },
  { name: "United States", code: "US" },
  { name: "Ireland", code: "IE" },
  { name: "Austria", code: "AT" },
  { name: "Netherlands", code: "NL" },
  { name: "Switzerland", code: "CH" },
  { name: "Qatar", code: "QA" },
  { name: "Denmark", code: "DK" },
  { name: "New Zealand", code: "NZ" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Spain", code: "ES" },
  { name: "Belgium", code: "BE" },
];

const JobApplyForm: React.FC = () => {
  // Initialize form state
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    stateProvince: "",
    zipPostal: "",
    country: "",
    resume: null,
  });

  // Handle input changes for text fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      company: "Pearly Sky PLC",
      country: formData.country,
      city: formData.city,
      province: formData.stateProvince,
      apartment_type: formData.address,
      street_address: formData.address,
      postal_code: formData.zipPostal,
      contact: formData.phone,
      email: formData.email,
    };
  
    try {
      const response = await instance.post("saveJobApplication", payload);
  
      console.log("API Response:", response);
  
      if (response.status === 200 || response.status === 201) {
        console.log("Application submitted successfully:", response.data);
  
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          stateProvince: "",
          zipPostal: "",
          country: "",
          resume: null,
        });
  
        alert("Application submitted successfully!");
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error submitting application:", error);
  
      if (error?.response) {
        const status = error.response.status;
        let errorMessage = "Failed to submit application. Please try again.";
  
        if (status === 400) {
          errorMessage = "Invalid data. Please check your inputs and try again.";
        } else if (status === 401 || status === 403) {
          errorMessage = "You are not authorized to perform this action.";
        } else if (status === 404) {
          errorMessage = "The requested resource was not found.";
        } else if (status === 500) {
          errorMessage = "A server error occurred. Please try again later.";
        }
  
        alert(errorMessage);
      } else if (error?.request) {
        alert("No response from the server. Please check your connection.");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <Paper sx={{ p: 3, borderRadius: 2 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mb: 2, color: "#003370" }}
      >
        Cleaner ( Male / Female) – Residential and Commercial Properties
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* First Name & Last Name */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <FormLabel>First Name*</FormLabel>
              <TextField
                fullWidth
                placeholder="First Name"
                variant="outlined"
                size="small"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                InputProps={{
                  sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <FormLabel>Last Name*</FormLabel>
              <TextField
                fullWidth
                placeholder="Last Name"
                variant="outlined"
                size="small"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                InputProps={{
                  sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
                }}
              />
            </FormControl>
          </Grid>

          {/* Email & Phone */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <FormLabel>Email*</FormLabel>
              <TextField
                fullWidth
                placeholder="Email"
                variant="outlined"
                size="small"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                InputProps={{
                  sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <FormLabel>Phone*</FormLabel>
              <TextField
                fullWidth
                placeholder="Phone"
                variant="outlined"
                size="small"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                InputProps={{
                  sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
                }}
              />
            </FormControl>
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <FormLabel>Address*</FormLabel>
              <TextField
                fullWidth
                placeholder="Address"
                variant="outlined"
                size="small"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                InputProps={{
                  sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <FormLabel>Apartment, suite etc.</FormLabel>
              <TextField
                fullWidth
                placeholder="Apartment, suite, unit, etc."
                variant="outlined"
                size="small"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                InputProps={{
                  sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
                }}
              />
            </FormControl>
          </Grid>

          {/* City & State/Province */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <FormLabel>City*</FormLabel>
              <TextField
                fullWidth
                placeholder="City"
                variant="outlined"
                size="small"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                InputProps={{
                  sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <FormLabel>State/Province*</FormLabel>
              <TextField
                fullWidth
                placeholder="State/Province"
                variant="outlined"
                size="small"
                name="stateProvince"
                value={formData.stateProvince}
                onChange={handleInputChange}
                required
                InputProps={{
                  sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
                }}
              />
            </FormControl>
          </Grid>

          {/* Zip/Postal Code & Country */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <FormLabel>Zip/Postal Code*</FormLabel>
              <TextField
                fullWidth
                placeholder="Zip/Postal Code"
                variant="outlined"
                size="small"
                name="zipPostal"
                value={formData.zipPostal}
                onChange={handleInputChange}
                required
                InputProps={{
                  sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <FormLabel>Country*</FormLabel>
              <Select
                sx={{ borderRadius: "12px", border: "1px solid #0D90C8" }}
                displayEmpty
                name="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    country: e.target.value as string,
                  }))
                }
                required
                inputProps={{ "aria-label": "Select Country" }}
              >
                <MenuItem value="" disabled>
                  Select Country
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.code} value={country.code}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Resume Upload */}
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <FormLabel>Resume*</FormLabel>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                style={{ display: "none" }}
              />
              <label htmlFor="resume">
                <Button
                  variant="outlined"
                  component="span"
                  sx={{
                    borderRadius: "12px",
                    border: "1px solid #0D90C8",
                    color: "#002F6D",
                    textTransform: "none",
                  }}
                >
                  Upload Resume
                </Button>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {formData.resume ? formData.resume.name : "No file selected"}
                </Typography>
              </label>
            </FormControl>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "12px",
                backgroundColor: "#002F6D",
                "&:hover": { backgroundColor: "#0A72A3" },
              }}
            >
              Submit Application
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default JobApplyForm;