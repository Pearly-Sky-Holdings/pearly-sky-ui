import {
  Container,
  Grid,
  Button,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import store from "../../store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BillingDetailsForm from "../../components/checkoutSection/BillingDetailsForm";
import { saveServices } from "../../services/CleaningServices/saveService";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummary from "../../components/checkoutSection/OrderSummary";
import PaymentMethod from "../../components/checkoutSection/PaymentMethod";
import LoadingOverlay from "../../components/welcomeAlert/LoadingOverlay";
import CloseIcon from "@mui/icons-material/Close"; // For the "Cut" button icon
import {
  successImage
} from "../../config/images";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [showThankYouModal, setShowThankYouModal] = useState(false); // State for showing the Thank You image
  const saveServiceData = useSelector(
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
    street_address: "",
    apartment_type: "",
    postal_code: "",
    contact: "",
    email: "",
    password: "",
  });

  const _handlePlaceOrder = async () => {
    if (
      data.serviceName == "Regular Basic" ||
      data.serviceName == "Deep Cleaning" ||
      data.serviceName == "One Time Cleaning" ||
      data.serviceName == "Last Minute" ||
      data.serviceName == "Move In/Out Cleaning" ||
      data.serviceName == "Post Construction" ||
      data.serviceName == "Airbnb And Short Term Rental Cleaning"
    ) {
      const ServiceData = {
        customer: formData,
        service_id: data.details.service_id,
        price: data.details.price.toString(),
        date: data.details.date,
        time: data.details.time,
        property_size: data.details.property_size,
        duration: data.details.duration,
        number_of_cleaners: data.details.number_of_cleaners,
        frequency: data.details.frequency,
        package_details: data.details.package_details,
        note: data.details.note,
        request_language: data.details.request_language,
        request_gender: data.details.request_gender,
        Equipment: data.details.Equipment,
        cleaning_solvents: data.details.cleaning_solvents,
        business_property: data.details.business_property,
        payment_method: selectedPaymentMethod,
        reStock_details: data.details.reStock_details,
      };

      setSaveLoader(true);
      dispatch(saveServices(ServiceData));
      console.log("Data", ServiceData);
      console.log("Data", _handlePlaceOrder);
    } else if (
      data.serviceName == "Child Care" ||
      data.serviceName == "Elder Care"
    ) {
      const childCareServiceData = {
        customer: formData,
        service_id: data.details.service_id,
        price: data.details.price,
        date: data.details.date,
        time: data.details.time,
        duration: data.details.duration,
        frequency: data.details.frequency,
        note: data.details.note,
        request_language: data.details.language,
        number_of_count: data.details.numChild,
        request_gender : data.details.contactType,
        request_care_professional: data.details.request_care_professional,
        service_providing_place: data.details.service_providing_place,
        special_request: data.details.special_request,
        personal_information: data.details.childInfo,
        payment_method: selectedPaymentMethod,
      };
      setSaveLoader(true);
      dispatch(saveServices(childCareServiceData));
      console.log("Data", data);
    }
  };

  // Function to handle navigation after the timer or "Cut" button
  const navigateToRoute = () => {
    if (data.serviceName == "Regular Basic") {
      navigate("/regular-basic-cleaning", {
        state: { showSuccessPopup: true },
      });
    } else if (data.serviceName == "Deep Cleaning") {
      navigate("/deep-cleaning", {
        state: { showSuccessPopup: true },
      });
    } else if (data.serviceName == "One Time Cleaning") {
      navigate("/one-time-cleaning", {
        state: { showSuccessPopup: true },
      });
    } else if (data.serviceName == "Last Minute") {
      navigate("/last-minute-cleaning", {
        state: { showSuccessPopup: true },
      });
    } else if (data.serviceName == "Move In/Out Cleaning") {
      navigate("/move-in-out-cleaning", {
        state: { showSuccessPopup: true },
      });
    } else if (data.serviceName == "Post Construction") {
      navigate("/post-construction-cleaning", {
        state: { showSuccessPopup: true },
      });
    } else if (
      data.serviceName == "Airbnb And Short Term Rental Cleaning"
    ) {
      navigate("/airbnb_and_short_service", {
        state: { showSuccessPopup: true },
      });
    }else if (data.serviceName == "Child Care") {
      navigate("/child_care_cleaning", {
        state: { showSuccessPopup: true },
      });
    } else if (data.serviceName == "Elder Care") {
      navigate("/elder_care_cleaning", {
        state: { showSuccessPopup: true },
      });
    }
  };

  // Save Regular Service
  useEffect(() => {
    if (saveLoader) {
      if (saveServiceData.isSuccess && !saveServiceData.isLoading) {
        if (saveServiceData.data.status === "pending_payment") {
          window.location.href = saveServiceData.data.payment_url;
        }
        if (saveServiceData.data.status === "success") {
          setShowSuccess(true);
          setShowThankYouModal(true); // Show the Thank You image modal

          // Set a 10-second timer to navigate to the route
          const timer = setTimeout(() => {
            setShowThankYouModal(false);
            navigateToRoute();
          }, 5000); // 10 seconds

          // Clean up the timer on component unmount or if the user clicks "Cut"
          return () => clearTimeout(timer);
        } else if (saveServiceData.data.status === "error") {
          setErrorMessage(saveServiceData.data.message);
          setShowError(true);
          setSaveLoader(false);
        }
      } else if (!saveServiceData.isSuccess && !saveServiceData.isLoading) {
        setSaveLoader(false);
      }
    }
  }, [saveServiceData.data, saveServiceData.errorMessage]);

  // Handle the "Cut" button click
  const handleCutButtonClick = () => {
    setShowThankYouModal(false);
    navigateToRoute();
  };

  return (
    <Container maxWidth="xl" sx={{ marginBottom: "5%", color: "black" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, mt: 5, color: "#002F6D" }}
      >
        Checkout
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <BillingDetailsForm setFormData={setFormData} formData={formData} />
        </Grid>

        <Grid item xs={12} md={5}>
          {/* Order Summary */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Order Summary
            </h2>
            <OrderSummary
              selectedServices={data?.orderSummary?.selectedServices || []}
              selectedEquipments={data?.orderSummary?.selectedEquipments || []}
              basePrice={data?.orderSummary?.basePrice || 0}
              currencySymbol={data?.orderSummary?.currencySymbol || "$"}
              selectedCurrency={data?.orderSummary?.selectedCurrency || "USD"}
              conversionRate={data?.orderSummary?.conversionRate || 1}
              serviceName={data?.serviceName || "Base Service"}
              totalPrice={data?.orderSummary?.totalPrice || 0}
            />
          </div>
          <PaymentMethod onPaymentMethodChange={setSelectedPaymentMethod} />

          <Typography sx={{ color: "#737375", fontSize: "12px" }}>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <Typography sx={{ color: "#0D90C8", fontSize: "12px" }}>
              privacy policy.
            </Typography>
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={saveLoader}
            style={{
              marginTop: "20px",
              backgroundColor: "#003087",
              color: "white",
              padding: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
            onClick={_handlePlaceOrder}
          >
            {saveLoader ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <CircularProgress size={20} color="inherit" />
                <span>Processing...</span>
              </div>
            ) : (
              "Place Order"
            )}
          </Button>
        </Grid>
      </Grid>

      {/* Using the new LoadingOverlay component */}
      <LoadingOverlay
        open={saveLoader}
        message="Processing your order..."
        subMessage="Please wait while we confirm your booking"
      />

      {/* Modal for Thank You Image */}
      <Modal
        open={showThankYouModal}
        onClose={() => {}} // Prevent closing by clicking outside
        aria-labelledby="thank-you-modal"
        aria-describedby="thank-you-image-display"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
            maxWidth: "90%",
          }}
        >
          {/* Thank You Image */}
          <img
            src={successImage}// Replace with the actual path to your image
            alt="Thank You for Your Booking"
            style={{ maxWidth: "100%", height: "auto" }}
          />

          {/* Cut Button */}
          <IconButton
            onClick={handleCutButtonClick}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
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