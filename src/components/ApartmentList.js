// components/ApartmentList.js
import React from 'react';
import apartments from '../data/apartments.js';
import ApartmentCard from './ApartmentCard';
import { Grid, Container, Typography } from '@mui/material';

export default function ApartmentList() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Apartamentos disponibles
      </Typography>
      <Grid container spacing={4}>
        {apartments.map((apt) => (
          <Grid item key={apt.id} xs={12} sm={6} md={4}>
            <ApartmentCard apt={apt} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
