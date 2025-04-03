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
  CircularProgress,
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
  company: string;
  apartment_type: string;
}

const JobApplyForm: React.FC = () => {
  const { translate } = useLanguage();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    company: "",
    apartment_type: "",
  });

  const countries = [
    { name: translate("countryAustralia"), code: "AU" },
    { name: translate("countryAustria"), code: "AT" },
    { name: translate("countryBelgium"), code: "BE" },
    { name: translate("countryCanada"), code: "CA" },
    { name: translate("countryDenmark"), code: "DK" },
    { name: translate("countryFinland"), code: "FI" },
    { name: translate("countryFrance"), code: "FR" },
    { name: translate("countryGermany"), code: "DE" },
    { name: translate("countryIreland"), code: "IE" },
    { name: translate("countryItaly"), code: "IT" },
    { name: translate("countryLuxembourg"), code: "LU" },
    { name: translate("countryNetherlands"), code: "NL" },
    { name: translate("countryNewZealand"), code: "NZ" },
    { name: translate("countryPoland"), code: "PL" },
    { name: translate("countryPortugal"), code: "PT" },
    { name: translate("countryQatar"), code: "QA" },
    { name: translate("countrySaudiArabia"), code: "SA" },
    { name: translate("countryScotland"), code: "GB-SCT" },
    { name: translate("countrySpain"), code: "ES" },
    { name: translate("countrySriLanka"), code: "LK" },
    { name: translate("countrySwitzerland"), code: "CH" },
    { name: translate("countryUAE"), code: "AE" },
    { name: translate("countryUK"), code: "GB" },
    { name: translate("countryUS"), code: "US" },
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
    setIsLoading(true); // Start loading

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      country: formData.country,
      city: formData.city,
      province: formData.stateProvince,
      apartment_type: formData.apartment_type,
      street_address: formData.address,
      postal_code: formData.zipPostal,
      contact: formData.phone,
      email: formData.email,
      pdf: formData.resume,
      company: formData.company
    };

    try {
      // Create a new FormData object
      const formData = new FormData();

      // Add all form fields to the FormData
      formData.append("first_name", payload.first_name);
      formData.append("last_name", payload.last_name);
      formData.append("email", payload.email);
      formData.append("contact", payload.contact);
      formData.append("street_address", payload.street_address);
      formData.append("city", payload.city);
      formData.append("stateProvince", payload.province);
      formData.append("postal_code", payload.postal_code);
      formData.append("country", payload.country);
      formData.append("company", payload.company);
      formData.append("apartment_type", payload.apartment_type);

      // Add the resume file if it exists
      if (payload.pdf) {
        formData.append("pdf", payload.pdf);
      }

      // Make the API call with FormData
      const response = await instance.post("saveJobApplication", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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
          company: "",
          apartment_type: "",
        });

        alert(translate("applicationSuccess"));
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error submitting application:", error);

      if (error?.response) {
        const status = error.response.status;
        let errorMessage = translate("submitError");

        if (status === 400) {
          errorMessage = translate("invalidDataError");
        } else if (status === 401 || status === 403) {
          errorMessage = translate("unauthorizedError");
        } else if (status === 404) {
          errorMessage = translate("resourceNotFoundError");
        } else if (status === 500) {
          errorMessage = translate("serverError");
        }

        alert(errorMessage);
      } else if (error?.request) {
        alert(translate("noServerResponse"));
      } else {
        alert(translate("unexpectedError"));
      }
    } finally {
      setIsLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 2 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mb: 2, color: "#003370" }}
      >
        {translate("cleanerJobTitle")}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* First Name & Last Name */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <FormLabel>{translate("firstNameLabel")}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate("firstNamePlaceholder")}
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
              <FormLabel>{translate("lastNameLabel")}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate("lastNamePlaceholder")}
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
              <FormLabel>{translate("emailLabel")}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate("emailPlaceholder")}
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
              <FormLabel>{translate("phoneLabel")}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate("phonePlaceholder")}
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
              <FormLabel>{translate("addressLabel")}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate("addressPlaceholder")}
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
              <FormLabel>{translate("apartmentLabel")}</FormLabel>
              <TextField
                fullWidth
                placeholder={translate("apartmentPlaceholder")}
                variant="outlined"
                size="small"
                name="apartment_type"
                value={formData.apartment_type}
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
              <FormLabel>{translate("cityLabel")}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate("cityPlaceholder")}
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
              <FormLabel>{translate("stateLabel")}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate("statePlaceholder")}
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
              <FormLabel>{translate("zipLabel")}*</FormLabel>
              <TextField
                fullWidth
                placeholder={translate("zipPlaceholder")}
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
              <FormLabel>{translate("countryLabel")}*</FormLabel>
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
                inputProps={{ "aria-label": translate("selectCountryLabel") }}
              >
                <MenuItem value="" disabled>
                  {translate("selectCountryPlaceholder")}
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
              <FormLabel>{translate("resumeLabel")}*</FormLabel>
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
                  {translate("uploadResumeButton")}
                </Button>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {formData.resume
                    ? formData.resume.name
                    : translate("noFileSelected")}
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
              disabled={isLoading}
              sx={{
                borderRadius: "12px",
                backgroundColor: "#002F6D",
                "&:hover": { backgroundColor: "#0A72A3" },
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                translate("submitApplicationButton")
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default JobApplyForm;