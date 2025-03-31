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
import { useLanguage } from "../../context/LanguageContext";

const emailIcon = "./images/logoiconWhite.png";

// Type for a category
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
  const { translate } = useLanguage();
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
        <Typography variant="h6">{translate('noDataFound')}</Typography>
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
        pdf.save(`${translate('quotation')}_${serviceName}.pdf`);
      });
    }
  };

  // Function to handle sending data to the backend
  const handleSendData = () => {   
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
        <img src={Logo} alt={translate('companyLogoAlt')} className="text-center" />
      </div>
      
      <Box sx={{ mb: 4, paddingBottom: 2, mt: 10 }}>
        <Grid container spacing={2}>
          {/* Left Side: User Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "black" }}>
              {personalInformation.prefix} {personalInformation.firstName}{" "}
              {personalInformation.middleName} {personalInformation.lastName}
            </Typography>
            <Typography variant="body1" sx={{ color: "gray", fontWeight:"bold"}}>
              {personalInformation.address}
            </Typography>
            <Typography variant="body1" sx={{ color: "gray", fontWeight:"bold"}}>
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
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "left", md: "right" } }}>
            <Typography variant="body1" sx={{ color: "gray" }}>
              <strong>{translate('reportGeneratedDate')}:</strong> {reportGeneratedDate}
            </Typography>
            <Typography variant="body1" sx={{ color: "gray" }}>
              <strong>{translate('reportGeneratedTime')}:</strong> {reportGeneratedTime}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Header Section */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "semibold", textAlign: "center", mb: 4, color: "black", textDecoration:"underline" }}>
        {translate('quotationFor')} {serviceName}
      </Typography>

      {/* Report Generated Date and Time */}
      <Box sx={{ mb: 4 }}>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ddd", padding: "12px", background:"rgb(213, 236, 248)" }}>
                  <strong>{translate('serviceDate')}</strong> 
                </TableCell>
                <TableCell sx={{ border: "1px solid #ddd", padding: "12px", background:"rgb(213, 236, 248)" }}>
                  <strong>{translate('serviceTime')}</strong> 
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
                  <TableCell sx={{ border: "1px solid #ddd", padding: "12px", background:"rgb(227, 241, 248)" }}>
                    <strong>{translate('serviceDetails')}</strong> 
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ddd", padding: "12px", background:"rgb(227, 241, 248)" }}>
                    <strong>{translate('selectedOptions')}</strong> 
                  </TableCell>
                </TableRow>
                <TableRow sx={{border: "1px solid #ddd"}}>
                  <TableCell sx={{border: "1px solid #ddd"}}>
                    <strong>{translate('serviceName')}</strong>
                  </TableCell>
                  <TableCell sx={{border: "1px solid #ddd"}}>{serviceName}</TableCell>
                </TableRow>  
                {details.business_property && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('businessProperty')}</strong>
                    </TableCell>
                    <TableCell>{details.business_property}</TableCell>
                  </TableRow>
                )}   
                {details.property_size && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('propertySize')}</strong>
                    </TableCell>
                    <TableCell>{details.property_size}</TableCell>
                  </TableRow>
                )}     
                {details.location_from && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('locationFrom')}</strong>
                    </TableCell>
                    <TableCell>{details.location_from}</TableCell>
                  </TableRow>
                )} 
                {details.location_to && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('locationTo')}</strong>
                    </TableCell>
                    <TableCell>{details.location_to}</TableCell>
                  </TableRow>
                )}             
                {details.frequency && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('serviceFrequency')}</strong>
                    </TableCell>
                    <TableCell>{details.frequency}</TableCell>
                  </TableRow>
                )}
                {details.number_of_cleaners && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('numberOfCleaners')}</strong>
                    </TableCell>
                    <TableCell>{details.number_of_cleaners}</TableCell>
                  </TableRow>
                )}
               
                {equipment && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('equipmentProvidedBy')}</strong>
                    </TableCell>
                    <TableCell>
                      {equipment.customer ? translate('customer') : equipment.company ? translate('company') : translate('notSpecified')}
                    </TableCell>
                  </TableRow>
                )}
                {chemical && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('chemicalProvidedBy')}</strong>
                    </TableCell>
                    <TableCell>
                      {chemical.customer ? translate('customer') : chemical.company ? translate('company') : translate('notSpecified')}
                    </TableCell>
                  </TableRow>
                )}
                {materials && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('materialsProvidedBy')}</strong>
                    </TableCell>
                    <TableCell>
                      {materials.customer ? translate('customer') : materials.company ? translate('company') : translate('notSpecified')}
                    </TableCell>
                  </TableRow>
                )}
                {details.time_zoon && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('timeZone')}</strong>
                    </TableCell>
                    <TableCell>{details.time_zoon}</TableCell>
                  </TableRow>
                )}
                {details.note && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('additionalNotes')}</strong>
                    </TableCell>
                    <TableCell sx={{border: "1px solid #ddd"}}>{details.note}</TableCell>
                  </TableRow>
                )}
                {selectedCategories && selectedCategories.length > 0 && (
                  <TableRow>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      <strong>{translate('selectedPackages')}</strong>
                    </TableCell>
                    <TableCell sx={{border: "1px solid #ddd"}}>
                      {selectedCategories.map((categoryData: CategoryData, index: number) => (
                        <Box key={index} sx={{ mb: 3 }}>
                          {translate(categoryData.category)}
                        </Box>
                      ))}
                    </TableCell>
                  </TableRow>
                )}
                {selectedItems && selectedItems.length > 0 && (
                  <TableRow>
                    <TableCell sx={{ border: "1px solid #ddd" }}>
                      <strong>{translate('selectedItems')}</strong>
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ddd" }}>
                      {selectedItems.map((item, index) => (
                        <div key={index}>{translate(item)}</div>
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
        <Box sx={{ mt: 1, textAlign: "center", width: "100%", p: 2 }}>
          <Grid container spacing={isMobile ? 2 : 1} justifyContent="center" alignItems="center">
            {/* Email Section */}
            <Grid container item spacing={isMobile ? 2 : 1} justifyContent="center" sx={{ gap: isMobile ? 2 : 3 }}>
              {emails.map((email, index) => (
                <Grid item key={index} xs={12} sm="auto">
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: isMobile ? "flex-start" : "center" }}>
                    <Box component="img" src={emailIcon} alt={translate('emailIconAlt')} sx={{ width: "20px", height: "30px", mr: 1 }} />
                    <a href={`mailto:${email.address}`} style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
                      {email.address}
                    </a>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Thank You Statement */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                {translate('thankYouMessage')}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
      
      <Typography sx={{ color: "gray", textAlign:"center", mt:3 }}>
        {translate('reportFooter')}
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 10 }}>
        <Button variant="contained" onClick={() => navigate(-1)}>
          {translate('back')}
        </Button>
        <Button variant="contained" onClick={handleSendData}>
          {translate('download')}
        </Button>
      </Box>
    </Box>
  );
};

export default Quotation;