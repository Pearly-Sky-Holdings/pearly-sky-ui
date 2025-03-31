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
import { useLanguage } from "../../context/LanguageContext";

function SanitizationAndDisinfection() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const { translate } = useLanguage();
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

  const handleSelectionChange = useCallback((data: { category: string; items: string[] }[]) => {
    setSelectedData(data);
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFormChange = useCallback((data: any) => {
    setFormData(data);
  }, []);
  
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
    if (!chemical.customer && !chemical.company) {
      setDialogMessage(translate('QchemicalRequired'));
      setOpenDialog(true);
      return;
    }

    if (!equipment.customer && !equipment.company) {
      setDialogMessage(translate('QequipmentRequired'));
      setOpenDialog(true);
      return;
    }

    if (!formData.firstName) {
      setDialogMessage(translate('QfirstNameRequired'));
      setOpenDialog(true);
      return;
    }

    if (!formData.lastName) {
      setDialogMessage(translate('QlastNameRequired'));
      setOpenDialog(true);
      return;
    }
  
    if (!formData.country) {
      setDialogMessage(translate('QcountryRequired'));
      setOpenDialog(true);
      return;
    }

    if (!formData.address) {
      setDialogMessage(translate('QaddressRequired'));
      setOpenDialog(true);
      return;
    }

    if (!formData.city) {
      setDialogMessage(translate('QcityRequired'));
      setOpenDialog(true);
      return;
    }

    if (!formData.state) {
      setDialogMessage(translate('QstateRequired'));
      setOpenDialog(true);
      return;
    }

  const phoneValidation = validatePhoneNumber(formData.phone);
  if (!phoneValidation.isValid) {
    setDialogMessage(phoneValidation.message || "Invalid phone number");
    setOpenDialog(true);
    return;
  }

  // Validate Email
  if (!formData.email) {
    setDialogMessage(translate('QemailRequired'));
    setOpenDialog(true);
    return;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|co\.uk|in|au|ca|io|me|us)$/i.test(formData.email)) {
    setDialogMessage(translate('QinvalidEmail'));
    setOpenDialog(true);
    return;
  }
    if (!formData.zip) {
      setDialogMessage(translate('QzipRequired'));
      setOpenDialog(true);
      return;
    }

    if (!formData.phone) {
      setDialogMessage(translate('QphoneRequired'));
      setOpenDialog(true);
      return;
    }

    if (!formData.email) {
      setDialogMessage(translate('QemailRequired'));
      setOpenDialog(true);
      return;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      setDialogMessage(translate('QinvalidEmail'));
      setOpenDialog(true);
      return;
    }

    if (!formData.password) {
      setDialogMessage(translate('QpasswordRequired'));
      setOpenDialog(true);
      return;
    } else if (formData.password.length < 8) {
      setDialogMessage(translate('QpasswordLength'));
      setOpenDialog(true);
      return;
    }

    if (!formData.confirmPassword) {
      setDialogMessage(translate('QconfirmPasswordRequired'));
      setOpenDialog(true);
      return;
    } else if (formData.password !== formData.confirmPassword) {
      setDialogMessage(translate('QpasswordMismatch'));
      setOpenDialog(true);
      return;
    }

    if (!frequency) {
      setDialogMessage(translate('QfrequencyRequired'));
      setOpenDialog(true);
      return;
    }

    if (!propertyType) {
      setDialogMessage(translate('QpropertyTypeRequired'));
      setOpenDialog(true);
      return;
    }

    if (!contactType) {
      setDialogMessage(translate('QcontactTypeRequired'));
      setOpenDialog(true);
      return;
    }

    if (!language) {
      setDialogMessage(translate('QlanguageRequired'));
      setOpenDialog(true);
      return;
    }

    if (!timeZone) {
      setDialogMessage(translate('QtimeZoneRequired'));
      setOpenDialog(true);
      return;
    }

    if (!selectedDate) {
      setDialogMessage(translate('QdateRequired'));
      setOpenDialog(true);
      return;
    }

    if (!selectedTime) {
      setDialogMessage(translate('QtimeRequired'));
      setOpenDialog(true);
      return;
    }

    if (!acceptTerms2) {
      setDialogMessage(translate('QtermsRequired'));
      setOpenDialog(true);
      return;
    }

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
      Equipment: equipment.customer ? translate('providedByCustomer') : translate('providedByCompany'),
      chemical: chemical.customer ? translate('providedByCustomer') : translate('providedByCompany'),
      payment_method: "cash", 
      reStock_details: [],
      free_estimate: selectedData
    };

    const data = {
      serviceName: translate('sanitizationDisinfection'),
      details: serviceDetails,
      personalInformation: formData,
      equipment,
      chemical,
      selectedCategories: selectedData,
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
        alert(translate('submitFailedAlert'))
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
            alt={translate('sanitizationDisinfection')}
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
        <div className="w-fulllg:w-2/3 gap-1">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-[#002F6D] to-[#0D90C8] text-transparent bg-clip-text p-2">
              {translate('sanitizationDisinfection')}
            </h1>
          </div>
          <div className="flex-grow">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              {translate('disinfectingDescription')}
            </p>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              {translate('sanisanitizingDescription')}
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
        <h2 className="text-2xl font-bold text-blue-900 mb-6">{translate('selectJobForQuotation')}</h2>

        <div className="mb-6 shadow-lg p-4 sm:p-6 rounded-lg border border-blue-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {/* Calendar Section */}
            <div className="flex flex-col">
              <label className="block mb-2 text-blue-900 font-semibold">{translate('selectDate')}</label>
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
            <label className="block mb-2 text-black">{translate('uploadFiles')}</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[150px] flex items-center justify-center">
              <div>
                <input type="file" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer text-blue-600 hover:text-blue-800">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm">{translate('clickToUpload')}</span>
                    <span className="text-xs text-gray-500">{translate('maxFileSize')}</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-black">{translate('additionalNote')}</label>
            <textarea
              className="w-full min-h-[150px] border border-blue-900 rounded p-2 text-gray-700 resize-none"
              placeholder={translate('typeNoteHere')}
            ></textarea>
          </div>          
        </div>        

        <div className="flex flex-col md:flex-row md:gap-10 p-4 mb-6">
          {/* Equipment Section */}
          <div className="w-full mb-14 md:mb-0">
            <h2 className="text-lg text-black font-bold mb-2">{translate('equipment')}</h2>
            <div className="text-black">
              <label className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={equipment.customer}
                  onChange={() => handleCheckboxChange("equipment", "customer")}
                />
                <span>{translate('providedByCustomer')}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={equipment.company}
                  onChange={() => handleCheckboxChange("equipment", "company")}
                />
                <span>{translate('providedByCompany')}</span>
              </label>
            </div>
          </div>

          {/* Chemical Section */}
          <div className="w-full">
            <h2 className="text-lg text-black font-bold mb-2">{translate('chemical')}</h2>
            <div className="text-black">
              <label className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={chemical.customer}
                  onChange={() => handleCheckboxChange("chemical", "customer")}
                />
                <span>{translate('providedByCustomer')}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={chemical.company}
                  onChange={() => handleCheckboxChange("chemical", "company")}
                />
                <span>{translate('providedByCompany')}</span>
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
              {translate('termsAgreement')}
            </span>
          </label>
        </div>

        {/* Request Quotation Button */}
        <button
          className="w-50 h-10 mt-8"
          onClick={handleBookNow}
          style={{ background: "#0D90C8", fontSize: "15px", color: "white" }}
        >
          {translate('requestQuotation')}
        </button>
      </div>

      <LoadingOverlay 
        open={isLoading} 
        message={translate('processingOrder')}
        subMessage={translate('pleaseWait')}
      />

      <div>
        <PaymentSupportSection />
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ background: "#800000", color: "white" ,textAlign:"center"}}>
          {translate('validationError')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{mt:3 ,textAlign:"center",color:"#800000"}}>
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" sx={{background: "#800000", color: "white" ,textAlign:"center"}}>
            {translate('ok')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SanitizationAndDisinfection;