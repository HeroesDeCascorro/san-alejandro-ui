// src/components/BedroomCard.js
import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ExpandMore } from '@mui/icons-material';

export default function BedroomCard({ room }) {
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader
        title={`${room.name} (${room.size} m²)`}
        action={<IconButton><ExpandMore /></IconButton>}
      />
      <CardContent>
        <Carousel
          navButtonsAlwaysVisible
          indicatorProps={{ style: { marginTop: '8px' } }}
          sx={{ maxWidth: 400, mx: 'auto' }}
        >
          {room.images.map((img, idx) => (
            <Box
              key={idx}
              component="img"
              src={`/images/${img}`}
              alt={`${room.name} foto ${idx + 1}`}
              sx={{ width: '100%', borderRadius: 1 }}
            />
          ))}
        </Carousel>
        {room.description && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            {room.description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
