import React from 'react';
import { Stack, IconButton, Typography, Button } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton onClick={handlePrev} disabled={currentPage === 1}>
        <NavigateBeforeIcon />
      </IconButton>

      <Typography variant="body2">
        Page <strong>{currentPage}</strong> of {totalPages}
      </Typography>

      <IconButton onClick={handleNext} disabled={currentPage === totalPages}>
        <NavigateNextIcon />
      </IconButton>
    </Stack>
  );
};

export default Pagination;