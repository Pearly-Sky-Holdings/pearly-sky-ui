import {
  Container,
  Grid,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import store from "../../store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BillingDetailsForm from "../../components/checkoutSection/BillingDetailsForm";
import {
  saveServices,
} from "../../services/CleaningServices/saveRegulrService";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummary from "../../components/checkoutSection/OrderSummary";
import PaymentMethod from "../../components/checkoutSection/PaymentMethod";


const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const saveRegularServiceData = useSelector(
    (state: any) => state.serviceDetailsSlice.service
  );
  const saveLastMinuteServiceData = useSelector(
    (state: any) => state.serviceDetailsSlice.service
  );
  const saveDeepServiceData = useSelector(
    (state: any) => state.serviceDetailsSlice.service
  );
  const saveMoveInOutServiceData = useSelector(
    (state: any) => state.serviceDetailsSlice.service
  );
  const savePostConstructionServiceData = useSelector(
    (state: any) => state.serviceDetailsSlice.service
  );
  
  const oneTimeServiceData = useSelector(
    (state: any) => state.serviceDetailsSlice.service
  );
  const [saveLoader, setSaveLoader] = useState(false);

  const location = useLocation();
  const { data } = location.state || {};

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

    if (data.serviceName == "Regular Basic") {
      const regularBasicServiceData = {
        customer: formData,
        service_id: data.details.service_id,
        price: parseInt(data.details.price),
        date: data.details.date,
        time: data.details.time,
        property_size: data.details.property_size,
        duration: data.details.duration,
        number_of_cleaners: data.details.number_of_cleaners,
        frequency: data.details.frequency,
        package_details: data.details.package_details,
        note: data.details.note,
        language: data.details.language,
        person_type: data.details.person_type,
        Equipment: data.details.Equipment,
        cleaning_solvents: data.details.cleaning_solvents,
        business_property: data.details.business_property,
      };

      setSaveLoader(true);
      dispatch(saveServices(regularBasicServiceData));
      console.log("Data", data);
    } else if (data.serviceName == "Deep Cleaning"  || data.serviceName == "One Time Cleaning") {
      const deepServiceData = {
        customer: formData,
        service_id: data.details.service_id,
        price: parseInt(data.details.price),
        date: data.details.date,
        time: data.details.time,
        property_size: data.details.property_size,
        duration: data.details.duration,
        number_of_cleaners: data.details.number_of_cleaners,
        frequency: data.details.frequency,
        package_details: data.details.package_details,
        note: data.details.note,
        language: data.details.language,
        person_type: data.details.person_type,
        Equipment: data.details.Equipment,
        cleaning_solvents: data.details.cleaning_solvents,
        business_property: data.details.business_property,
      };

      setSaveLoader(true);
      dispatch(saveServices(deepServiceData));
      console.log("Data", data);
    } else if (data.serviceName == "Last Minute") {
      const lastMinuteServiceData = {
        customer: formData,
        service_id: data.details.service_id,
        price: parseInt(data.details.price),
        date: data.details.date,
        time: data.details.time,
        property_size: data.details.property_size,
        duration: data.details.duration,
        number_of_cleaners: data.details.number_of_cleaners,
        frequency: data.details.frequency,
        package_details: data.details.package_details,
        note: data.details.note,
        language: data.details.language,
        person_type: data.details.person_type,
        Equipment: data.details.Equipment,
        cleaning_solvents: data.details.cleaning_solvents,
        business_property: data.details.business_property,
      };

      setSaveLoader(true);
      dispatch(saveServices(lastMinuteServiceData));
      console.log("Data", data);
    } else if (data.serviceName == "Move In/Out Cleaning") {
      const moveInOutServiceData = {
        customer: formData,
        service_id: data.details.service_id,
        price: parseInt(data.details.price),
        date: data.details.date,
        time: data.details.time,
        property_size: data.details.property_size,
        duration: data.details.duration,
        number_of_cleaners: data.details.number_of_cleaners,
        frequency: data.details.frequency,
        package_details: data.details.package_details,
        note: data.details.note,
        language: data.details.language,
        person_type: data.details.person_type,
        Equipment: data.details.Equipment,
        cleaning_solvents: data.details.cleaning_solvents,
        business_property: data.details.business_property,
      };
      setSaveLoader(true);
      dispatch(saveServices(moveInOutServiceData));
      console.log("Data", data);
    } else if (data.serviceName == "Post Construction") {
      const postConstructionServiceData = {
        customer: formData,
        service_id: data.details.service_id,
        price: parseInt(data.details.price),
        date: data.details.date,
        time: data.details.time,
        property_size: data.details.property_size,
        duration: data.details.duration,
        number_of_cleaners: data.details.number_of_cleaners,
        frequency: data.details.frequency,
        note: data.details.note,
        language: data.details.language,
        person_type: data.details.person_type,
        Equipment: data.details.Equipment,
        cleaning_solvents: data.details.cleaning_solvents,
        business_property: data.details.business_property,
      };
      setSaveLoader(true);
      dispatch(saveServices(postConstructionServiceData));
      console.log("Data", data);
    }
  };

  // Save Regular Service

  useEffect(() => {
    if (saveLoader) {
      if (
        saveRegularServiceData.isSuccess &&
        !saveRegularServiceData.isLoading
      ) {
        if (saveRegularServiceData.data.status === "success") {
          console.log("Saved Successfully");
          setShowSuccess(true);
          setTimeout(() => {
            navigate("/regular-basic-cleaning", {
              state: { showSuccessPopup: true },
            });
          }, 2000);
          setSaveLoader(false);
        } else {
          console.log("Error", saveRegularServiceData.data.message);
          setErrorMessage(saveRegularServiceData.data.message);
          setShowError(true);
          setSaveLoader(false);
        }
      } else if (
        !saveRegularServiceData.isSuccess &&
        !saveRegularServiceData.isLoading
      ) {
        console.log("Error", saveRegularServiceData.errorMessage);
        setSaveLoader(false);
      }
    }
  }, [saveRegularServiceData.data, saveRegularServiceData.errorMessage]);

  // Save One Time Service
  useEffect(() => {
    if (saveLoader) {
      if (
        oneTimeServiceData.isSuccess &&
        !oneTimeServiceData.isLoading
      ) {
        if (saveRegularServiceData.data.status === "success") {
          console.log("Saved Successfully");
          setShowSuccess(true);
          setTimeout(() => {
            navigate("/one-time-cleaning", {
              state: { showSuccessPopup: true },
            });
          }, 2000);
          setSaveLoader(false);
        } else {
          console.log("Error", oneTimeServiceData.data.message);
          setErrorMessage(oneTimeServiceData.data.message);
          setShowError(true);
          setSaveLoader(false);
        }
      } else if (
        !oneTimeServiceData.isSuccess &&
        !oneTimeServiceData.isLoading
      ) {
        console.log("Error", oneTimeServiceData.errorMessage);
        setSaveLoader(false);
      }
    }
  }, [saveRegularServiceData.data, oneTimeServiceData.errorMessage]);

  // Save Last Minute Service
  useEffect(() => {
    if (saveLoader) {
      if (
        saveLastMinuteServiceData.isSuccess &&
        !saveLastMinuteServiceData.isLoading
      ) {
        if (saveLastMinuteServiceData.data.status === "success") {
          console.log("Saved Successfully");
          setShowSuccess(true);
          setTimeout(() => {
            navigate("/last-minute-cleaning", {
              state: { showSuccessPopup: true },
            });
          }, 2000);
          setSaveLoader(false);
        } else {
          console.log("Error", saveLastMinuteServiceData.data.message);
          setErrorMessage(saveLastMinuteServiceData.data.message);
          setShowError(true);
          setSaveLoader(false);
        }
      } else if (
        !saveLastMinuteServiceData.isSuccess &&
        !saveLastMinuteServiceData.isLoading
      ) {
        console.log("Error", saveLastMinuteServiceData.errorMessage);
        setSaveLoader(false);
      }
    }
  }, [saveLastMinuteServiceData.data, saveLastMinuteServiceData.errorMessage]);

  // Save Deep Service
  useEffect(() => {
    if (saveLoader) {
      if (saveDeepServiceData.isSuccess && !saveDeepServiceData.isLoading) {
        if (saveDeepServiceData.data.status === "success") {
          console.log("Saved Successfully");
          setShowSuccess(true);
          setTimeout(() => {
            navigate("/deep_cleaning", {
              state: { showSuccessPopup: true },
            });
          }, 2000);
          setSaveLoader(false);
        } else {
          console.log("Error", saveDeepServiceData.data.message);
          setErrorMessage(saveDeepServiceData.data.message);
          setShowError(true);
          setSaveLoader(false);
        }
      } else if (
        !saveDeepServiceData.isSuccess &&
        !saveDeepServiceData.isLoading
      ) {
        console.log("Error", saveDeepServiceData.errorMessage);
        setSaveLoader(false);
      }
    }
  }, [saveDeepServiceData.data, saveDeepServiceData.errorMessage]);

  // Save Move In/Out Service
  useEffect(() => {
    if (saveLoader) {
      if (
        saveMoveInOutServiceData.isSuccess &&
        !saveMoveInOutServiceData.isLoading
      ) {
        if (saveMoveInOutServiceData.data.status === "success") {
          console.log("Saved Successfully");
          setShowSuccess(true);
          setTimeout(() => {
            navigate("/move_in_out_cleaning", {
              state: { showSuccessPopup: true },
            });
          }, 2000);
          setSaveLoader(false);
        } else {
          console.log("Error", saveMoveInOutServiceData.data.message);
          setErrorMessage(saveMoveInOutServiceData.data.message);
          setShowError(true);
          setSaveLoader(false);
        }
      } else if (
        !saveMoveInOutServiceData.isSuccess &&
        !saveMoveInOutServiceData.isLoading
      ) {
        console.log("Error", saveMoveInOutServiceData.errorMessage);
        setSaveLoader(false);
      }
    }
  }, [saveMoveInOutServiceData.data, saveMoveInOutServiceData.errorMessage]);

  // postConstruction service
  useEffect(() => {
    if (saveLoader) {
      if (
        savePostConstructionServiceData.isSuccess &&
        !savePostConstructionServiceData.isLoading
      ) {
        if (savePostConstructionServiceData.data.status === "success") {
          console.log("Saved Successfully");
          setShowSuccess(true);
          setTimeout(() => {
            navigate("/post_constructor_cleaning", {
              state: { showSuccessPopup: true },
            });
          }, 2000);
          setSaveLoader(false);
        } else {
          console.log("Error", savePostConstructionServiceData.data.message);
          setErrorMessage(savePostConstructionServiceData.data.message);
          setShowError(true);
          setSaveLoader(false);
        }
      } else if (
        !savePostConstructionServiceData.isSuccess &&
        !savePostConstructionServiceData.isLoading
      ) {
        console.log("Error", savePostConstructionServiceData.errorMessage);
        setSaveLoader(false);
      }
    }
  }, [savePostConstructionServiceData.data, savePostConstructionServiceData.errorMessage]);
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "5%", color: "black" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, mt: 5, color: "#002F6D" }}
      >
        Checkout
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={20} md={7}>
          <BillingDetailsForm setFormData={setFormData} formData={formData} />
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
              "&:hover": { backgroundColor: "#005bb5" },
            }}
          >
            Place Order
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Order placed successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
      >
        <Alert severity="error" onClose={() => setShowError(false)}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CheckoutPage;
