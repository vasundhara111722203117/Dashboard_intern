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
    <Box sx={{ px: 1, py: 1 }}>
      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
        {/* Search Bar */}
        <Paper
          component="form"
          sx={{
            p: '3px 6px',
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
            borderRadius: 3,
            p: 0,
            backgroundColor: '#FFF0F5',
            '&:hover': { backgroundColor: '#AFEEEE' },
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
            height: 30,
            minWidth: 50,
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