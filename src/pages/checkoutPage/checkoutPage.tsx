
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Paper,
  InputAdornment,
  FormLabel,
} from "@mui/material";

const CheckoutPage = () => {
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "5%", color: "black" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, mt: 5, color: "#002F6D" }}>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        
        <Grid item xs={20} md={7}>
          <Paper sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Billing Details
            </Typography>

            <Grid container spacing={2}>
              {/* First Name & Last Name */}
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <FormLabel>First Name <span style={{ color: "red" }}>*</span></FormLabel>
                  <TextField fullWidth placeholder="Enter first name" variant="outlined" size="small"
                    InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <FormLabel>Last Name <span style={{ color: "red" }}>*</span></FormLabel>
                  <TextField fullWidth placeholder="Enter last name" variant="outlined" size="small"
                    InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
                </FormControl>
              </Grid>

              {/* Company Name (Optional) */}
              <Grid item xs={12}>
                <FormControl fullWidth size="small">
                  <FormLabel>Company Name (Optional)</FormLabel>
                  <TextField fullWidth placeholder="Enter company name" variant="outlined" size="small"
                    InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
                </FormControl>
              </Grid>

              {/*  Country/Region */}
              <Grid item xs={12}>
                <FormControl fullWidth size="small">
                  <FormLabel>Country / Region <span style={{ color: "red" }}>*</span></FormLabel>
                  <Select sx={{ borderRadius: "12px", border: "1px solid #0D90C8" }}>
                    <MenuItem value="">Select country</MenuItem>
                    <MenuItem value="US">United States</MenuItem>
                    <MenuItem value="CA">Canada</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Street Address & Apartment (Fixed Alignment) */}
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <FormLabel>Street Address <span style={{ color: "red" }}>*</span></FormLabel>
                  <TextField fullWidth placeholder="Enter street address" variant="outlined" size="small"
                    InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <FormLabel>Apartment, Suite, Unit (Optional)</FormLabel>
                  <TextField fullWidth placeholder="Enter apartment/suite" variant="outlined" size="small"
                    InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
                </FormControl>
              </Grid>

              {/* Town/City & Province/State */}
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <FormLabel>Town/City <span style={{ color: "red" }}>*</span></FormLabel>
                  <TextField fullWidth placeholder="Enter city" variant="outlined" size="small"
                    InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <FormLabel>Province/State <span style={{ color: "red" }}>*</span></FormLabel>
                  <Select sx={{ borderRadius: "12px", border: "1px solid #0D90C8" }}>
                    <MenuItem value="">Select province/state</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Postal Code */}
              <Grid item xs={12}>
                <FormControl fullWidth size="small">
                  <FormLabel>Postal Code <span style={{ color: "red" }}>*</span></FormLabel>
                  <TextField fullWidth placeholder="Enter postal code" variant="outlined" size="small"
                    InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
                </FormControl>
              </Grid>

              {/* Phone & Email */}
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <FormLabel>Phone <span style={{ color: "red" }}>*</span></FormLabel>
                  <TextField fullWidth placeholder="Enter phone number" variant="outlined" size="small"
                    InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <FormLabel>Email <span style={{ color: "red" }}>*</span></FormLabel>
                  <TextField fullWidth placeholder="Enter email address" variant="outlined" size="small"
                    InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>


        {/* Order Summary & Payment */}
        <Grid item xs={12} md={5}>
          {/* Order Summary */}
          <Paper sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Your Order
            </Typography>
            <Box sx={{ mb: 2, p: 2, bgcolor: "#f9f9f9", borderRadius: 1 }}>
              <Typography>Deep Cleaning × 1</Typography>
              <Typography fontWeight="bold">C$ 150.00</Typography>
            </Box>
            <Typography>Subtotal: C$ 150.00</Typography>
            <Typography fontWeight="bold">Final Total: C$ 150.00</Typography>

            {/* Coupon Code (Same Line) */}
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <TextField fullWidth placeholder="Coupon Code" variant="outlined" size="small" 
                InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
              <Button variant="contained">Apply</Button>
            </Box>
          </Paper>

          {/* Payment Method */}
          <Paper sx={{ p: 4, borderRadius: 2, mt: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Payment Method
            </Typography>

            <FormControl fullWidth size="small" sx={{ mt: 2 }}>
              <FormLabel>Card Number <span style={{ color: "red" }}>*</span></FormLabel>
              <TextField fullWidth placeholder="Enter card number" variant="outlined" size="small"
                InputProps={{ startAdornment: <InputAdornment position="start">💳</InputAdornment>,
                  sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} />
            </FormControl>
          </Paper>

          {/* Place Order Button */}
          <Button fullWidth variant="contained" sx={{ mt: 3, padding: "12px", backgroundColor: "#0070f3", "&:hover": { backgroundColor: "#005bb5" } }}>
            Place Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
