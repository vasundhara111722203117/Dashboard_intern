import React from 'react';
import {
  TableRow,
  TableCell,
  Checkbox,
  Select,
  MenuItem,
} from '@mui/material';

const VehicleTableRow = ({ rowData }) => {
  const {
    vehicleNumber,
    driverName,
    date,
    dockInTime,
    dockOutTime,
    status,
    duration,
  } = rowData;

  return (
    <TableRow hover>
      <TableCell padding="checkbox">
        <Checkbox />
      </TableCell>
      <TableCell sx={{ fontWeight: 600, color: '#1a73e8' }}>
        {vehicleNumber}
      </TableCell>
      <TableCell>{driverName}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{dockInTime}</TableCell>
      <TableCell>{dockOutTime || '--:--'}</TableCell>
      <TableCell>
        <Select
          value={status}
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
      <TableCell>{duration}</TableCell>
    </TableRow>
  );
};

export default VehicleTableRow;