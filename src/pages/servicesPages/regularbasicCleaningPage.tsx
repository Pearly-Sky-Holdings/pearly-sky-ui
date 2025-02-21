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
import Dropdown from "../../components/dropDown/dropDown";
function RegularBasicCleaningPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const packages = useSelector((state: any) => state.packagesSlice.package);
  const services = useSelector((state: any) => state.serviceDetailsSlice.service);
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

  const calculateTotalPrice = () => {
    let basePrice = 27.0; 
    let serviceCosts = 0; 
    let equipmentCosts = 0; 

    selectedServices.forEach((serviceId) => {
      const service = packages.data.find(
        (p: any) => p.package_id.toString() === serviceId
      );
      if (service) {
        total += parseFloat(service.price.replace("$", ""));
      }
    });

    selectedEquipments.forEach((equipment) => {
      total += equipment.price;
    });


    const totalPrice = basePrice + serviceCosts + equipmentCosts;
    return {
      basePrice,
      serviceCosts,
      equipmentCosts,
      totalPrice,
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
      service_id :"1",
      date,

      time :selectedTime,
      property_size :propertySize,
      duration : parseInt(duration),
      number_of_cleaners :Number(numCleaners),
      frequency,
      package_details: [
        {
            "package_id": 1,
            "price": 3000.00,
            "qty": 2
        },
        {
            "package_id": 2,
            "price": 500.00,
            "qty": 1
        }
    ],
      person_type :contactType,

      language,
      business_property :propertyType,
      cleaning_solvents: selectedSolvent,
      equipmentOption: selectedEquipmentOption,
      Equipment: selectedEquipments.map((e) => e.id).join(","),
      price: priceBreakdown.totalPrice,
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

  // Dropdown options
  const propertySizeOptions = [
    { value: "20m²(215ft²)", label: "20m²(215ft²)" },
    { value: "21m²(226ft²)", label: "21m²(226ft²)" },
    { value: "22m²(237ft²)", label: "22m²(237ft²)" },
    { value: "23m²(248ft²)", label: "23m²(248ft²)" },
    { value: "24m²(258ft²)", label: "24m²(258ft²)" },
    { value: "25m²(269ft²)", label: "25m²(269ft²)" },
    { value: "26m²(280ft²)", label: "26m²(280ft²)" },
    { value: "27m²(291ft²)", label: "27m²(291ft²)" },
    { value: "28m²(301ft²)", label: "28m²(301ft²)" },
    { value: "29m²(312ft²)", label: "29m²(312ft²)" },
    { value: "30m²(323ft²)", label: "30m²(323ft²)" },
    { value: "31m²(334ft²)", label: "31m²(334ft²)" },
    { value: "32m²(344ft²)", label: "32m²(344ft²)" },
    { value: "33m²(355ft²)", label: "33m²(355ft²)" },
    { value: "34m²(366ft²)", label: "34m²(366ft²)" },
    { value: "35m²(377ft²)", label: "35m²(377ft²)" },
    { value: "36m²(388ft²)", label: "36m²(388ft²)" },
    { value: "37m²(398ft²)", label: "37m²(398ft²)" },
    { value: "38m²(409ft²)", label: "38m²(409ft²)" },
    { value: "39m²(420ft²)", label: "39m²(420ft²)" },
    { value: "40m²(431ft²)", label: "40m²(431ft²)" },
    { value: "41m²(441ft²)", label: "41m²(441ft²)" },
    { value: "42m²(452ft²)", label: "42m²(452ft²)" },
    { value: "43m²(463ft²)", label: "43m²(463ft²)" },
    { value: "44m²(474ft²)", label: "44m²(474ft²)" },
    { value: "45m²(484ft²)", label: "45m²(484ft²)" },
    { value: "46m²(495ft²)", label: "46m²(495ft²)" },
    { value: "47m²(506ft²)", label: "47m²(506ft²)" },
    { value: "48m²(517ft²)", label: "48m²(517ft²)" },
    { value: "49m²(527ft²)", label: "49m²(527ft²)" },
    { value: "50m²(538ft²)", label: "50m²(538ft²)" },
    { value: "51m²(549ft²)", label: "51m²(549ft²)" },
    { value: "52m²(560ft²)", label: "52m²(560ft²)" },
    { value: "53m²(570ft²)", label: "53m²(570ft²)" },
    { value: "54m²(581ft²)", label: "54m²(581ft²)" },
    { value: "55m²(592ft²)", label: "55m²(592ft²)" },
    { value: "56m²(603ft²)", label: "56m²(603ft²)" },
    { value: "57m²(614ft²)", label: "57m²(614ft²)" },
    { value: "58m²(624ft²)", label: "58m²(624ft²)" },
    { value: "59m²(635ft²)", label: "59m²(635ft²)" },
    { value: "60m²(646ft²)", label: "60m²(646ft²)" },
    { value: "61m²(657ft²)", label: "61m²(657ft²)" },
    { value: "62m²(667ft²)", label: "62m²(667ft²)" },
    { value: "63m²(678ft²)", label: "63m²(678ft²)" },
    { value: "64m²(689ft²)", label: "64m²(689ft²)" },
    { value: "65m²(700ft²)", label: "65m²(700ft²)" },
    { value: "66m²(710ft²)", label: "66m²(710ft²)" },
    { value: "67m²(721ft²)", label: "67m²(721ft²)" },
    { value: "68m²(732ft²)", label: "68m²(732ft²)" },
    { value: "69m²(743ft²)", label: "69m²(743ft²)" },
    { value: "70m²(753ft²)", label: "70m²(753ft²)" },
    { value: "71m²(764ft²)", label: "71m²(764ft²)" },
    { value: "72m²(775ft²)", label: "72m²(775ft²)" },
    { value: "73m²(786ft²)", label: "73m²(786ft²)" },
    { value: "74m²(797ft²)", label: "74m²(797ft²)" },
    { value: "75m²(807ft²)", label: "75m²(807ft²)" },
    { value: "76m²(818ft²)", label: "76m²(818ft²)" },
    { value: "77m²(829ft²)", label: "77m²(829ft²)" },
    { value: "78m²(840ft²)", label: "78m²(840ft²)" },
    { value: "79m²(850ft²)", label: "79m²(850ft²)" },
    { value: "80m²(861ft²)", label: "80m²(861ft²)" },
    { value: "81m²(872ft²)", label: "81m²(872ft²)" },
    { value: "82m²(883ft²)", label: "82m²(883ft²)" },
    { value: "83m²(893ft²)", label: "83m²(893ft²)" },
    { value: "84m²(904ft²)", label: "84m²(904ft²)" },
    { value: "85m²(915ft²)", label: "85m²(915ft²)" },
    { value: "86m²(926ft²)", label: "86m²(926ft²)" },
    { value: "87m²(936ft²)", label: "87m²(936ft²)" },
    { value: "88m²(947ft²)", label: "88m²(947ft²)" },
    { value: "89m²(958ft²)", label: "89m²(958ft²)" },
    { value: "90m²(969ft²)", label: "90m²(969ft²)" },
    { value: "91m²(980ft²)", label: "91m²(980ft²)" },
    { value: "92m²(990ft²)", label: "92m²(990ft²)" },
    { value: "93m²(1001ft²)", label: "93m²(1001ft²)" },
    { value: "94m²(1012ft²)", label: "94m²(1012ft²)" },
    { value: "95m²(1023ft²)", label: "95m²(1023ft²)" },
    { value: "96m²(1033ft²)", label: "96m²(1033ft²)" },
    { value: "97m²(1044ft²)", label: "97m²(1044ft²)" },
    { value: "98m²(1055ft²)", label: "98m²(1055ft²)" },
    { value: "99m²(1066ft²)", label: "99m²(1066ft²)" },
    { value: "100m²(1076ft²)", label: "100m²(1076ft²)" },
    { value: "101m²(1087ft²)", label: "101m²(1087ft²)" },
    { value: "102m²(1098ft²)", label: "102m²(1098ft²)" },
    { value: "103m²(1109ft²)", label: "103m²(1109ft²)" },
    { value: "104m²(1119ft²)", label: "104m²(1119ft²)" },
    { value: "105m²(1130ft²)", label: "105m²(1130ft²)" },
    { value: "106m²(1141ft²)", label: "106m²(1141ft²)" },
    { value: "107m²(1152ft²)", label: "107m²(1152ft²)" },
    { value: "108m²(1163ft²)", label: "108m²(1163ft²)" },
    { value: "109m²(1173ft²)", label: "109m²(1173ft²)" },
    { value: "110m²(1184ft²)", label: "110m²(1184ft²)" },
    { value: "111m²(1195ft²)", label: "111m²(1195ft²)" },
    { value: "112m²(1206ft²)", label: "112m²(1206ft²)" },
    { value: "113m²(1216ft²)", label: "113m²(1216ft²)" },
    { value: "114m²(1227ft²)", label: "114m²(1227ft²)" },
    { value: "115m²(1238ft²)", label: "115m²(1238ft²)" },
    { value: "116m²(1249ft²)", label: "116m²(1249ft²)" },
    { value: "117m²(1259ft²)", label: "117m²(1259ft²)" },
    { value: "118m²(1270ft²)", label: "118m²(1270ft²)" },
    { value: "119m²(1281ft²)", label: "119m²(1281ft²)" },
    { value: "120m²(1292ft²)", label: "120m²(1292ft²)" },
    { value: "121m²(1302ft²)", label: "121m²(1302ft²)" },
    { value: "122m²(1313ft²)", label: "122m²(1313ft²)" },
    { value: "123m²(1324ft²)", label: "123m²(1324ft²)" },
    { value: "124m²(1335ft²)", label: "124m²(1335ft²)" },
    { value: "125m²(1345ft²)", label: "125m²(1345ft²)" },
    { value: "126m²(1356ft²)", label: "126m²(1356ft²)" },
    { value: "127m²(1367ft²)", label: "127m²(1367ft²)" },
    { value: "128m²(1378ft²)", label: "128m²(1378ft²)" },
    { value: "129m²(1389ft²)", label: "129m²(1389ft²)" },
    { value: "130m²(1399ft²)", label: "130m²(1399ft²)" },
    { value: "131m²(1410ft²)", label: "131m²(1410ft²)" },
    { value: "132m²(1421ft²)", label: "132m²(1421ft²)" },
    { value: "133m²(1432ft²)", label: "133m²(1432ft²)" },
    { value: "134m²(1442ft²)", label: "134m²(1442ft²)" },
    { value: "135m²(1453ft²)", label: "135m²(1453ft²)" },
    { value: "136m²(1464ft²)", label: "136m²(1464ft²)" },
    { value: "137m²(1475ft²)", label: "137m²(1475ft²)" },
    { value: "138m²(1485ft²)", label: "138m²(1485ft²)" },
    { value: "139m²(1496ft²)", label: "139m²(1496ft²)" },
    { value: "140m²(1507ft²)", label: "140m²(1507ft²)" },
    { value: "141m²(1518ft²)", label: "141m²(1518ft²)" },
    { value: "142m²(1528ft²)", label: "142m²(1528ft²)" },
    { value: "143m²(1539ft²)", label: "143m²(1539ft²)" },
    { value: "144m²(1550ft²)", label: "144m²(1550ft²)" },
    { value: "145m²(1561ft²)", label: "145m²(1561ft²)" },
    { value: "146m²(1572ft²)", label: "146m²(1572ft²)" },
    { value: "147m²(1582ft²)", label: "147m²(1582ft²)" },
    { value: "148m²(1593ft²)", label: "148m²(1593ft²)" },
    { value: "149m²(1604ft²)", label: "149m²(1604ft²)" },
    { value: "150m²(1615ft²)", label: "150m²(1615ft²)" },
    { value: "151m²(1625ft²)", label: "151m²(1625ft²)" },
    { value: "152m²(1636ft²)", label: "152m²(1636ft²)" },
    { value: "153m²(1647ft²)", label: "153m²(1647ft²)" },
    { value: "154m²(1658ft²)", label: "154m²(1658ft²)" },
    { value: "155m²(1668ft²)", label: "155m²(1668ft²)" },
    { value: "156m²(1679ft²)", label: "156m²(1679ft²)" },
    { value: "157m²(1690ft²)", label: "157m²(1690ft²)" },
    { value: "158m²(1701ft²)", label: "158m²(1701ft²)" },
    { value: "159m²(1711ft²)", label: "159m²(1711ft²)" },
    { value: "160m²(1722ft²)", label: "160m²(1722ft²)" },
    { value: "161m²(1733ft²)", label: "161m²(1733ft²)" },
    { value: "162m²(1744ft²)", label: "162m²(1744ft²)" },
    { value: "163m²(1755ft²)", label: "163m²(1755ft²)" },
    { value: "164m²(1765ft²)", label: "164m²(1765ft²)" },
    { value: "165m²(1776ft²)", label: "165m²(1776ft²)" },
    { value: "166m²(1787ft²)", label: "166m²(1787ft²)" },
    { value: "167m²(1798ft²)", label: "167m²(1798ft²)" },
    { value: "168m²(1808ft²)", label: "168m²(1808ft²)" },
    { value: "169m²(1819ft²)", label: "169m²(1819ft²)" },
    { value: "170m²(1830ft²)", label: "170m²(1830ft²)" },
    { value: "171m²(1841ft²)", label: "171m²(1841ft²)" },
    { value: "172m²(1851ft²)", label: "172m²(1851ft²)" },
    { value: "173m²(1862ft²)", label: "173m²(1862ft²)" },
    { value: "174m²(1873ft²)", label: "174m²(1873ft²)" },
    { value: "175m²(1884ft²)", label: "175m²(1884ft²)" },
    { value: "176m²(1894ft²)", label: "176m²(1894ft²)" },
    { value: "177m²(1905ft²)", label: "177m²(1905ft²)" },
    { value: "178m²(1916ft²)", label: "178m²(1916ft²)" },
    { value: "179m²(1927ft²)", label: "179m²(1927ft²)" },
    { value: "180m²(1938ft²)", label: "180m²(1938ft²)" },
    { value: "181m²(1948ft²)", label: "181m²(1948ft²)" },
    { value: "182m²(1959ft²)", label: "182m²(1959ft²)" },
    { value: "183m²(1970ft²)", label: "183m²(1970ft²)" },
    { value: "184m²(1981ft²)", label: "184m²(1981ft²)" },
    { value: "185m²(1991ft²)", label: "185m²(1991ft²)" },
    { value: "186m²(2002ft²)", label: "186m²(2002ft²)" },
    { value: "187m²(2013ft²)", label: "187m²(2013ft²)" },
    { value: "188m²(2024ft²)", label: "188m²(2024ft²)" },
    { value: "189m²(2034ft²)", label: "189m²(2034ft²)" },
    { value: "190m²(2045ft²)", label: "190m²(2045ft²)" },
    { value: "191m²(2056ft²)", label: "191m²(2056ft²)" },
    { value: "192m²(2067ft²)", label: "192m²(2067ft²)" },
    { value: "193m²(2077ft²)", label: "193m²(2077ft²)" },
    { value: "194m²(2088ft²)", label: "194m²(2088ft²)" },
    { value: "195m²(2099ft²)", label: "195m²(2099ft²)" },
    { value: "196m²(2110ft²)", label: "196m²(2110ft²)" },
    { value: "197m²(2120ft²)", label: "197m²(2120ft²)" },
    { value: "198m²(2131ft²)", label: "198m²(2131ft²)" },
    { value: "199m²(2142ft²)", label: "199m²(2142ft²)" },
    { value: "200m²(2153ft²)", label: "200m²(2153ft²)" },
    { value: "201m²(2164ft²)", label: "201m²(2164ft²)" },
    { value: "202m²(2174ft²)", label: "202m²(2174ft²)" },
    { value: "203m²(2185ft²)", label: "203m²(2185ft²)" },
    { value: "204m²(2196ft²)", label: "204m²(2196ft²)" },
    { value: "205m²(2207ft²)", label: "205m²(2207ft²)" },
    { value: "206m²(2217ft²)", label: "206m²(2217ft²)" },
    { value: "207m²(2228ft²)", label: "207m²(2228ft²)" },
    { value: "208m²(2239ft²)", label: "208m²(2239ft²)" },
    { value: "209m²(2250ft²)", label: "209m²(2250ft²)" },
    { value: "210m²(2260ft²)", label: "210m²(2260ft²)" },
    { value: "211m²(2271ft²)", label: "211m²(2271ft²)" },
    { value: "212m²(2282ft²)", label: "212m²(2282ft²)" },
    { value: "213m²(2293ft²)", label: "213m²(2293ft²)" },
    { value: "214m²(2303ft²)", label: "214m²(2303ft²)" },
    { value: "215m²(2314ft²)", label: "215m²(2314ft²)" },
    { value: "216m²(2325ft²)", label: "216m²(2325ft²)" },
    { value: "217m²(2336ft²)", label: "217m²(2336ft²)" },
    { value: "218m²(2347ft²)", label: "218m²(2347ft²)" },
    { value: "219m²(2357ft²)", label: "219m²(2357ft²)" },
    { value: "220m²(2368ft²)", label: "220m²(2368ft²)" },
    { value: "221m²(2379ft²)", label: "221m²(2379ft²)" },
    { value: "222m²(2390ft²)", label: "222m²(2390ft²)" },
    { value: "223m²(2400ft²)", label: "223m²(2400ft²)" },
    { value: "224m²(2411ft²)", label: "224m²(2411ft²)" },
    { value: "225m²(2422ft²)", label: "225m²(2422ft²)" },
    { value: "226m²(2433ft²)", label: "226m²(2433ft²)" },
    { value: "227m²(2443ft²)", label: "227m²(2443ft²)" },
    { value: "228m²(2454ft²)", label: "228m²(2454ft²)" },
    { value: "229m²(2465ft²)", label: "229m²(2465ft²)" },
    { value: "230m²(2476ft²)", label: "230m²(2476ft²)" },
    { value: "231m²(2486ft²)", label: "231m²(2486ft²)" },
    { value: "232m²(2497ft²)", label: "232m²(2497ft²)" },
    { value: "233m²(2508ft²)", label: "233m²(2508ft²)" },
    { value: "234m²(2519ft²)", label: "234m²(2519ft²)" },
    { value: "235m²(2530ft²)", label: "235m²(2530ft²)" },
    { value: "236m²(2540ft²)", label: "236m²(2540ft²)" },
    { value: "237m²(2551ft²)", label: "237m²(2551ft²)" },
    { value: "238m²(2562ft²)", label: "238m²(2562ft²)" },
    { value: "239m²(2573ft²)", label: "239m²(2573ft²)" },
    { value: "240m²(2583ft²)", label: "240m²(2583ft²)" },
    { value: "241m²(2594ft²)", label: "241m²(2594ft²)" },
    { value: "242m²(2605ft²)", label: "242m²(2605ft²)" },
    { value: "243m²(2616ft²)", label: "243m²(2616ft²)" },
    { value: "244m²(2626ft²)", label: "244m²(2626ft²)" },
    { value: "245m²(2637ft²)", label: "245m²(2637ft²)" },
    { value: "246m²(2648ft²)", label: "246m²(2648ft²)" },
    { value: "247m²(2659ft²)", label: "247m²(2659ft²)" },
    { value: "248m²(2669ft²)", label: "248m²(2669ft²)" },
    { value: "249m²(2680ft²)", label: "249m²(2680ft²)" },
    { value: "250m²(2691ft²)", label: "250m²(2691ft²)" },
    { value: "251m²(2702ft²)", label: "251m²(2702ft²)" },
    { value: "252m²(2713ft²)", label: "252m²(2713ft²)" },
    { value: "253m²(2723ft²)", label: "253m²(2723ft²)" },
    { value: "254m²(2734ft²)", label: "254m²(2734ft²)" },
    { value: "255m²(2745ft²)", label: "255m²(2745ft²)" },
    { value: "256m²(2756ft²)", label: "256m²(2756ft²)" },
    { value: "257m²(2766ft²)", label: "257m²(2766ft²)" },
    { value: "258m²(2777ft²)", label: "258m²(2777ft²)" },
    { value: "259m²(2788ft²)", label: "259m²(2788ft²)" },
    { value: "260m²(2799ft²)", label: "260m²(2799ft²)" },
    { value: "261m²(2809ft²)", label: "261m²(2809ft²)" },
    { value: "262m²(2820ft²)", label: "262m²(2820ft²)" },
    { value: "263m²(2831ft²)", label: "263m²(2831ft²)" },
    { value: "264m²(2842ft²)", label: "264m²(2842ft²)" },
    { value: "265m²(2852ft²)", label: "265m²(2852ft²)" },
    { value: "266m²(2863ft²)", label: "266m²(2863ft²)" },
    { value: "267m²(2874ft²)", label: "267m²(2874ft²)" },
    { value: "268m²(2885ft²)", label: "268m²(2885ft²)" },
    { value: "269m²(2895ft²)", label: "269m²(2895ft²)" },
    { value: "270m²(2906ft²)", label: "270m²(2906ft²)" },
    { value: "271m²(2917ft²)", label: "271m²(2917ft²)" },
    { value: "272m²(2928ft²)", label: "272m²(2928ft²)" },
    { value: "273m²(2939ft²)", label: "273m²(2939ft²)" },
    { value: "274m²(2949ft²)", label: "274m²(2949ft²)" },
    { value: "275m²(2960ft²)", label: "275m²(2960ft²)" },
    { value: "276m²(2971ft²)", label: "276m²(2971ft²)" },
    { value: "277m²(2982ft²)", label: "277m²(2982ft²)" },
    { value: "278m²(2992ft²)", label: "278m²(2992ft²)" },
    { value: "279m²(3003ft²)", label: "279m²(3003ft²)" },
    { value: "280m²(3014ft²)", label: "280m²(3014ft²)" },
    { value: "281m²(3025ft²)", label: "281m²(3025ft²)" },
    { value: "282m²(3035ft²)", label: "282m²(3035ft²)" },
    { value: "283m²(3046ft²)", label: "283m²(3046ft²)" },
    { value: "284m²(3057ft²)", label: "284m²(3057ft²)" },
    { value: "285m²(3068ft²)", label: "285m²(3068ft²)" },
    { value: "286m²(3078ft²)", label: "286m²(3078ft²)" },
    { value: "287m²(3089ft²)", label: "287m²(3089ft²)" },
    { value: "288m²(3100ft²)", label: "288m²(3100ft²)" },
    { value: "289m²(3111ft²)", label: "289m²(3111ft²)" },
    { value: "290m²(3122ft²)", label: "290m²(3122ft²)" },
    { value: "291m²(3132ft²)", label: "291m²(3132ft²)" },
    { value: "292m²(3143ft²)", label: "292m²(3143ft²)" },
    { value: "293m²(3154ft²)", label: "293m²(3154ft²)" },
    { value: "294m²(3165ft²)", label: "294m²(3165ft²)" },
    { value: "295m²(3175ft²)", label: "295m²(3175ft²)" },
    { value: "296m²(3186ft²)", label: "296m²(3186ft²)" },
    { value: "297m²(3197ft²)", label: "297m²(3197ft²)" },
    { value: "298m²(3208ft²)", label: "298m²(3208ft²)" },
    { value: "299m²(3218ft²)", label: "299m²(3218ft²)" },
    { value: "300m²(3229ft²)", label: "300m²(3229ft²)" },
    { value: "301m²(3240ft²)", label: "301m²(3240ft²)" },
    { value: "302m²(3251ft²)", label: "302m²(3251ft²)" },
    { value: "303m²(3261ft²)", label: "303m²(3261ft²)" },
    { value: "304m²(3272ft²)", label: "304m²(3272ft²)" },
    { value: "305m²(3283ft²)", label: "305m²(3283ft²)" },
    { value: "306m²(3294ft²)", label: "306m²(3294ft²)" },
    { value: "307m²(3305ft²)", label: "307m²(3305ft²)" },
    { value: "308m²(3315ft²)", label: "308m²(3315ft²)" },
    { value: "309m²(3326ft²)", label: "309m²(3326ft²)" },
    { value: "310m²(3337ft²)", label: "310m²(3337ft²)" },
    { value: "311m²(3348ft²)", label: "311m²(3348ft²)" },
    { value: "312m²(3358ft²)", label: "312m²(3358ft²)" },
    { value: "313m²(3369ft²)", label: "313m²(3369ft²)" },
    { value: "314m²(3380ft²)", label: "314m²(3380ft²)" },
    { value: "315m²(3391ft²)", label: "315m²(3391ft²)" },
    { value: "316m²(3401ft²)", label: "316m²(3401ft²)" },
    { value: "317m²(3412ft²)", label: "317m²(3412ft²)" },
    { value: "318m²(3423ft²)", label: "318m²(3423ft²)" },
    { value: "319m²(3434ft²)", label: "319m²(3434ft²)" },
    { value: "320m²(3444ft²)", label: "320m²(3444ft²)" },
    { value: "321m²(3455ft²)", label: "321m²(3455ft²)" },
    { value: "322m²(3466ft²)", label: "322m²(3466ft²)" },
    { value: "323m²(3477ft²)", label: "323m²(3477ft²)" },
    { value: "324m²(3488ft²)", label: "324m²(3488ft²)" },
    { value: "325m²(3498ft²)", label: "325m²(3498ft²)" },
    { value: "326m²(3509ft²)", label: "326m²(3509ft²)" },
    { value: "327m²(3520ft²)", label: "327m²(3520ft²)" },
    { value: "328m²(3531ft²)", label: "328m²(3531ft²)" },
    { value: "329m²(3541ft²)", label: "329m²(3541ft²)" },
    { value: "330m²(3552ft²)", label: "330m²(3552ft²)" },
    { value: "331m²(3563ft²)", label: "331m²(3563ft²)" },
    { value: "332m²(3574ft²)", label: "332m²(3574ft²)" },
    { value: "333m²(3584ft²)", label: "333m²(3584ft²)" },
    { value: "334m²(3595ft²)", label: "334m²(3595ft²)" },
    { value: "335m²(3606ft²)", label: "335m²(3606ft²)" },
    { value: "336m²(3617ft²)", label: "336m²(3617ft²)" },
    { value: "337m²(3627ft²)", label: "337m²(3627ft²)" },
    { value: "338m²(3638ft²)", label: "338m²(3638ft²)" },
    { value: "339m²(3649ft²)", label: "339m²(3649ft²)" },
    { value: "340m²(3660ft²)", label: "340m²(3660ft²)" },
    { value: "341m²(3670ft²)", label: "341m²(3670ft²)" },
    { value: "342m²(3681ft²)", label: "342m²(3681ft²)" },
    { value: "343m²(3692ft²)", label: "343m²(3692ft²)" },
    { value: "344m²(3703ft²)", label: "344m²(3703ft²)" },
    { value: "345m²(3714ft²)", label: "345m²(3714ft²)" },
    { value: "346m²(3724ft²)", label: "346m²(3724ft²)" },
    { value: "347m²(3735ft²)", label: "347m²(3735ft²)" },
    { value: "348m²(3746ft²)", label: "348m²(3746ft²)" },
    { value: "349m²(3757ft²)", label: "349m²(3757ft²)" },
    { value: "350m²(3767ft²)", label: "350m²(3767ft²)" },
    { value: "351m²(3778ft²)", label: "351m²(3778ft²)" },
    { value: "352m²(3789ft²)", label: "352m²(3789ft²)" },
    { value: "353m²(3800ft²)", label: "353m²(3800ft²)" },
    { value: "354m²(3810ft²)", label: "354m²(3810ft²)" },
    { value: "355m²(3821ft²)", label: "355m²(3821ft²)" },
    { value: "356m²(3832ft²)", label: "356m²(3832ft²)" },
    { value: "357m²(3843ft²)", label: "357m²(3843ft²)" },
    { value: "358m²(3853ft²)", label: "358m²(3853ft²)" },
    { value: "359m²(3864ft²)", label: "359m²(3864ft²)" },
    { value: "360m²(3875ft²)", label: "360m²(3875ft²)" },
    { value: "361m²(3886ft²)", label: "361m²(3886ft²)" },
    { value: "362m²(3897ft²)", label: "362m²(3897ft²)" },
    { value: "363m²(3907ft²)", label: "363m²(3907ft²)" },
    { value: "364m²(3918ft²)", label: "364m²(3918ft²)" },
    { value: "365m²(3929ft²)", label: "365m²(3929ft²)" },
    { value: "366m²(3940ft²)", label: "366m²(3940ft²)" },
    { value: "367m²(3950ft²)", label: "367m²(3950ft²)" },
    { value: "368m²(3961ft²)", label: "368m²(3961ft²)" },
    { value: "369m²(3972ft²)", label: "369m²(3972ft²)" },
    { value: "370m²(3983ft²)", label: "370m²(3983ft²)" },
    { value: "371m²(3993ft²)", label: "371m²(3993ft²)" },
    { value: "372m²(4004ft²)", label: "372m²(4004ft²)" },
    { value: "373m²(4015ft²)", label: "373m²(4015ft²)" },
    { value: "374m²(4026ft²)", label: "374m²(4026ft²)" },
    { value: "375m²(4036ft²)", label: "375m²(4036ft²)" },
    { value: "376m²(4047ft²)", label: "376m²(4047ft²)" },
    { value: "377m²(4058ft²)", label: "377m²(4058ft²)" },
    { value: "378m²(4069ft²)", label: "378m²(4069ft²)" },
    { value: "379m²(4080ft²)", label: "379m²(4080ft²)" },
    { value: "380m²(4090ft²)", label: "380m²(4090ft²)" },
    { value: "381m²(4101ft²)", label: "381m²(4101ft²)" },
    { value: "382m²(4112ft²)", label: "382m²(4112ft²)" },
    { value: "383m²(4123ft²)", label: "383m²(4123ft²)" },
    { value: "384m²(4133ft²)", label: "384m²(4133ft²)" },
    { value: "385m²(4144ft²)", label: "385m²(4144ft²)" },
    { value: "386m²(4155ft²)", label: "386m²(4155ft²)" },
    { value: "387m²(4166ft²)", label: "387m²(4166ft²)" },
    { value: "388m²(4176ft²)", label: "388m²(4176ft²)" },
    { value: "389m²(4187ft²)", label: "389m²(4187ft²)" },
    { value: "390m²(4198ft²)", label: "390m²(4198ft²)" },
    { value: "391m²(4209ft²)", label: "391m²(4209ft²)" },
    { value: "392m²(4219ft²)", label: "392m²(4219ft²)" },
    { value: "393m²(4230ft²)", label: "393m²(4230ft²)" },
    { value: "394m²(4241ft²)", label: "394m²(4241ft²)" },
    { value: "395m²(4252ft²)", label: "395m²(4252ft²)" },
    { value: "396m²(4263ft²)", label: "396m²(4263ft²)" },
    { value: "397m²(4273ft²)", label: "397m²(4273ft²)" },
    { value: "398m²(4284ft²)", label: "398m²(4284ft²)" },
    { value: "399m²(4295ft²)", label: "399m²(4295ft²)" },
    { value: "400m²(4306ft²)", label: "400m²(4306ft²)" },
    { value: "401m²(4316ft²)", label: "401m²(4316ft²)" },
    { value: "402m²(4327ft²)", label: "402m²(4327ft²)" },
    { value: "403m²(4338ft²)", label: "403m²(4338ft²)" },
    { value: "404m²(4349ft²)", label: "404m²(4349ft²)" },
    { value: "405m²(4359ft²)", label: "405m²(4359ft²)" },
    { value: "406m²(4370ft²)", label: "406m²(4370ft²)" },
    { value: "407m²(4381ft²)", label: "407m²(4381ft²)" },
    { value: "408m²(4392ft²)", label: "408m²(4392ft²)" },
    { value: "409m²(4402ft²)", label: "409m²(4402ft²)" },
    { value: "410m²(4413ft²)", label: "410m²(4413ft²)" },
    { value: "411m²(4424ft²)", label: "411m²(4424ft²)" },
    { value: "412m²(4435ft²)", label: "412m²(4435ft²)" },
    { value: "413m²(4445ft²)", label: "413m²(4445ft²)" },
    { value: "414m²(4456ft²)", label: "414m²(4456ft²)" },
    { value: "415m²(4467ft²)", label: "415m²(4467ft²)" },
    { value: "416m²(4478ft²)", label: "416m²(4478ft²)" },
    { value: "417m²(4489ft²)", label: "417m²(4489ft²)" },
    { value: "418m²(4499ft²)", label: "418m²(4499ft²)" },
    { value: "419m²(4510ft²)", label: "419m²(4510ft²)" },
    { value: "420m²(4521ft²)", label: "420m²(4521ft²)" },
    { value: "421m²(4532ft²)", label: "421m²(4532ft²)" },
    { value: "422m²(4542ft²)", label: "422m²(4542ft²)" },
    { value: "423m²(4553ft²)", label: "423m²(4553ft²)" },
    { value: "424m²(4564ft²)", label: "424m²(4564ft²)" },
    { value: "425m²(4575ft²)", label: "425m²(4575ft²)" },
  ];

  const durationOptions = [
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
  ];

  const numCleanersOptions = [
    { value: "1", label: "1 " },
    { value: "2", label: "2 " },
    { value: "3", label: "3 " },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "15", label: "15" },
    { value: "20", label: "20" },
    { value: "25", label: "25" },
    { value: "50", label: "50" },
    { value: "75", label: "75" },
    { value: "100", label: "100" },
  ];

  const propertyTypeOptions = [
    { value: "home", label: "Home" },
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "commercial property", label: "Commercial property" },
    { value: "government office", label: "Government office" },
    { value: "public office", label: "Public office" },
    { value: "private office", label: "Private office " },
    { value: "daycare centre", label: "Daycare centre " },
    { value: "elders care centre", label: "Elder's Care Centre" },
    { value: "shopping mall", label: "Shopping mall" },
    { value: "government hospital", label: "Government hospital" },
    { value: "private hospital", label: "Private hospital" },
    { value: "sport centre", label: "Sport centre" },
    { value: "gym", label: "Gym " },
    { value: "restaurant", label: "Restaurant" },
    { value: "hotel", label: "Hotel" },
    {
      value: "school private or government",
      label: "School Private or Government",
    },
    { value: "transport sector", label: "Transport sector" },
    { value: "airport", label: "Airport" },
    { value: "retail building or shop", label: "Retail building or shop" },
    { value: "other", label: "Other sector" },
  ];

  const frequencyOptions = [
    { value: "once", label: "One-time" },
    { value: "weekly", label: "Weekly" },
    { value: "every2weeks", label: "Every 02 weeks" },
    { value: "every3weeks", label: "Every 03 weeks" },
    { value: "monthly", label: "Monthly" },
  ];

  const contactTypeOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "french", label: "French" },
    { value: "spanish", label: "Spanish" },
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

                          id: Number(service.package_id),
                          price: parseInt(service.price),

                          qty:
                            service.name === "Oven Cleaning"
                              ? Number(ovenQty)
                              : service.name === "Fridge Cleaning"
                              ? Number(fridgeQty)
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
                  formatMonthYear={(_, date) => dayjs(date).format("MMMM YYYY")}

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

          <Dropdown
            label="Approx. Property Size"
            value={propertySize}
            options={propertySizeOptions}
            onChange={setPropertySize}
          />
          <Dropdown
            label="Duration (in hours)"
            value={duration}
            options={durationOptions}
            onChange={setDuration}
          />
          <Dropdown
            label="Number of Cleaners"
            value={numCleaners}
            options={numCleanersOptions}
            onChange={setNumCleaners}
          />
          <Dropdown
            label="Select your business or property"
            value={propertyType}
            options={propertyTypeOptions}
            onChange={setPropertyType}
          />
          <Dropdown
            label="Select Frequency"
            value={frequency}
            options={frequencyOptions}
            onChange={setFrequency}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Dropdown
              label="Contact Person Type"
              value={contactType}
              options={contactTypeOptions}
              onChange={setContactType}
            />
            <Dropdown
              label="Select Language"
              value={language}
              options={languageOptions}
              onChange={setLanguage}
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

        {/* Price Summary */}
        <div className="pt-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-black">
            <span className="mb-2 md:mb-0">
              General Cost{" "}
              <span className="text-gray-400">(C$ 40.00 Per Hour)</span>
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
        <PaymentSupportSection
          title="We Support"
          paymentMethods={paymentMethods}
        />
      </div>
    </div>
  );
}

export default RegularBasicCleaningPage;