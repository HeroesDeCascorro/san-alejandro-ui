// src/components/ApartmentDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import apartments from '../data/apartments';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import BedroomCard from './BedroomCard';
import MapSection from './MapSection';

export default function ApartmentDetail() {
  const { id } = useParams();
  const apt = apartments.find(a => a.id === +id);
  if (!apt) return <Typography>Apartamento no encontrado.</Typography>;

  return (
    <Container sx={{ pt: 4, pb: 10 }}>
      <Typography variant="h4" gutterBottom>
        Apartamento {apt.id}: {apt.rooms.length} hab.
      </Typography>
      <Typography variant="body1" gutterBottom>
        {apt.description}
      </Typography>

      {/* Carousel Salón */}
      <Box sx={{ my: 2 }}>
        <Typography variant="h6" gutterBottom>Salón</Typography>
        <Carousel navButtonsAlwaysVisible>
          {apt.publicAreas.salon.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={`/images/${img}`}
              alt={`Salón ${i + 1}`}
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'contain',
                backgroundColor: '#000',
                borderRadius: 1,
              }}
            />
          ))}
        </Carousel>
      </Box>

      {/* Carousel Baño sótano */}
      <Box sx={{ my: 2 }}>
        <Typography variant="h6" gutterBottom>Baño compartido</Typography>
        <Carousel navButtonsAlwaysVisible>
          {apt.publicAreas.bathBasement.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={`/images/${img}`}
              alt={`Baño compartido ${i + 1}`}
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'contain',
                backgroundColor: '#000',
                borderRadius: 1,
              }}
            />
          ))}
        </Carousel>
      </Box>

      {/* Habitaciones desplegables */}
      {apt.rooms.map(room => (
        <BedroomCard key={room.name} room={room} />
      ))}

      <MapSection />
    </Container>
  );
}
