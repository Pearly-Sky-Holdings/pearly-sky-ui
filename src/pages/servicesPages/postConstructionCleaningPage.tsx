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
import { getPackege, getServices } from "../../services/CleaningServices/index";
import CurrencyConverter from "../../components/currencyConverter/CurrencyConverter";
import dayjs from "dayjs";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import {
  postConstructorImage1,
  postConstructorImage2,
  postConstructorImage3,
  postConstructorImage4,
  postConstructorImage5,
  postConstructorImage6,
  postConstructionService,
} from "../../config/images";
import store from "../../store";
import BookingSectionCart from "../../components/bookingSectionCarts/bookingSectionCart";

type Equipment = {
  id: string;
  price: number;
  name?: string;
};

function PostConstructionCleaningPage() {
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
  const [conversionRateBaseEur, setConversionRateBaseEur] = useState(1);

  const [changeValue, setChangeValue] = useState<boolean>(false);
    const [count , setCount] = useState(0);

  const [priceBreakdown, setPriceBreakdown] = useState({
    hourlyRate: parseInt(services.data.price),
    serviceCosts: 0,
    equipmentCosts: 0,
    totalPrice: 29,
    basePrice: 29,
  });

  const handleCurrencyUpdate = (
    currency: string,
    symbol: string,
    rate: number,
    rateBaseEur: number
  ) => {
    if(count >= 2){
      setChangeValue(true);
    }
    setSelectedCurrency(currency);
    setCurrencySymbol(symbol);
    setConversionRate(rate);
    setConversionRateBaseEur(rateBaseEur);
    setCount(count + 1);
  };

  useEffect(() => {
    if (changeValue) {
      setChangeValue(false);
      setPriceBreakdown(calculateTotalPrice());
    }
  }, [selectedEquipments, conversionRate, duration]);

  useEffect(() => {
    dispatch(getPackege("6"));
  }, []);

  useEffect(() => {
    dispatch(getServices("6"));
  }, []);
  const calculateTotalPrice = () => {
    const hourlyRate = parseInt(services.data.price, 10); // Hourly rate in USD
    const basePrice = hourlyRate * maxTime ; // Base price in USD

    let serviceCosts = 0;
    let equipmentCosts = 0;

    

    // Calculate equipment costs in USD
    selectedEquipments.forEach((equipment) => {
      equipmentCosts += equipment.price * conversionRate;
    });

    // Calculate total price in the user's selected currency
    const totalPriceInSelectedCurrency =
      (basePrice) * conversionRate +equipmentCosts + serviceCosts;

    return {
      hourlyRate,
      serviceCosts,
      equipmentCosts,
      totalPrice: totalPriceInSelectedCurrency, // Total price in the selected currency
      basePrice: basePrice * conversionRate, // Base price in the selected currency
    };
  };
  const handleEquipmentSelect = (equipment: Equipment, selected: boolean) => {
    setChangeValue(true);
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

    const formatDuration = (duration: any) => {
      const [hours, minutes] = String(duration).split(".");

      const formattedMinutes = minutes ? `${minutes}0`.slice(0, 2) : "00";

      const endHours = parseInt(hours, 10) + 1;
      const endMinutes = formattedMinutes;

      return `${hours}.${formattedMinutes} - ${endHours}.${endMinutes}`;
    };
    const formattedDuration = formatDuration(duration);
    const date = dayjs(selectedDate).format("YYYY-MM-DD").toString();
    const serviceDetails = {
      service_id: "6",
      date,
      time: selectedTime,
      property_size: propertySize,
      duration: formattedDuration,
      number_of_cleaners: Number(numCleaners),
      frequency,
      person_type: contactType,
      language,
      business_property: propertyType,
      cleaning_solvents: selectedSolvent,
      equipmentOption: _selectedEquipmentOption,
      Equipment: selectedEquipments.map((e) => e.id).join(","),
      price: currencySymbol +priceBreakdown.totalPrice.toString(),
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
        <div className="w-full sm:w-3/5 flex">
          <img
            src={postConstructionService}
            alt="Cleaning Service"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="w-full sm:w-2/3 flex flex-col justify-between">
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
          <div className="flex-grow">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Experience the joy of a spotless home with Pearly Sky’s trusted
              maid services, now available in Dubai and France. Our professional
              team delivers tailored cleaning solutions, from one-time deep
              cleans to regular maintenance plans, ensuring your home stays
              immaculate and stress-free. Let us handle the cleaning, so you can
              focus on what truly matters
            </p>
          </div>
        </div>
      </div>

      {/* packege list */}
      <div
        className="rounded-lg shadow-lg p-4 sm:p-6 mb-8"
        style={{ backgroundColor: "rgba(37, 150, 190, 0.14)" }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color="primary"
          sx={{ mb: 4, fontWeight: "medium" }}
        >
          Package Checklist
        </Typography>

        <Grid container spacing={3}>
          {cleaningPackages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  position: "relative",
                  backgroundImage: `url(${pkg.icon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  overflow: "visible",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.8)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, pt: 2, mt: 1 }}>
                  <List dense>
                    {pkg.items.map((item, idx) => (
                      <ListItem key={idx} disableGutters>
                        <ListItemText
                          primary={item}
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: "0.95rem",
                              paddingLeft: "20px",
                              paddingY: "5px",
                              borderColor: "gray",
                              borderBottomWidth: "1px",
                              marginX: "10%",
                              paddingBottom: "2%",
                              position: "relative",
                              color: "white",
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                left: 0,
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "6px",
                                height: "6px",
                                backgroundColor: "primary.main",
                                borderRadius: "50%",
                              },
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
          style={{backgroundColor:"#1c398e"}}
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

export default PostConstructionCleaningPage;
