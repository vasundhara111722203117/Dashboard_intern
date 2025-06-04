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
        return '#FFF3CD'; // light yellow
      default:
        return '#E0E0E0';
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: getStatusColor(),
        minWidth: { xs: 80, sm: 100 }, // responsive min width
        height: { xs: 60, sm: 70 },
        borderRadius: 2,
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 1,
      }}
    >
      <CardContent sx={{ p: '8px 4px !important' }}>
        <Typography variant="subtitle2" fontWeight={600} fontSize={{ xs: 12, sm: 14 }}>
          {dockId}
        </Typography>
        <Typography variant="caption" fontSize={{ xs: 10, sm: 12 }}>
          {status}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DockCard;
