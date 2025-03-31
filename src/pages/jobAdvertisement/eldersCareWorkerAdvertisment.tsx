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
                {translate('elderCareJobTitle')}
            </Typography>

            {/* Job Details */}
            <Typography variant="body1" paragraph sx={{ marginBottom: 2, color: 'gray' }}>
                <strong>{translate('hoursLabel')}:</strong> {translate('fullPartTime')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 2, color: 'gray' }}>
                <strong>{translate('locationLabel')}:</strong> {translate('france')} / {translate('unitedKingdom')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 4, color: 'gray' }}>
                <strong>{translate('languageRequired')}:</strong> {translate('englishFrench')}
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
            <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('elderCareResponsibility1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('elderCareResponsibility2')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('elderCareResponsibility3')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('elderCareResponsibility4')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('elderCareResponsibility5')} />
                </ListItem>
            </List>

            {/* Requirements */}
            <Typography variant="h6" gutterBottom sx={{ color: '#002F6D', marginTop: 4, marginBottom: 2 }}>
                {translate('requirementsTitle')}:
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('elderCareRequirement1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('elderCareRequirement2')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('elderCareRequirement3')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('elderCareRequirement4')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('elderCareRequirement5')} />
                </ListItem>
            </List>

            {/* Why Join Us? */}
            <Typography variant="body1" gutterBottom sx={{ color: 'black', marginTop: 4, marginBottom: 2, fontWeight: "bold" }}>
                {translate('whyJoinUsTitle')}
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 4, marginBottom: 4 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('benefit1')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('benefit2')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('benefit3')} />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary={translate('benefit4')} />
                </ListItem>
            </List>

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