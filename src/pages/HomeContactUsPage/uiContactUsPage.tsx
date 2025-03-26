import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { contactImage1 } from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

const UIContactUs: React.FC = () => {
  const { translate } = useLanguage();

  // Validation Schema
  const validationSchema = yup.object().shape({
    name: yup.string().required(translate('nameRequired')),
    email: yup.string().email(translate('invalidEmail')).required(translate('emailRequired')),
    phone: yup
      .string()
      .matches(/^\d+$/, translate('phoneDigitsOnly'))
      .min(10, translate('phoneMinLength'))
      .required(translate('phoneRequired')),
    message: yup
      .string()
      .required(translate('messageRequired'))
      .min(10, translate('messageMinLength')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Form Submission
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert(translate('formSubmissionSuccess'));
    reset();
  };

  return (
    <div className="w-full flex items-center justify-center py-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 md:p-10 w-full">
        {/* Contact Form */}
        <div className="w-full">
          <h6 className="text-4xl font-semibold text-[#002F6D] mb-4">
            {translate('getInTouchTitle')}
          </h6>
          <p className="text-black mb-6">
            {translate('contactFormDescription')}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder={translate('namePlaceholder')}
                {...register("name")}
                className="w-full px-4 py-2 border border-[#0D90C8] rounded-lg focus:outline-none text-[#002F6D] focus:ring-2 focus:ring-[#0D90C8] placeholder-gray-500"
              />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder={translate('emailPlaceholder')}
                {...register("email")}
                className="w-full px-4 py-2 border border-[#0D90C8] rounded-lg focus:outline-none text-[#002F6D] focus:ring-2 focus:ring-[#0D90C8] placeholder-gray-500"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder={translate('phonePlaceholder')}
                {...register("phone")}
                className="w-full px-4 py-2 border border-[#0D90C8] rounded-lg focus:outline-none text-[#002F6D] focus:ring-2 focus:ring-[#0D90C8] placeholder-gray-500"
              />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder={translate('messagePlaceholder')}
                {...register("message")}
                className="w-full px-4 py-2 border border-[#0D90C8] text-[#002F6D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D90C8] h-28 placeholder-gray-500"
              ></textarea>
              <p className="text-red-500 text-sm">{errors.message?.message}</p>
            </div>

            {/* Submit Button */}
            <Button
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                backgroundColor: "#002F6D",
                color: "white",
                padding: "8px 8px",
                width: "100%",
                borderRadius: "12px",
                "&:hover": { backgroundColor: "#008CDA" },
              }}
            >
              {translate('submitButton')}
            </Button>
          </form>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-full">
          <img
            src={contactImage1}
            alt={translate('customerSupportAlt')}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            style={{
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UIContactUs;