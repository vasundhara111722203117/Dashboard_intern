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
              <TableCell padding="checkbox">
                <Checkbox size={isMobile ? 'small' : 'medium'} />
              </TableCell>
              <TableCell>Vehicle Number</TableCell>
              <TableCell>Driver Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Dock In Time</TableCell>
              <TableCell>Dock Out Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell padding="checkbox">
                  <Checkbox size={isMobile ? 'small' : 'medium'} />
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, color: '#1a73e8', fontSize: isMobile ? 12 : 14 }}
                >
                  {row.vehicleNumber}
                </TableCell>
                <TableCell sx={{ fontSize: isMobile ? 12 : 14 }}>{row.driverName}</TableCell>
                <TableCell sx={{ fontSize: isMobile ? 12 : 14 }}>{row.date}</TableCell>
                <TableCell sx={{ fontSize: isMobile ? 12 : 14 }}>{row.dockInTime}</TableCell>
                <TableCell sx={{ fontSize: isMobile ? 12 : 14 }}>
                  {row.dockOutTime || '--:--'}
                </TableCell>
                <TableCell>
                  <Select
                    value={row.status}
                    size="small"
                    sx={{
                      backgroundColor: '#fff',
                      borderRadius: 2,
                      fontSize: isMobile ? 12 : 14,
                      minWidth: isMobile ? 80 : 100,
                    }}
                    disableUnderline
                  >
                    <MenuItem value="Queue">Queue</MenuItem>
                    <MenuItem value="Docked">Docked</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                  </Select>
                </TableCell>
                <TableCell sx={{ fontSize: isMobile ? 12 : 14 }}>{row.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default VehicleTable;
