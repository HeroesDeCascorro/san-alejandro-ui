// src/components/ApartmentDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import apartments from '../data/apartments';
import {
  Container,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import BedroomCard from './BedroomCard';
import MapSection from './MapSection';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function ApartmentDetail() {
  const { id } = useParams();
  const apt = apartments.find(a => a.id === +id);
  if (!apt) return <Typography>Apartamento no encontrado.</Typography>;

  return (
    <Container sx={{ pt: 4, pb: 10 }}>
      <Typography variant="h4" gutterBottom>
        Apartamento {apt.id}: {apt.bedrooms || apt.rooms.length} hab.
      </Typography>
      <Typography variant="body1" gutterBottom>
        {apt.description}
      </Typography>

      {/* Salón y baño sótano */}
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Salón</Typography>
          {apt.publicAreas.salon.map((img,i) => (
            <Box
              key={i}
              component="img"
              src={`/images/${img}`}
              alt={`Salon ${i+1}`}
              sx={{ width: '100%', mb: 1, borderRadius: 1 }}
            />
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Baño sótano</Typography>
          {apt.publicAreas.bathBasement.map((img,i) => (
            <Box
              key={i}
              component="img"
              src={`/images/${img}`}
              alt={`Baño sótano ${i+1}`}
              sx={{ width: '100%', mb: 1, borderRadius: 1 }}
            />
          ))}
        </Grid>
      </Grid>

      {/* Cards de habitaciones */}
      {apt.rooms.map(room => (
        <BedroomCard key={room.name} room={room} />
      ))}

      {/* Calendario de disponibilidad */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Calendario de disponibilidad
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={new Date()}
            onChange={() => {}}
            renderInput={() => null}
          />
        </LocalizationProvider>
      </Box>

      <MapSection />
    </Container>
  );
}
