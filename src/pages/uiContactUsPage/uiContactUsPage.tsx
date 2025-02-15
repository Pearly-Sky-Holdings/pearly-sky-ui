import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Schema
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone must be only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
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
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  bg-white shadow-lg rounded-lg p-6 md:p-10 w-full">
        {/* Contact Form */}
        <div className="w-full">
          <h2 className="text-4xl font-bold text-[#002F6D] mb-4">Get in Touch With Us</h2>
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
            <button
              type="submit"
              className="w-full h-10 bg-[#002F6D] text-white font-semibold py-5 px-6 rounded-xl hover:bg-blue-700 transition"
              style={{fontSize:'15px'}}
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-full">
          <img
            src="./images/uiContactUs/ContactUs.png"
            alt="Customer Support"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <button className="absolute h-10 w-30 top-5 left-5 bg-[#002F6D] text-white px-6 py-3  rounded-xl font-semibold"
            style={{fontSize:'15px'}}>
                <Link to="/contact" >
                    Contact Us
                </Link>            
          </button>
        </div>
      </div>
    </div>
  );
};

export default UIContactUs;
