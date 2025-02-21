import {
    TextField,
    Typography,
    FormControl,
    Paper,
    FormLabel,
    InputAdornment,
  } from "@mui/material";
  
  const PaymentMethod = () => {
    return (
      <Paper sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Payment Method
        </Typography>
  
        <FormControl fullWidth size="small" sx={{ mt: 2 }}>
          <FormLabel>Card Number <span style={{ color: "red" }}>*</span></FormLabel>
          <TextField 
            fullWidth 
            placeholder="Enter card number" 
            variant="outlined" 
            size="small"
            InputProps={{ 
              startAdornment: <InputAdornment position="start">💳</InputAdornment>,
              sx: { borderRadius: "12px", border: "1px solid #0D90C8" } 
            }} 
          />
        </FormControl>
      </Paper>
    );
  };
  
  export default PaymentMethod;