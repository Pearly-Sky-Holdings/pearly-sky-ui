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
import { useLanguage } from "../../context/LanguageContext";

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

const PersonalInformationForm = ({ 
  onChangeCallback 
}: { 
  onChangeCallback: (data: FormValues) => void 
}) => {
  const { translate } = useLanguage();
  const {
    control,
    watch,
    setValue,
    formState: {},
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
    mode: "onChange",
  });

  const formValues = watch();
  const [debouncedFormValues] = useDebounce(formValues, 300);

  useEffect(() => {
    onChangeCallback(debouncedFormValues);
  }, [debouncedFormValues, onChangeCallback]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

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

  // Get translated country list
  const getTranslatedCountries = () => [
    { name: translate("australia"), code: "AU" },
    { name: translate("austria"), code: "AT" },
    { name: translate("belgium"), code: "BE" },
    { name: translate("canada"), code: "CA" },
    { name: translate("denmark"), code: "DK" },
    { name: translate("finland"), code: "FI" },
    { name: translate("france"), code: "FR" },
    { name: translate("germany"), code: "DE" },
    { name: translate("ireland"), code: "IE" },
    { name: translate("italy"), code: "IT" },
    { name: translate("luxembourg"), code: "LU" },
    { name: translate("netherlands"), code: "NL" },
    { name: translate("newZealand"), code: "NZ" },
    { name: translate("poland"), code: "PL" },
    { name: translate("portugal"), code: "PT" },
    { name: translate("qatar"), code: "QA" },
    { name: translate("saudiArabia"), code: "SA" },
    { name: translate("scotland"), code: "GB" },
    { name: translate("spain"), code: "ES" },
    { name: translate("sriLanka"), code: "LK" },
    { name: translate("switzerland"), code: "CH" },
    { name: translate("unitedArabEmirates"), code: "AE" },
    { name: translate("unitedKingdom"), code: "GB" },
    { name: translate("unitedStates"), code: "US" },
  ];

  // Get translated prefixes
  const getTranslatedPrefixes = () => [
    { value: "Mr.", label: translate("mr") },
    { value: "Ms.", label: translate("ms") },
    { value: "Mrs.", label: translate("mrs") },
    { value: "Dr.", label: translate("dr") },
    { value: "Other", label: translate("other") },
  ];

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
      {translate(label)} {required && <span style={{ color: "red" }}>*</span>}
    </Typography>
  );

  return (
    <form style={{ color: "black" }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 5, textDecoration: "underline" }}>
        {translate("personalInformation")}
      </Typography>
      <Grid container spacing={3}>
        {/* Prefix */}
        <Grid item xs={12} sm={2}>
          {renderLabel("prefix", true)}
          <FormControl fullWidth>
            <Controller
              name="prefix"
              control={control}
              rules={{ required: translate("prefixRequired") }}
              render={({ field, fieldState: { error } }) => (
                <Select
                  {...field}
                  displayEmpty
                  sx={selectStyles}
                  error={!!error}
                >
                  <MenuItem value="" disabled>
                    {translate("selectPrefix")}
                  </MenuItem>
                  {getTranslatedPrefixes().map((prefix) => (
                    <MenuItem key={prefix.value} value={prefix.value}>
                      {prefix.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>

        {/* First Name */}
        <Grid item xs={12} sm={4}>
          {renderLabel("firstName", true)}
          <Controller
            name="firstName"
            control={control}
            rules={{ required: translate("firstNameRequired") }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder={translate("firstNamePlaceholder")}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>

        {/* Middle Name */}
        <Grid item xs={12} sm={3}>
          {renderLabel("middleName")}
          <Controller
            name="middleName"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                placeholder={translate("middleNamePlaceholder")}
                fullWidth
              />
            )}
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={3}>
          {renderLabel("lastName", true)}
          <Controller
            name="lastName"
            control={control}
            rules={{ required: translate("lastNameRequired") }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder={translate("lastNamePlaceholder")}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>

        {/* Country */}
        <Grid item xs={12} sm={6}>
          {renderLabel("country", true)}
          <FormControl fullWidth>
            <Controller
              name="country"
              control={control}
              rules={{ required: translate("countryRequired") }}
              render={({ field, fieldState: { error } }) => (
                <Select
                  {...field}
                  displayEmpty
                  sx={selectStyles}
                  error={!!error}
                  renderValue={(value) => value || translate("selectCountry")}
                >
                  <MenuItem value="" disabled>
                    {translate("selectCountry")}
                  </MenuItem>
                  {getTranslatedCountries().map((country) => (
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
          {renderLabel("phoneNumber", true)}
          <FormControl fullWidth size="small">
            <Controller
              name="phone"
              control={control}
              rules={{
                 rules={{ required: translate("phoneRequired") }}
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
                      placeholder={translate("phonePlaceholder")}
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
          {renderLabel("emailAddress", true)}
          <Controller
            name="email"
            control={control}
            rules={{
              required: translate("emailRequired"),
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|co\.uk|in|au|ca|io|me|us)$/i,
                message: translate("invalidEmail"),

              },
            }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder={translate("emailPlaceholder")}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>

        {/* Address */}
        <Grid item xs={12}>
          {renderLabel("address", true)}
          <Controller
            name="address"
            control={control}
            rules={{ required: translate("addressRequired") }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder={translate("addressPlaceholder")}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>

        {/* Apartment */}
        <Grid item xs={12}>
          {renderLabel("apartmentSuite")}
          <Controller
            name="apartment"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                placeholder={translate("apartmentPlaceholder")}
                fullWidth
              />
            )}
          />
        </Grid>

        {/* City */}
        <Grid item xs={12} sm={6}>
          {renderLabel("city", true)}
          <Controller
            name="city"
            control={control}
            rules={{ required: translate("cityRequired") }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder={translate("cityPlaceholder")}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>

        {/* State */}
        <Grid item xs={12} sm={3}>
          {renderLabel("stateProvince", true)}
          <Controller
            name="state"
            control={control}
            rules={{ required: translate("stateRequired") }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder={translate("statePlaceholder")}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>

        {/* ZIP Code */}
        <Grid item xs={12} sm={3}>
          {renderLabel("zipPostalCode", true)}
          <Controller
            name="zip"
            control={control}
            rules={{
              required: translate("zipRequired"),
              pattern: {
                value: /^[0-9]{4,6}$/,
                message: translate("invalidZip"),
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder={translate("zipPlaceholder")}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>

        {/* Password Field */}
        <Grid item xs={12} sm={6}>
          {renderLabel("password", true)}
          <Controller
            name="password"
            control={control}
            rules={{
              required: translate("passwordRequired"),
              minLength: {
                value: 8,
                message: translate("passwordLength"),
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder={translate("passwordPlaceholder")}
                type={showPassword ? "text" : "password"}
                fullWidth
                error={!!error}
                helperText={error?.message}
                InputProps={{
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
                  sx: inputStyles,
                }}
              />
            )}
          />
        </Grid>

        {/* Confirm Password Field */}
        <Grid item xs={12} sm={6}>
          {renderLabel("confirmPassword", true)}
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: translate("confirmPasswordRequired"),
              validate: (value) =>
                value === formValues.password || translate("passwordMismatch"),
            }}
            render={({ field, fieldState: { error } }) => (
              <StyledTextField
                {...field}
                placeholder={translate("confirmPasswordPlaceholder")}
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                error={!!error}
                helperText={error?.message}
                InputProps={{
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
  zIndex: 1,
};

const phoneInputStyles = {
  borderRadius: "12px",
  border: "1px solid",
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