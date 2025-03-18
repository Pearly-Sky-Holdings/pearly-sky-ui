import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import TimeSlots from "../../components/timeSlot/timeSlot";
import "./CustomCalendar.css";
import EquipmentSection from "../../components/equipmentSection/equipmentSection";
import TermsAndConditions from "../../components/termsAndConditions/termsAndConditions";
import PaymentSupportSection from "../../components/paymentSupportSection/paymentSupportSection";
import {
  getRestockList,
  getServices,
} from "../../services/CleaningServices/index";
import dayjs from "dayjs";
import { airbnbAndShortService } from "../../config/images";
import store from "../../store";
import BookingSectionCart from "../../components/bookingSectionCarts/bookingSectionCart";
import CurrencyConverter from "../../components/currencyConverter/CurrencyConverter";
import Dropdown from "../../components/dropDown/dropDown";
import Carousel2 from "../../components/carouselSection2/carousel2";
import {
  airbnbVideo2,
  airbnbVideo3,
} from "../../config/images";

type Equipment = {
  id: string;
  price: number;
  name?: string;
};

function AirbnbAndShortService() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const services = useSelector((state: any) => state.servicesSlice.service);
  const items = useSelector((state: any) => state.itemsSlice.items);
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
  const [conversionRateBaseEur, setConversionRateBaseEur] = useState(1);
  const [changeValue, setChangeValue] = useState<boolean>(false);
  const [count, setCount] = useState(0);
  const [maxTime, setMaxTime] = useState<number>(1);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [groupedItems, setGroupedItems] = useState<any>({});
  const [priceBreakdown, setPriceBreakdown] = useState({
    hourlyRate: parseInt(services.data.price),
    equipmentCosts: 0,
    totalPrice: 29.0,
    basePrice: 29.0,
  });

  useEffect(() => {
    if (changeValue) {
      setChangeValue(false);
      setPriceBreakdown(calculateTotalPrice());
    }
  }, [selectedEquipments, conversionRate, duration]);

  useEffect(() => {
    dispatch(getServices("7"));
  }, []);

  useEffect(() => {
    if (items.data.length === 0) {
      dispatch(getRestockList());
    }
  });

  const handleCurrencyUpdate = (
    currency: string,
    symbol: string,
    rate: number,
    rateBaseEur: number
  ) => {
    if (count >= 2) {
      setChangeValue(true);
    }
    setSelectedCurrency(currency);
    setCurrencySymbol(symbol);
    setConversionRate(rate);
    setConversionRateBaseEur(rateBaseEur);
    setCount(count + 1);
  };

  const calculateTotalPrice = () => {
    const hourlyRate = parseInt(services.data.price, 10);
    const basePrice = hourlyRate * maxTime;
    let serviceCosts = 0;
    let equipmentCosts = 0;

    selectedEquipments.forEach((equipment) => {
      equipmentCosts += equipment.price * conversionRate;
    });

    const totalPriceInSelectedCurrency =
      basePrice * conversionRate + equipmentCosts + serviceCosts;

    return {
      hourlyRate,
      equipmentCosts,
      totalPrice: totalPriceInSelectedCurrency,
      basePrice: basePrice * conversionRate,
    };
  };

  useEffect(() => {
    if (items.data.length > 0) {
      const grouped = items.data.reduce((acc: any, item: any) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});
      setGroupedItems(grouped);
    }
  }, [items.data]);

  const handleEquipmentSelect = (equipment: Equipment, selected: boolean) => {
    setChangeValue(true);
    if (selected) {
      if (!selectedEquipments.some((e) => e.id === equipment.id)) {
        setSelectedEquipments((prev) => [
          ...prev,
          { id: equipment.id, price: equipment.price },
        ]);
      }
    } else {
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
      !selectedDate ||
      !selectedTime ||
      !propertySize ||
      !duration ||
      !numCleaners ||
      !frequency ||
      !contactType ||
      !language ||
      !propertyType ||
      !selectedSolvent ||
      checkedList.length === 0
    ) {
      alert("Please fill all the fields");
      return;
    }

    const date = dayjs(selectedDate).format("YYYY-MM-DD").toString();
    const serviceDetails = {
      service_id: "7",
      price: currencySymbol + priceBreakdown.totalPrice.toString(),
      date,
      time: selectedTime,
      property_size: propertySize,
      duration: duration,
      number_of_cleaners: parseInt(numCleaners),
      note: document.querySelector("textarea")?.value || "",
      frequency,
      request_gender: contactType,
      request_language: language,
      business_property: propertyType,
      cleaning_solvents: selectedSolvent,
      Equipment: selectedEquipments.map((e) => e.id).join(","),
      reStock_details: checkedList.map((id) => ({
        re_stocking_checklist_id: id,
      })),
    };
    const data = {
      serviceName: "Airbnb And Short Term Rental Cleaning",
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
    console.log("Service Details:", serviceDetails);
    navigate("/checkout", { state: { data } });
  };

  const handleCheckboxChange = (
    itemId: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      setCheckedList((prevChecked) => [...prevChecked, itemId.toString()]);
    } else {
      setCheckedList((prevChecked) =>
        prevChecked.filter((id) => id !== itemId.toString())
      );
    }
  };

  const frequencyOptions = [
    { value: "every check in check out", label: "Every check in check out" },
    { value: "other", label: "Other " },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 flex flex-col gap-4 lg:flex-row lg:gap-8">
        {/* Image Container */}
        <div className="w-full lg:w-4/3 ">
          <img
            src={airbnbAndShortService}
            alt="Cleaning Service"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="w-fulllg:w-2/3">
          <div>
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
            Move-in/out cleaning is a specialized service offered by cleaning
            companies and is prepared for individuals transitioning into or out
            of a property. This subtle cleaning procedure is specially made to
            prepare a space for new occupants or ensure the departure leaves the
            premises in impeccable condition.
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-600 text-sm sm:text-base">
            <li>
              Deep cleaning and sanitization of kitchens, bathrooms, and living
              spaces
            </li>
            <li>Vacuuming and stain removal for carpets and upholstery</li>
            <li>
              Dusting and disinfecting high-touch surfaces and hard-to-reach
              spots
            </li>
            <li>Scrubbing and polishing floors, fixtures, and appliances</li>
          </ul>
          <p className="text-gray-600 text-sm sm:text-base">
            This detailed process eliminates dirt, grime, and allergens,
            fostering a healthier and more inviting space. It enhances overall
            cleanliness, prolongs the life of furniture and appliances, and
            ensures a comfortable environment for every guest, improving their
            stay and boosting positive reviews.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
            <div>
              <Carousel2
                videoItems={[
                  {
                    video: airbnbVideo3,
                  },
                  {
                    video: airbnbVideo2,
                  },
                ]}
              />
            </div>

      {/* Checklist Section */}
      <div className="bg-white rounded-lg p-4 sm:p-6 mb-8 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Re-stocking CheckList
        </h2>

        <div>
          {items?.isLoading ? (
            <div className="text-center py-4">Loading items...</div>
          ) : items?.isSuccess && items?.data ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Bathrooms Column */}
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Bathrooms
                </h3>
                <div className="flex flex-col text-blue-900 gap-5 mt-2">
                  {groupedItems.Bathrooms?.map((item: any) => (
                    <label
                      key={item.id}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checkedList.includes(item.id.toString())}
                        onChange={(e) => {
                          setChangeValue(true);
                          handleCheckboxChange(item.id, e);
                        }}
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                          checkedList.includes(item.id.toString())
                            ? "bg-blue-500 border-blue-500"
                            : "bg-white border-gray-400"
                        }`}
                      >
                        {checkedList.includes(item.id.toString()) && (
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
                      <span className="text-sm">{item.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Kitchen Column */}
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Kitchen</h3>
                <div className="flex flex-col text-blue-900 gap-5 mt-2">
                  {groupedItems.Kitchen?.map((item: any) => (
                    <label
                      key={item.id}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checkedList.includes(item.id.toString())}
                        onChange={(e) => {
                          setChangeValue(true);
                          handleCheckboxChange(item.id, e);
                        }}
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                          checkedList.includes(item.id.toString())
                            ? "bg-blue-500 border-blue-500"
                            : "bg-white border-gray-400"
                        }`}
                      >
                        {checkedList.includes(item.id.toString()) && (
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
                      <span className="text-sm">{item.name}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-9 text-blue-950">
                  <h1>Refill costs will be added up in the final payment</h1>
                </div>
              </div>

              {/* Bedrooms Column */}
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  BedRooms
                </h3>
                <div className="flex text-blue-900 flex-col gap-5 mt-2">
                  {groupedItems.BedRooms?.map((item: any) => (
                    <label
                      key={item.id}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checkedList.includes(item.id.toString())}
                        onChange={(e) => {
                          setChangeValue(true);
                          handleCheckboxChange(item.id, e);
                        }}
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                          checkedList.includes(item.id.toString())
                            ? "bg-blue-500 border-blue-500"
                            : "bg-white border-gray-400"
                        }`}
                      >
                        {checkedList.includes(item.id.toString()) && (
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
                      <span className="text-sm">{item.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Miscellaneous Column */}
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Miscellaneous
                </h3>
                <div className="flex flex-col text-blue-900 gap-5 mt-2">
                  {groupedItems.Miscellaneous?.map((item: any) => (
                    <label
                      key={item.id}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checkedList.includes(item.id.toString())}
                        onChange={(e) => {
                          setChangeValue(true);
                          handleCheckboxChange(item.id, e);
                        }}
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                          checkedList.includes(item.id.toString())
                            ? "bg-blue-500 border-blue-500"
                            : "bg-white border-gray-400"
                        }`}
                      >
                        {checkedList.includes(item.id.toString()) && (
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
                      <span className="text-sm">{item.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-4 text-red-500">
              {items?.errorMessage || "Failed to load items."}
            </div>
          )}
        </div>
      </div>

      {/* Equipment Section */}
      <div>
        <EquipmentSection
          onSolventChange={handleSolventChange}
          onEquipmentOptionChange={handleEquipmentOptionChange}
          onEquipmentSelect={handleEquipmentSelect}
          solvents={[]}
          equipmentOptions={[]}
          equipments={[]}
          selectedCurrency={selectedCurrency}
          currencySymbol={currencySymbol}
          conversionRate={conversionRateBaseEur}
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
          <BookingSectionCart
            propertySize={propertySize}
            setPropertySize={setPropertySize}
            numCleaners={numCleaners}
            setNumCleaners={setNumCleaners}
            duration={duration}
            setDuration={(val) => {
              setChangeValue(true);
              setDuration(val);
            }}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            contactType={contactType}
            setContactType={setContactType}
            language={language}
            setLanguage={setLanguage}
            onBasePriceChange={(maxTime) => {
              setMaxTime(maxTime);
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Dropdown
              label="Select Frequency"
              value={frequency}
              options={frequencyOptions}
              onChange={setFrequency}
            />
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

          {/* Selected Re-Stocking Items Section */}
          {checkedList.length > 0 && (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-black">
              <span className="mb-2 md:mb-0">
                Selected Re-Stocking Items{""}
                <span className="text-gray-400">
                  ({checkedList.length} items)
                </span>
              </span>
              <span>
                {currencySymbol}
                {"0.00"}
              </span>
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

export default AirbnbAndShortService;