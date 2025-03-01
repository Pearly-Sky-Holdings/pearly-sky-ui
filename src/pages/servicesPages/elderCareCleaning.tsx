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
import {
  getServices,

} from "../../services/CleaningServices/index";
import dayjs from "dayjs";

import {

  elderCareVideo,
  elderCareVideo2,
  elderCareImage1
} from "../../config/images";
import store from "../../store";
import BookingSectionCart2 from "../../components/bookingSectionChildAndElderCart/bookingSectionCart2";
import Carousel2 from "../../components/carouselSection2/carousel2";

function ElderCareCleaningPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const services = useSelector((state: any) => state.servicesSlice.service);
  const [selectedServices] = useState<object[]>([]);
  const [showTermsCard, setShowTermsCard] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("");
  const [frequency, setFrequency] = useState("");
  const [acceptTerms1, setAcceptTerms1] = useState(false);
  const [acceptTerms2, setAcceptTerms2] = useState(false);
  const [language, setLanguage] = useState("");
  const [contactType, setContactType] = useState("");
  const [childAge, setChildAge] = useState("");
  const [type, setType] = useState("");
  const [numProfession, setNumProfession] = useState("");
  const [profession, setProfession] = useState("");
  const [numChild, setNumChild] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const [priceBreakdown, setPriceBreakdown] = useState({
    basePrice: 59.0,
    totalPrice: 59.0,
  });

  useEffect(() => {
    setPriceBreakdown(calculateTotalPrice());
  },[] );

  useEffect(() => {
    dispatch(getServices("9"));
  }, []);

  const calculateTotalPrice = () => {
    let basePrice = 58.0;
  
    const totalPrice = basePrice;
    return {
      basePrice,
      totalPrice,
    };
  };

  const handleBookNow = () => {
    const date = dayjs(selectedDate).format("YYYY-MM-DD").toString();
    const serviceDetails = {
      service_id: "9",
      date,
      time: selectedTime,  
      duration: parseInt(duration),  
      frequency,
      package_details: selectedServices,
      person_type: contactType,
      language,
      price: priceBreakdown.totalPrice,
      note: document.querySelector("textarea")?.value || "",
      number_of_count: numChild,
      request_care_professional: numProfession,
      service_providing_place: propertyType,
      special_request: specialRequest,
    };
    const data = { serviceName: "Elder Care", details: serviceDetails };
    console.log("Service Details:", serviceDetails);
    navigate("/checkout", { state: { data } });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="w-full sm:w-1/3">
          <img
            src={elderCareImage1}
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
              <div className="flex gap-3">
                <p className="text-xl sm:text-2xl font-semibold text-black">
                  {services.data.price}
                </p>
                <select className="border rounded p-0.5 text-blue-900 h-7">
                  <option>EUR</option>
                  <option>USD</option>
                  <option>GBP</option>
                  <option>AED</option>
                  <option>NZD</option>
                </select>
              </div>
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
              video: elderCareVideo,     
            },
            {
              video: elderCareVideo2,
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
            setDuration={setDuration}
            frequency={frequency}
            setFrequency={setFrequency}
            childAge={childAge}
            setChildAge={setChildAge}
            type={type}
            setType={setType}
            numChild={numChild}
            setNumChild={setNumChild}
            numProfession={numProfession}
            setNumProfession={setNumProfession}
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
            pageType={"elder"}
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
              Base Cost <span className="text-gray-400">(C$ 59.00)</span>
            </span>
            <span>C${priceBreakdown.basePrice.toFixed(2)}</span>
          </div>

          {/* Total Price */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2 text-black font-semibold">
            <span>Total</span>
            <span>C${priceBreakdown.totalPrice.toFixed(2)}</span>
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

export default ElderCareCleaningPage;
