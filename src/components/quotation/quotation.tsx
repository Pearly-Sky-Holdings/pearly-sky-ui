import  { useState, useEffect } from "react";
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
} from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Define the type for a category
type CategoryData = {
  category: string;
  items: string[];
};

const Quotation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};

  // State for report generated date and time
  const [reportGeneratedDate, setReportGeneratedDate] = useState("");
  const [reportGeneratedTime, setReportGeneratedTime] = useState("");

  useEffect(() => {
    // Set the report generated date and time
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
  } = data;

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const input = document.getElementById("quotation-content");
    if (input) {
      html2canvas(input).then((canvas) => {
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
    // Replace with your API call to send data to the backend
    console.log("Sending data to the backend:", data);
    handleDownloadPDF(); // Download PDF after sending data
  };

  return (
    <Box sx={{ padding: 3, maxWidth: 1200, margin: "auto" }} id="quotation-content">
      {/* Header Section */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "semibold", textAlign: "center", mb: 4 ,color:"#002F6D"}}>
        Quotation for {serviceName}
      </Typography>

      {/* Report Generated Date and Time */}
      <Box sx={{ mb: 4 }}>
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell sx={{ border: "2px solid #ddd", padding: "12px" }}>
                        <strong>Report Generated Date:</strong> {reportGeneratedDate} 
                        </TableCell>
                        <TableCell sx={{ border: "2px solid #ddd", padding: "12px" }}>
                        <strong>Report Generated Time:</strong> {reportGeneratedTime}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>       
      </Box>

      {/* Service Details */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#0D90C8",textDecoration:"underline" }}>
          Service Details
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <strong>Service Name</strong>
                </TableCell>
                <TableCell>{serviceName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Service Date</strong>
                </TableCell>
                <TableCell>{details.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Service Time</strong>
                </TableCell>
                <TableCell>{details.time}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Service Frequency</strong>
                </TableCell>
                <TableCell>{details.frequency}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Business or Property</strong>
                </TableCell>
                <TableCell>{details.business_property}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Equipment Provided By</strong>
                </TableCell>
                <TableCell>
                  {equipment.customer ? "Customer" : equipment.company ? "Company" : "Not Specified"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Chemical Provided By</strong>
                </TableCell>
                <TableCell>
                  {chemical.customer ? "Customer" : chemical.company ? "Company" : "Not Specified"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Time Zone</strong>
                </TableCell>
                <TableCell>{details.timeZone}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Additional Notes</strong>
                </TableCell>
                <TableCell>{details.note}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Selected Packages</strong>
                </TableCell>
                <TableCell>
                    {selectedCategories.length > 0 ? (
                    selectedCategories.map((categoryData: CategoryData, index: number) => (
                    <Box key={index} sx={{ mb: 3 }}>              
                    {categoryData.category} 
                    {/* ({categoryData.items.join(", ")}) */}
                     </Box>
                        ))
                    ) : (
                    <Typography variant="body1">No categories selected.</Typography>
                        )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

     

      {/* Personal Information */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#0D90C8", textDecoration:"underline"}}>
          Personal Information
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <strong>Name</strong>
                </TableCell>
                <TableCell>
                  {personalInformation.prefix} {personalInformation.firstName}{" "}
                  {personalInformation.middleName} {personalInformation.lastName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Email</strong>
                </TableCell>
                <TableCell>{personalInformation.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Phone</strong>
                </TableCell>
                <TableCell>{personalInformation.phone}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Address</strong>
                </TableCell>
                <TableCell>
                  {personalInformation.address}
                  {/* , {personalInformation.apartment},{" "}
                  {personalInformation.city}, {personalInformation.state},{" "}
                  {personalInformation.zip}, {personalInformation.country} */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Apartment</strong>
                </TableCell>
                <TableCell>
                  {personalInformation.apartment}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>City</strong>
                </TableCell>
                <TableCell>                 
                  {personalInformation.city}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>State/Province</strong>
                </TableCell>
                <TableCell>
                  {personalInformation.state}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>ZIP / Postal Code</strong>
                </TableCell>
                <TableCell>                  
                  {personalInformation.zip}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Country</strong>
                </TableCell>
                <TableCell>
                  {personalInformation.country}
                </TableCell>
              </TableRow>
             
              
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 4 }}>
        <Button
          variant="contained"
          
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          Edit
        </Button>
        <Button
          variant="contained"          
          onClick={handleSendData} // Send data to the backend and download PDF
        >
          Ok
        </Button>
      </Box>
    </Box>
  );
};

export default Quotation;