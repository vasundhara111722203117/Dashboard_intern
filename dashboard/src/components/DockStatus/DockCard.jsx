import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const DockCard = ({ dockId, status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Available':
        return '#C8FAD0'; // light green
      case 'Busy':
        return '#FAD0D0'; // light red
      case 'Warning':
        return '#FFF3CD'; // warning/yellow (e.g., for D5/D6 in image)
      default:
        return '#E0E0E0';
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: getStatusColor(),
        width: 100,
        height: 60,
        borderRadius: 2,
        boxShadow: 'none',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography variant="subtitle2" fontWeight={600}>
          {dockId}
        </Typography>
        <Typography variant="caption">{status}</Typography>
      </CardContent>
    </Card>
  );
};

export default DockCard;