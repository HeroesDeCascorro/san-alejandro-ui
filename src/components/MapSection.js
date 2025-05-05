// components/MapSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function MapSection() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Ubicación</Typography>
      <iframe
        title="Mapa San Alejandro 8"
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <Typography sx={{ mt: 2 }}>
        Ubicados cerca del centro de Madrid, a pasos de Madrid Río, zonas verdes y bien conectados por metro y bus.
      </Typography>
    </Box>
  );
}
