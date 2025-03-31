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
import Images from "../../components/MoveInAndOutTransportCleaning/moveInAndOutImage";
import dayjs from "dayjs";
import PersonalInformationForm from "../../components/personalInformationForm/personalInformationForm";
import { MoveInOutTransportService } from "../../config/images";
import MoveInAndOutTransportBookingCart from "../../components/MoveInAndOutTransportCleaning/moveInAndOutTransportBookingCart";
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
import { useLanguage } from "../../context/LanguageContext";


function MoveInAndOutTransportCleaning() {
  const { translate } = useLanguage();
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  useSelector((state: any) => state.servicesSlice.service);
  const [_selectedServices, _setSelectedServices] = useState<object[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [acceptTerms2, setAcceptTerms2] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [language, setLanguage] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [country, setCountry] = useState("");
  const [contactType, setContactType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");

  // Memoize the callback function to prevent unnecessary re-renders
 
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  const handleFormChange = useCallback((data: any) => {
    setFormData(data);
  }, []);

  useEffect(() => {
    dispatch(getPackege("11"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getServices("11"));
  }, [dispatch]);

  const [materials, setMaterials] = useState({ customer: false, company: false });
  const [equipment, setEquipment] = useState({ customer: false, company: false });
  
  type Section = "equipment"|"materials";
  type Option = "customer" | "company";

  const handleCheckboxChange = (section: Section, option: Option) => {
    if (section === "materials") {
      setMaterials({
        customer: option === "customer",
        company: option === "company",
      });
    }
    else if (section === "equipment") {
      setEquipment({
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
    if (!materials.customer && !materials.company) {
      alert(translate('MmaterialsRequiredAlert'));
      return; 
    }
    if (!equipment.customer && !equipment.company) {
      alert(translate('MequipmentRequiredAlert'));
      return; 
    }

    if (!locationFrom) {
      setDialogMessage("Location From Address is required. Please enter Location From Address");
      setOpenDialog(true);
      return;
    }

    if (!locationTo) {
      setDialogMessage("Location To Address is required. Please enter Location To Address");
      setOpenDialog(true);
      return;
    }

    if (!propertySize) {
      setDialogMessage("Property Size is required. Please select a Property Size.");
      setOpenDialog(true);
      return;
    }

    if (!country) {
      setDialogMessage("country is required. Please select a country.");
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
    

    const date = dayjs(selectedDate).format("YYYY-MM-DD").toString();

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

    const serviceDetails = {
      customer,
      service_id: "13",
      price: "00.00",
      date,
      time: selectedTime,
      property_size: propertySize,
      duration: "0",
      note: document.querySelector("textarea")?.value || "",
      request_gender: contactType,
      request_language: language,
      business_property: propertyType,
      cleaning_solvents: " ",
      time_zoon: timeZone,
      location_from: locationFrom,
      location_to: locationTo,
      materials: materials.customer ? translate('MprovidedByCustomer') : translate('MprovidedByCompany'),
      payment_method: "cash",
      reStock_details: [],
    };

    const data = {
      serviceName: translate('MmoveInOutTransportCleaning'),
      details: serviceDetails,
      personalInformation: formData,
      materials,
      equipment
    };

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
       alert(translate('submitFailedAlert'));
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
        <div className="w-full lg:w-3/3">
          <img
            src={MoveInOutTransportService}
            alt={translate('McleaningServiceAlt')}
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
        <div className="w-fulllg:w-2/3 gap-1">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-[#002F6D] to-[#0D90C8] text-transparent bg-clip-text p-2">
              {translate('MmoveInOutTransportCleaning')}
            </h2>
          </div>
          <div className="flex-grow">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              {translate('MmoveInOutDescription')}
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
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          {translate('MselectJobForQuotation')}
        </h2>

        <div className="mb-6 shadow-lg p-4 sm:p-6 rounded-lg border border-blue-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {/* Calendar Section */}
            <div className="flex flex-col">
              <label className="block mb-2 text-blue-900 font-semibold">
                {translate('MselectDate')}
              </label>
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

        {/* Booking Details */}
        <div className="mt-10">
          <MoveInAndOutTransportBookingCart
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            contactType={contactType}
            setContactType={setContactType}
            language={language}
            setLanguage={setLanguage}
            timeZone={timeZone}
            setTimeZone={setTimeZone}
            locationFrom={locationFrom}
            setLocationFrom={setLocationFrom}
            locationTo={locationTo}
            setLocationTo={setLocationTo}
            propertySize={propertySize}
            setPropertySize={setPropertySize}
            country={country}
            setCountry={setCountry}
          />
        </div>

        {/* File Upload and Additional Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-black">
              {translate('MuploadFilesLabel')}
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[150px] flex items-center justify-center">
              <div>
                <input type="file" className="hidden" id="file-upload" />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-blue-600 hover:text-blue-800"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm">
                      {translate('MclickToUpload')}
                    </span>
                    <span className="text-xs text-gray-500">
                      {translate('MmaxFileSize')}
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-black">
              {translate('MadditionalNoteLabel')}
            </label>
            <textarea
              className="w-full min-h-[150px] border border-blue-900 rounded p-2 text-gray-700 resize-none"
              placeholder={translate('MtypeNoteHere')}
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-10 p-4 mb-6">
          {/* Equipment Section */}
          <div className="w-full mb-14 md:mb-0">
            <h2 className="text-lg text-black font-bold mb-2">
              {translate('MequipmentLabel')}
            </h2>
            <div className="text-black">
              <label className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={equipment.customer}
                  onChange={() => handleCheckboxChange("equipment", "customer")}
                />
                <span>{translate('MprovideByCustomer')}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={equipment.company}
                  onChange={() => handleCheckboxChange("equipment", "company")}
                />
                <span>{translate('MprovideByCompany')}</span>
              </label>
            </div>
          </div>

          {/* Materials Section */}
          <div className="w-full">
            <h2 className="text-lg text-black font-bold mb-2">
              {translate('MmaterialsLabel')}
            </h2>
            <div className="text-black">
              <label className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={materials.customer}
                  onChange={() => handleCheckboxChange("materials", "customer")}
                />
                <span>{translate('MprovideByCustomer')}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={materials.company}
                  onChange={() => handleCheckboxChange("materials", "company")}
                />
                <span>{translate('MprovideByCompany')}</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <PersonalInformationForm onChangeCallback={handleFormChange} />
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
              {translate('MtermsAgreement')}
            </span>
          </label>
        </div>

        {/* Request Quotation Button */}
        <button
          className="w-50 h-10 mt-8"
          onClick={handleBookNow}
          style={{ background: "#0D90C8", fontSize: "15px", color: "white" }}
        >
          {translate('MrequestQuotationButton')}
        </button>
      </div>

      {/* Loading Overlay */}
      <LoadingOverlay 
        open={isLoading} 
        message={translate('MprocessingOrder')}
        subMessage={translate('MpleaseWaitWhileProcessing')}
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

export default MoveInAndOutTransportCleaning;