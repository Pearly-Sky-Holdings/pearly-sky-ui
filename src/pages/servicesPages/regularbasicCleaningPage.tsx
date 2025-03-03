import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import TimeSlots from "../../components/timeSlot/timeSlot";
import "./CustomCalendar.css";
import ServicesCarosel from "../../components/servicesCarousel/regularOneTime";
import EquipmentSection from "../../components/equipmentSection/equipmentSection";
import TermsAndConditions from "../../components/termsAndConditions/termsAndConditions";
import PaymentSupportSection from "../../components/paymentSupportSection/paymentSupportSection";
import CurrencyConverter from "../../components/currencyConverter/CurrencyConverter";
import { getPackege, getServices } from "../../services/CleaningServices/index";
import dayjs from "dayjs";

import { regularService1 } from "../../config/images";
import store from "../../store";
import BookingSectionCart from "../../components/bookingSectionCarts/bookingSectionCart";
import QuantityControl from "../../components/QuantityControl/quantityControl";

function RegularBasicCleaningPage() {
  type selectService = {
    package_id: number;
    price: number;
    qty: number;
    name?: string;
  };

  type Equipment = {
    id: string;
    price: number;
    name?: string;
  };

  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const packages = useSelector((state: any) => state.packagesSlice.package);
  const services = useSelector((state: any) => state.servicesSlice.service);
  const [selectedServices, setSelectedServices] = useState<selectService[]>([]);

  const [showTermsCard, setShowTermsCard] = useState(false);
  const [fridgeQty, setFridgeQty] = useState("1");
  const [ovenQty, setOvenQty] = useState("1");
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
  const [selectedEquipments, setSelectedEquipments] = useState<Equipment[]>([]);
  const [checkedList, setCheckedList] = useState<String[]>([]);

  // Currency state - Changed default from EUR to USD
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [conversionRate, setConversionRate] = useState(1);

  const [maxTime, setMaxTime] = useState<number>(1);

  const [priceBreakdown, setPriceBreakdown] = useState({
    hourlyRate: parseInt(services.data.price),
    serviceCosts: 0,
    equipmentCosts: 0,
    totalPrice: parseInt(services.data.price),
    basePrice: parseInt(services.data.price),
  });

  // Handler for currency changes from CurrencyConverter component
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
  }, [selectedServices, selectedEquipments, conversionRate, duration]);

  useEffect(() => {
    dispatch(getPackege("1"));
  }, []);

  useEffect(() => {
    dispatch(getServices("1"));
  }, []);

  const calculateTotalPrice = () => {
    const hourlyRate = parseInt(services.data.price, 10); // Hourly rate in USD
    const basePrice = hourlyRate * maxTime; // Base price in USD

    let serviceCosts = 0;
    let equipmentCosts = 0;

    // Calculate service costs in USD
    selectedServices.forEach((service) => {
      serviceCosts += service.price * (service.qty || 1);
    });

    // Calculate equipment costs in USD
    selectedEquipments.forEach((equipment) => {
      equipmentCosts += equipment.price;
    });

    // Calculate total price in the user's selected currency
    const totalPriceInSelectedCurrency =
      (basePrice + serviceCosts + equipmentCosts) * conversionRate;

    return {
      hourlyRate,
      serviceCosts,
      equipmentCosts,
      totalPrice: totalPriceInSelectedCurrency, // Total price in the selected currency
      basePrice: basePrice * conversionRate, // Base price in the selected currency
    };
  };

  const handleEquipmentSelect = (equipment: Equipment, selected: boolean) => {
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
    const totalPriceInSelectedCurrency = priceBreakdown.totalPrice;
    // Convert the total price to USD using the conversion rate
    const totalPriceInUSD = totalPriceInSelectedCurrency / conversionRate;
    const serviceDetails = {
      service_id: "1",
      date,
      time: selectedTime,
      property_size: propertySize,
      duration: parseInt(duration),
      number_of_cleaners: parseInt(numCleaners),
      frequency,
      package_details: selectedServices.some(
        (service) => service.package_id === 21 || service.package_id === 22
      )
        ? selectedServices.map((obj) => {
            if (obj.package_id === 21)
              return { ...obj, qty: Number(fridgeQty) };
            if (obj.package_id === 22) return { ...obj, qty: Number(ovenQty) };
            return obj;
          })
        : selectedServices,
      person_type: contactType,
      language,
      business_property: propertyType,
      cleaning_solvents: selectedSolvent,
      equipmentOption: _selectedEquipmentOption,
      Equipment: selectedEquipments.map((e) => e.id).join(","),
      price: totalPriceInUSD,
      currency: "USD",
      note: document.querySelector("textarea")?.value || "",
    };
    const data = {
      serviceName: "Regular Basic",
      details: serviceDetails,
      orderSummary: {
        selectedServices,
        selectedEquipments,
        basePrice: priceBreakdown.basePrice,
        totalPrice: priceBreakdown.totalPrice,
        currencySymbol,
        selectedCurrency,
        conversionRate,
      },
    };
    console.log("Service Details:", data);
    navigate("/checkout", { state: { data } });
  };

  // Update service names when packages data is loaded
  useEffect(() => {
    if (packages.isSuccess && packages.data) {
      setSelectedServices((prevServices) =>
        prevServices.map((service) => {
          const packageInfo = packages.data.find(
            (pkg: any) => pkg.package_id === service.package_id
          );
          return packageInfo ? { ...service, name: packageInfo.name } : service;
        })
      );
    }
  }, [packages.isSuccess, packages.data]);

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
              {services.data.name}
            </h1>
            <div className="mt-4 mb-4 ml-4">
              {/* Using the CurrencyConverter component with USD as initial currency */}
              <CurrencyConverter
                basePrice={parseFloat(services.data.price)}
                onCurrencyChange={handleCurrencyUpdate}
                initialCurrency="EUR"
              />
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
        <ServicesCarosel />
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
                        package_id: Number(service.package_id),
                        price: parseInt(service.price),
                        name: service.name,
                        qty:
                          service.name === "Oven Cleaning"
                            ? Number(ovenQty) || 1
                            : service.name === "Fridge Cleaning"
                            ? Number(fridgeQty) || 1
                            : 1,
                      },
                    ]);
                    setCheckedList([
                      ...checkedList,
                      service.package_id.toString(),
                    ]);
                  } else {
                    setSelectedServices(
                      selectedServices.filter(
                        (item) =>
                          item.package_id.toString() !==
                          service.package_id.toString()
                      )
                    );
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
                  <div className="mt-1 text-xs text-gray-500 flex items-center space-x-5">
                    <span>
                      {currencySymbol}
                      {(parseInt(service.price) * conversionRate).toFixed(2)}
                    </span>
                    {(service.name === "Oven Cleaning" ||
                      service.name === "Fridge Cleaning") && 
                      checkedList.includes(service.package_id.toString()) && (
                      <QuantityControl
                        quantity={service.name === "Oven Cleaning" ? ovenQty : fridgeQty}
                        onChange={(newQuantity) => {
                          if (service.name === "Oven Cleaning") {
                            setOvenQty(newQuantity);
                            // Update the quantity in selectedServices
                            setSelectedServices((prev) =>
                              prev.map((s) =>
                                s.package_id === Number(service.package_id)
                                  ? { ...s, qty: Number(newQuantity) || 1 }
                                  : s
                              )
                            );
                          } else {
                            setFridgeQty(newQuantity);
                            // Update the quantity in selectedServices
                            setSelectedServices((prev) =>
                              prev.map((s) =>
                                s.package_id === Number(service.package_id)
                                  ? { ...s, qty: Number(newQuantity) || 1 }
                                  : s
                              )
                            );
                          }
                        }}
                      />
                    )}
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
          onSolventChange={handleSolventChange}
          onEquipmentOptionChange={handleEquipmentOptionChange}
          onEquipmentSelect={handleEquipmentSelect}
          solvents={[]}
          equipmentOptions={[]}
          equipments={[]}
          selectedCurrency={selectedCurrency}
          currencySymbol={currencySymbol}
          conversionRate={conversionRate}
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
            setDuration={setDuration}
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
        </div>

        {/* File Upload and Additional Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-blue-900">
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
            <label className="block mb-2 text-blue-900">Additional Note</label>
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

          {/* Selected Services Costs */}
          {selectedServices.length > 0 && (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-black">
              <span className="mb-2 md:mb-0">
                Selected Services{" "}
                <span className="text-gray-400">
                  ({selectedServices.length} services)
                </span>
              </span>
              <span>
                {currencySymbol}
                {priceBreakdown.serviceCosts.toFixed(2)}
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

export default RegularBasicCleaningPage;
