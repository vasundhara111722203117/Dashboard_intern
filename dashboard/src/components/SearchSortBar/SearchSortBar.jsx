import React, { useState } from 'react';
import {
  Box,
  InputBase,
  IconButton,
  Select,
  MenuItem,
  Paper,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const SearchSortBar = ({ onSearch, onSortChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    if (onSortChange) onSortChange(e.target.value);
  };

  return (
    <Box sx={{ px: 2, py: 1 }}>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        {/* Search Bar */}
        <Paper
          component="form"
          sx={{
            p: '2px 8px',
            display: 'flex',
            alignItems: 'center',
            width: 300,
            borderRadius: 5,
            boxShadow: 'none',
            border: '1px solid #ccc',
          }}
        >
          <IconButton sx={{ p: '5px' }} disabled>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search vehicle..."
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ ml: 1, flex: 1 }}
          />
        </Paper>

        {/* Filter Icon Button */}
        <IconButton
          sx={{
            border: '1px solid #ccc',
            borderRadius: 2,
            p: 1,
            backgroundColor: '#f9f9f9',
            '&:hover': { backgroundColor: '#f0f0f0' },
          }}
        >
          <FilterListIcon />
        </IconButton>

        {/* Sort Dropdown */}
        <Select
          value={sortOption}
          onChange={handleSortChange}
          displayEmpty
          sx={{
            height: 40,
            minWidth: 160,
            borderRadius: 5,
            '.MuiSelect-outlined': { paddingY: '8px' },
          }}
        >
          <MenuItem value="">Sort By</MenuItem>
          <MenuItem value="time">Time</MenuItem>
          <MenuItem value="dock">Dock</MenuItem>
          <MenuItem value="status">Status</MenuItem>
        </Select>
      </Stack>
    </Box>
  );
};

export default SearchSortBar;