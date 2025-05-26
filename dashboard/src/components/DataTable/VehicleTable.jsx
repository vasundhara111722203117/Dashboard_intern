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
} from '@mui/material';

const VehicleTable = ({ data }) => {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 'none' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell padding="checkbox">
              <Checkbox />
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
                <Checkbox />
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: '#1a73e8' }}>
                {row.vehicleNumber}
              </TableCell>
              <TableCell>{row.driverName}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.dockInTime}</TableCell>
              <TableCell>{row.dockOutTime || '--:--'}</TableCell>
              <TableCell>
                <Select
                  value={row.status}
                  size="small"
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    fontSize: 14,
                    minWidth: 100,
                  }}
                  disableUnderline
                >
                  <MenuItem value="Queue">Queue</MenuItem>
                  <MenuItem value="Docked">Docked</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>
              </TableCell>
              <TableCell>{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VehicleTable;