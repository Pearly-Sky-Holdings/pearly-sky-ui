import React from "react";
import { Container } from "@mui/material";
import CustomerSlider from "../../components/customerPage/customerSlider";
import CustomerFeedback from "../../components/customerPage/customerFeedback";
import PaymentSupportSection from "../../components/paymentSupportSection/paymentSupportSection";

const CustomerPage: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 1 }}>
      <Container maxWidth="lg" sx={{ py: 1 }}>
        <CustomerSlider />
      </Container>
      <Container maxWidth="xl" sx={{ py: 1 }}>
        <CustomerFeedback />
      </Container>
      <Container maxWidth="xl" sx={{ py: 1 }}>
        <PaymentSupportSection />
      </Container>
    </Container>
  );
};

export default CustomerPage;
