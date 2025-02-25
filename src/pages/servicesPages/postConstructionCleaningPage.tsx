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
  regularServiceEquipment1,
  regularServiceEquipment2,
  regularServiceEquipment3,
  regularServiceEquipment4,
} from "../../config/images";
import store from "../../store";
import BookingSectionCart from "../../components/bookingSectionCarts/bookingSectionCart";

function PostConstructionCleaningPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const services = useSelector((state: any) => state.servicesSlice.service);
  const [selectedServices, _setSelectedServices] = useState<object[]>([]);
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
  const [priceBreakdown, setPriceBreakdown] = useState({
    basePrice: 59.00,
    serviceCosts: 0,
    equipmentCosts: 0,
    totalPrice: 59.00,
  });

  useEffect(() => {
    setPriceBreakdown(calculateTotalPrice());
  }, [selectedServices, selectedEquipments]);

  useEffect(() => {
    dispatch(getPackege("6"));
  }, []);

  useEffect(() => {
    dispatch(getServices("6"));
  }, []);
  const calculateTotalPrice = () => {
    let basePrice = 59.00;
    let serviceCosts = 0;
    let equipmentCosts = 0;

    

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
  const handleSelectEquipment = (equipment: any) => {
    setSelectedEquipments([
      ...selectedEquipments,
      { id: equipment.id, price: equipment.price },
    ]);
  };

  const handleBookNow = () => {
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
      // equipmentOption: selectedEquipmentOption,
      Equipment: selectedEquipments.map((e) => e.id).join(","),
      price: priceBreakdown.totalPrice,
      note: document.querySelector("textarea")?.value || "",
    };
    const data = { serviceName: "Post Construction", details: serviceDetails };
    console.log("Service Details:", serviceDetails);
    navigate("/checkout", { state: { data } });
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
          title="Select your cleaning solvents and equipment"
          solvents={solvents}
          equipmentOptions={equipmentOptions}
          equipments={equipments}
          onSolventChange={setSelectedSolvent}
          onEquipmentOptionChange={setSelectedEquipmentOption}
          onEquipmentSelect={handleSelectEquipment}
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
        <PaymentSupportSection />
      </div>
    </div>
  );
}

export default PostConstructionCleaningPage;
