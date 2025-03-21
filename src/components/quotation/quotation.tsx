import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Logo from "../../../public/images/logo.png";
const emailIcon = "./images/logoiconWhite.png";

//  type for a category
type CategoryData = {
  category: string;
  items: string[];
};

const Quotation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const selectedItems: string[] = data?.selectedItems || [];
  

  // State for report generated date and time
  const [reportGeneratedDate, setReportGeneratedDate] = useState("");
  const [reportGeneratedTime, setReportGeneratedTime] = useState("");

  useEffect(() => {    
    const now = new Date();
    setReportGeneratedDate(now.toLocaleDateString());
    setReportGeneratedTime(now.toLocaleTimeString());
  }, []);

  if (!data) {
    return (
      <Box sx={{ padding: 3, textAlign: "center" }}>
        <Typography variant="h6">No data found. Please go back and try again.</Typography>
      </Box>
    );
  }

  const {
    serviceName,
    details,
    personalInformation,
    equipment,
    chemical,
    selectedCategories,
    materials
    
   
  } = data;

  // handle PDF download
  const handleDownloadPDF = () => {
    const input = document.getElementById("quotation-content");
    if (input) {
      html2canvas(input).then((canvas: HTMLCanvasElement) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("quotation.pdf");
      });
    }
  };

  // Function to handle sending data to the backend
  const handleSendData = () => {   
    // console.log("Sending data to the backend:", data);
    handleDownloadPDF(); 
  };

  const emails = [
    { label: "General Info", address: "Info@pearlyskyplc.com" },
    { label: "Support", address: "support@pearlyskyplc.com" },
    { label: "Sales", address: "Sales@pearlyskyplc.com" },
    { label: "Helpdesk", address: "Helpdesk@pearlyskyplc.com" },
    
  ];

  return (
    <Box sx={{ padding: 3, maxWidth: 1200, margin: "auto" }} id="quotation-content">
      <div className="bg-gradient-to-r from-[#002F6D] to-[#0D90C8] h-30 flex justify-center items-center">
      <img
        src={Logo}
        alt="Cleaning Service"
        className="text-center"
      />
      </div>
    <Box sx={{ mb: 4,  paddingBottom: 2,mt:10 }}>
    <Grid container spacing={2}>
      {/* Left Side: User Information */}
      <Grid item xs={6}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "black" }}>
          {personalInformation.prefix} {personalInformation.firstName}{" "}
          {personalInformation.middleName} {personalInformation.lastName}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray" , fontWeight:"bold"}}>
          {personalInformation.address}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray" , fontWeight:"bold"}}>
          {personalInformation.city}, {personalInformation.state},{" "}
          {personalInformation.country}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", fontWeight:"bold" }}>
          {personalInformation.zip}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", fontWeight:"bold" }}>
          {personalInformation.email}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", fontWeight:"bold" }}>
          {personalInformation.phone}
        </Typography>      
      </Grid>

      {/* Right Side: Report Generated Date and Time */}
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Typography variant="body1" sx={{ color: "gray" }}>
            <strong>Report Generated Date:</strong> {reportGeneratedDate}
          </Typography>
          <Typography variant="body1" sx={{ color: "gray" }}>
            <strong>Report Generated Time:</strong> {reportGeneratedTime}
          </Typography>
        </Grid>
      </Grid>
    </Box>

      {/* Header Section */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "semibold", textAlign: "center", mb: 4, color: "black" ,textDecoration:"underline"}}>
        Quotation for {serviceName}
      </Typography>

      {/* Report Generated Date and Time */}
      <Box sx={{ mb: 4 }}>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ddd", padding: "12px",background:"rgb(213, 236, 248)" }}>
                  <strong>Service Date:</strong> 
                </TableCell>
                <TableCell sx={{ border: "1px solid #ddd", padding: "12px" ,background:"rgb(213, 236, 248)"}}>
                  <strong>Service Time:</strong> 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ddd", padding: "12px" }}>
                    {details.date}
                </TableCell>
                <TableCell sx={{ border: "1px solid #ddd", padding: "12px" }}>
                {details.time} ({details.time_zoon})
                </TableCell>
              </TableRow>              
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Service Details */}
      {details && (
        <Box sx={{ mb: 4 }}>
          <TableContainer>
            <Table sx={{border: "1px solid #ddd"}}>
              <TableBody sx={{border: "1px solid #ddd"}}>
              <TableRow sx={{border: "1px solid #ddd"}}>
                <TableCell sx={{ border: "1px solid #ddd", padding: "12px",background:"rgb(227, 241, 248)" }}>
                  <strong>Service Datails</strong> 
                </TableCell>
                <TableCell sx={{ border: "1px solid #ddd", padding: "12px" ,background:"rgb(227, 241, 248)"}}>
                  <strong>Selected Options</strong> 
                </TableCell>
              </TableRow >
                <TableRow sx={{border: "1px solid #ddd"}}>
                  <TableCell sx={{border: "1px solid #ddd"}}>
                    <strong>Service Name</strong>
                  </TableCell>
                  <TableCell sx={{border: "1px solid #ddd"}}>{serviceName}</TableCell>
                </TableRow>  
                {details.business_property && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Business or Property / Venue</strong>
                    </TableCell>
                    <TableCell>{details.business_property}</TableCell>
                  </TableRow>
                )}   
                 {details.property_size && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Property Size</strong>
                    </TableCell>
                    <TableCell>{details.property_size}</TableCell>
                  </TableRow>
                )}     
                {details.location_from && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Location From</strong>
                    </TableCell>
                    <TableCell>{details.location_from}</TableCell>
                  </TableRow>
                )} 
                 {details.location_to && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Location To </strong>
                    </TableCell>
                    <TableCell>{details.location_to}</TableCell>
                  </TableRow>
                )}             
              {details.frequency && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Service Frequency</strong>
                    </TableCell>
                    <TableCell>{details.frequency}</TableCell>
                  </TableRow>
                )}
                 {details.number_of_cleaners && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Number of Cleaners</strong>
                    </TableCell>
                    <TableCell>{details.number_of_cleaners}</TableCell>
                  </TableRow>
                )}
               
                {equipment && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Equipment Provided By</strong>
                    </TableCell>
                    <TableCell>
                      {equipment.customer ? "Customer" : equipment.company ? "Company" : "Not Specified"}
                    </TableCell>
                  </TableRow>
                )}
                {chemical && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Chemical Provided By</strong>
                    </TableCell>
                    <TableCell>
                      {chemical.customer ? "Customer" : chemical.company ? "Company" : "Not Specified"}
                    </TableCell>
                  </TableRow>
                )}
                {materials && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Materials Provided By</strong>
                    </TableCell>
                    <TableCell>
                      {materials.customer ? "Customer" : chemical.company ? "Company" : "Not Specified"}
                    </TableCell>
                  </TableRow>
                )}
                {details.time_zoon && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Time Zone</strong>
                    </TableCell>
                    <TableCell>{details.time_zoon}</TableCell>
                  </TableRow>
                )}
                {details.note && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Additional Notes</strong>
                    </TableCell>
                    <TableCell sx={{border: "1px solid #ddd"}}>{details.note}</TableCell>
                  </TableRow>
                )}
                {selectedCategories && selectedCategories.length > 0 && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>Selected Packages</strong>
                    </TableCell>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      {selectedCategories.map((categoryData: CategoryData, index: number) => (
                        <Box key={index} sx={{ mb: 3 }}>
                          {categoryData.category}
                          {/* ({categoryData.items.join(", ")}) */}
                        </Box>
                      ))}
                    </TableCell>
                  </TableRow>
                )}
                {selectedItems && selectedItems.length > 0 && (
                  <TableRow>
                    <TableCell sx={{ border: "1px solid #ddd" }}>
                      <strong>Selected Items / Options / Type</strong>
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ddd" }}>
                      {selectedItems.map((item, index) => (
                        <div key={index}>{item}</div>
                      ))}
                    </TableCell>
                  </TableRow>
                )}
                
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

        <div className="bg-gradient-to-r from-[#002F6D] to-[#0D90C8] h-auto flex justify-center items-center">
          {/* Email Section - Now Responsive */}
          <Box sx={{ mt: 1, textAlign: "center", width: "100%" }}>
            <Grid
              container
              spacing={isMobile ? 2 : 1}
              justifyContent="center"
              alignItems="center"
              sx={{
                flexDirection: "column",
              }}
            >
              {/* First Row for Emails */}
              <Grid
                container
                item
                spacing={isMobile ? 2 : 1}
                justifyContent="center"
                alignItems="center"
                sx={{
                  gap: isMobile ? 2 : 3,
                  flexDirection: isMobile ? "column" : "row",
                  width: "100%",
                }}
              >
                {emails.map((email, index) => (
                  <Grid
                    item
                    key={index}
                    xs={isMobile ? 12 : "auto"}
                    sx={{
                      width: isMobile ? "100%" : "auto",
                      mb: isMobile ? 2 : 1,
                      fontSize: isMobile ? "12px" : "",
                      padding: isMobile ? "0 16px" : "0", // Adjust padding for mobile
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: "8px",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": { transform: "scale(1.05)" },
                        width: isMobile ? "100%" : "auto",
                      }}
                    >
                      <Box
                        component="img"
                        src={emailIcon}
                        alt="Email Icon"
                        sx={{ width: "20px", height: "30px", marginRight: "8px" }}
                      />
                      <a
                        href={`mailto:${email.address}`}
                        style={{
                          textDecoration: "none",
                          color: "white",
                          fontWeight: "bold",
                          wordBreak: "break-word",
                        }}
                      >
                        {email.address}
                      </a>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Thank You Statement */}
              <Grid item xs={12} sx={{ mt: isMobile ? 2 : 1, padding: isMobile ? "0 16px" : "0" }}>
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Thank You For Your Request!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
        <Typography sx={{ color: "gray", textAlign:"center",mt:3 }}>
          This report is generated by @2025 Pearly Sky (Pvt) Ltd.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 10 }}>
        <Button
          variant="contained"
          onClick={() => navigate(-1)} >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleSendData} >
          Download 
        </Button>
      </Box>
   
    </Box>
  );
};

export default Quotation;