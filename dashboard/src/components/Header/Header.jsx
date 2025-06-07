import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
  Box,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  Button,
  Select,
} from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
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
  const handleChange = (event, newValue) => setValue(newValue);

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
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Box display="flex" alignItems="center" gap={3}>
            <img
              src={process.env.PUBLIC_URL + './dock.png'}
              alt="Dock Logo"
              style={{ width: 180 }}
            />
          </Box>
        </Box>

        {/* Center Section */}
        <Box sx={{ flex: 3, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
          {!isMobile && (
            <>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="secondary"
                sx={{
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#f44336',
                  },
                  '& .MuiTab-root': {
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

              {/* +Add Button (Curved Rectangle near Docks) */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f44336',
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: '10px',
                  px: 3,
                  py: 1,
                  '&:hover': { backgroundColor: '#d32f2f' },
                }}
              >
                +Add
              </Button>
            </>
          )}
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {isMobile ? (
            <IconButton onClick={openIconMenu}>
              <MoreVertIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={1} alignItems="center">
              {/* Report Button (Curved Rectangle) */}
              <Button
                variant="outlined"
                startIcon={<ReportProblemIcon />}
                sx={{
                  textTransform: 'none',
                  borderRadius: '10px',
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

              {/* Download Dropdown with Black Border */}
              <Select
                defaultValue=""
                displayEmpty
                variant="outlined"
                size="small"
                sx={{
                  minWidth: 20,
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  color: '#000',
                  fontWeight: 500,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                }}
              >
                <MenuItem value="">Download</MenuItem>
                <MenuItem value="pdf">PDF</MenuItem>
                <MenuItem value="csv">CSV</MenuItem>
                <MenuItem value="excel">Excel</MenuItem>
              </Select>

              {/* Scan Button */}
              <Button
                variant="contained"
                startIcon={<QrCodeScannerIcon />}
                sx={{
                  backgroundColor: '#f44336',
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: '10px',
                  px: 2,
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
