import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Tabs,
  Tab,
  Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const [value, setValue] = React.useState(1); // 0: Dashboard, 1: Docks, 2: Report

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left Side */}
        <Stack direction="row" alignItems="center" spacing={3}>
          <img
            src={process.env.PUBLIC_URL + './'} // Replace with your logo
            alt="Dock Logo"
            style={{ width: 40 }}
          />
          <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary">
            <Tab label="Dashboard" />
            <Tab label="Docks" />
            <Tab label="Report" />
          </Tabs>
        </Stack>

        {/* Right Side */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: '#f44336',
              '&:hover': { backgroundColor: '#d32f2f' },
              textTransform: 'none',
              mr: 2,
            }}
          >
            Add
          </Button>

          <Button startIcon={<ReportProblemIcon />} sx={{ textTransform: 'none' }}>
            Report an issue
          </Button>

          <Button startIcon={<CloudDownloadIcon />} sx={{ textTransform: 'none' }}>
            Download App
          </Button>

          <IconButton
            sx={{
              backgroundColor: '#f44336',
              color: 'white',
              '&:hover': { backgroundColor: '#d32f2f' },
              ml: 1,
            }}
          >
            <QrCodeScannerIcon />
          </IconButton>

          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <IconButton>
            <SettingsIcon />
          </IconButton>

          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;