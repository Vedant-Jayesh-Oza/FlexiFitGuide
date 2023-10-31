import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import { Link } from 'react-router-dom';


const Footer = () => (
  <Box mt="80px" colour="#454545">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" py="30px" pt="24px " fontSize="24px" >
    <Link to="/" style={{ textDecoration: 'none', color: 'white' }} >
      FlexiFitGuide
    </Link>
    </Stack>
  </Box>
);

export default Footer;
