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
    <Box sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0, sm: 2 } }}>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 1 }}
        flexWrap="wrap"
        justifyContent={{ xs: 'center', sm: 'flex-start' }}
        useFlexGap
      >
        {FILTER_OPTIONS.map((filter) => (
          <Button
            key={filter}
            variant={selected === filter ? 'contained' : 'outlined'}
            onClick={() => handleClick(filter)}
            sx={{
              textTransform: 'none',
              borderRadius: 5,
              minWidth: { xs: 50, sm: 100 },
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
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
