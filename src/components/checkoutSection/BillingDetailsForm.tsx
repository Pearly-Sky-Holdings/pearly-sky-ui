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
import { Eye, EyeOff } from "lucide-react";
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

const citiesByCountry: { [key: string]: string[] } = {
  FR: [
    "Antibes",
    "Bordeaux",
    "Cannes",
    "Carlo",
    "Deauville",
    "Dieppe",
    "French",
    "La Rochelle",
    "Le Havre",
    "Lyon",
    "Marseille",
    "Monaco",
    "Monte",
    "Montpellier",
    "Nantes",
    "Narbonne",
    "Nice",
    "Normandy",
    "Paris",
    "Riviera",
    "Rouen",
    "Saint-Tropez",
    "Strasbourg",
    "Toulon",
    "Toulouse",
  ],
  GB: [
    "Birmingham",
    "Bradford",
    "Brighton",
    "Bristol",
    "Cambridge",
    "Chelmsford",
    "Chester",
    "Coventry",
    "Derby",
    "Edinburgh",
    "Gloucester",
    "Kingston upon Hull",
    "Leeds",
    "Leicester",
    "Liverpool",
    "London",
    "Luton",
    "Manchester",
    "Milton Keynes",
    "Newcastle upon Tyne",
    "Norwich",
    "Nottingham",
    "Oxford",
    "Peterborough",
    "Portsmouth",
    "Plymouth",
    "Salisbury",
    "Sheffield",
    "Southampton",
    "Stoke-on-Trent",
    "Sunderland",
    "York",
  ],
  LK: ["Colombo", "Kandy", "Negombo", "Nuwara Eliya"],
  DE: ["Berlin", "Cologne", "Hamburg", "Frankfurt", "Munich"],
  AU: ["Adelaide", "Brisbane", "Melbourne", "Perth", "Sydney"],
  AE: ["Dubai", "Abu Dhabi", "Jebel Ali", "Ras Al-Khaimah", "Sharjah"],
  CA: ["Montreal", "Ottawa", "Toronto"],
  FI: ["Helsinki", "Oulu", "Tampere", "Turku"],
  SA: ["Riyadh", "Jeddah"],
  IT: ["Florence", "Milan", "Naples", "Rome", "Venice"],
  US: ["Houston", "Los Angeles", "New York", "Philadelphia"],
  IE: ["Belfast", "Cork", "Dublin", "Galway", "Limerick"],
  AT: ["Vienna", "Villach Innsbruck", "Graz Bregenz"],
  NL: ["Amsterdam", "The Hague", "Utrecht", "Rotterdam", "Groningen"],
  CH: ["Bern", "Lausanne", "Geneva", "Basel", "Zurich"],
  QA: ["Al Rayyan", "Al Wakrah", "Doha", "Dukhan"],
  DK: ["Helsinki", "Oulu", "Tampere", "Turku"],
  NZ: ["Auckland", "Christchurch", "Hamilton", "Wellington"],
  PL: ["Warsaw"],
  PT: ["Lisbon"],
  ES: ["Barcelona", "Granada", "Madrid", "Palma"],
  BE: ["Brussels"],
};

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

const BillingDetailsForm: React.FC<BillingDetailsFormProps> = ({
  setFormData,
  formData,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const hasMinLength = password.length >= 8;

    return (
      hasUpperCase && hasLowerCase && hasNumber && hasSymbol && hasMinLength
    );
  };

  const handleInputChange = (field: string, value: string) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }

    // Validate specific fields
    if (field === "email" && value && !validateEmail(value)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });
    }
    if (field === "postal_code" && !/^\d*$/.test(value)) {
      setErrors({ ...errors, postal_code: "Please enter a valid postal code" });
      return;
    }
    if (field === "password") {
      if (!validatePassword(value)) {
        setErrors({
          ...errors,
          password:
            "Password must contain at least 8 characters, uppercase, lowercase, number, and symbol",
        });
      }
    }
    if (field === "confirmPassword") {
      if (value !== formData.password) {
        setErrors({ ...errors, confirmPassword: "Passwords do not match" });
      }
    }
  };
  const getInputStyles = (field: string) => ({
    borderRadius: "12px",
    border: `1px solid ${errors[field] ? "#ff1744" : "#0D90C8"}`,
  });

  return (
    <Paper sx={{ p: 1, borderRadius: 2 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mb: 2, color: "#003370" }}
      >
        Billing Details
      </Typography>

      <Typography sx={{ mb: 2, ml: 1 }}>
        Your Contact Information <span style={{ color: "red" }}>*</span>
      </Typography>

      <Grid container spacing={2}>
        {/* First Name & Last Name */}
        <Grid item xs={12} md={12} lg={6}>
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
        <Grid item xs={12} md={12} lg={6}>
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
              value={formData.email || ""}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                sx: {
                  borderRadius: "12px",
                  border: `1px solid ${errors.email ? "#ff1744" : "#0D90C8"}`,
                },
              }}
              onChange={(e) => {
                const email = e.target.value;
                handleInputChange("email", email);

                // Validate email in real-time
                if (email && !validateEmail(email)) {
                  setErrors({
                    ...errors,
                    email: "Please enter a valid email address",
                  });
                } else {
                  setErrors({ ...errors, email: "" });
                }
              }}
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
                backgroundColor: "#fff",
                color: "#000",
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
                setFormData({
                  ...formData,
                  country: e.target.value,
                  city: "", // Reset city when country changes
                })
              }
              inputProps={{ "aria-label": "Select Country" }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200,
                  },
                },
                disableAutoFocus: true,
                disableEnforceFocus: true,
              }}
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

        {/* City & State */}
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <Select
              sx={{ borderRadius: "12px", border: "1px solid #0D90C8" }}
              displayEmpty
              value={formData.city || ""}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              inputProps={{ "aria-label": "Select City" }}
              disabled={!formData.country}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200,
                    minWidth: 200,
                  },
                },
                disableAutoFocus: true,
                disableEnforceFocus: true,
              }}
            >
              <MenuItem value="" disabled>
                Select City
              </MenuItem>
              {formData.country &&
                citiesByCountry[formData.country]?.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
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
        <Grid item xs={12} md={12} lg={6}>
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
        <Grid item xs={12} md={12} lg={6}>
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
              type="number"
              fullWidth
              placeholder="Postal Code"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  postal_code: e.target.value.toString(),
                })
              }
            />
            {errors.postal_code && (
              <Typography variant="body2" color="error">
                {errors.postal_code}
              </Typography>
            )}
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
                    maxHeight: 200,
                    minWidth: 250,
                    maxWidth: "100%",
                  },
                },
                disableAutoFocus: true,
                disableEnforceFocus: true,
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
                    maxHeight: 200,
                    minWidth: 250,
                    maxWidth: "100%",
                  },
                },
                disableAutoFocus: true,
                disableEnforceFocus: true,
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
        <Grid item xs={12} md={12} lg={6}>
          <FormControl fullWidth size="small">
            <FormLabel>
              Password <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              required
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                sx: getInputStyles("password"),
                endAdornment: (
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer", padding: "8px" }}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                ),
              }}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12} lg={6}>
          <FormControl fullWidth size="small">
            <FormLabel>Confirm Password <span style={{ color: "red" }}>*</span> </FormLabel>
            <TextField
              fullWidth
              placeholder="Confirm password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              required
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                sx: getInputStyles("confirmPassword"),
                endAdornment: (
                  <div
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{ cursor: "pointer", padding: "8px" }}
                  >
                    {showConfirmPassword ? (
                      <Eye size={20} />
                    ) : (
                      <EyeOff size={20} />
                    )}
                  </div>
                ),
              }}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BillingDetailsForm;
