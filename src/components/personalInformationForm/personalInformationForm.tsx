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


const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    '& fieldset': {
      borderColor: 'blue',
    },
    '&:hover fieldset': {
      borderColor: 'darkblue',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'blue',
    },
  },
});

const prefixes = ["Mr.", "Ms.", "Mrs.", "Dr."];
const countries = [
  "Australia",
  "United States",
  "Canada",
  "United Kingdom",
  "India",
  "Germany",
  "France",
  "Japan",
  "China",
  
];

const PersonalInformationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  const renderLabel = (label: string, required = false) => (
    <Typography variant="subtitle2" gutterBottom>
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </Typography>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} 
    style={{color:"black"}}>
      <Typography variant="h5" gutterBottom sx={{mb:5, textDecoration:'underline'}}>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        {/* Prefix */}
        <Grid item xs={12} sm={2}>
          {renderLabel("Prefix")}
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
              <StyledTextField
                {...field}
                placeholder="Ex: John"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName?.message}                
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
                error={!!errors.lastName}
                helperText={errors.lastName?.message}                
              />
            )}
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6}>
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
                error={!!errors.email}
                helperText={errors.email?.message}                
              />
            )}
          />
        </Grid>

        {/* Phone */}
        <Grid item xs={12} sm={6}>
          {renderLabel("Phone")}
          <Controller
            name="phone"
            control={control}
            rules={{
              pattern: {
                value: /^[+\d]?[0-9 ]{7,15}$/,
                message: "Invalid phone number",
              },
            }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                placeholder="Ex: +1 300 400 5000"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}               
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
                error={!!errors.address}
                helperText={errors.address?.message}               
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
                error={!!errors.city}
                helperText={errors.city?.message}                
              />
            )}
          />
        </Grid>

        {/* State */}
        <Grid item xs={12} sm={6}>
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
                error={!!errors.state}
                helperText={errors.state?.message}               
              />
            )}
          />
        </Grid>

        {/* ZIP Code */}
        <Grid item xs={12} sm={6}>
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
                error={!!errors.zip}
                helperText={errors.zip?.message}                
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
                    <MenuItem key={country} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
          {errors.country && (
            <Typography color="error" variant="caption">
              {errors.country?.message}
            </Typography>
          )}
        </Grid>

        
      </Grid>
    </form>
  );
};

export default PersonalInformationForm;
