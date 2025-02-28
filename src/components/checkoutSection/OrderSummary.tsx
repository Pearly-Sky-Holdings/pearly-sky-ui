import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
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
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  selectedServices = [],
  selectedEquipments = [],
  basePrice = 27.0,
  currencySymbol = "$",
  selectedCurrency = "USD",
}) => {
  const [coupon, setCoupon] = React.useState("");
  const [discount, setDiscount] = React.useState(0);

  const handleApplyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
      alert("Invalid coupon code!");
    }
  };

  const subtotal = basePrice + 
    selectedServices.reduce((sum, service) => sum + service.price * (service.qty || 1), 0) +
    selectedEquipments.reduce((sum, equipment) => sum + equipment.price, 0);
  
  const total = subtotal - discount;

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
        <Typography fontWeight="bold">Regular Basic Cleaning</Typography>
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
          <Typography>{currencySymbol} {(service.price * (service.qty || 1)).toFixed(2)}</Typography>
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
          <Typography>{currencySymbol} {equipment.price.toFixed(2)}</Typography>
        </Box>
      ))}

      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px", marginBottom: "8px" }}>
        <Typography color="gray">Subtotal:</Typography>
        <Typography fontWeight="bold">{currencySymbol} {subtotal.toFixed(2)}</Typography>
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

      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
        <Typography fontWeight="bold">Final Total:</Typography>
        <Typography fontWeight="bold">{currencySymbol} {total.toFixed(2)}</Typography>
      </Box>
    </Paper>
  );
};

export default OrderSummary;