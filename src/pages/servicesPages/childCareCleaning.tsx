import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import TimeSlots from "../../components/timeSlot/timeSlot";
import "./CustomCalendar.css";
import Carousel2 from "../../components/carouselSection2/carousel2";
import PaymentSupportSection from "../../components/paymentSupportSection/paymentSupportSection";
import { getServices } from "../../services/CleaningServices/index";
import dayjs from "dayjs";

import {
  childCareImage1,
  childCareVideo,
  childCareVideo2,
} from "../../config/images";
import store from "../../store";
import BookingSectionCart2 from "../../components/bookingSectionChildAndElderCart/bookingSectionCart2";
import TermsAndConditionsChild from "../../components/termsAndConditions/termAndConditionsChild";
import CurrencyConverter from "../../components/currencyConverter/CurrencyConverter";

function ChildCareCleaningPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const services = useSelector((state: any) => state.servicesSlice.service);
  const [showTermsCard, setShowTermsCard] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [acceptTerms1, setAcceptTerms1] = useState(false);
  const [acceptTerms2, setAcceptTerms2] = useState(false);
  const [numChild, setNumChild] = useState("");
  const [duration, setDuration] = useState("1");
  const [childAge, setChildAge] = useState<string[]>([]);
  const [language, setLanguage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [contactType, setContactType] = useState("");
  const [type, setType] = useState("");
  const [numProfession, setNumProfession] = useState("");
  const [profession, setProfession] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [conversionRate, setConversionRate] = useState(1);

  const [changeValue, setChangeValue] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  const [priceBreakdown, setPriceBreakdown] = useState({
    hourlyRate: parseInt(services.data.price),
    totalPrice: 29.0,
    basePrice: 29.0,
  });

  const handleCurrencyUpdate = (
    currency: string,
    symbol: string,
    rate: number
  ) => {
    if (count >= 2) {
      setChangeValue(true);
    }
    setSelectedCurrency(currency);
    setCurrencySymbol(symbol);
    setConversionRate(rate);
    setCount(count + 1);
  };

  const calculateTotalPrice = () => {
    const hourlyRate = parseInt(services.data.price, 10); // Hourly rate in USD
    const basePrice = hourlyRate * parseFloat(duration) * (parseInt(numProfession) || 1);  // Base price in USD

    // Calculate total price in the user's selected currency
    const totalPriceInSelectedCurrency = basePrice * conversionRate;

    return {
      hourlyRate,
      totalPrice: totalPriceInSelectedCurrency, // Total price in the selected currency
      basePrice: basePrice * conversionRate, // Base price in the selected currency
    };
  };

  useEffect(() => {
    if (changeValue) {
      setChangeValue(false);
      setPriceBreakdown(calculateTotalPrice());
    }
  }, [conversionRate, duration, numProfession]); // Add numProfession as a dependency

  useEffect(() => {
    dispatch(getServices("8"));
  }, []);

  const handleBookNow = () => {
    if (
      !selectedDate ||
      !selectedTime ||
      !duration ||
      !frequency ||
      !language ||
      !type ||
      !contactType ||
      !propertyType ||
      !numChild ||
      !specialRequest
    ) {
      alert("Please fill all required fields before proceeding to checkout.");
      return;
    }
    
    const date = dayjs(selectedDate).format("YYYY-MM-DD").toString();
    const serviceDetails = {
      service_id: "8",
      date,
      time: selectedTime,
      duration: duration,
      request_care_professional: numProfession,
      frequency,
      language,
      type,
      contactType,
      numChild,
      age: `[${childAge.join(",")}]`,
      special_request: specialRequest,
      price: currencySymbol + priceBreakdown.totalPrice.toString(),
      service_providing_place: propertyType,
      note: document.querySelector("textarea")?.value || "",
    };
    const data = {
      serviceName: "Child Care",
      details: serviceDetails,
      orderSummary: {
        basePrice: priceBreakdown.basePrice,
        totalPrice: priceBreakdown.totalPrice,
        currencySymbol,
        selectedCurrency,
        conversionRate,
      },
    };
    console.log("Service data:", data);
    navigate("/checkout", { state: { data } });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="w-full sm:w-1/3">
          <img
            src={childCareImage1}
            alt="Cleaning Service"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full sm:w-2/3">
          <div className="">
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-[#002F6D] to-[#0D90C8] text-transparent bg-clip-text p-2">
              {services.data.name}
            </h1>
            <div className="mt-4 mb-4 ml-4">
              <CurrencyConverter
                basePrice={parseFloat(services.data.price)}
                onCurrencyChange={handleCurrencyUpdate}
                initialCurrency="EUR"
              />
            </div>
          </div>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Child Care Services provide a safe, nurturing, and enriching
            environment for children, ensuring their well-being and development.
            Whether at home or on the go, caregivers offer personalized support
            to meet each child’s needs with care and attention.
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-600 text-sm sm:text-base">
            <li>
              Supervising and engaging children in educational and recreational
              activities
            </li>
            <li>
              Assisting with homework while fostering creativity and learning
            </li>
            <li>
              Preparing nutritious meals and ensuring hygiene through bathing,
              dressing, and diaper changes
            </li>
            <li>Light housekeeping and maintaining a clean, organized space</li>
            <li>
              Providing transportation for school, appointments, and outings
            </li>
          </ul>
          <p className="text-gray-600 text-sm sm:text-base">
            By combining attentive care with structured routines, these services
            promote a balanced, stimulating, and supportive atmosphere where
            children can thrive emotionally, socially, and academically.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div>
        <Carousel2
          videoItems={[
            {
              video: childCareVideo,
            },
            {
              video: childCareVideo2,
            },
          ]}
        />
      </div>

      {/* Booking Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Select Suitable Date and Time to Complete Booking
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
        <div>
          <BookingSectionCart2
            duration={duration}
            setDuration={(val) => {
              setChangeValue(true);
              setDuration(val);
            }}
            frequency={frequency}
            setFrequency={setFrequency}
            childAge={childAge}
            setChildAge={setChildAge}
            type={type}
            setType={setType}
            numChild={numChild}
            setNumChild={setNumChild}
            numProfession={numProfession}
            setNumProfession={(val) => {
              setChangeValue(true);
              setNumProfession(val);
            }}
            profession={profession}
            setProfession={setProfession}
            contactType={contactType}
            setContactType={setContactType}
            language={language}
            setLanguage={setLanguage}
            specialRequest={specialRequest}
            setSpecialRequest={setSpecialRequest}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            pageType={"child"}
          />
        </div>

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
          <TermsAndConditionsChild
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
          style={{ backgroundColor: "#1c398e" }}
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

export default ChildCareCleaningPage;