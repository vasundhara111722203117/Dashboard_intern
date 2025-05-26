import React, { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';

const FILTER_OPTIONS = [
  'All',
  'Queue',
  'Dock In',
  'Dock Out',
  'Waiting',
  'Completed',
  'Cancelled',
];

const FilterBar = ({ onFilterChange }) => {
  const [selected, setSelected] = useState('All');

  const handleClick = (filter) => {
    setSelected(filter);
    if (onFilterChange) onFilterChange(filter);
  };

  return (
    <Box sx={{ px: 2, py: 1 }}>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {FILTER_OPTIONS.map((filter) => (
          <Button
            key={filter}
            variant={selected === filter ? 'contained' : 'outlined'}
            onClick={() => handleClick(filter)}
            sx={{
              textTransform: 'none',
              borderRadius: 5,
              minWidth: '90px',
              fontWeight: 500,
              color: selected === filter ? 'white' : 'text.primary',
              backgroundColor: selected === filter ? '#f44336' : 'transparent',
              borderColor: selected === filter ? '#f44336' : 'grey.400',
              '&:hover': {
                backgroundColor: selected === filter ? '#d32f2f' : 'rgba(0,0,0,0.04)',
              },
            }}
          >
            {filter}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default FilterBar;