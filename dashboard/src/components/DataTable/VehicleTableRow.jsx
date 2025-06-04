import React from 'react';
import {
  TableRow,
  TableCell,
  Checkbox,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TableRow hover>
      <TableCell padding="checkbox">
        <Checkbox size={isMobile ? 'small' : 'medium'} />
      </TableCell>

      <TableCell
        sx={{
          fontWeight: 600,
          color: '#1a73e8',
          fontSize: isMobile ? 12 : 14,
        }}
      >
        {vehicleNumber}
      </TableCell>

      <TableCell sx={{ fontSize: isMobile ? 12 : 14 }}>{driverName}</TableCell>
      <TableCell sx={{ fontSize: isMobile ? 12 : 14 }}>{date}</TableCell>
      <TableCell sx={{ fontSize: isMobile ? 12 : 14 }}>{dockInTime}</TableCell>
      <TableCell sx={{ fontSize: isMobile ? 12 : 14 }}>
        {dockOutTime || '--:--'}
      </TableCell>

      <TableCell>
        <Select
          value={status}
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

      <TableCell sx={{ fontSize: isMobile ? 12 : 14 }}>{duration}</TableCell>
    </TableRow>
  );
};

export default VehicleTableRow;
