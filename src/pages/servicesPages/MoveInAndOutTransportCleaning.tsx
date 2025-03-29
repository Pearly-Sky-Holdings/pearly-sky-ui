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

    if (
      !propertyType ||
      !contactType ||
      !language ||
      !timeZone ||
      !selectedDate ||
      !selectedTime ||
      !acceptTerms2||
      !locationFrom||
      !locationTo||
      !propertySize||
      !country
    ) {
      alert(translate('MfillAllFieldsAlert'));
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
      password: "1234",
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
      const response = await fetch(
        "https://back.pearlyskyplc.com/api/saveServiceDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(serviceDetails),
        }
      );

      if (response.ok) {
        const result = await response.json();
        navigate("/quotation", { state: { data } });
      } else {
        console.error("API Error:", response.statusText);
        alert(translate('MsubmitFailedAlert'));
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert(translate('MnetworkErrorAlert'));
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
    </div>
  );
}

export default MoveInAndOutTransportCleaning;