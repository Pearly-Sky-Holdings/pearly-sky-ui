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
import { useLanguage } from "../../context/LanguageContext";

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
    "Antibes", "Bordeaux", "Cannes", "Carlo", "Deauville", "Dieppe", "French",
    "La Rochelle", "Le Havre", "Lyon", "Marseille", "Monaco", "Monte",
    "Montpellier", "Nantes", "Narbonne", "Nice", "Normandy", "Paris", "Riviera",
    "Rouen", "Saint-Tropez", "Strasbourg", "Toulon", "Toulouse", "Other"
  ],
  GB: [
    "Birmingham", "Bradford", "Brighton", "Bristol", "Cambridge", "Chelmsford",
    "Chester", "Coventry", "Derby", "Edinburgh", "Gloucester", "Kingston upon Hull",
    "Leeds", "Leicester", "Liverpool", "London", "Luton", "Manchester", "Milton Keynes",
    "Newcastle upon Tyne", "Norwich", "Nottingham", "Oxford", "Peterborough",
    "Portsmouth", "Plymouth", "Salisbury", "Sheffield", "Southampton", "Stoke-on-Trent",
    "Sunderland", "York", "Other"
  ],
  LK: ["Colombo", "Kandy", "Negombo", "Nuwara Eliya", "Other"],
  DE: ["Berlin", "Cologne", "Hamburg", "Frankfurt", "Munich", "Other"],
  AU: ["Adelaide", "Brisbane", "Melbourne", "Perth", "Sydney", "Other"],
  AE: ["Dubai", "Abu Dhabi", "Jebel Ali", "Ras Al-Khaimah", "Sharjah", "Other"],
  CA: ["Montreal", "Ottawa", "Toronto", "Other"],
  FI: ["Helsinki", "Oulu", "Tampere", "Turku", "Other"],
  SA: ["Riyadh", "Jeddah", "Other"],
  IT: ["Florence", "Milan", "Naples", "Rome", "Venice", "Other"],
  US: ["Houston", "Los Angeles", "New York", "Philadelphia", "Other"],
  IE: ["Belfast", "Cork", "Dublin", "Galway", "Limerick", "Other"],
  AT: ["Vienna", "Villach Innsbruck", "Graz Bregenz", "Other"],
  NL: ["Amsterdam", "The Hague", "Utrecht", "Rotterdam", "Groningen", "Other"],
  CH: ["Bern", "Lausanne", "Geneva", "Basel", "Zurich", "Other"],
  QA: ["Al Rayyan", "Al Wakrah", "Doha", "Dukhan", "Other"],
  DK: ["Helsinki", "Oulu", "Tampere", "Turku", "Other"],
  NZ: ["Auckland", "Christchurch", "Hamilton", "Wellington", "Other"],
  PL: ["Warsaw", "Other"],
  PT: ["Lisbon", "Other"],
  ES: ["Barcelona", "Granada", "Madrid", "Palma", "Other"],
  BE: ["Brussels", "Other"],
};

const BillingDetailsForm: React.FC<BillingDetailsFormProps> = ({
  setFormData,
  formData,
}) => {
  const { translate } = useLanguage();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const accessOptions = [
    { value: "I'll be at home", label: translate('accessOptionAtHome') },
    { value: "the key is with doorman", label: translate('accessOptionDoorman') },
    { value: "lockbox on premises", label: translate('accessOptionLockbox') },
    { value: "call to organize", label: translate('accessOptionCall') },
    { value: "other", label: translate('other') },
  ];

  const accessOptions2 = [
    { value: "google", label: translate('sourceGoogle') },
    { value: "yelp", label: translate('sourceYelp') },
    { value: "instagram", label: translate('sourceInstagram') },
    { value: "facebook", label: translate('sourceFacebook') },
    { value: "friend/referred", label: translate('sourceFriend') },
    { value: "real estate professional", label: translate('sourceRealEstate') },
    { value: "other", label: translate('other') },
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@(gmail\.com|[^\s@]+\.(com|org|net|edu|co\.uk))$/i;
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

    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }

    if (field === "email" && value && !validateEmail(value)) {
      setErrors({ ...errors, email: translate('invalidEmailbilling') });
    }
    if (field === "postal_code" && !/^\d*$/.test(value)) {
      setErrors({ ...errors, postal_code: translate('invalidPostalCode') });
      return;
    }
    if (field === "password") {
      if (!validatePassword(value)) {
        setErrors({
          ...errors,
          password: translate('passwordRequirements'),
        });
      }
    }
    if (field === "confirmPassword") {
      if (value !== formData.password) {
        setErrors({ ...errors, confirmPassword: translate('passwordMismatch') });
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
        {translate('billingDetails')}
      </Typography>

      <Typography sx={{ mb: 2, ml: 1 }}>
        {translate('contactInformation')} <span style={{ color: "red" }}>*</span>
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder={translate('firstName')}
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
              placeholder={translate('lastName')}
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
              placeholder={translate('email')}
              variant="outlined"
              size="small"
              value={formData.email || ""}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                sx: getInputStyles("email"),
              }}
              onChange={(e) => handleInputChange("email", e.target.value)}
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
              placeholder={translate('phoneNumber')}
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
          {translate('locationToBeCleaned')}
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
                  city: "",
                })
              }
              inputProps={{ "aria-label": translate('selectCountry') }}
              MenuProps={{
                PaperProps: { style: { maxHeight: 200 } },
                disableAutoFocus: true,
                disableEnforceFocus: true,
              }}
            >
              <MenuItem value="" disabled>
                {translate('selectCountry')}
              </MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <Select
              sx={{ borderRadius: "12px", border: "1px solid #0D90C8" }}
              displayEmpty
              value={formData.city || ""}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              inputProps={{ "aria-label": translate('selectCity') }}
              disabled={!formData.country}
              MenuProps={{
                PaperProps: { style: { maxHeight: 200, minWidth: 200 } },
                disableAutoFocus: true,
                disableEnforceFocus: true,
              }}
            >
              <MenuItem value="" disabled>
                {translate('selectCity')}
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
        
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder={translate('companyNameOptional')}
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

        <Grid item xs={12} md={12} lg={6}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              placeholder={translate('streetAddress')}
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
              placeholder={translate('unitAptSuite')}
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
              placeholder={translate('provinceState')}
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

        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <TextField
              type="number"
              fullWidth
              placeholder={translate('postalCode')}
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
          {translate('howWillWeGetIn')}
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
              inputProps={{ "aria-label": translate('howWillWeGetIn') }}
              MenuProps={{
                PaperProps: { style: { maxHeight: 200, minWidth: 250 } },
                disableAutoFocus: true,
                disableEnforceFocus: true,
              }}
            >
              <MenuItem value="" disabled>
                {translate('howWillWeGetIn')}
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
          {translate('howDidYouHearAboutUs')}
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
              inputProps={{ "aria-label": translate('howDidYouHearAboutUs') }}
              MenuProps={{
                PaperProps: { style: { maxHeight: 200, minWidth: 250 } },
                disableAutoFocus: true,
                disableEnforceFocus: true,
              }}
            >
              <MenuItem value="" disabled>
                {translate('howDidYouHearAboutUs')}
              </MenuItem>
              {accessOptions2.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12} lg={6}>
          <FormControl fullWidth size="small">
            <FormLabel>
              {translate('password')} <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder={translate('enterPassword')}
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
            <FormLabel>
              {translate('confirmPassword')} <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder={translate('confirmPassword')}
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