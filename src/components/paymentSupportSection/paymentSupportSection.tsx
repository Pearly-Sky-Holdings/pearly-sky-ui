import React from 'react';
import {
  supportPayment1,
  supportPayment2,
  supportPayment3,
  supportPayment4,
  supportPayment5,
  supportPayment6,
  supportPayment7,
  supportPayment8,
  supportPayment9,
  supportPayment10,
} from "../../config/images";


const paymentMethods = [
    { icon: supportPayment1, alt: "Visa" },
    { icon: supportPayment2, alt: "Stripe" },
    { icon: supportPayment3, alt: "PayPal" },
    { icon: supportPayment4, alt: "Mastercard" },
    { icon: supportPayment5, alt: "American Express" },
    { icon: supportPayment6, alt: "Apple Pay" },
    { icon: supportPayment7, alt: "Google Pay" },
    { icon: supportPayment8, alt: "Bitcoin" },
    { icon: supportPayment9, alt: "Amazon Pay" },
    { icon: supportPayment10, alt: "Discover" },
  ];

const PaymentSupportSection = () => {
  return (
    <div className="text-center mt-8 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-blue-900">{"We Support"}</h2>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {paymentMethods.map((method, index) => (
          <img
            key={index}
            src={method.icon}
            alt={method.alt}
            className="h-6 md:h-9"
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentSupportSection;