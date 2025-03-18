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
      Children Care Worker  Male / Female
      </Typography>

      {/* Job Details */}
      
      <Typography variant="body1" paragraph sx={{ marginBottom: 2 ,color: 'gray'}}>
        <strong>Hours:</strong> Part-Time / Full-Time 
      </Typography>
      <Typography variant="body1" paragraph sx={{ marginBottom: 2,color: 'gray' }}>
        <strong>Location:</strong> France / United Kingdom
      </Typography>
      <Typography variant="body1" paragraph sx={{ marginBottom: 4,color: 'gray' }}>
        <strong>Language Required:</strong> English & French
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
      
      <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary=" Provide personalized care to elderly clients in their homes or care facilities.  " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary=" Assist with daily activities such as bathing, dressing, meal preparation, and medication reminders.    " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary=" Offer companionship and emotional support to seniors.    " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary=" Ensure a safe, clean, and comfortable environment for clients.    " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary=" Communicate effectively with families and healthcare professionals regarding clients’ needs and progress. " />
        </ListItem>
        </List>
        

      {/* Requirements */}
      <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', marginTop: 4, marginBottom: 2 }}>
        Requirements:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Previous experience in elder care or a related field is preferred.   " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Compassion, patience, and a genuine desire to help seniors.  " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Strong communication skills in English and French.  " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Ability to handle emergencies calmly and responsibly.  " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Valid certifications in CPR/First Aid (preferred but not mandatory).  " />
        </ListItem>
      </List>


      {/* Why Join Us? */}
      <Typography variant="body1" gutterBottom sx={{ color: 'black',  marginTop: 4, marginBottom: 2 ,fontWeight:"bold"}}>
      Why Join Us ?
      </Typography>
      
      <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Competitive salary and benefits.  " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Flexible working hours.  " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Opportunity to make a positive impact on families and children.  " />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Supportive and inclusive work environment.  " />
        </ListItem>
      </List>

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