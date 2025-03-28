import { useState, useEffect, useCallback } from "react";
import store from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import TimeSlots from "../../components/timeSlot/timeSlot";
import "./CustomCalendar.css";
import PaymentSupportSection from "../../components/paymentSupportSection/paymentSupportSection";
import { getPackege, getServices } from "../../services/CleaningServices/index";
import Images from "../../components/sanitizationPage/images";
import dayjs from "dayjs";
import SanitizationBookingCart from "../../components/sanitizationPage/bookingCart";
import PersonalInformationForm from "../../components/personalInformationForm/personalInformationForm";
import { SanitizationService } from "../../config/images";
import EstimateList from "../../components/sanitizationPage/estimateList";
import LoadingOverlay from "../../components/welcomeAlert/LoadingOverlay";
import { parsePhoneNumber } from 'libphonenumber-js';
import instance from "../../services/AxiosOrder"; 

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

function SanitizationAndDisinfection() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  useSelector((state: any) => state.servicesSlice.service);
  const [_selectedServices, _setSelectedServices] = useState<object[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [acceptTerms2, setAcceptTerms2] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [frequency, setFrequency] = useState("");
  const [language, setLanguage] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [contactType, setContactType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
   
  const [selectedData, setSelectedData] = useState<{ category: string; items: string[] }[]>([]);

  // Memoize the callback function to prevent unnecessary re-renders
  const handleSelectionChange = useCallback((data: { category: string; items: string[] }[]) => {
    setSelectedData(data);
    console.log("Selected Data:", data);
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

 
  // Memoize the form change handler
  const handleFormChange = useCallback((data: any) => {
    setFormData(data);
  }, []);

  // Fetch package and services data

  useEffect(() => {
    dispatch(getPackege("10"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getServices("10"));

  }, [dispatch]);
  
const [equipment, setEquipment] = useState({ customer: false, company: false });
const [chemical, setChemical] = useState({ customer: false, company: false });

type Section = "equipment" | "chemical";
type Option = "customer" | "company";

const handleCheckboxChange = (section: Section, option: Option) => {
  if (section === "equipment") {
    setEquipment({
      customer: option === "customer",
      company: option === "company",
    });
  } else if (section === "chemical") {
    setChemical({
      customer: option === "customer",
      company: option === "company",
    });
  }
};
// validatePhoneNumber 
const validatePhoneNumber = (phone: string): { isValid: boolean; message?: string } => {
  if (!phone) {
    return { isValid: false, message: "Phone number is required" };
  }

  try {
    const phoneNumber = parsePhoneNumber(phone);
    
    if (!phoneNumber) {
      return { isValid: false, message: "Invalid phone number format" };
    }

    if (!phoneNumber.isValid()) {
      const countryName = formData.country || "selected country";
      return { 
        isValid: false, 
        message: `Please enter a valid ${countryName} phone number`
      };
    }

    return { isValid: true };
  } catch (error) {
    return { 
      isValid: false, 
      message: "Invalid phone number. Please use international format (+country code)"
    };
  }
};
  interface FormData {
    firstName: string;
    lastName: string;
    company?: string; 
    country: string;
    address: string;
    apartment?: string; 
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleBookNow = async () => {
   // Validate Chemical
   if (!chemical.customer && !chemical.company) {
    setDialogMessage("Chemical is required. Please select an option for Chemical.");
    setOpenDialog(true);
    return;
  }

  // Validate Equipment
  if (!equipment.customer && !equipment.company) {
    setDialogMessage("Equipment is required. Please select an option for Equipment.");
    setOpenDialog(true);
    return;
  }

  // Validate First Name
  if (!formData.firstName) {
    setDialogMessage("First Name is required. Please enter your first name.");
    setOpenDialog(true);
    return;
  }

  // Validate Last Name
  if (!formData.lastName) {
    setDialogMessage("Last Name is required. Please enter your last name.");
    setOpenDialog(true);
    return;
  }

  
  // Validate Country
  if (!formData.country) {
    setDialogMessage("Country is required. Please select your country.");
    setOpenDialog(true);
    return;
  }

  // Validate Address
  if (!formData.address) {
    setDialogMessage("Address is required. Please enter your address.");
    setOpenDialog(true);
    return;
  }

  // Validate City
  if (!formData.city) {
    setDialogMessage("City is required. Please enter your city.");
    setOpenDialog(true);
    return;
  }

  // Validate State
  if (!formData.state) {
    setDialogMessage("State is required. Please enter your state.");
    setOpenDialog(true);
    return;
  }

  // Validate ZIP Code
  if (!formData.zip) {
    setDialogMessage("ZIP Code is required. Please enter your ZIP code.");
    setOpenDialog(true);
    return;
  }

  // Replace your phone validation in handleBookNow with:
  const phoneValidation = validatePhoneNumber(formData.phone);
  if (!phoneValidation.isValid) {
    setDialogMessage(phoneValidation.message || "Invalid phone number");
    setOpenDialog(true);
    return;
  }

  // Validate Email
  if (!formData.email) {
    setDialogMessage("Email is required. Please enter your email address.");
    setOpenDialog(true);
    return;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|co\.uk|in|au|ca|io|me|us)$/i.test(formData.email)) {
    setDialogMessage("Invalid email address. Please enter a valid email.");
    setOpenDialog(true);
    return;
  }

  // Validate Password
  if (!formData.password) {
    setDialogMessage("Password is required. Please enter your password.");
    setOpenDialog(true);
    return;
  } else if (formData.password.length < 8) {
    setDialogMessage("Password must be at least 8 characters long.");
    setOpenDialog(true);
    return;
  }

  // Validate Confirm Password
  if (!formData.confirmPassword) {
    setDialogMessage("Confirm Password is required. Please confirm your password.");
    setOpenDialog(true);
    return;
  } else if (formData.password !== formData.confirmPassword) {
    setDialogMessage("Passwords do not match. Please check your password and confirm password.");
    setOpenDialog(true);
    return;
  }

  // Validate Password Match
  if (formData.password !== formData.confirmPassword) {
    setDialogMessage("Passwords do not match. Please check your password and confirm password.");
    setOpenDialog(true);
    return;
  }

  // Validate Frequency
  if (!frequency) {
    setDialogMessage("Frequency is required. Please select a frequency.");
    setOpenDialog(true);
    return;
  }

  // Validate Property Type
  if (!propertyType) {
    setDialogMessage("Property Type is required. Please select a property type.");
    setOpenDialog(true);
    return;
  }

  // Validate Contact Type
  if (!contactType) {
    setDialogMessage("Contact Type is required. Please select a contact type.");
    setOpenDialog(true);
    return;
  }

  // Validate Language
  if (!language) {
    setDialogMessage("Language is required. Please select a language.");
    setOpenDialog(true);
    return;
  }

  // Validate Time Zone
  if (!timeZone) {
    setDialogMessage("Time Zone is required. Please select a time zone.");
    setOpenDialog(true);
    return;
  }

  // Validate Selected Date
  if (!selectedDate) {
    setDialogMessage("Date is required. Please select a date.");
    setOpenDialog(true);
    return;
  }

  // Validate Selected Time
  if (!selectedTime) {
    setDialogMessage("Time is required. Please select a time.");
    setOpenDialog(true);
    return;
  }

  // Validate Terms and Conditions
  if (!acceptTerms2) {
    setDialogMessage("You must accept the terms and conditions to proceed.");
    setOpenDialog(true);
    return;
  }

  console.log("All fields are valid. Proceeding to checkout...");
  
    // selected date
    const date = dayjs(selectedDate).format("YYYY-MM-DD").toString();
  
    // customer object
    const customer = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      company: formData.company || "", 
      country: formData.country,
      street_address: formData.address,
      apartment_type: formData.apartment || "", 
      city: formData.city,
      province: formData.state,
      postal_code: formData.zip,
      contact: formData.phone,
      email: formData.email,
      password: formData.password, 
    };
  
    // service details
    const serviceDetails = {
      customer, 
      service_id: "10", 
      price: "00.00", 
      date,
      time: selectedTime,             
      note: document.querySelector("textarea")?.value || "",
      request_gender: contactType, 
      request_language: language,
      business_property: propertyType,
      cleaning_solvents: " ", 
      frequency,
      time_zoon: timeZone,
      Equipment: equipment.customer ? "Provided by customer" : "Provided by company",
      chemical:chemical.customer ? "Provided by customer" : "Provided by company",
      payment_method: "cash", 
      reStock_details: [],
      free_estimate:selectedData
    };
  
    console.log("Data to be sent:", serviceDetails);

    const data = {
      serviceName: " Sanitization & Disinfection",
      details: serviceDetails,
      personalInformation: formData,
      equipment,
      chemical,
      selectedCategories: selectedData,
    };
    console.log("Data:", data);
  
    try {
      setIsLoading(true);
      
      // Using Axios instance
      const response = await instance.post("saveServiceDetails", serviceDetails);
      
      console.log("API Response:", response.data);
    
      // Navigate to the quotation page
      navigate("/quotation", { state: { data } });
      
    } catch (error: any) {
      // Handle errors
      console.error("API Error:", error.response?.data || error.message);
      
      setDialogMessage(
        error.response?.data?.message || 
        "Failed to submit the quotation request. Please try again."
      );
      setOpenDialog(true);
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 mt-6 sm:p-2">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="w-full lg:w-3/2">
          <img
            src={SanitizationService}
            alt="Cleaning Service"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
        <div className="w-fulllg:w-2/3 gap-1">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-[#002F6D] to-[#0D90C8] text-transparent bg-clip-text p-2">
              Sanitization & Disinfection
            </h1>
          </div>
          <div className="flex-grow">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Disinfecting is a cleaning method that uses disinfectants known as chemicals to kill germs on objects and
              surfaces. Some basic disinfectants used for this method are bleach and alcohol solutions. Generally, we need
              to keep the disinfectant on the surfaces and objects for a particular time to kill the germs. It does not
              clean dirty surfaces or remove germs definitely.
            </p>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Sanitizing can be completed by cleaning, disinfecting, or both. It takes part in decreasing the number of
              germs to a safe level. What is defined by a safe level depends on public health standards or basic needs at
              a workplace, school, etc. For example, there are certain procedures for sanitizing in restaurants and other
              facilities that are used to prepare food. Methods we use to sanitize can be varied, depending on your
              requirements. They can be Mopping a floor using a mop, a chemical, and water, using a dishwasher to
              sanitize the dishes or using an antibacterial wipe on a TV remote.
            </p>
          </div>
        </div>
      </div>

      {/* Package List */}
      <div className="rounded-lg shadow-lg p-4 sm:p-6 mb-8">
        <Images />
      </div>

      {/* Booking Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Select Your Job to Get Your Quotation</h2>

        <div className="mb-6 shadow-lg p-4 sm:p-6 rounded-lg border border-blue-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {/* Calendar Section */}
            <div className="flex flex-col">
              <label className="block mb-2 text-blue-900 font-semibold">Select Date</label>
              <div className="calendar-container p-4 rounded-lg">
                <Calendar
                  onChange={(date) => setSelectedDate(date as Date)}
                  value={selectedDate}
                  minDate={new Date()}
                  calendarType="iso8601"
                  prevLabel={<ChevronLeft className="w-5 h-5" />}
                  nextLabel={<ChevronRight className="w-5 h-5" />}
                  formatMonthYear={(date) => dayjs(date).format("MMMM YYYY")}
                />
              </div>
            </div>

            {/* Time Slots Section */}
            <div className="flex flex-col">
              <label className="block mb-2 text-blue-900 font-semibold">
                {format(selectedDate, "EEEE, do MMMM")}
              </label>
              <div className="p-4 rounded-lg h-[350px] flex-1">
                <TimeSlots
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onTimeSelect={setSelectedTime}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <EstimateList onSelectionChange={handleSelectionChange} />
        </div>

        {/* Booking Details */}
        <div className="mt-10">
          <SanitizationBookingCart           
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            frequency={frequency}
            setFrequency={setFrequency}
            contactType={contactType}
            setContactType={setContactType}
            language={language}
            setLanguage={setLanguage}
            timeZone={timeZone}
            setTimeZone={setTimeZone}
          />
        </div>

        {/* File Upload and Additional Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-black">Upload Images or Documents</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[150px] flex items-center justify-center">
              <div>
                <input type="file" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer text-blue-600 hover:text-blue-800">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm">Click to upload or drag and drop</span>
                    <span className="text-xs text-gray-500">Maximum file size: 10MB</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-black">Additional Note</label>
            <textarea
              className="w-full min-h-[150px] border border-blue-900 rounded p-2 text-gray-700 resize-none"
              placeholder="Type your note here..."
            ></textarea>
          </div>          
        </div>        

        <div className="flex flex-col md:flex-row md:gap-10 p-4 mb-6">
          {/* Equipment Section */}
          <div className="w-full mb-14 md:mb-0">
            <h2 className="text-lg text-black font-bold mb-2">Equipment</h2>
            <div className="text-black">
              <label className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={equipment.customer}
                  onChange={() => handleCheckboxChange("equipment", "customer")}
                />
                <span>Provide by customer</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={equipment.company}
                  onChange={() => handleCheckboxChange("equipment", "company")}
                />
                <span>Provide by company</span>
              </label>
            </div>
          </div>

          {/* Chemical Section */}
          <div className="w-full">
            <h2 className="text-lg text-black font-bold mb-2">Chemical</h2>
            <div className="text-black">
              <label className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={chemical.customer}
                  onChange={() => handleCheckboxChange("chemical", "customer")}
                />
                <span>Provide by customer</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={chemical.company}
                  onChange={() => handleCheckboxChange("chemical", "company")}
                />
                <span>Provide by company</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <PersonalInformationForm onChangeCallback={handleFormChange} />
          {/* Display form data in another section */}
          {/* <div style={{ marginTop: "20px" }}>
            <h2>Live Form Data:</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <pre>{JSON.stringify(equipment, null, 2)}</pre>
            <pre>{JSON.stringify(chemical, null, 2)}</pre>
            <pre>{JSON.stringify(propertyType, null, 2)}</pre>
            <pre>{JSON.stringify(selectedData, null, 2)}</pre>
          </div> */}
        </div>

        {/* Terms Checkbox */}
        <div className="mb-6 mt-10">
          <label className="flex items-start space-x-2 text-black">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={acceptTerms2}
              onChange={(e) => setAcceptTerms2(e.target.checked)}
            />
            <span className="text-sm">
              By Booking or Requesting a quotation, you agree with our terms and conditions and privacy policy.
            </span>
          </label>
        </div>

        {/* Request Quotation Button */}
        <button
          className="w-50 h-10 mt-8"
          onClick={handleBookNow}
          style={{ background: "#0D90C8", fontSize: "15px", color: "white" }}
        >
          Request Quotation
        </button>
      </div>

      {/* Using the new LoadingOverlay component */}
      <LoadingOverlay 
        open={isLoading} 
        message="Processing your order..."
        subMessage="Please wait while we confirm your booking"
      />

      {/* Payment Support Section */}
      <div>
        <PaymentSupportSection />
      </div>

      {/* Dialog for displaying validation messages */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ background: "#800000", color: "white" ,textAlign:"center"}}>Validation Error</DialogTitle>
        <DialogContent >
          <DialogContentText sx={{mt:3 ,textAlign:"center",color:"#800000"}}>{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" sx={{background: "#800000", color: "white" ,textAlign:"center"}}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SanitizationAndDisinfection;