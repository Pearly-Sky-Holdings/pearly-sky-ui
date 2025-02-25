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
import { getPackege,getRestockList,getServices } from "../../services/CleaningServices/index";
import dayjs from "dayjs";


import {
  airbnbAndShortService,
  regularServiceEquipment1,
  regularServiceEquipment2,
  regularServiceEquipment3,
  regularServiceEquipment4,
} from "../../config/images";
import store from "../../store";
import BookingSectionCart from "../../components/bookingSectionCarts/bookingSectionCart";
function AirbnbAndShortService() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const packages = useSelector((state: any) => state.packagesSlice.package);
  const services = useSelector((state: any) => state.servicesSlice.service); 
  const items = useSelector((state:any)=> state.itemsSlice.items);
  const [selectedServices, _setSelectedServices] = useState<object[]>([]);
  const [_ovenQty, _setOvenQty] = useState("0");
  const [showTermsCard, setShowTermsCard] = useState(false);
  const [_fridgeQty, _setFridgeQty] = useState("0");
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
  const [checkedList, setCheckedList] = useState<String[]>([]);
  const [groupedItems, setGroupedItems] = useState<any>({});
  const [priceBreakdown, setPriceBreakdown] = useState({
    basePrice: 59.72,
    serviceCosts: 0,
    equipmentCosts: 0,
    totalPrice: 59.72,
  });

  useEffect(() => {
    setPriceBreakdown(calculateTotalPrice());
  }, [selectedServices, selectedEquipments]);

  useEffect(() => {
    dispatch(getPackege("7"));
  }, []);

  useEffect(() => {
    dispatch(getServices("7"));
       
  }, []);

  useEffect(() => {
    if(items.data.length === 0){
      dispatch(getRestockList());
    }
    console.log(items.data);
    console.log('Grouped Items:', groupedItems);    
  });

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
    console.log(groupedItems);
  }
}, [items.data]);

  const calculateTotalPrice = () => {
    let basePrice = 59.72;
    let serviceCosts = 0;
    let equipmentCosts = 0;

    selectedServices.forEach((serviceId) => {
      const service = packages.data.find(
        (p: any) => p.package_id.toString() === serviceId
      );
      if (service) {
        serviceCosts += parseFloat(service.price.replace("$", ""));
      }
    });

    selectedEquipments.forEach((equipment) => {
      equipmentCosts += equipment.price;
    });

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
    const date = dayjs(selectedDate).format("YYYY-MM-DD").toString();
    const serviceDetails = {
      service_id: "7",
      date,
      time: selectedTime,
      property_size: propertySize,
      duration: parseInt(duration),
      number_of_cleaners: parseInt(numCleaners),
      frequency,
      package_details: selectedServices,
      person_type: contactType,
      language,
      business_property: propertyType,
      cleaning_solvents: selectedSolvent,
      // equipmentOption: selectedEquipmentOption,
      Equipment: selectedEquipments.map((e) => e.id).join(","),
      price: priceBreakdown.totalPrice,
      note: document.querySelector("textarea")?.value || "",
    };
    const data ={serviceName: "Airbnb And Short Term Rental Cleaning",  details: serviceDetails   }
    console.log("Service Details:", serviceDetails);
    navigate("/checkout", { state: { data } });
  }; 
  
    // Handle checkbox change
  const handleCheckboxChange = (itemId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedList((prevChecked) => [...prevChecked, itemId.toString()]);
    } else {
      setCheckedList((prevChecked) => prevChecked.filter((id) => id !== itemId.toString()));
    }
  };
     
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


  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="w-full sm:w-1/3">
          <img
            src={airbnbAndShortService}
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
          Move-in/out cleaning is a specialized service offered by cleaning companies 
          and is prepared for individuals transitioning into or out of a property. 
          This subtle cleaning procedure is specially made to prepare a space for new occupants 
          or ensure the departure leaves the premises in impeccable condition. 
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-600 text-sm sm:text-base">
            <li>Deep cleaning and sanitization of kitchens, bathrooms, and living spaces</li>
            <li>Vacuuming and stain removal for carpets and upholstery</li>
            <li>Dusting and disinfecting high-touch surfaces and hard-to-reach spots</li>
            <li>Scrubbing and polishing floors, fixtures, and appliances</li>
            
          </ul>
          <p className="text-gray-600 text-sm sm:text-base">
          This detailed process eliminates dirt, grime, and allergens, fostering a healthier and more inviting space.
           It enhances overall cleanliness, prolongs the life of furniture and appliances, and ensures a comfortable 
           environment for every guest, improving their stay and boosting positive reviews.
          </p>
        </div>
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
                  <h3 className="text-lg font-semibold text-blue-900">Bathrooms</h3>
                  <div className="flex flex-col text-blue-900 gap-5 mt-2">
                    {groupedItems.Bathrooms?.map((item: any) => (
                      <label key={item.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={checkedList.includes(item.id.toString())}
                          onChange={(e) => handleCheckboxChange(item.id, e)}
                        />
                        <div
                          className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                            checkedList.includes(item.id.toString())
                              ? 'bg-blue-500 border-blue-500'
                              : 'bg-white border-gray-400'
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
                      <label key={item.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={checkedList.includes(item.id.toString())}
                          onChange={(e) => handleCheckboxChange(item.id, e)}
                        />
                        <div
                          className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                            checkedList.includes(item.id.toString())
                              ? 'bg-blue-500 border-blue-500'
                              : 'bg-white border-gray-400'
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

                {/* Bedrooms Column */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">BedRooms</h3>
                  <div className="flex text-blue-900 flex-col gap-5 mt-2">
                    {groupedItems.BedRooms?.map((item: any) => (
                      <label key={item.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={checkedList.includes(item.id.toString())}
                          onChange={(e) => handleCheckboxChange(item.id, e)}
                        />
                        <div
                          className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                            checkedList.includes(item.id.toString())
                              ? 'bg-blue-500 border-blue-500'
                              : 'bg-white border-gray-400'
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
                  <h3 className="text-lg font-semibold text-blue-900">Miscellaneous</h3>
                  <div className="flex flex-col text-blue-900 gap-5 mt-2">
                    {groupedItems.Miscellaneous?.map((item: any) => (
                      <label key={item.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={checkedList.includes(item.id.toString())}
                          onChange={(e) => handleCheckboxChange(item.id, e)}
                        />
                        <div
                          className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                            checkedList.includes(item.id.toString())
                              ? 'bg-blue-500 border-blue-500'
                              : 'bg-white border-gray-400'
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
              Base Cost <span className="text-gray-400">(C$ 59.72)</span>
            </span>
            <span>C${priceBreakdown.basePrice.toFixed(2)}</span>
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
              <span>C${priceBreakdown.serviceCosts.toFixed(2)}</span>
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
              <span>C${priceBreakdown.equipmentCosts.toFixed(2)}</span>
            </div>
          )}

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
        <PaymentSupportSection/>
      </div>
    </div>
    

  );
}

export default AirbnbAndShortService;