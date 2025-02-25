import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Radio, RadioGroup, FormControlLabel,  Grid } from '@mui/material';

const paymentMethods = [
  { id: 'card', name: 'Card Payment', img: './images/paymentMethods/visaMaster.png', fields: ['Card No', 'Expiration date', 'Security code'],placeholder:['xxx xxx xxx xxx','MM/YY','CVC'] },
  { id: 'eps', name: 'EPS', img: './images/paymentMethods/eps.png', fields: ['Account Number'] ,placeholder:['xxx xxx xxx xxx'] },
  { id: 'bancontact', name: 'Bancontact', img: './images/paymentMethods/bancontact.png', fields: ['Card No'] ,placeholder:['xxx xxx xxx xxx'] },
  { id: 'ideal', name: 'iDEAL', img: './images/paymentMethods/ideal.png', fields: ['Bank Name', 'Account Number'] ,placeholder:['Bank Name','xxx xxx xxx xxx'] },
  { id: 'paypal', name: 'PayPal', img: './images/paymentMethods/paypal.png', fields: ['Email'] ,placeholder:['Email'] },
];

const PaymentMethodComponent: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');

  const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <Card variant="outlined" style={{ maxWidth: 600, margin: 'auto', padding: '20px',marginTop:'20px' ,borderRadius: "12px",backgroundColor: "#F7F8FC"}}>
      <CardContent>
      <Typography variant="h6" fontWeight="bold" sx={{ color: "#002F6D", marginBottom: "16px" }}>
          Payment Method</Typography>
        <RadioGroup value={selectedMethod} onChange={handleMethodChange}>
          {paymentMethods.map((method) => (
            <Box key={method.id} style={{ padding: '1px 0' }}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item display="flex" alignItems="center">
                  <Typography style={{ marginRight: '10px' }}>{method.name}</Typography>
                  <img src={method.img} alt={method.name} style={{ height: '20px' }} />
                </Grid>
                <Grid item>
                  <FormControlLabel value={method.id} control={<Radio />} label="" />
                </Grid>
              </Grid>
              {selectedMethod === method.id && method.fields.length > 0 && (
                  <Box mt={2}>
                    {method.fields.map((field, index) => (
                      <Box key={field} mb={2}>
                        <Typography variant="subtitle2" gutterBottom>
                          {field} <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          margin="normal"
                          placeholder={method.placeholder[index] || ''}
                          required
                          InputProps={{
                            sx: { borderRadius: "12px", border: "1px solid #0D90C8" ,height:40},
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                )}

            </Box>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodComponent;
