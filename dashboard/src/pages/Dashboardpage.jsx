import React, { useState, useEffect } from 'react';
import { Box, Paper, Divider,useMediaQuery, useTheme } from '@mui/material';

import Header from '../components/Header/Header';
import DockStatusPanel from '../components/DockStatus/DockStatusPanel';
import FilterBar from '../components/FilterBar/FilterBar';
import SearchSortBar from '../components/SearchSortBar/SearchSortBar';
import VehicleTable from '../components/DataTable/VehicleTable';
import Pagination from '../components/Pagination/Pagination';
import RecordSelector from '../components/RecordSelector/RecordSelector';

import mockDockData from '../data/mockDockData';

const DashboardPage = () => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filter, setFilter] = useState('All');

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  // 🔧 Helper to parse dockInTime
  const parseTime = (timeStr) => {
    if (!timeStr) return new Date(0);
    const [hours, minutes] = timeStr.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    return date;
  };

  // Filter data
  const filteredData = mockDockData.filter((item) => {
    const matchesSearch = item.vehicleNumber.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'time') {
      return parseTime(a.dockInTime) - parseTime(b.dockInTime);
    }
    if (sortBy === 'dock') {
      return a.dockId?.localeCompare(b.dockId) ?? 0;
    }
    if (sortBy === 'status') {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const paginatedData = sortedData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  // Reset to page 1 when filters/search change
  useEffect(() => {
    setPage(1);
  }, [search, filter, rowsPerPage]);

  return (
    <Box sx={{ ps: {xs: 1, sm: 2}, py:{xs: 1,sm: 2} }}>
      <Header />
      <DockStatusPanel />
      <FilterBar onFilterChange={setFilter} />
      <SearchSortBar onSearch={setSearch} onSortChange={setSortBy} />

      <Paper sx={{ mx: 'auto', mt: 2, p:{xs : 1,sm: 2},
    width: '100%', overflow:'auto', }}>
        <VehicleTable data={paginatedData} />

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            
            flexDirection: {xs: 'column',sm:'row'},
            gap: 2,
          }}
        >
          <RecordSelector rowsPerPage={rowsPerPage} onRowsPerPageChange={setRowsPerPage} />
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </Box>
      </Paper>
    </Box>
  );
};

export default DashboardPage;