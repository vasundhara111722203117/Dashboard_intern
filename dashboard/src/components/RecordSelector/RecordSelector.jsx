import React from 'react';
import { Box, Typography, Select, MenuItem, Stack } from '@mui/material';

const RecordSelector = ({ rowsPerPage, onRowsPerPageChange }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography variant="body2">Rows per page:</Typography>
      <Select
        value={rowsPerPage}
        onChange={(e) => onRowsPerPageChange(e.target.value)}
        size="small"
        sx={{ minWidth: 80, fontSize: 14 }}
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