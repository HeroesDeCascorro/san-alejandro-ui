import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';
import ApartmentList from './components/ApartmentList';
import ApartmentDetail from './components/ApartmentDetail';
import Zona from './components/Zona';
import Contacto from './components/Contacto';

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', pb: '80px' }}>
      <Header />
      <Routes>
        <Route path="/" element={<ApartmentList />} />
        <Route path="/apt/:id" element={<ApartmentDetail />} />
        <Route path="/zona" element={<Zona />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Box>
  );
}
