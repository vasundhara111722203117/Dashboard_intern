import React from 'react';
import { Box, Stack } from '@mui/material';
import DockCard from './DockCard';

const dockStatusData = [
  { id: 'D1', status: 'Available' },
  { id: 'D2', status: 'Available' },
  { id: 'D3', status: 'Available' },
  { id: 'D4', status: 'Available' },
  { id: 'D5', status: 'Warning' },    // Yellow
  { id: 'D6', status: 'Warning' },    // Yellow
  { id: 'D7', status: 'Available' },
  { id: 'D8', status: 'Available' },
  { id: 'D9', status: 'Available' },
  { id: 'D10', status: 'Busy' },
  { id: 'D11', status: 'Busy' },
  { id: 'D12', status: 'Busy' },
  { id: 'D13', status: 'Busy' },
  { id: 'D14', status: 'Available' },
];

const DockStatusPanel = () => {
  return (
    <Box
      sx={{
        overflowX: 'auto',
        py: 5,
        px: 2,
        display: 'flex',
        gap: 1,
        whiteSpace: 'nowrap',
      }}
    >
      {dockStatusData.map((dock) => (
        <DockCard key={dock.id} dockId={dock.id} status={dock.status} />
      ))}
    </Box>
  );
};

export default DockStatusPanel;