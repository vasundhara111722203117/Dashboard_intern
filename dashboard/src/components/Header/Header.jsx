import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
  Box,
  Menu,
  MenuItem,
  Tabs,
  Tab,
} from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [iconAnchor, setIconAnchor] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const openIconMenu = (e) => setIconAnchor(e.currentTarget);
  const closeIconMenu = () => setIconAnchor(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 1, sm: 3 },
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'right' }}>
          <Box display="flex" alignItems="center" gap={3}>
            <img
              src={process.env.PUBLIC_URL + './dock.png'}
              alt="Dock Logo"
              style={{ width: 180 }}
            />
            
          </Box>
        </Box>

        {/* Center Section */}
        <Box sx={{ flex: 3, display: 'flex', justifyContent: 'left' }}>
          {!isMobile && (
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#f44336',
                },
                '& .MuiTab-root':{
                  color: '#000',
                },
                '& .MuiTab-root.Mui-selected': {
                  color: '#f44336',
                },
              }}
            >
              
              <Tab label="Dashboard" />
              <Tab label="Docks" />
              <Tab label="Report" />
            </Tabs>
            
          )}
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {isMobile ? (
            <IconButton onClick={openIconMenu}>
              <MoreVertIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={1} alignItems="left">
              {/* +Add Button */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f44336',
                  color: 'white',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#d32f2f' },
                }}
              >
                +Add
              </Button>

              {/* Report Button with Icon */}
              <Button
                variant="outlined"
                startIcon={<ReportProblemIcon />}
                sx={{
                  textTransform: 'none',
                  borderColor: '#000',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                    borderColor: '#000',
                  },
                }}
              >
                Report
              </Button>

              {/* Download Button with Icon */}
              <Button
                variant="outlined"
                startIcon={<CloudDownloadIcon />}
                sx={{
                  textTransform: 'none',
                  borderColor: '#000',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                    borderColor: '#000',
                  },
                }}
              >
                Download
              </Button>

              {/* QR Scanner Button with Text */}
              <Button
                variant="contained"
                startIcon={<QrCodeScannerIcon />}
                sx={{
                  backgroundColor: '#f44336',
                  color: 'white',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#d32f2f' },
                }}
              >
                Scan
              </Button>

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
          )}
        </Box>
      </Toolbar>

      {/* Mobile Tabs */}
      {isMobile && (
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
          variant="fullWidth"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#f44336',
            },
            '& .MuiTab-root.Mui-selected': {
              color: '#f44336',
            },
          }}
        >
          <Tab label="Dashboard" />
          <Tab label="Docks" />
          <Tab label="Report" />
        </Tabs>
      )}

      {/* Mobile Icon Menu */}
      <Menu anchorEl={iconAnchor} open={Boolean(iconAnchor)} onClose={closeIconMenu}>
        <MenuItem onClick={closeIconMenu}>
          <ReportProblemIcon sx={{ mr: 1 }} /> Report
        </MenuItem>
        <MenuItem onClick={closeIconMenu}>
          <CloudDownloadIcon sx={{ mr: 1 }} /> Download
        </MenuItem>
        <MenuItem onClick={closeIconMenu}>
          <QrCodeScannerIcon sx={{ mr: 1 }} /> Scan
        </MenuItem>
        <MenuItem onClick={closeIconMenu}>
          <NotificationsIcon sx={{ mr: 1 }} /> Notifications
        </MenuItem>
        <MenuItem onClick={closeIconMenu}>
          <SettingsIcon sx={{ mr: 1 }} /> Settings
        </MenuItem>
        <MenuItem onClick={closeIconMenu}>
          <AccountCircleIcon sx={{ mr: 1 }} /> Account
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
