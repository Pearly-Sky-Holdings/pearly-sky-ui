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


function SanitizationAndDisinfection() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const services = useSelector((state: any) => state.servicesSlice.service);
  const [_selectedServices, setSelectedServices] = useState<object[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [acceptTerms2, setAcceptTerms2] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [frequency, setFrequency] = useState("");
  const [language, setLanguage] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [contactType, setContactType] = useState("");

  const [formData, setFormData] = useState({});
  const [selectedData, setSelectedData] = useState<{ category: string; items: string[] }[]>([]);

  // Memoize the callback function to prevent unnecessary re-renders
  const handleSelectionChange = useCallback((data: { category: string; items: string[] }[]) => {
    setSelectedData(data);
    console.log("Selected Data:", data);
  }, []);

  const [equipment, setEquipment] = useState({
    customer: false,
    company: false,
  });
  const [chemical, setChemical] = useState({
    customer: false,
    company: false,
  });

  // Memoize the form change handler
  const handleFormChange = useCallback((data: any) => {
    setFormData(data);
  }, []);

  // Fetch package and services data

  useEffect(() => {
    dispatch(getPackege("6"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getServices("6"));

  }, [dispatch]);

  const handleCheckboxChange = (
    section: "equipment" | "chemical",
    type: "customer" | "company"
  ) => {
    if (section === "equipment") {
      setEquipment((prev) => ({ ...prev, [type]: !prev[type] }));
    } else if (section === "chemical") {
      setChemical((prev) => ({ ...prev, [type]: !prev[type] }));
    }
  };

  const handleBookNow = () => {
    if (

      !frequency ||
      !propertyType ||
      !contactType ||
      !language ||

      !timeZone ||
      !selectedDate ||
      !selectedTime ||

      !acceptTerms2
    ) {
      alert("Please fill all required fields before proceeding to checkout.");
      return;
    }
    const date = dayjs(selectedDate).format("YYYY-MM-DD").toString();
    const serviceDetails = {
      service_id: "6",
      date,
      time: selectedTime,
      frequency,
      person_type: contactType,
      language,
      timeZone,

      business_property: propertyType,

      note: document.querySelector("textarea")?.value || "",
    };

    const data = {
      serviceName: "Sanitization & Disinfection",
      details: serviceDetails,
      personalInformation: formData,
      equipment,
      chemical,
      selectedCategories: selectedData,
    };

    console.log("Data:", data);
    navigate("/quotation", { state: { data } });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 mt-6 sm:p-2">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 flex flex-col sm:flex-row gap-4 sm:gap-8 items-stretch">
        <div className="w-full sm:w-2/5 flex">
          <img
            src={SanitizationService}
            alt="Cleaning Service"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
        <div className="w-full sm:w-2/3 flex flex-col justify-between">
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

          {/* Display the selected data in the parent component */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[#002F6D] mb-4">Selected Categories and Items</h2>
            {selectedData.length > 0 ? (
              selectedData.map((categoryData, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-bold text-[#002F6D] mb-2">{categoryData.category}</h3>
                  <ul className="list-disc list-inside">
                    {categoryData.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-gray-700">No categories selected.</p>
            )}
          </div>
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

        <div className="flex flex-wrap  p-8 gap-10 md:gap-100 mb-10">
          {/* Equipment Section */}
          <div className="w-full md:w-auto">
            <h2 className="text-lg text-black font-bold mb-4">Equipment</h2>
            <div className="space-y-2 text-black ">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Provide by customer</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Provide by company</span>
              </label>
            </div>
          </div>

          {/* Chemical Section */}
          <div className="w-full md:w-auto">
            <h2 className="text-lg text-black font-bold mb-4">Chemical</h2>
            <div className="space-y-2 text-black">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Provide by customer</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Provide by company</span>
              </label>
            </div>
          </div>
        </div>


        <div className="flex flex-wrap p-8 gap-10 md:gap-100 mb-10">
          {/* Equipment Section */}
          <div className="w-full md:w-auto">
            <h2 className="text-lg text-black font-bold mb-4">Equipment</h2>
            <div className="space-y-2 text-black">
              <label className="flex items-center space-x-2">
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
          <div className="w-full md:w-auto">
            <h2 className="text-lg text-black font-bold mb-4">Chemical</h2>
            <div className="space-y-2 text-black">
              <label className="flex items-center space-x-2">
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
          <div style={{ marginTop: "20px" }}>
            <h2>Live Form Data:</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <pre>{JSON.stringify(equipment, null, 2)}</pre>
            <pre>{JSON.stringify(chemical, null, 2)}</pre>
            <pre>{JSON.stringify(propertyType, null, 2)}</pre>
            <pre>{JSON.stringify(selectedData, null, 2)}</pre>
          </div>
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

      {/* Payment Support Section */}
      <div>
        <PaymentSupportSection />
      </div>
    </div>
  );
}

export default SanitizationAndDisinfection;