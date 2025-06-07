import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';

const VehicleTable = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cellStyle = {
    border: '1px solid #ccc',
    fontSize: isMobile ? 12 : 14,
    padding: isMobile ? '6px 8px' : '8px 12px',
  };

  // Style for MenuItem to remove blue highlight
  const menuItemStyles = {
    '&.Mui-selected': {
      backgroundColor: '#fff', // No blue background on select
      color: 'solid black',
    },
    '&.Mui-selected:hover': {
      backgroundColor: '#eee', // Light gray on hover
    },
    '&:hover': {
      backgroundColor: '#eee', // Light gray on normal hover
    },
  };

  return (
    <Box sx={{ overflowX: 'auto' }}>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          boxShadow: 'none',
          minWidth: isMobile ? 600 : '100%',
        }}
      >
        <Table size={isMobile ? 'small' : 'medium'}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell padding="checkbox" sx={cellStyle}>
                <Checkbox size={isMobile ? 'small' : 'medium'} />
              </TableCell>
              <TableCell sx={cellStyle}>Vehicle Number</TableCell>
              <TableCell sx={cellStyle}>Driver Name</TableCell>
              <TableCell sx={cellStyle}>Date</TableCell>
              <TableCell sx={cellStyle}>Dock In Time</TableCell>
              <TableCell sx={cellStyle}>Dock Out Time</TableCell>
              <TableCell sx={cellStyle}>Status</TableCell>
              <TableCell sx={cellStyle}>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              const selectStyles = {
                backgroundColor: '#fff',
                color: 'black',
                borderRadius: 2,
                fontSize: isMobile ? 12 : 14,
                minWidth: isMobile ? 80 : 100,
                border: '1.5px solid black',
                '&.Mui-focused': {
                  borderColor: 'black',
                  backgroundColor: '#fff',
                },
                '&.MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
              };

              return (
                <TableRow key={index} hover>
                  <TableCell padding="checkbox" sx={cellStyle}>
                    <Checkbox size={isMobile ? 'small' : 'medium'} />
                  </TableCell>
                  <TableCell
                    sx={{
                      ...cellStyle,
                      fontWeight: 600,
                      color: 'black',
                    }}
                  >
                    {row.vehicleNumber}
                  </TableCell>
                  <TableCell sx={cellStyle}>{row.driverName}</TableCell>
                  <TableCell sx={cellStyle}>{row.date}</TableCell>
                  <TableCell sx={cellStyle}>{row.dockInTime}</TableCell>
                  <TableCell sx={cellStyle}>{row.dockOutTime || '--:--'}</TableCell>
                  <TableCell sx={cellStyle}>
                    <Select
                      value={row.status}
                      size="small"
                      sx={selectStyles}
                      disableUnderline
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            border: '1px  black',
                          },
                        },
                      }}
                    >
                      <MenuItem value="Queue" sx={menuItemStyles}>Queue</MenuItem>
                      <MenuItem value="Docked" sx={menuItemStyles}>Docked</MenuItem>
                      <MenuItem value="Completed" sx={menuItemStyles}>Completed</MenuItem>
                      <MenuItem value="Cancelled" sx={menuItemStyles}>Cancelled</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell sx={cellStyle}>{row.duration}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default VehicleTable;
