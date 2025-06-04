import React from 'react';
import { Box } from '@mui/material';
import DockCard from './DockCard';

const dockStatusData = [
  { id: 'D1', status: 'Available' },
  { id: 'D2', status: 'Available' },
  { id: 'D3', status: 'Available' },
  { id: 'D4', status: 'Available' },
  { id: 'D5', status: 'Warning' },    // Yellow
  { id: 'D6', status: 'Warning' },    // Yellow
  { id: 'D7', status: 'Warning' },
  { id: 'D8', status: 'Available' },
  { id: 'D9', status: 'Available' },
  { id: 'D10', status: 'Busy' },
  { id: 'D11', status: 'Busy' },
  { id: 'D12', status: 'Busy' },
  { id: 'D13', status: 'Available' },
  { id: 'D14', status: 'Available' },
];

const DockStatusPanel = () => {
  return (
    <Box
      sx={{
        overflowX: 'auto',
        py: {xs:2, sm: 3, md : 4},
        px: {xs: 1, sm: 2},
        display: 'flex',
        gap: {xs: 1,sm: 2},
        whiteSpace: 'nowrap',
        scrollbarWidth:'none', //Firefox
        '&::-webkit-scrollbar':{display: 'none'}, // Chrome/safari
      }}
    >
      {dockStatusData.map((dock) => (
        <DockCard key={dock.id} dockId={dock.id} status={dock.status} />
      ))}
    </Box>
  );
};

export default DockStatusPanel;