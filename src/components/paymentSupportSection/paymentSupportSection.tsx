import React from 'react';

interface PaymentMethod {
  icon: string;
  alt: string;
}

interface PaymentSupportSectionProps {
  title?: string;
  paymentMethods?: PaymentMethod[];
}

const PaymentSupportSection: React.FC<PaymentSupportSectionProps> = ({ title = "We Support", paymentMethods = [] }) => {
  return (
    <div className="text-center mt-8 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-blue-900">{title}</h2>
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