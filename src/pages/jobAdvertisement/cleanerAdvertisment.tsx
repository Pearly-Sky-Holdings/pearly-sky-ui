import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, List, ListItem, ListItemText, Link } from '@mui/material';

const CleanersCareerAdvertisementPage: React.FC = () => {
    const navigate = useNavigate();
  return (
    <Container  sx={{ padding: { xs: 2, sm: 4 }, textAlign: 'left',color:"black" }}>
      {/* Back Arrow to Career Page */}
      <Link href="/career" sx={{ display: 'flex', alignItems: 'center', color: 'gray', textDecoration: 'none', marginBottom: 4 }}>
        ← Careers Page
      </Link>

      {/* Job Title */}
      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginBottom: 4 }}>
        Cleaner (Male / Female) – Residential and Commercial Properties
      </Typography>

      {/* Job Details */}
      <Typography variant="body1" gutterBottom sx={{ color: 'gray',  marginTop: 4, marginBottom: 2 }}>
      <strong> Seniority:</strong> Entry-Level to Experienced
      </Typography>
      <Typography variant="body1" paragraph sx={{ marginBottom: 2 ,color: 'gray'}}>
        <strong>Hours:</strong> Part-Time / Full-Time / Flexible Shifts
      </Typography>
      <Typography variant="body1" paragraph sx={{ marginBottom: 4,color: 'gray' }}>
        <strong>Location:</strong> France / United Kingdom
      </Typography>

      {/* About Company */}
      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', marginTop: 4, marginBottom: 2 }}>
        About Pearly Sky Cleaning Services Pvt. Ltd
      </Typography>
      <Typography variant="body1" paragraph sx={{ marginBottom: 4 }}>
      At Pearly Sky cleaning the, we are committed to maintaining clean, safe, and welcoming environments for our 
      clients. Whether it’s homes, offices, or specialized facilities, we deliver excellence with every sweep, mop, 
      and dusting motion. We take pride in being a trusted name in professional cleaning, built on attention to 
      detail and unparalleled customer satisfaction.
      </Typography>
      <Typography variant="body1" paragraph sx={{ marginBottom: 4 }}>
      Joining our team means becoming part of a supportive and innovative organization that values your skills and 
      offers opportunities for personal and professional growth. If you’re a dependable and detail-oriented 
      individual who takes pride in creating spotless spaces, we’d love to have you on board.
      </Typography>

      {/* Job Responsibilities */}
      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D',  marginTop: 4, marginBottom: 2 }}>
        Job Responsibilities
      </Typography>
      <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
      As a cleaner with pearly Sky cleaning services, you will play a key role in ensuring a clean and hygienic 
      environment for our clients. Your key cleaner duties and responsibilities include:      
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
        <Typography sx={{ color: 'black',fontWeight:"bold",  marginTop: 2, marginBottom: 2 }}>Daily Cleaning Tasks:</Typography>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Sweep, mop, vacuum, and dust floors and surfaces to maintain cleanliness and order." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Sanitize and disinfect high-touch areas such as door handles, light switches, and countertops." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Empty trash bins and replace liners promptly." />
        </ListItem>
        <Typography sx={{ color: 'black',fontWeight:"bold",  marginTop: 2, marginBottom: 2 }}>Specialized Cleaning:</Typography>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Perform deep cleaning assignments, including carpet shampooing, upholstery cleaning, and floor waxing." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Use appropriate cleaning chemicals and equipment for specific surfaces, following safety protocols." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Clean and maintain restrooms, ensuring they are fully stocked with essential supplies." />
        </ListItem>
        <Typography sx={{ color: 'black',fontWeight:"bold",  marginTop: 2, marginBottom: 2 }}>Maintenance and Reporting:</Typography>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Operate and maintain cleaning equipment such as vacuums, carpet cleaners, and floor polishers." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Ensure tools are cleaned, stored properly, and in good working condition after each use." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Identify and report any maintenance issues or needed repairs to supervisors." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Replenish cleaning supplies after each shift." />
        </ListItem>
        <Typography sx={{ color: 'black',fontWeight:"bold",  marginTop: 2, marginBottom: 2 }}>Client Interaction:</Typography>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Provide exceptional service by addressing client requests and ensuring satisfaction." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Maintain professionalism and a courteous attitude during interactions with clients." />
        </ListItem>
        <Typography sx={{ color: 'black',fontWeight:"bold",  marginTop: 2, marginBottom: 2 }}>Adherence to Safety Standards:</Typography>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Follow company safety guidelines, including proper handling of cleaning chemicals and wearing personal protective equipment (PPE)." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Maintain awareness of OSHA safety standards and contribute to a zero-incident workplace." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Required Skills, Experience, and Qualifications" />
        </ListItem>
      </List>

      {/* Required Skills, Experience, and Qualifications */}
      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', marginTop: 4, marginBottom: 2 }}>
        Required Skills, Experience, and Qualifications
      </Typography>
      <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
        <strong>Must-have:</strong>
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="High school diploma or equivalent." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Strong attention to detail and commitment to delivering quality results." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Physical ability to perform tasks requiring bending, lifting, and standing for extended periods." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Knowledge of basic cleaning techniques and equipment usage." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Punctuality and reliability to adhere to scheduled shifts." />
        </ListItem>
      </List>
      <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
        <strong>Nice-to-have:</strong>
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Previous experience in professional cleaning or housekeeping roles." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Familiarity with eco-friendly cleaning products or practices." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Multilingual abilities for diverse client communication." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Certification in OSHA safety standards or equivalent training." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Success Criteria" />
        </ListItem>
      </List>

      {/* Success Criteria */}
      <Typography variant="body1" gutterBottom sx={{ color: 'black',  marginTop: 4, marginBottom: 2 ,fontWeight:"bold"}}>
      To be successful in this role, you are expected to:
      </Typography>
      
      <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Achieve a satisfaction rate of 95% or higher based on client feedback." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Consistently complete cleaning tasks within established time frames without compromising quality." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Demonstrate reliability and adaptability during peak scheduling periods." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Uphold all company safety protocols to contribute to a zero-incident workplace." />
        </ListItem>
      </List>

      {/* Compensation */}
      
      <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
        <strong>Hourly Rate:</strong> €11.50 – €15.00 per hour, commensurate with experience and qualifications.
      </Typography>
      <Typography variant="body1" paragraph sx={{ marginBottom: 4 }}>
        <strong>Additional Earnings:</strong> Overtime pay for evening or weekend shifts. Opportunities for bonuses based on performance and client satisfaction.
      </Typography>

     {/* Apply Button */}
      <Button
        variant="contained"
        sx={{ backgroundColor: '#002F6D', color: '#FFF', fontWeight: 'bold', padding: '10px 20px', marginTop: 4,borderRadius:5 }}
        onClick={() => navigate('/jobApplyForm')} 
      >
        Apply for this Job
      </Button>
    </Container>
  );
};

export default CleanersCareerAdvertisementPage;