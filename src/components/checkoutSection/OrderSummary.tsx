import  { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const OrderSummary = () => {
  const [items, _setItems] = useState([
    { id: 1, name: "Deep Cleaning", price: 150, quantity: 1 },
  ]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // const handleRemoveItem = (id) => {
  //   setItems(items.filter((item) => item.id !== id));
  // };

  const handleApplyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
      alert("Invalid coupon code!");
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - discount;

  return (
    <Paper sx={{ padding: "24px", borderRadius: "12px", backgroundColor: "#F7F8FC" }}>
      <Typography variant="h6" fontWeight="bold" sx={{ color: "#002F6D", marginBottom: "16px" }}>
        Your Order
      </Typography>

      {items.map((item) => (
        <Box
          key={item.id}
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
          <Typography fontWeight="bold">{item.name}</Typography>
          <IconButton 
          // onClick={() => handleRemoveItem(item.id)}
          >
            <CloseIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      ))}

      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <Typography color="gray">Deep Cleaning × 1</Typography>
        <Typography fontWeight="bold">C$ {subtotal.toFixed(2)}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px", marginBottom: "8px" }}>
        <Typography color="gray">Subtotal:</Typography>
        <Typography fontWeight="bold">C$ {subtotal.toFixed(2)}</Typography>
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

      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
        <Typography fontWeight="bold">Final Total:</Typography>
        <Typography fontWeight="bold">C$ {total.toFixed(2)}</Typography>
      </Box>
    </Paper>
  );
};

export default OrderSummary;
