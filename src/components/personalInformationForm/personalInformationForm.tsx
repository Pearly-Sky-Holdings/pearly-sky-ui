import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  MenuItem,
  Select,
  FormControl,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import PhoneInput, { getCountryCallingCode, Country } from "react-phone-number-input"; // Import Country
import 'react-phone-number-input/style.css';


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
const countries: { name: string; code: Country }[] = [ // Use Country type
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
  country: string; // Use Country type
};

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
      country: " ", 
    },
  });

  const formValues = watch() as FormValues;

  // Debounce the form values
  const [debouncedFormValues] = useDebounce(formValues, 300);

  useEffect(() => {
    onChangeCallback(debouncedFormValues);
  }, [debouncedFormValues, onChangeCallback]);

  useEffect(() => {
    if (formValues.country) {
      // Find the country code based on the selected country name
      const selectedCountry = countries.find((c) => c.name === formValues.country);
      if (selectedCountry) {
        const countryCode = getCountryCallingCode(selectedCountry.code);
        setValue("phone", `+${countryCode}`);
      }
    }
  }, [formValues.country, setValue]);

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
                <Select {...field} displayEmpty
                  sx={{
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
                  }}>
                  <MenuItem value="" disabled>
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
            render={({ field }) => (
              <StyledTextField  {...field}
                placeholder="Ex: John"
                fullWidth
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
            render={({ field }) => (
              <StyledTextField {...field} placeholder="Ex: Michael" fullWidth
              />
            )}
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={3}>
          {renderLabel("Last Name", true)}
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last Name is required" }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: Doe"
                fullWidth
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
              render={({ field }) => (
                <Select {...field} displayEmpty
                  sx={{
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
                  }}>
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
        <Grid item xs={12} sm={6} >
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
                  style={{
                    borderRadius: "12px",
                    border: "1px solid blue",
                    hover:"dark-blue",
                    padding: "15px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
              )}
            />
          </FormControl>
        </Grid>

        {/* Email */}
        <Grid item xs={12} >
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
            render={({ field }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: john@gmail.com"
                fullWidth
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
            render={({ field }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: Wallaby Way"
                fullWidth
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
            render={({ field }) => (
              <StyledTextField {...field} placeholder="Ex: Apt 101" fullWidth
              />
            )}
          />
        </Grid>

        {/* City */}
        <Grid item xs={12} sm={6}>
          {renderLabel("City", true)}
          <Controller
            name="city"
            control={control}
            rules={{ required: "City is required" }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: Sydney"
                fullWidth
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
            render={({ field }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: New South Wales"
                fullWidth
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
            render={({ field }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: 2000"
                fullWidth
              />
            )}
          />
        </Grid>

        
      </Grid>
    </form>
  );
};

export default PersonalInformationForm;