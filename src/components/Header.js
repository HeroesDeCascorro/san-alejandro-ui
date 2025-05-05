// components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Apartamentos San Alejandro 8
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/zona">Conoce la zona</Button>
        <Button color="inherit" component={Link} to="/contacto">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}
