// components/Zona.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function Zona() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Conoce la zona</Typography>
      <Typography>
        Calle San Alejandro 8 está situada en el distrito de Carabanchel, Madrid.
        Una zona residencial tranquila, a solo 10 minutos del centro en metro o bus,
        muy cerca de Madrid Río, el parque de Arganzuela y Matadero Madrid.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <iframe
          title="Mapa San Alejandro 8"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8198940411663!2d-3.7188015!3d40.3906044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262c7982753f%3A0x334c723361dfc2f3!2sCalle%20San%20Alejandro%2C%208%2C%2028044%20Madrid!5e0!3m2!1ses!2ses!4v1714900000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Container>
  );
}
