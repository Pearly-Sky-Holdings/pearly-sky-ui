import {
  Grid,
  TextField,
  Typography,
  FormControl,
  Paper,
  FormLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import {
  flagAustralia,
  flagAustria,
  flagBelgium,
  flagCanada,
  flagDenmark,
  flagFinland,
  flagFrance,
  flagGermany,
  flagIreland,
  flagItaly,
  flagNetherlands,
  flagNewZealand,
  flagPoland,
  flagPortugal,
  flagQatar,
  flagSaudiArabia,
  flagScotland,
  flagSpain,
  flagSrilanka,
  flagSwitzerland,
  flagUAE,
  flagUk,
  flagUs,
} from "../../config/images";

interface BillingDetailsFormProps {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  formData: any;
}

const countries = [
  { name: "France", flag: flagFrance, code: "FR" },
  { name: "United Kingdom", flag: flagUk, code: "GB" },
  { name: "Sri Lanka", flag: flagSrilanka, code: "LK" },
  { name: "Scotland", flag: flagScotland, code: "GB-SCT" },
  { name: "Germany", flag: flagGermany, code: "DE" },
  { name: "Australia", flag: flagAustralia, code: "AU" },
  { name: "United Arab Emirates", flag: flagUAE, code: "AE" },
  { name: "Canada", flag: flagCanada, code: "CA" },
  { name: "Finland", flag: flagFinland, code: "FI" },
  { name: "Saudi Arabia", flag: flagSaudiArabia, code: "SA" },
  { name: "Italy", flag: flagItaly, code: "IT" },
  { name: "United States", flag: flagUs, code: "US" },
  { name: "Ireland", flag: flagIreland, code: "IE" },
  { name: "Austria", flag: flagAustria, code: "AT" },
  { name: "Netherlands", flag: flagNetherlands, code: "NL" },
  { name: "Switzerland", flag: flagSwitzerland, code: "CH" },
  { name: "Qatar", flag: flagQatar, code: "QA" },
  { name: "Denmark", flag: flagDenmark, code: "DK" },
  { name: "New Zealand", flag: flagNewZealand, code: "NZ" },
  { name: "Poland", flag: flagPoland, code: "PL" },
  { name: "Portugal", flag: flagPortugal, code: "PT" },
  { name: "Spain", flag: flagSpain, code: "ES" },
  { name: "Belgium", flag: flagBelgium, code: "BE" },
];

const accessOptions = [
  { value: "I'll be at home", label: "I'll be at home" },
  { value: "the key is with doorman", label: "The key is with doorman" },
  { value: "lockbox on premises", label: "Lockbox on premises" },
  { value: "call to organize", label: "Call to organize" },
  { value: "other", label: "Other" },
];

const accessOptions2 = [
  { value: "google", label: "Google" },
  { value: "yelp", label: "Yelp" },
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "friend/referred", label: "Friend/Referred" },
  { value: "real estate professional", label: "Real Estate Professional" },
  { value: "other", label: "Other" },
];

const validatePassword = (password: string) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  return hasUpperCase && hasLowerCase && hasNumber && hasSymbol;
};

const BillingDetailsForm: React.FC<BillingDetailsFormProps> = ({
  setFormData,
  formData,
}) => {
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const password = e.target.value;
    setFormData({ ...formData, password });
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain uppercase, lowercase, number, and symbol"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e: { target: { value: any } }) => {
    const confirmPassword = e.target.value;
    setFormData({ ...formData, confirmPassword });
    if (confirmPassword !== formData.password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <Paper sx={{ p: 1, borderRadius: 2 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#003370" }}>
        Billing Details
      </Typography>

      <Typography sx={{ mb: 2, ml: 1 }}>
        Your Contact Information <span style={{ color: "red" }}>*</span>
      </Typography>

      <Grid container spacing={2}>
        {/* First Name & Last Name */}
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder="First Name"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder="Last Name"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder="Email"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sx={{ mb: 3 }}>
          <FormControl fullWidth size="small">
            <PhoneInput
              international
              defaultCountry="US"
              value={formData.contact || ""}
              onChange={(value) => setFormData({ ...formData, contact: value })}
              placeholder="Phone number"
              style={{
                borderRadius: "12px",
                border: "1px solid #0D90C8",
                padding: "8px",
              }}
            />
          </FormControl>
        </Grid>

        <Typography sx={{ mt: 2, ml: 2 }}>
          Location of the home to be cleaned
          <span style={{ color: "red" }}>*</span>
        </Typography>

        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <Select
              sx={{ borderRadius: "12px", border: "1px solid #0D90C8" }}
              displayEmpty
              value={formData.country || ""}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              inputProps={{ "aria-label": "Select Country" }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200, // Adjust dropdown height
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                Select Country
              </MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{ width: 20, marginRight: 10 }}
                  />
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Company Name */}
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder="Company Name(Optional)"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </FormControl>
        </Grid>

        {/* Address Fields */}
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder="Street Address"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, street_address: e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder="Unit/Apt/suite"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, apartment_type: e.target.value })
              }
            />
          </FormControl>
        </Grid>

        {/* City & State */}
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder="City"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder="Province/State"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, province: e.target.value })
              }
            />
          </FormControl>
        </Grid>

        {/* Postal Code */}
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder="Postal Code"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, postal_code: e.target.value })
              }
            />
          </FormControl>
        </Grid>

        <Typography sx={{ mt: 3, ml: 2 }}>
          How will we get in?
          <span style={{ color: "red" }}>*</span>
        </Typography>

        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <Select
              sx={{ borderRadius: "12px", border: "1px solid #0D90C8" }}
              displayEmpty
              value={formData.accessMethod || ""}
              onChange={(e) =>
                setFormData({ ...formData, accessMethod: e.target.value })
              }
              inputProps={{ "aria-label": "How will we get in?" }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200, // Adjust dropdown height
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                How will we get in?
              </MenuItem>
              {accessOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Typography sx={{ mt: 3, ml: 2 }}>
          How did you hear about us?
          <span style={{ color: "red" }}>*</span>
        </Typography>

        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <Select
              sx={{ borderRadius: "12px", border: "1px solid #0D90C8" }}
              displayEmpty
              value={formData.accessMethod1 || ""}
              onChange={(e) =>
                setFormData({ ...formData, accessMethod1: e.target.value })
              }
              inputProps={{ "aria-label": "How did you hear about us?" }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200, // Adjust dropdown height
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                How did you hear about us?
              </MenuItem>
              {accessOptions2.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Password Fields */}
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <FormLabel>
              Password <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Enter password"
              type="password"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <Typography color="error">{passwordError}</Typography>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <FormLabel>Confirm Password </FormLabel>
            <TextField
              fullWidth
              placeholder="Confirm password"
              type="password"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={handleConfirmPasswordChange}
            />
            {confirmPasswordError && (
              <Typography color="error">{confirmPasswordError}</Typography>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BillingDetailsForm;