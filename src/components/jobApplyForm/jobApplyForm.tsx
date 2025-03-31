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
import { useLanguage } from "../../context/LanguageContext";

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

const JobApplyForm: React.FC = () => {
  const { translate } = useLanguage();
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

  const countries = [
    { name: translate('france'), code: "FR" },
    { name: translate('unitedKingdom'), code: "GB" },
    { name: translate('sriLanka'), code: "LK" },
    { name: "Scotland", code: "GB-SCT" },
    { name: translate('germany'), code: "DE" },
    { name: "Australia", code: "AU" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "Canada", code: "CA" },
    { name: "Finland", code: "FI" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Italy", code: "IT" },
    { name: translate('unitedStates'), code: "US" },
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
  
        alert(translate('applicationSuccess'));
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error submitting application:", error);
  
      if (error?.response) {
        const status = error.response.status;
        let errorMessage = translate('submitError');
  
        if (status === 400) {
          errorMessage = translate('invalidDataError');
        } else if (status === 401 || status === 403) {
          errorMessage = translate('unauthorizedError');
        } else if (status === 404) {
          errorMessage = translate('resourceNotFoundError');
        } else if (status === 500) {
          errorMessage = translate('serverError');
        }
  
        alert(errorMessage);
      } else if (error?.request) {
        alert(translate('noServerResponse'));
      } else {
        alert(translate('unexpectedError'));
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
        {translate('cleanerJobTitle')}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* First Name & Last Name */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <FormLabel>{translate('firstNameLabel')}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate('firstNamePlaceholder')}
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
              <FormLabel>{translate('lastNameLabel')}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate('lastNamePlaceholder')}
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
              <FormLabel>{translate('emailLabel')}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate('emailPlaceholder')}
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
              <FormLabel>{translate('phoneLabel')}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate('phonePlaceholder')}
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
              <FormLabel>{translate('addressLabel')}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate('addressPlaceholder')}
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
              <FormLabel>{translate('apartmentLabel')}</FormLabel>
              <TextField
                fullWidth
                placeholder={translate('apartmentPlaceholder')}
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
              <FormLabel>{translate('cityLabel')}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate('cityPlaceholder')}
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
              <FormLabel>{translate('stateLabel')}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate('statePlaceholder')}
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
              <FormLabel>{translate('zipLabel')}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate('zipPlaceholder')}
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
              <FormLabel>{translate('countryLabel')}*</FormLabel>
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
                inputProps={{ "aria-label": translate('selectCountryLabel') }}
              >
                <MenuItem value="" disabled>
                  {translate('selectCountryPlaceholder')}
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
              <FormLabel>{translate('resumeLabel')}*</FormLabel>
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
                  {translate('uploadResumeButton')}
                </Button>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {formData.resume ? formData.resume.name : translate('noFileSelected')}
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
              {translate('submitApplicationButton')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default JobApplyForm;