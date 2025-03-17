import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

const CookiePolicyPage: React.FC = () => {
  return (
    <Container  sx={{ padding: { xs: 2, sm: 4 }, textAlign: 'center',color:"black" }}>
      {/* Main Paragraph */}
      <Typography variant="h4" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginBottom: 4 }}>
        Cookie Policy
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: '#002F6D', marginBottom: 4,textAlign: 'left' }}>
        Last Updated: 15.03.2025
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        Welcome to{' '}
        <Link href="http://www.pearlyskycleaningplc.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#0D90C8', fontWeight: 'semibold' }}>
          Pearly Sky Cleaning Services Pvt. Ltd !
        </Link>{' '}
        This Cookies Policy explains how we use cookies and similar technologies on our websites,{' '}
        <Link href="http://www.pearlyskycleaningplc.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#0D90C8', fontWeight: 'semibold' }}>
          [www.pearlyskycleaningplc.com]
        </Link>, to enhance your experience and improve our services. By using our websites, you consent to the use of cookies in accordance with this policy.
      </Typography>

      {/* Sub-topics and Content */}
      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        What Are Cookies?
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website. They help us recognize your device and remember your preferences, making your interactions with our websites more efficient and personalized.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        How We Use Cookies
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 2 }}>
        We use cookies for the following purposes:
      </Typography>
      <List sx={{ listStyleType: 'decimal', pl: 4, marginBottom: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Essential Cookies: Necessary for the websites to function properly (e.g., enabling page navigation or access to secure areas)." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Performance Cookies: Help us understand how visitors use our websites (e.g., pages visited, time spent) to improve their performance." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Functional Cookies: Remember your preferences (e.g., language, region) to provide a personalized experience." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Advertising Cookies: Used to deliver relevant ads based on your interests and browsing history." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        Third-Party Cookies
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        We may also allow third-party service providers (e.g., Google Analytics, social media platforms) to place cookies on your device. These cookies help us analyze website traffic, integrate social media features, and deliver targeted advertisements.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        Managing Cookies
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        You can control or delete cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our websites. For more information, visit{' '}
        <Link href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" sx={{ color: '#0D90C8', fontWeight: 'semibold' }}>
          All About Cookies
        </Link>.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        Your Privacy Rights
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 2 }}>
        We respect your privacy and comply with applicable data protection laws, including:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4}}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="General Data Protection Regulation (GDPR) in the EU." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="California Consumer Privacy Act (CCPA) in the U.S." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Other regional regulations in Australia, New Zealand, Canada, the Gulf, and Asia." />
        </ListItem>
      </List>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        For more details, please refer to our{' '}
        <Link href="#" sx={{ color: '#0D90C8', fontWeight: 'semibold' }}>
          Privacy Policy
        </Link>.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        Changes to This Policy
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 4 }}>
        We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 2 }}>
        If you have any questions about this Cookies Policy, please contact us at:
      </Typography>
    <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 1 }}>
            Email: 
    </Typography>
    <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 2, pl: 4 }}>
    <Link href="mailto:Info@Pearlyskyplc.com" sx={{ color: '#0D90C8', fontWeight: 'bold', textDecoration: 'none' }}>
        Info@Pearlyskyplc.com
    </Link>
    </Typography>

      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginTop: 4, marginBottom: 2, textAlign: 'left' }}>
        Addresses:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Sri Lanka: No. 188/2, Kandy Road, Pahala Imbulgoda, Imbulgoda, Sri Lanka." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="France: 15 Rue Des Halles, 75001 Paris, France." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="United Kingdom: 3rd Floor, 45 Albemarle Street, London, England, W1S 4JL, United Kingdom." />
        </ListItem>
      </List>
    </Container>
  );
};

export default CookiePolicyPage;