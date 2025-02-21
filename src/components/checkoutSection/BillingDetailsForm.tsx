import {
    Grid,
    TextField,
    Typography,
    FormControl,
    Paper,
    FormLabel,
  } from "@mui/material";
  
  
  interface BillingDetailsFormProps {
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    formData: any;
  }



interface BillingDetailsFormProps {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  formData: any;
}

const BillingDetailsForm: React.FC<BillingDetailsFormProps> = ({
  setFormData,
  formData,
}) => {
  return (
    <Paper sx={{ p: 4, borderRadius: 2 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Billing Details
      </Typography>

      <Grid container spacing={2}>
        {/* First Name & Last Name */}
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <FormLabel>
              First Name <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Enter first name"
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
            <FormLabel>
              Last Name <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Enter last name"
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

        {/* Company Name */}
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <FormLabel>Company Name (Optional)</FormLabel>
            <TextField
              fullWidth
              placeholder="Enter company name"
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

        {/* Country/Region */}
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <FormLabel>
              Country / Region <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Enter country/region"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            />
          </FormControl>
        </Grid>

        {/* Address Fields */}
        {/* <Grid item xs={6}>
            <FormControl fullWidth size="small">
              <FormLabel>Street Address <span style={{ color: "red" }}>*</span></FormLabel>
              <TextField 
                fullWidth 
                placeholder="Enter street address" 
                variant="outlined" 
                size="small"
                InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} 
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </FormControl>
          </Grid> */}
        {/* <Grid item xs={6}>
            <FormControl fullWidth size="small">
              <FormLabel>Apartment, Suite, Unit (Optional)</FormLabel>
              <TextField 
                fullWidth 
                placeholder="Enter apartment/suite" 
                variant="outlined" 
                size="small"
                InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} 
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </FormControl>
          </Grid> */}

        {/* City & State */}
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <FormLabel>
              Town/City <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Enter city"
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
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <FormLabel>
              Province/State <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Enter province/state"
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
            <FormLabel>
              Postal Code <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Enter postal code"
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

        {/* Contact Information */}
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <FormLabel>
              Phone <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Enter phone number"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: "12px", border: "1px solid #0D90C8" },
              }}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <FormLabel>
              Email <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Enter email address"
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
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BillingDetailsForm;
