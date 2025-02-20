import {
  Container,
  Grid,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import store from "../../store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import BillingDetailsForm from "../../components/checkoutSection/BillingDetailsForm";
import { saveRegulrService } from "../../services/CleaningServices/saveRegulrService";
import { useLocation } from "react-router-dom";
import OrderSummary from "../../components/checkoutSection/OrderSummary";
import PaymentMethod from "../../components/checkoutSection/PaymentMethod";



const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const location = useLocation();
  const { serviceDetails } = location.state || {};


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    country: "",
    city: "",
    province: "",
    // address: "",
    postal_code: "",
    contact: "",
    email: "",
    password: "",
  });

  const handlePlaceOrder = async () => {
    const data = {
      customer: formData, 
      service_id: serviceDetails.service_id,
      price: parseInt(serviceDetails.price),
      date: serviceDetails.date,
      time: serviceDetails.time,
      property_size: serviceDetails.property_size,
      duration: serviceDetails.duration,
      number_of_cleaners: serviceDetails.number_of_cleaners,
      frequency: serviceDetails.frequency,
      package_details: serviceDetails.package_details,
      note: serviceDetails.note,
      language : serviceDetails.language,
      person_type: serviceDetails.person_type,
      equipment : serviceDetails.Equipment,
      cleaning_solvents: serviceDetails.cleaning_solvents,
      business_property: serviceDetails.business_property,
      
    }

    try {
      await dispatch(saveRegulrService(data));
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/regular-basic-cleaning", { state: { showSuccessPopup: true } });
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage("An error occurred while processing your order");
      setShowError(true);
    }
  }


  return (
    <Container maxWidth="xl" sx={{ marginBottom: "5%", color: "black" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, mt: 5, color: "#002F6D" }}>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={20} md={7}>
          <BillingDetailsForm setFormData={setFormData } formData={formData} />
        </Grid>

        <Grid item xs={12} md={5}>
          <OrderSummary />
          <PaymentMethod />
          
          <Button 
            fullWidth 
            variant="contained" 
            onClick={handlePlaceOrder}
            sx={{ 
              mt: 3, 
              padding: "12px", 
              backgroundColor: "#0070f3", 
              "&:hover": { backgroundColor: "#005bb5" } 
            }}
          >
            Place Order
          </Button>
        </Grid>
      </Grid>

      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={() => setShowSuccess(false)}>
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Order placed successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={showError} autoHideDuration={6000} onClose={() => setShowError(false)}>
        <Alert severity="error" onClose={() => setShowError(false)}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CheckoutPage;