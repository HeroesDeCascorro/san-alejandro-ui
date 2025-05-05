// components/Contacto.js
import React, { useState } from 'react';
import {
  Container, Typography, TextField, Button, Box, Alert
} from '@mui/material';

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar con Formspree, EmailJS, etc.
    setSent(true);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Contacto para Agencias</Typography>
      <Typography sx={{ mb: 2 }}>
        Si gestionas estancias de estudiantes y estás interesado en nuestros apartamentos, escríbenos.
      </Typography>
      {sent && <Alert severity="success">Gracias por tu mensaje. Te contactaremos pronto.</Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField fullWidth label="Nombre de la agencia" required sx={{ mb: 2 }} />
        <TextField fullWidth label="Correo electrónico" type="email" required sx={{ mb: 2 }} />
        <TextField fullWidth label="Mensaje" multiline rows={4} required sx={{ mb: 2 }} />
        <Button variant="contained" color="primary" type="submit">Enviar</Button>
      </Box>
    </Container>
  );
}
