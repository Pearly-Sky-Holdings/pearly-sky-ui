import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {contactImage1} from "../../config/images";
import { Link } from 'react-router-dom';

// Validation Schema
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Phone must be only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const UIContactUs: React.FC = () => {
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
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div className="w-full min-h-screen-lg flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  bg-white shadow-lg rounded-lg p-6 md:p-10 w-full">
        {/* Contact Form */}
        <div className="w-full">
          <h2 className="text-4xl font-bold text-[#002F6D] mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-black  mb-6">
            Drop Pearly Sky Company Pvt Ltd regarding any of your queries.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className="w-full px-4 py-2 border border-[#0D90C8] rounded-2xl focus:outline-none text-[#002F6D] focus:ring-2 focus:ring-[#0D90C8] placeholder-gray-500"
              />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="w-full px-4 py-2 border border-[#0D90C8] rounded-2xl focus:outline-none text-[#002F6D] focus:ring-2 focus:ring-[#0D90C8] placeholder-gray-500"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Phone"
                {...register("phone")}
                className="w-full px-4 py-2 border border-[#0D90C8] rounded-2xl focus:outline-none text-[#002F6D] focus:ring-2 focus:ring-[#0D90C8] placeholder-gray-500"
              />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Message"
                {...register("message")}
                className="w-full px-4 py-2 border border-[#0D90C8] text-[#002F6D] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0D90C8] h-28 placeholder-gray-500"
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
              padding:"8px 8px",
              paddingY:"",
              width: "100%",
              borderRadius: "12px",
              "&:hover": { backgroundColor: "#008CDA" },
            }}
          >
            Contact Us
          </Button>
          </form>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-full">
          <img
            src={contactImage1}
            alt="Customer Support"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            style={{
              boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",}}
          />
          <Button
          variant="contained"
          component={Link}
          to="/contactUsPage"
            className=""
            sx={{
              position: "absolute",
              top: "20px",
              left: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              backgroundColor: "#002F6D",
              color: "white",
              paddingX:"10px",
              borderRadius: "12px",
              "&:hover": { backgroundColor: "#008CDA" },
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UIContactUs;