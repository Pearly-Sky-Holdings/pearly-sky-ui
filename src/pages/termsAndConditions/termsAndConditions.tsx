import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <Container  sx={{ padding: { xs: 2, sm: 4 }, textAlign: 'center',color:"black" }}>
      {/* Main Heading */}
      <Typography variant="h4" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginBottom: 4 }}>
        Terms and Conditions
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: '#002F6D', marginBottom: 4 ,textAlign: 'left'}}>
        Last Updated: 15.03.2025
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        Welcome to{' '}
        <Link href="https://www.pearlyskycleaningplc.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#0D90C8', fontWeight: 'semibold' }}>
          Pearly Sky Cleaning Services Pvt. Ltd.!
        </Link>{' '}
        These Terms and Conditions govern your use of our websites,{' '}
        <Link href="http://www.pearlyskycleaningplc.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#0D90C8', fontWeight: 'semibold' }}>
          [www.pearlyskycleaningplc.com]
        </Link>{' '}
        and{' '}
        <Link href="http://www.pearlyskyplc.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#0D90C8', fontWeight: 'semibold' }}>
          [www.pearlyskyplc.com]
        </Link>, and the services we provide. By accessing or using our websites, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our websites.
      </Typography>

      {/* Sub-topics and Content */}
      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        By using our websites, you confirm that you are at least 18 years old or have the legal capacity to enter into a binding agreement. You also agree to comply with all applicable laws and regulations.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        2. Services Offered
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 1 }}>
        Pearly Sky Cleaning Services Pvt. Ltd. provides cleaning and care services, including but not limited to:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4,}}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Residential and commercial cleaning." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Elder care and children care services." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Specialized cleaning solutions." />
        </ListItem>
      </List>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 1,marginTop:1 }}>
        Our services are available in the following regions:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4, }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Europe: France, United Kingdom, and other European countries." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Asia: Sri Lanka, Gulf regions, and other Asian countries." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="North America: United States of America, Canada." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Oceania: Australia, New Zealand." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        3. User Responsibilities
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 1 }}>
        You agree to:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Provide accurate and complete information when using our websites or booking services." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Use our websites and services only for lawful purposes." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Not engage in any activity that disrupts or interferes with the functionality of our websites." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        4. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        All content on our websites, including text, graphics, logos, and images, is the property of Pearly Sky Cleaning Services Pvt. Ltd and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        5. Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        Your use of our websites is also governed by our{' '}
        <Link href="#" sx={{ color: '#0D90C8', fontWeight: 'semibold' }}>
          Privacy Policy
        </Link>, which explains how we collect, use, and protect your personal information.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        6. Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        To the fullest extent permitted by law, Pearly Sky Cleaning Services Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from your use of our websites or services.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        7. Governing Law
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        These Terms and Conditions are governed by the laws of France, where our headquarters is located. Any disputes arising from these terms shall be resolved in the courts of France.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        8. Changes to Terms and Conditions
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated revision date. Your continued use of our websites constitutes acceptance of the revised terms.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        9. Contact Us
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 2 }}>
        If you have any questions about these Terms and Conditions, please contact us at:
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 1 }}>
        Email: 
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 2, pl: 4 }}>
        <Link href="mailto:Info@Pearlyskyplc.com" sx={{ color: '#0D90C8', fontWeight: 'bold', textDecoration: 'none' }}>
            Info@Pearlyskyplc.com
        </Link>
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 1 }}>
        Addresses:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Headquarters (France): 15 Rue Des Halles, 75001 Paris, France." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Sri Lanka: No. 188/2, Kandy Road, Pahala Imbulgoda, Imbulgoda, Sri Lanka." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="United Kingdom: 3rd Floor, 45 Albemarle Street, London, England, W1S 4JL, United Kingdom." />
        </ListItem>
      </List>
    </Container>
  );
};

export default TermsAndConditionsPage;