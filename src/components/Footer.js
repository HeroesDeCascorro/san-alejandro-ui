// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f5f5f5',
        p: 2,
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
        zIndex: 1000,
      }}
    >
      <Typography align="center" variant="body2">
        © {new Date().getFullYear()} Apartamentos San Alejandro 8 – Madrid
      </Typography>
    </Box>
  );
}
