import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
} from "@mui/material";

const paymentMethods = [
  {
    id: "card",
    name: "Card Payment",
    img: "./images/paymentMethods/visaMaster.png",
  },
  { id: "eps", name: "EPS", img: "./images/paymentMethods/eps.png" },
  {
    id: "bancontact",
    name: "Bancontact",
    img: "./images/paymentMethods/bancontact.png",
  },
  { id: "ideal", name: "iDEAL", img: "./images/paymentMethods/ideal.png" },
  { id: "paypal", name: "PayPal", img: "./images/paymentMethods/paypal.png" },
];
interface PaymentMethodComponentProps {
  onPaymentMethodChange: (method: string) => void;
}

const PaymentMethodComponent: React.FC<PaymentMethodComponentProps> = ({onPaymentMethodChange}) => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const method = event.target.value;
    setSelectedMethod(method);
    onPaymentMethodChange(method);
  };

  return (
    <Card
      variant="outlined"
      style={{
        maxWidth: 600,
        margin: "auto",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "12px",
        backgroundColor: "#F7F8FC",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: "#002F6D", marginBottom: "16px" }}
        >
          Payment Method
        </Typography>
        <RadioGroup value={selectedMethod} onChange={handleMethodChange}>
          {paymentMethods.map((method) => (
            <Box key={method.id} style={{ padding: "1px 0" }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item display="flex" alignItems="center">
                  <Typography style={{ marginRight: "10px" }}>
                    {method.name}
                  </Typography>
                  <img
                    src={method.img}
                    alt={method.name}
                    style={{ height: "20px" }}
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    value={method.id}
                    control={<Radio />}
                    label=""
                  />
                </Grid>
              </Grid>
            </Box>
          ))}
          
        </RadioGroup>
        
      </CardContent>
    </Card>
  );
};

export default PaymentMethodComponent;
