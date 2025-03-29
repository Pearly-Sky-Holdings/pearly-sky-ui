import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDebounce } from "use-debounce";
import PhoneInput, { getCountryCallingCode, Country, } from "react-phone-number-input";
import  { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { parsePhoneNumber } from 'libphonenumber-js';
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
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import zIndex from "@mui/material/styles/zIndex";

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

const PersonalInformationForm = ({ onChangeCallback }: { onChangeCallback: (data: FormValues) => void }) => {
  const {
    control,
    watch,
    setValue,
    formState: {  },
  } = useForm<FormValues>({
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
      password: "",
      confirmPassword: "",
    },
    mode: "onChange", // Enable real-time validation
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<Country | undefined>(undefined);


  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  useEffect(() => {
    if (formValues.country) {
      const selectedCountry = countries.find((c) => c.name === formValues.country);
      if (selectedCountry) {
        const countryCode = getCountryCallingCode(selectedCountry.code);
        if (!formValues.phone?.startsWith(`+${countryCode}`)) {
          setValue("phone", `+${countryCode}`);
        }
      }
    }
  }, [formValues.country, setValue, formValues.phone]);

  useEffect(() => {
    if (formValues.phone) {
      const countryCode = getCountryCodeFromPhoneNumber(formValues.phone);
      if (countryCode) {
        const country = countries.find(c => c.code === countryCode);
        if (country && formValues.country !== country.name) {
          setValue('country', country.name);
        }
      }
    }
  }, [formValues.phone, setValue]);

  const getCountryCodeFromPhoneNumber = (phoneNumber: string): Country | undefined => {
    try {
      const phoneData = parsePhoneNumber(phoneNumber);
      return phoneData?.country as Country;
    } catch {
      return undefined;
    }
  };

  const getCountryName = (countryCode: Country): string => {
    const country = countries.find(c => c.code === countryCode);
    return country ? country.name : '';
  };


  const renderLabel = (label: string, required = false) => (
    <Typography variant="subtitle2" gutterBottom>
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </Typography>
  );

  return (
    <form style={{ color: "black" }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 5, textDecoration: "underline" }}>
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
              rules={{ required: "Prefix is required" }}
              render={({ field }) => (
                <Select {...field} displayEmpty sx={selectStyles} 
                >
                  <MenuItem value="" disabled > 
                    Select Prefix
                  </MenuItem>
                  {prefixes.map((prefix) => (
                    <MenuItem key={prefix} value={prefix}>
                      {prefix}
                    </MenuItem>
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
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: John"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
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
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: Doe"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
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
              render={({ field, fieldState: { error } }) => (
                <Select
                  {...field}
                  displayEmpty
                  sx={selectStyles}
                  error={!!error}
                  renderValue={(value) => (value ? value : "Select Country")}
                >
                  <MenuItem value="" disabled>
                    Select Country
                  </MenuItem>
                  {countries.map((country) => (
                    <MenuItem key={country.code} value={country.name}>
                      {country.name}
                    </MenuItem>
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
              rules={{
                required: "Phone Number is required",
                validate: (value) => {
                  if (!value) return "Phone number is required";
                  
                  if (!value.startsWith("+")) {
                    return "Please select a country code";
                  }
                  
                  if (!isValidPhoneNumber(value)) {
                    const country = getCountryCodeFromPhoneNumber(value);
                    
                    if (country) {
                      return `Please enter a valid ${getCountryName(country)} phone number`;
                    }
                    return "Please enter a valid phone number";
                  }
                  
                  return true;
                },
              }}
              render={({ field, fieldState: { error } }) => {
                const handlePhoneChange = (value: string | undefined) => {
                  field.onChange(value || '');
                  if (value) {
                    try {
                      const phoneNumber = parsePhoneNumber(value);
                      setCurrentCountry(phoneNumber?.country);
                    } catch {
                      setCurrentCountry(undefined);
                    }
                  } else {
                    setCurrentCountry(undefined);
                  }
                };

                return (
                  <>
                    <PhoneInput
                      {...field}
                      international
                      defaultCountry="US"
                      placeholder="Phone number"
                      style={{
                        ...phoneInputStyles,
                        borderColor: error ? 'red' : 'blue',
                      }}
                      onChange={handlePhoneChange}
                      country={currentCountry}
                      onCountryChange={(newCountry: Country) => {
                        setCurrentCountry(newCountry);
                        if (newCountry && field.value) {
                          const nationalNumber = field.value.replace(/^\+\d+/, '');
                          const countryCode = getCountryCallingCode(newCountry);
                          field.onChange(`+${countryCode}${nationalNumber}`);
                        }
                      }}
                    />
                    {error && (
                      <Typography variant="caption" color="error" sx={{ mt: 1, display: 'block' }}>
                        {error.message}
                      </Typography>
                    )}
                  </>
                );
              }}
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
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|co\.uk|in|au|ca|io|me|us)$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: john@gmail.com"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </Grid>

        {/* Address */}
        <Grid item xs={12}>
          {renderLabel("Address", true)}
          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: Wallaby Way"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
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
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: Sydney"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </Grid>

        {/* State */}
        <Grid item xs={12} sm={3}>
          {renderLabel("State/Province", true)}
          <Controller
            name="state"
            control={control}
            rules={{ required: "State is required" }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: New South Wales"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
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
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: 2000"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </Grid>

        {/* Password Field */}
        <Grid item xs={12} sm={6}>
          {renderLabel("Password", true)}
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
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
            )}
          />
        </Grid>

        {/* Confirm Password Field */}
        <Grid item xs={12} sm={6}>
          {renderLabel("Confirm Password", true)}
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Please confirm your password",
              validate: (value) => value === formValues.password || "Passwords do not match",
            }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder="Confirm your password"
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
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
              />
            )}
          />
        </Grid>
      </Grid>
    </form>
  );
};

const selectStyles = {
  borderRadius: "12px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "blue",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "darkblue",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "blue",
  },
  zIndex:1,
  
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