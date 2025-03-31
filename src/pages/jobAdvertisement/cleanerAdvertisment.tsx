import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, List, ListItem, ListItemText, Link } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';

const CleanersCareerAdvertisementPage: React.FC = () => {
    const navigate = useNavigate();
    const { translate } = useLanguage();

    return (
        <Container sx={{ padding: { xs: 2, sm: 4 }, textAlign: 'left', color: "black" }}>
            {/* Back Arrow to Career Page */}
            <Link href="/career" sx={{ display: 'flex', alignItems: 'center', color: 'gray', textDecoration: 'none', marginBottom: 4 }}>
                ← {translate('careersPage')}
            </Link>

            {/* Job Title */}
            <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', fontWeight: 'bold', marginBottom: 4 }}>
                {translate('cleanerJobTitle')}
            </Typography>

            {/* Job Details */}
            <Typography variant="body1" gutterBottom sx={{ color: 'gray', marginTop: 4, marginBottom: 2 }}>
                <strong>{translate('seniorityLabel')}:</strong> {translate('entryToExperienced')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 2, color: 'gray' }}>
                <strong>{translate('hoursLabel')}:</strong> {translate('fullPartTimeFlexible')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 4, color: 'gray' }}>
                <strong>{translate('locationLabel')}:</strong> {translate('france')} / {translate('unitedKingdom')}
            </Typography>

            {/* About Company */}
            <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', marginTop: 4, marginBottom: 2 }}>
                {translate('aboutCompanyTitle')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 4 }}>
                {translate('aboutCompanyPara1')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 4 }}>
                {translate('aboutCompanyPara2')}
            </Typography>

            {/* Job Responsibilities */}
            <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', marginTop: 4, marginBottom: 2 }}>
                {translate('jobResponsibilitiesTitle')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
                {translate('jobResponsibilitiesIntro')}
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
                <Typography sx={{ color: 'black', fontWeight: "bold", marginTop: 2, marginBottom: 2 }}>{translate('dailyCleaningTasks')}:</Typography>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('cleaningTask1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('cleaningTask2')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('cleaningTask3')} />
                </ListItem>
                
                <Typography sx={{ color: 'black', fontWeight: "bold", marginTop: 2, marginBottom: 2 }}>{translate('specializedCleaning')}:</Typography>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('specializedTask1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('specializedTask2')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('specializedTask3')} />
                </ListItem>
                
                <Typography sx={{ color: 'black', fontWeight: "bold", marginTop: 2, marginBottom: 2 }}>{translate('maintenanceReporting')}:</Typography>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('maintenanceTask1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('maintenanceTask2')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('maintenanceTask3')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('maintenanceTask4')} />
                </ListItem>
                
                <Typography sx={{ color: 'black', fontWeight: "bold", marginTop: 2, marginBottom: 2 }}>{translate('clientInteraction')}:</Typography>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('clientTask1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('clientTask2')} />
                </ListItem>
                
                <Typography sx={{ color: 'black', fontWeight: "bold", marginTop: 2, marginBottom: 2 }}>{translate('safetyStandards')}:</Typography>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('safetyTask1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('safetyTask2')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('requiredSkillsTitle')} />
                </ListItem>
            </List>

            {/* Required Skills, Experience, and Qualifications */}
            <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', marginTop: 4, marginBottom: 2 }}>
                {translate('requiredSkillsTitle')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
                <strong>{translate('mustHave')}:</strong>
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('requirement1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('requirement2')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('requirement3')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('requirement4')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('requirement5')} />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
                <strong>{translate('niceToHave')}:</strong>
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('preferred1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('preferred2')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('preferred3')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('preferred4')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('successCriteriaTitle')} />
                </ListItem>
            </List>

            {/* Success Criteria */}
            <Typography variant="body1" gutterBottom sx={{ color: 'black', marginTop: 4, marginBottom: 2, fontWeight: "bold" }}>
                {translate('successCriteriaIntro')}
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('success1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('success2')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('success3')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('success4')} />
                </ListItem>
            </List>

            {/* Compensation */}
            <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
                <strong>{translate('hourlyRate')}:</strong> {translate('compensationRange')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 4 }}>
                <strong>{translate('additionalEarnings')}:</strong> {translate('bonusOpportunities')}
            </Typography>

            {/* Apply Button */}
            <Button
                variant="contained"
                sx={{ backgroundColor: '#002F6D', color: '#FFF', fontWeight: 'bold', padding: '10px 20px', marginTop: 4, borderRadius: 5 }}
                onClick={() => navigate('/jobApplyForm')}
            >
                {translate('applyForJob')}
            </Button>
        </Container>
    );
};

export default CleanersCareerAdvertisementPage;