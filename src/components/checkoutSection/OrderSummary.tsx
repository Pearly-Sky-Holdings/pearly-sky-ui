import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const OrderSummary = () => {
  return (
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

      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <TextField 
          fullWidth 
          placeholder="Coupon Code" 
          variant="outlined" 
          size="small"
          InputProps={{ sx: { borderRadius: "12px", border: "1px solid #0D90C8" } }} 
        />
        <Button variant="contained">Apply</Button>
      </Box>
    </Paper>
  );
};

export default OrderSummary;