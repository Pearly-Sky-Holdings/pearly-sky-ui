import  { useState, ChangeEvent, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDebounce } from "use-debounce";
import PhoneInput, { getCountryCallingCode, Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  Typography,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import {  Visibility, VisibilityOff } from "@mui/icons-material";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "& fieldset": {
      borderColor: "blue",
    },
    "&:hover fieldset": {
      borderColor: "darkblue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "blue",
    },
  },
});

const prefixes = ["Mr.", "Ms.", "Mrs.", "Dr.", "Other"];
const countries: { name: string; code: Country }[] = [
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Belgium", code: "BE" },
  { name: "Canada", code: "CA" },
  { name: "Denmark", code: "DK" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "Ireland", code: "IE" },
  { name: "Italy", code: "IT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Qatar", code: "QA" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Scotland", code: "GB" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Switzerland", code: "CH" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
];

type FormValues = {
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  password: string;
  confirmPassword: string;
};

interface FormData {
  name: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const PersonalInformationForm = ({ onChangeCallback }: { onChangeCallback: (data: FormValues) => void }) => {
  const { control, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      prefix: "",
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      password: " ",
      confirmPassword: "",
    },
  });

  const formValues = watch();
  const [debouncedFormValues] = useDebounce(formValues, 300);

  useEffect(() => {
    onChangeCallback(debouncedFormValues);
  }, [debouncedFormValues, onChangeCallback]);

  useEffect(() => {
    if (formValues.country) {
      const selectedCountry = countries.find((c) => c.name === formValues.country);
      if (selectedCountry) {
        const countryCode = getCountryCallingCode(selectedCountry.code);
        setValue("phone", `+${countryCode}`);
      }
    }
  }, [formValues.country, setValue]);

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

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        return !value ? "Name is required" : "";
      case "contactNumber":
        return !value ? "Contact Number is required" : !/^\d{10}$/.test(value) ? "Invalid Contact Number" : "";
      case "email":
        return !value ? "Email is required" : !/\S+@\S+\.\S+/.test(value) ? "Invalid Email" : "";
      case "password":
        return !value ? "Password is required" : value.length < 8 ? "Password must be at least 8 characters" : "";
      case "confirmPassword":
        return !value ? "Please confirm your password" : value !== formData.password ? "Passwords do not match" : "";
      default:
        return "";
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name as keyof FormData, value) });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const renderLabel = (label: string, required = false) => (
    <Typography variant="subtitle2" gutterBottom>
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </Typography>
  );

  return (
    <form style={{ color: "black" }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 5, textDecoration: 'underline' }}>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        {/* Prefix */}
        <Grid item xs={12} sm={2}>
          {renderLabel("Prefix", true)}
          <FormControl fullWidth>
            <Controller
              name="prefix"
              control={control}
              render={({ field }) => (
                <Select {...field} displayEmpty sx={selectStyles}>
                  <MenuItem value="" disabled>Select Prefix</MenuItem>
                  {prefixes.map((prefix) => (
                    <MenuItem key={prefix} value={prefix}>{prefix}</MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>

        {/* First Name */}
        <Grid item xs={12} sm={4}>
          {renderLabel("First Name", true)}
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First Name is required" }}
            render={({ field }) => <StyledTextField {...field} placeholder="Ex: John" fullWidth />}
          />
        </Grid>

        {/* Middle Name */}
        <Grid item xs={12} sm={3}>
          {renderLabel("Middle Name")}
          <Controller
            name="middleName"
            control={control}
            render={({ field }) => <StyledTextField {...field} placeholder="Ex: Michael" fullWidth />}
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={3}>
          {renderLabel("Last Name", true)}
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last Name is required" }}
            render={({ field }) => <StyledTextField {...field} placeholder="Ex: Doe" fullWidth />}
          />
        </Grid>

        {/* Country */}
        <Grid item xs={12} sm={6}>
          {renderLabel("Country", true)}
          <FormControl fullWidth>
            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <Select {...field} displayEmpty sx={selectStyles}>
                  <MenuItem value="" disabled>Select Country</MenuItem>
                  {countries.map((country) => (
                    <MenuItem key={country.code} value={country.name}>{country.name}</MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>

        {/* Phone */}
        <Grid item xs={12} sm={6}>
          {renderLabel("Phone Number", true)}
          <FormControl fullWidth size="small">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  international
                  defaultCountry="US"
                  placeholder="Phone number"
                  style={phoneInputStyles}
                />
              )}
            />
          </FormControl>
        </Grid>

        {/* Email */}
        <Grid item xs={12}>
          {renderLabel("Email Address", true)}
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => <StyledTextField {...field} placeholder="Ex: john@gmail.com" fullWidth />}
          />
        </Grid>

        {/* Address */}
        <Grid item xs={12}>
          {renderLabel("Address", true)}
          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field }) => <StyledTextField {...field} placeholder="Ex: Wallaby Way" fullWidth />}
          />
        </Grid>

        {/* Apartment */}
        <Grid item xs={12}>
          {renderLabel("Apartment, suite, etc")}
          <Controller
            name="apartment"
            control={control}
            render={({ field }) => <StyledTextField {...field} placeholder="Ex: Apt 101" fullWidth />}
          />
        </Grid>

        {/* City */}
        <Grid item xs={12} sm={6}>
          {renderLabel("City", true)}
          <Controller
            name="city"
            control={control}
            rules={{ required: "City is required" }}
            render={({ field }) => <StyledTextField {...field} placeholder="Ex: Sydney" fullWidth />}
          />
        </Grid>

        {/* State */}
        <Grid item xs={12} sm={3}>
          {renderLabel("State/Province", true)}
          <Controller
            name="state"
            control={control}
            rules={{ required: "State is required" }}
            render={({ field }) => <StyledTextField {...field} placeholder="Ex: New South Wales" fullWidth />}
          />
        </Grid>

        {/* ZIP Code */}
        <Grid item xs={12} sm={3}>
          {renderLabel("ZIP / Postal Code", true)}
          <Controller
            name="zip"
            control={control}
            rules={{
              required: "ZIP Code is required",
              pattern: {
                value: /^[0-9]{4,6}$/,
                message: "Invalid ZIP Code",
              },
            }}
            render={({ field }) => <StyledTextField {...field} placeholder="Ex: 2000" fullWidth />}
          />
        </Grid>

        {/* Password Field */}
        <Grid item xs={12} sm={6}>
          {renderLabel("Password", true)}
          <StyledTextField           
            required
            fullWidth
            name="password"
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end" sx={{ color: "gray", mr: 1 }}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              sx: inputStyles,
            }}
            
          />
        </Grid>

        {/* Confirm Password Field */}
        <Grid item xs={12} sm={6}>
          {renderLabel("Confirm Password", true)}
          <StyledTextField            
            required
            fullWidth
            name="confirmPassword"
            placeholder="Confirm your password"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowConfirmPassword} edge="end" sx={{ color: "gray", mr: 1 }}>
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              sx: inputStyles,
            }}
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

const selectStyles = {
  borderRadius: '12px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'blue',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'darkblue',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'blue',
  },
};

const phoneInputStyles = {
  borderRadius: "12px",
  border: "1px solid blue",
  padding: "15px",
  backgroundColor: "#fff",
  color: "#000",
};

const inputStyles = {
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "3px",
  height: "50px",
  fontSize: "14px",
};

export default PersonalInformationForm;