// src/components/BedroomCard.js
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel from 'react-material-ui-carousel';

export default function BedroomCard({ room }) {
  return (
    <Accordion sx={{ my: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1">
          {room.name} {room.size ? `(${room.size} m²)` : ''}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Carousel navButtonsAlwaysVisible>
          {room.images.map((img, idx) => (
            <Box
              key={idx}
              component="img"
              src={`/images/${img}`}
              alt={`${room.name} foto ${idx + 1}`}
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
        {room.description && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            {room.description}
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
