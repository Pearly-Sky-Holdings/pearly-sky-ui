import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import TimeSlots from "../../components/timeSlot/timeSlot";
import "./CustomCalendar.css";
import Carousel from "../../components/carouselSection/carousel";
import EquipmentSection from "../../components/equipmentSection/equipmentSection";
import TermsAndConditions from "../../components/termsAndConditions/termsAndConditions";
import PaymentSupportSection from "../../components/paymentSupportSection/paymentSupportSection";

import { getPackege } from "../../services/CleaningServices/index";
import { saveRegulrService } from "../../services/CleaningServices/saveRegulrService";
import dayjs from "dayjs";

import {
  regularService1,
  regularService2,
  regularService3,
  regularService4,
  regularService5,
  regularServiceEquipment1,
  regularServiceEquipment2,
  regularServiceEquipment3,
  regularServiceEquipment4,
  supportPayment1,
  supportPayment2,
  supportPayment3,
  supportPayment4,
  supportPayment5,
  supportPayment6,
  supportPayment7,
  supportPayment8,
  supportPayment9,
  supportPayment10,
} from "../../config/images";
import store from "../../store";
function RegularBasicCleaningPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const packages = useSelector((state: any) => state.packagesSlice.package);
  const services = useSelector(
    (state: any) => state.serviceDetailsSlice.service
  );
  const [selectedServices, setSelectedServices] = useState<object[]>([]);
  const [ovenQty, setOvenQty] = useState("0");
  const [fridgeQty, setFridgeQty] = useState("0");
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
  const [selectedEquipmentOption, setSelectedEquipmentOption] = useState("");
  const [selectedEquipments, setSelectedEquipments] = useState<
    Array<{ id: string; price: number }>
  >([]);

  const [checkedList, setCheckedList] = useState<String[]>([]);

  const [priceBreakdown, setPriceBreakdown] = useState({
    basePrice: 27.0,
    serviceCosts: 0,
    equipmentCosts: 0,
    totalPrice: 27.0,
  });

  useEffect(() => {
    setPriceBreakdown(calculateTotalPrice());
  }, [selectedServices, selectedEquipments]);

  useEffect(() => {
    dispatch(getPackege());
  }, []);

  useEffect(() => {
    if (services.data) {
      console.log(services.data);
    }
  }, [services.data]);

  const calculateTotalPrice = () => {
    let basePrice = 27.0; // Base price
    let serviceCosts = 0; // Total cost of selected services
    let equipmentCosts = 0; // Total cost of selected equipment

    // Calculate selected services prices
    selectedServices.forEach((serviceId) => {
      const service = packages.data.find(
        (p: any) => p.package_id.toString() === serviceId
      );
      if (service) {
        serviceCosts += parseFloat(service.price.replace("$", ""));
      }
    });

    // Calculate selected equipment prices
    selectedEquipments.forEach((equipment) => {
      equipmentCosts += equipment.price;
    });

    // Calculate total price
    const totalPrice = basePrice + serviceCosts + equipmentCosts;

    return {
      basePrice,
      serviceCosts,
      equipmentCosts,
      totalPrice,
    };
  };
  const handleEquipmentSelect = (equipment: any, selected: boolean) => {
    if (selected) {
      setSelectedEquipments([
        ...selectedEquipments,
        { id: equipment.id, price: equipment.price },
      ]);
    } else {
      setSelectedEquipments(
        selectedEquipments.filter((e) => e.id !== equipment.id)
      );
    }
  };

  const handleBookNow = () => {
    if (!acceptTerms1 || !acceptTerms2) return;

    const date = dayjs(selectedDate).format("YYYY-MM-DD").toString();

    const serviceDetails = {
      service_id: "1",
      date,
      time: selectedTime,
      property_size: propertySize,
      duration: parseInt(duration),
      number_of_cleaners: Number(numCleaners),
      frequency,
      package_details: [
        {
          package_id: 1,
          price: 3000.0,
          qty: 2,
        },
        {
          package_id: 2,
          price: 500.0,
          qty: 1,
        },
      ],
      person_type: contactType,
      language,
      business_property: propertyType,
      cleaning_solvents: selectedSolvent,
      // equipmentOption: selectedEquipmentOption,
      Equipment: selectedEquipments.map((e) => e.id).join(","),
      price: calculateTotalPrice(),
      note: document.querySelector("textarea")?.value || "",
    };
    console.log("Service Details:", serviceDetails);
    navigate("/checkout", { state: { serviceDetails } });
  };

  const imagePairs = [
    [
      {
        img: regularService2,
        title: "Bedroom Cleaning",
        features: [
          "Dust all cleanable surfaces",
          "Make the bed",
          "Clean floor surfaces",
        ],
      },
      {
        img: regularService3,
        title: "Bedroom Cleaning",
        features: [
          "Dust all cleanable surfaces",
          "Make the bed",
          "Clean floor surfaces",
        ],
      },
    ],
    [
      {
        img: regularService4,
        title: "Bedroom Cleaning",
        features: [
          "Dust all cleanable surfaces",
          "Make the bed",
          "Clean floor surfaces",
        ],
      },
      {
        img: regularService5,
        title: "Bedroom Cleaning",
        features: [
          "Dust all cleanable surfaces",
          "Make the bed",
          "Clean floor surfaces",
        ],
      },
    ],
  ];

  const solvents = [
    { value: "customer", label: "Provided by the Customer" },
    { value: "company", label: "Request the Company" },
  ];

  const equipmentOptions = [
    { value: "basic", label: "Provided by the Customer" },
    { value: "advanced", label: "Request the Company" },
  ];

  const equipments = [
    {
      id: "cleaning-solvent ",
      name: "Cleaning Solvent (Eco Friendly Chemicals)",
      price: 15.99,
      image: regularServiceEquipment1,
    },
    {
      id: "mop",
      name: "MOP",
      price: 11.99,
      image: regularServiceEquipment2,
    },
    {
      id: "materials",
      name: "Other Cleaning Materials",
      price: 19.99,
      image: regularServiceEquipment3,
    },
    {
      id: "vacuum",
      name: "Vacuum Cleaner",
      price: 29.99,
      image: regularServiceEquipment4,
    },
  ];

  const bookingTerms = [
    {
      title: "Consider Property Size and Architecture",
      items: [
        "Evaluate the size and layout of your property before deciding on the number of cleaners",
        "Larger properties or complex layouts may require more time or additional cleaners",
      ],
    },
    {
      title: "Factor in Additional Cleaning Services",
      items: [
        "Some services may require specialized cleaning or additional time",
        "Consider bundling services for better value",
      ],
    },
    {
      title: "Limitations or Continuous Working Hours",
      items: [
        "Maximum continuous working hours apply",
        "Plan the number of cleaners accordingly",
      ],
    },
    {
      title: "Booking cancellation",
      items: [
        "24-hour notice required for cancellations",
        "Late cancellations may incur fees",
      ],
    },
    {
      title: "Accept company cookies policy",
      items: [],
    },
  ];

  const paymentMethods = [
    { icon: supportPayment1, alt: "Visa" },
    { icon: supportPayment2, alt: "Stripe" },
    { icon: supportPayment3, alt: "PayPal" },
    { icon: supportPayment4, alt: "Mastercard" },
    { icon: supportPayment5, alt: "American Express" },
    { icon: supportPayment6, alt: "Apple Pay" },
    { icon: supportPayment7, alt: "Google Pay" },
    { icon: supportPayment8, alt: "Bitcoin" },
    { icon: supportPayment9, alt: "Amazon Pay" },
    { icon: supportPayment10, alt: "Discover" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="w-full sm:w-1/3">
          <img
            src={regularService1}
            alt="Cleaning Service"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full sm:w-2/3">
          <div className="">
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-[#002F6D] to-[#0D90C8] text-transparent bg-clip-text p-2">
              Regular Basic Cleaning
            </h1>
            <div className="mt-4 mb-4 ml-4">
              <div className="flex gap-3">
                <p className="text-xl sm:text-2xl font-semibold text-black">
                  C$ 27.00
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
            Regular basic cleaning consists of performing necessary tasks
            regularly to maintain a clean and organized environment. Activities
            like:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-600 text-sm sm:text-base">
            <li>Dusting</li>
            <li>Wiping surfaces</li>
            <li>Vacuuming or sweeping floors</li>
            <li>Cleaning windows</li>
            <li>Disinfecting high-touch areas include this</li>
          </ul>
          <p className="text-gray-600 text-sm sm:text-base">
            Routine basic cleaning consists of performing necessary tasks
            regularly to maintain a clean and well-preserved environment.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div>
        <Carousel imagePairs={imagePairs} />
      </div>

      {/* Checklist Section */}
      <div className="bg-white rounded-lg p-4 sm:p-6 mb-8 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Select Additional Service Including to Your Package Checklist
        </h2>
        {packages.isLoading ? (
          <div className="text-center py-4">Loading packages...</div>
        ) : packages.isSuccess ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {packages.data.map((service: any) => (
              <label
                key={service.package_id}
                className="flex items-center space-x-2 text-blue-900 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={checkedList.includes(service.package_id.toString())}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedServices([
                        ...selectedServices,
                        {
                          id: service.package_id.toString(),
                          price: service.price,
                          qty:
                            service.name === "Oven Cleaning"
                              ? ovenQty
                              : service.name === "Fridge Cleaning"
                              ? fridgeQty
                              : 0,
                        },
                      ]);
                      setCheckedList([
                        ...checkedList,
                        service.package_id.toString(),
                      ]);
                    } else {
                      setCheckedList(
                        checkedList.filter(
                          (id) => id !== service.package_id.toString()
                        )
                      );
                    }
                  }}
                  disabled={service.status !== "active"}
                />
                {/* Custom checkbox */}
                <div
                  className={`w-5 h-5 border-2 border-gray-400 rounded flex items-center justify-center transition-colors ${
                    checkedList.includes(service.package_id.toString())
                      ? "bg-blue-500 border-blue-500"
                      : "bg-white border-gray-400"
                  } ${service.status !== "active" ? "opacity-50" : ""}`}
                >
                  {/* Checkmark icon */}
                  {checkedList.includes(service.package_id.toString()) && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium group-hover:text-black">
                    {service.name}
                  </span>
                  {service.price !== "0$" && (
                    <div className="mt-1 text-xs text-gray-500">
                      <span>{service.price}</span>
                      <select
                        className="ml-2 border rounded px-1 py-0.5 text-xs"
                        value={
                          service.name === "Oven Cleaning" ? ovenQty : fridgeQty
                        }
                        onChange={(e) => {
                          if (service.name === "Oven Cleaning") {
                            setOvenQty(e.target.value);
                            console.log("oven", e.target.value);
                          } else {
                            setFridgeQty(e.target.value);
                            console.log("fridge", e.target.value);
                          }
                        }}
                      >
                        <option>No of pieces</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>
        ) : (
          <div className="text-center py-4 text-red-500">
            {packages.errorMessage}
          </div>
        )}
      </div>

      {/* Equipment Section */}
      <div>
        <EquipmentSection
          title="Select your cleaning solvents and equipment"
          solvents={solvents}
          equipmentOptions={equipmentOptions}
          equipments={equipments}
          onSolventChange={setSelectedSolvent}
          onEquipmentOptionChange={setSelectedEquipmentOption}
          onEquipmentSelect={handleEquipmentSelect}
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
                  formatMonthYear={(locale, date) =>
                    dayjs(date).format("MMMM YYYY")
                  }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-black">
              Approx. Property Size
            </label>
            <select
              className="w-full border border-blue-900 rounded p-2 text-gray-400"
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
            >
              <option value="">Select property size</option>
              <option value="small">20m²(215ft²)</option>
              <option value="medium">30m²(323ft²))</option>
              <option value="large">40m²(430ft²)</option>
              <option value="large">50m²(538ft²)</option>
              <option value="large">60m²(646ft²)</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-black">Duration (in hours)</label>
            <select
              className="w-full border border-blue-900 rounded p-2 text-gray-400"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="">Select duration</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
              <option value="5">5+ hours</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-black">Number of Cleaners</label>
            <select
              className="w-full border border-blue-900 rounded p-2 text-gray-400"
              value={numCleaners}
              onChange={(e) => setNumCleaners(e.target.value)}
            >
              <option value="">Select number of cleaners</option>
              <option value="1">1 Cleaner</option>
              <option value="2">2 Cleaners</option>
              <option value="3">3 Cleaners</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-black">
              Select your business or property
            </label>
            <select
              className="w-full border border-blue-900 rounded p-2 text-gray-400"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Select property</option>
              <option value="once">Home</option>
              <option value="weekly">Appartmnent</option>
              <option value="biweekly">Villa</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-black">Select Frequency</label>
            <select
              className="w-full border border-blue-900 rounded p-2 text-gray-400"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="">Select frequency</option>
              <option value="once">One-time</option>
              <option value="weekly">Weekly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
            <div>
              <label className="block mb-2 text-black">
                Contact Person Type
              </label>
              <select
                className="w-full border border-blue-900 rounded p-2 text-gray-400"
                value={contactType}
                onChange={(e) => setContactType(e.target.value)}
              >
                <option value="">Select contact type</option>
                <option value="owner">Owner</option>
                <option value="tenant">Tenant</option>
                <option value="manager">Property Manager</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-black">
                Preferred Language to Contact
              </label>
              <select
                className="w-full border border-blue-900 rounded p-2 text-gray-400"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Select language</option>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
              </select>
            </div>
          </div>
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
                onChange={(e) => setAcceptTerms2(e.target.checked)}
              />
              <span className="text-sm">
                By selecting this I accept terms and conditions
              </span>
            </label>
          </div>
        </div>

        {/* Terms and Conditions */}
        <TermsAndConditions
          terms={bookingTerms}
          isAccepted={acceptTerms1}
          onAcceptChange={setAcceptTerms1}
          className="mb-6"
        />

        <div className="pt-4 mb-6">
          {/* Base Price */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-black">
            <span className="mb-2 md:mb-0">
              Base Cost <span className="text-gray-400">(C$ 27.00)</span>
            </span>
            <span>C$27.00</span>
          </div>

          {/* Selected Services Costs */}
          {selectedServices.length > 0 && (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-black">
              <span className="mb-2 md:mb-0">
                Selected Services{" "}
                <span className="text-gray-400">
                  ({selectedServices.length} services)
                </span>
              </span>
              <span>C${calculateTotalPrice().serviceCosts.toFixed(2)}</span>
            </div>
          )}

          {/* Selected Equipment Costs */}
          {selectedEquipments.length > 0 && (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-black">
              <span className="mb-2 md:mb-0">
                Selected Equipment{" "}
                <span className="text-gray-400">
                  ({selectedEquipments.length} items)
                </span>
              </span>
              <span>C${calculateTotalPrice().equipmentCosts.toFixed(2)}</span>
            </div>
          )}

          {/* Total Price */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2 text-black font-semibold">
            <span>Total</span>
            <span>C${calculateTotalPrice().totalPrice.toFixed(2)}</span>
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
        <PaymentSupportSection
          title="We Support"
          paymentMethods={paymentMethods}
        />
      </div>
    </div>
  );
}

export default RegularBasicCleaningPage;
