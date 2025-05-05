// src/components/ApartmentCard.js
import React from 'react';
import {
  Card, CardContent, CardMedia, Typography, Button, CardActions
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function ApartmentCard({ apt }) {
  // Elige la primera imagen disponible:
  const thumbnail =
    // si existe publicAreas.salon, toma la primera
    apt.publicAreas?.salon?.[0]
    // si no, coge la primera habitación y su primera imagen
    || apt.rooms?.[0]?.images?.[0]
    // o cadena vacía para evitar crash
    || '';

  return (
    <Card sx={{ maxWidth: 345 }}>
      {thumbnail && (
        <CardMedia
          component="img"
          height="180"
          image={`/images/${thumbnail}`}
          alt={`Apartamento ${apt.id}`}
        />
      )}
      <CardContent>
        <Typography variant="h6">
          {/* número de habitaciones */}
          {apt.rooms.length} hab. • { /* bathrooms: si es dúplex imaginamos 1 en sótano + nº de baños? */}
          {apt.type === 'dúplex'
            ? `${apt.rooms.length + 1} baños`
            : `${apt.rooms.length} baño`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {apt.description}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>€{apt.pricePerRoom}/habitación</strong> (incluye {apt.includes.join(', ')})
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/apt/${apt.id}`}>
          Ver detalles
        </Button>
      </CardActions>
    </Card>
  );
}
