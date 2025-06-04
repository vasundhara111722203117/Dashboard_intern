import React from 'react';
import { Typography, Select, MenuItem, Stack, useMediaQuery, useTheme } from '@mui/material';

const RecordSelector = ({ rowsPerPage, onRowsPerPageChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      alignItems="center"
      spacing={isMobile ? 0.5 : 1}
      textAlign={isMobile ? 'center' : 'left'}
    >
      <Typography variant="body2" fontSize={isMobile ? '0.8rem' : '1rem'}>
        Rows per page:
      </Typography>
      <Select
        value={rowsPerPage}
        onChange={(e) => onRowsPerPageChange(e.target.value)}
        size="small"
        sx={{
          minWidth: 80,
          fontSize: isMobile ? 13 : 14,
          mx: isMobile ? 'auto' : 0,
        }}
      >
        {[5, 10, 25, 50].map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default RecordSelector;
