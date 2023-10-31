import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '120px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#7752fe" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" color="white">
      Sweat, Smile  And<br />
       Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Poppins" lineHeight="35px" color="white">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '300px', textAlign: 'center', background: '#7752fe', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '10px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#84a3ff" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '180px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
