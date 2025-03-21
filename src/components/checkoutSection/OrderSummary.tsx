import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";

interface OrderSummaryProps {
  selectedServices: Array<{
    package_id: number;
    price: number;
    qty: number;
    name?: string;
  }>;
  selectedEquipments: Array<{ id: string; price: number; name?: string }>;
  basePrice: number;
  currencySymbol: string;
  selectedCurrency: string;
  conversionRate: number;
  serviceName: string;
  totalPrice: number;
  advancePaymentPercentage?: number; // Added new prop
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  selectedServices = [],
  selectedEquipments = [],
  basePrice = 0.0,
  currencySymbol = "$",
  conversionRate = 1,
  serviceName = "Base Service",
  totalPrice = 0.0,
  advancePaymentPercentage = 30, // Default to 50% advance payment
}) => {
  const [coupon, setCoupon] = React.useState("");
  const [discount, setDiscount] = React.useState(0);
  const [customAdvanceAmount, setCustomAdvanceAmount] = React.useState<number | null>(null);

  const handleApplyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
      alert("Invalid coupon code!");
    }
  };

  const total = totalPrice - discount;
  
  // Calculate advance payment and remaining payment
  const advancePayment = customAdvanceAmount !== null ? 
    customAdvanceAmount : 
    parseFloat((30).toFixed(2));
  
  const remainingPayment = parseFloat((total - advancePayment).toFixed(2));

  const handleAdvanceAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= total) {
      setCustomAdvanceAmount(value);
    } else if (e.target.value === "") {
      setCustomAdvanceAmount(null);
    }
  };

  return (
    <Paper sx={{ padding: "24px", borderRadius: "12px", backgroundColor: "#F7F8FC" }}>
      <Typography variant="h6" fontWeight="bold" sx={{ color: "#002F6D", marginBottom: "16px" }}>
        Your Order
      </Typography>

      {/* Base Service */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      >
        <Typography fontWeight="bold">{serviceName}</Typography>
        <Typography>{currencySymbol} {basePrice.toFixed(2)}</Typography>
      </Box>

      {/* Selected Services */}
      {selectedServices.map((service) => (
        <Box
          key={service.package_id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "8px",
          }}
        >
          <Typography>
            {service.name || `Service #${service.package_id}`} {service.qty > 1 ? `× ${service.qty}` : ''}
          </Typography>
          <Typography>{currencySymbol} {(service.price * (service.qty || 1) * conversionRate).toFixed(2)}</Typography>
        </Box>
      ))}

      {/* Selected Equipment */}
      {selectedEquipments.map((equipment) => (
        <Box
          key={equipment.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "8px",
          }}
        >
          <Typography>{equipment.name || `Equipment #${equipment.id}`}</Typography>
          <Typography>{currencySymbol} {(equipment.price * conversionRate).toFixed(2)}</Typography>
        </Box>
      ))}

      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px", marginBottom: "8px" }}>
        <Typography color="gray">Subtotal:</Typography>
        <Typography fontWeight="bold">{currencySymbol} {totalPrice.toFixed(2)}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <Typography color="gray">Apply Coupon Code</Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          sx={{ backgroundColor: "#fff", borderRadius: "12px" }}
        />
        <Button
          variant="contained"
          onClick={handleApplyCoupon}
          sx={{ backgroundColor: "#002F6D", "&:hover": { backgroundColor: "#001F4D" }, marginLeft: "8px" }}
        >
          Apply
        </Button>
      </Box>

      {discount > 0 && (
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <Typography color="gray">Discount:</Typography>
          <Typography fontWeight="bold" color="green">-{currencySymbol} {discount.toFixed(2)}</Typography>
        </Box>
      )}

      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px", marginBottom: "16px" }}>
        <Typography fontWeight="bold">Final Total:</Typography>
        <Typography fontWeight="bold">{currencySymbol} {total.toFixed(2)}</Typography>
      </Box>
      
      <Divider sx={{ marginBottom: "16px" }} />
      
      {/* Payment Schedule Section */}
      <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#002F6D", marginBottom: "12px" }}>
        Payment Schedule
      </Typography>
      
      {/* Custom Advance Payment Input */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <Typography color="gray">Advance Payment Amount</Typography>
        <TextField
          variant="outlined"
          size="small"
          type="number"
          placeholder={`Default: ${currencySymbol} ${(total * advancePaymentPercentage / 100).toFixed(2)}`}
          value={customAdvanceAmount !== null ? customAdvanceAmount : ''}
          onChange={handleAdvanceAmountChange}
          sx={{ backgroundColor: "#fff", borderRadius: "12px", width: "150px" }}
          InputProps={{
            startAdornment: <Typography sx={{ marginRight: "4px" }}>{currencySymbol}</Typography>,
          }}
        />
      </Box>
      
      {/* Advance Payment */}
      <Box 
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#E1F5FE",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "8px",
        }}
      >
        <Typography fontWeight="bold">Advance Payment:</Typography>
        <Typography fontWeight="bold">{currencySymbol} {advancePayment.toFixed(2)}</Typography>
      </Box>
      
      {/* Remaining Payment */}
      <Box 
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFF3E0",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "8px",
        }}
      >
        <Typography fontWeight="bold">Remaining Payment:</Typography>
        <Typography fontWeight="bold">{currencySymbol} {remainingPayment.toFixed(2)}</Typography>
      </Box>
    </Paper>
  );
};

export default OrderSummary;