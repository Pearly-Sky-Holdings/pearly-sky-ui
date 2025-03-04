import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import TimeSlots from "../../components/timeSlot/timeSlot";
import "./CustomCalendar.css";
import TermsAndConditions from "../../components/termsAndConditions/termsAndConditions";
import PaymentSupportSection from "../../components/paymentSupportSection/paymentSupportSection";
import { getPackege, getServices } from "../../services/CleaningServices/index";
import Images from "../../components/sanitizationPage/images";
import dayjs from "dayjs";


import {
  SanitizationService,
  postConstructorImage1,
  postConstructorImage2,
  postConstructorImage3,
  postConstructorImage4,
  postConstructorImage5,
  postConstructorImage6,
} from "../../config/images";


type Equipment = {
  id: string;
  price: number;
  name?: string;
};

function sanitizationAndDisinfection() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const services = useSelector((state: any) => state.servicesSlice.service);
  const [_selectedServices, _setSelectedServices] = useState<object[]>([]);
  const [showTermsCard, setShowTermsCard] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [duration, setDuration] = useState("");
  const [numCleaners, setNumCleaners] = useState("");
  const [frequency, setFrequency] = useState("");
  const [acceptTerms1, setAcceptTerms1] = useState(false);
  const [acceptTerms2, setAcceptTerms2] = useState(false);
  const [language, setLanguage] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [contactType, setContactType] = useState("");
  const [selectedSolvent, setSelectedSolvent] = useState("");
  const [_selectedEquipmentOption, setSelectedEquipmentOption] = useState("");
  const [selectedEquipments, setSelectedEquipments] = useState<
    Array<{ id: string; price: number }>
  >([]);

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [conversionRate, setConversionRate] = useState(1);
  const [maxTime, setMaxTime] = useState<number>(1);

  const [priceBreakdown, setPriceBreakdown] = useState({
    hourlyRate: parseInt(services.data.price),
    serviceCosts: 0,
    equipmentCosts: 0,
    totalPrice:  parseInt(services.data.price),
    basePrice: parseInt(services.data.price),
  });

  const handleCurrencyUpdate = (
    currency: string,
    symbol: string,
    rate: number
  ) => {
    setSelectedCurrency(currency);
    setCurrencySymbol(symbol);
    setConversionRate(rate);
  };

  useEffect(() => {
    setPriceBreakdown(calculateTotalPrice());
  }, [selectedEquipments, conversionRate, duration]);

  useEffect(() => {
    dispatch(getPackege("6"));
  }, []);

  useEffect(() => {
    dispatch(getServices("6"));
  }, []);
  const calculateTotalPrice = () => {
    // Calculate base price based on hourly rate and maxTime
    const hourlyRate = parseInt(services.data.price,10);
    const basePrice = hourlyRate * maxTime * conversionRate;
    let serviceCosts = 0;
    let equipmentCosts = 0;

    selectedEquipments.forEach((equipment) => {
      equipmentCosts += equipment.price * conversionRate;
    });

    const totalPrice = basePrice + serviceCosts + equipmentCosts;
    return {
      hourlyRate,
      serviceCosts,
      equipmentCosts,
      totalPrice,
      basePrice,
    };
  };
  const handleEquipmentSelect = (equipment: Equipment, selected: boolean) => {
    if (selected) {
      // Check if the equipment is already in the array
      if (!selectedEquipments.some((e) => e.id === equipment.id)) {
        setSelectedEquipments((prev) => [
          ...prev,
          { id: equipment.id, price: equipment.price },
        ]);
      }
    } else {
      // Remove the equipment if it exists
      setSelectedEquipments((prev) =>
        prev.filter((e) => e.id !== equipment.id)
      );
    }
  };
  const handleSolventChange = (solvent: string) => {
    setSelectedSolvent(solvent);
  };

  const handleEquipmentOptionChange = (option: string) => {
    setSelectedEquipmentOption(option);
  };

  const handleBookNow = () => {
    if (
      !propertySize ||
      !duration ||
      !numCleaners ||
      !frequency ||
      !propertyType ||
      !contactType ||
      !language ||
      !selectedDate ||
      !selectedTime ||
      !acceptTerms1 ||
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
      property_size: propertySize,
      duration: Number(duration),
      number_of_cleaners: Number(numCleaners),
      frequency,
      person_type: contactType,
      language,
      business_property: propertyType,
      cleaning_solvents: selectedSolvent,
      equipmentOption: _selectedEquipmentOption,
      Equipment: selectedEquipments.map((e) => e.id).join(","),
      price: priceBreakdown.totalPrice,
      currency: selectedCurrency,
      note: document.querySelector("textarea")?.value || "",
    };
    const data = {
      serviceName: "Post Construction",
      details: serviceDetails,
      orderSummary: {
        selectedEquipments,
        basePrice: priceBreakdown.basePrice,
        totalPrice: priceBreakdown.totalPrice,
        currencySymbol,
        selectedCurrency,
        conversionRate,
      },
    };
    console.log("Data:", data);
    navigate("/checkout", { state: { data } });
  };

  const cleaningPackages = [
    {
      icon: postConstructorImage1,
      items: [
        "Floor cleaning",
        "Removing debris",
        "Mopping",
        "Mirrors cleaning",
      ],
    },
    {
      icon: postConstructorImage2,
      items: [
        "Clean windows",
        "Clean the doors",
        "Cleaning fixtures",
        "Cleaning solutions",
      ],
    },
    {
      icon: postConstructorImage3,
      items: [
        "Vacuuming",
        "Wipe down hard surfaces",
        "Bathroom cleaning",
        "Buckets and scrub brushes",
      ],
    },
    {
      icon: postConstructorImage4,
      items: [
        "Sweep and vacuum/mop floors",
        "Vacuum cleaner",
        "Window cleaning",
        "Appliance cleaning",
      ],
    },
    {
      icon: postConstructorImage5,
      items: [
        "Dust fans and ceiling",
        "Dust removal",
        "Remove trash",
        "Dusting",
      ],
    },
    {
      icon: postConstructorImage6,
      items: [
        "Clean all gates",
        "Clean inside cabinets and drawers",
        "Clean sink and food spaces",
        "Trash bags",
      ],
    },
  ];
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
            surfaces. Some basic disinfectants used for this method are bleach and alcohol solutions. Generally, 
            we need to keep the disinfectant on the surfaces and objects for a particular time to kill the germs. 
            It does not clean dirty surfaces or remove germs definitely.
            </p>

            <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Sanitizing can be completed by cleaning, disinfecting, or both. It takes part in decreasing the number of 
            germs to a safe level. What is defined by a safe level depends on public health standards or basic needs 
            at a workplace, school, etc. For example, there are certain procedures for sanitizing in restaurants and 
            other facilities that are used to prepare food. Methods we use to sanitize can be varied, depending on 
            your requirements. They can be Mopping a floor using a mop, a chemical, and water, using a dishwasher to 
            sanitize the dishes or using an antibacterial wipe on a TV remote.
            </p>
          </div>
        </div>
      </div>

      {/* packege list */}
      <div
        className="rounded-lg shadow-lg p-4 sm:p-6 mb-8"        
      >
        <Images/>       
      </div>

    
      {/* Booking Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Select Your Job to Get Your Quotation
        </h2>

        <div className="mb-6 shadow-lg p-4 sm:p-6 rounded-lg border border-blue-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {/* Calendar Section */}
            <div className="flex flex-col">
              <label className="block mb-2 text-blue-900 font-semibold">
                Select Date
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
        {/* <div>
          <BookingCart
            // propertySize={propertySize}
            // setPropertySize={setPropertySize}
            // numCleaners={numCleaners}
            // setNumCleaners={setNumCleaners}
            // duration={duration}
            // setDuration={setDuration}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            frequency={frequency}
            setFrequency={setFrequency}
            contactType={contactType}
            setContactType={setContactType}
            language={language}
            setLanguage={setLanguage}
            onBasePriceChange={(maxTime) => {
              setMaxTime(maxTime);
            }}
          />
        </div> */}

       

        {/* File Upload and Additional Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-black">
              Upload Images or Documents
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
                      Click to upload or drag and drop
                    </span>
                    <span className="text-xs text-gray-500">
                      Maximum file size: 10MB
                    </span>
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

          {/* Terms Checkbox */}
          <div className="mb-6">
            <label className="flex items-start space-x-2 text-black">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={acceptTerms2}
                onChange={(e) => {
                  setAcceptTerms2(e.target.checked);
                  setShowTermsCard(e.target.checked);
                }}
              />
              <span className="text-sm">
                By selecting this I accept terms and conditions
              </span>
            </label>
          </div>
        </div>

        {/* Terms and Conditions */}
        {showTermsCard && (
          <TermsAndConditions
            isAccepted={acceptTerms1}
            onAcceptChange={setAcceptTerms1}
            className="mb-6"
          />
        )}

        <div className="pt-4 mb-6">
          {/* Base Price */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-black">
            <span className="mb-2 md:mb-0">
              Base Cost{" "}
              <span className="text-gray-400">
                ({currencySymbol} {priceBreakdown.basePrice.toFixed(2)})
              </span>
            </span>
            <span>
              {currencySymbol}
              {priceBreakdown.basePrice.toFixed(2)}
            </span>
          </div>

          {/* Selected Equipment Costs */}
          {selectedEquipments.length > 0 && (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-black">
              <span className="mb-2 md:mb-0">
                Selected Equipment{" "}
                <span className="text-gray-400">
                  ({selectedEquipments.length} items)
                </span>
              </span>
              <span>
                {currencySymbol}
                {priceBreakdown.equipmentCosts.toFixed(2)}
              </span>
            </div>
          )}

          {/* Total Price */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2 text-black font-semibold">
            <span>Total</span>
            <span>
              {currencySymbol}
              {priceBreakdown.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Book Now Button */}
        <button
          className="w-full mt-8 bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!acceptTerms1 || !acceptTerms2}
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>

      {/* Payment Support Section */}
      <div>
        <PaymentSupportSection />
      </div>
    </div>
  );
}

export default sanitizationAndDisinfection;
