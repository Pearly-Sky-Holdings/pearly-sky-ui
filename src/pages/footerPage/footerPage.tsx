import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { footerImage1, footerImage2, footerImage3, footerImage4 } from '../../config/images.ts';

const countries = [
    { name: 'Sri Lanka', flag: '🇱🇰' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Finland', flag: '🇫🇮' },
];

const Footer = () => {
    return (
        <Box
            sx={{
                color: 'white',
                py: { xs: 4, md: 6 },
                backgroundImage: 'linear-gradient(to bottom, #002F6D, #0D90C8)',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr 1fr 1fr' },
                        gap: { xs: 3, md: 4, lg: 16 },
                    }}
                >
                    {/* Company Info */}
                    <Box>
                        <img
                            src={footerImage1}
                            alt="Pearly Sky"
                            style={{
                                width: '100%',
                                maxWidth: '200px',
                                marginBottom: '1.5rem'
                            }}
                        />
                        <Typography variant="body2" align="justify" sx={{ mb: 3, lineHeight: 1.6 }}>
                            Pearly Sky Cleaning offers professional, eco-friendly cleaning services
                            for homes, offices, and hotels across France. We focus on quality and
                            customer satisfaction, delivering tailored solutions to keep your space
                            spotless.
                        </Typography>
                    </Box>

                    {/* Home */}
                    <Box>
                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
                            Home
                        </Typography>
                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        cursor: 'pointer',
                                        '&:hover': { opacity: 0.8 }
                                    }}
                                >
                                    Services
                                </Typography>
                                <KeyboardArrowDownIcon sx={{ ml: 0.5 }} />
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': { opacity: 0.8 }
                                }}
                            >
                                Company
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': { opacity: 0.8 }
                                }}
                            >
                                Contact Us
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': { opacity: 0.8 }
                                }}
                            >
                                Careers
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        cursor: 'pointer',
                                        '&:hover': { opacity: 0.8 }
                                    }}
                                >
                                    Other Services
                                </Typography>
                                <KeyboardArrowDownIcon sx={{ ml: 0.5 }} />
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': { opacity: 0.8 }
                                }}
                            >
                                Our Location
                            </Typography>
                        </Stack>
                    </Box>

                    {/* QR Code and Social Media */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Stack direction="row" spacing={1}>
                            <IconButton
                                color="inherit"
                                size="small"
                                sx={{
                                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
                                    width: { xs: 30, md: 35 },
                                    height: { xs: 30, md: 35 },
                                }}
                            >
                                <FacebookIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                size="small"
                                sx={{
                                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
                                    width: { xs: 30, md: 35 },
                                    height: { xs: 30, md: 35 },
                                }}
                            >
                                <InstagramIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                size="small"
                                sx={{
                                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
                                    width: { xs: 30, md: 35 },
                                    height: { xs: 30, md: 35 },
                                }}
                            >
                                <TwitterIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                size="small"
                                sx={{
                                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
                                    width: { xs: 30, md: 35 },
                                    height: { xs: 30, md: 35 },
                                }}
                            >
                                <YouTubeIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                size="small"
                                sx={{
                                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
                                    width: { xs: 30, md: 35 },
                                    height: { xs: 30, md: 35 },
                                }}
                            >
                                <GitHubIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
                            </IconButton>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <Box>
                                <img
                                    src={footerImage3}
                                    alt="Google Play"
                                    style={{ height: '40px' }}
                                />
                            </Box>
                            <Box>
                                <img
                                    src={footerImage4}
                                    alt="App Store"
                                    style={{ height: '40px' }}
                                />
                            </Box>
                        </Stack>

                        <Typography variant="body2" sx={{ mb: 3, textAlign: 'left' }}>
                            Scan the QR code or visit us at iOS App Store or Google Play Store
                        </Typography>
                    </Box>

                    {/* QR Code */}
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <img
                            src={footerImage2}
                            alt="QR Code"
                            style={{ width: '150px', height: '150px' }}
                        />
                    </Box>
                </Box>

                {/* Countries Scroll Section */}
                <Box
                    sx={{
                        mt: 6,
                        pt: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 6,
                            overflowX: 'auto',
                            pb: 2,
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                        }}
                    >
                        {countries.map((country) => (
                            <Box
                                key={country.name}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minWidth: '100px',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h4" sx={{ mb: 1 }}>
                                    {country.flag}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'white' }}>
                                    {country.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Copyright */}
                <Typography
                    variant="body2"
                    sx={{
                        mt: 4,
                        pt: 4,
                        borderTop: '2px solid rgba(255, 255, 255, 0.7)',
                        textAlign: 'center',
                        color: 'white',
                        textTransform: 'none',
                    }}
                >
                    Copyright © 2024 pearly sky company pvt ltd. All rights reserved
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;