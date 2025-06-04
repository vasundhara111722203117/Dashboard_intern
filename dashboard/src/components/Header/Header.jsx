import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
  Stack,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar
        sx={{
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: isMobile ? 2 : 0,
          px: { xs: 1, sm: 3 },
          py: isMobile ? 0 : 0,
        }}
      >
        {/* Left Section */}
        <Stack
          direction={isMobile ? 'column' : 'row'}
          alignItems="center"
          spacing={0}
          sx={{ width: '100%' }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <img
              src={process.env.PUBLIC_URL + './admin image.png'}
              alt="Dock Logo"
              style={{ width: 40 }}
            />
            <Typography variant="h6" sx={{ display: isMobile ? 'inline' : 'none' }}>
              DOCK MANAGEMENT
            </Typography>
          </Box>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant={isMobile ? 'scrollable' : 'standard'}
            scrollButtons={isMobile ? 'auto' : false}
            sx={{ width: isMobile ? '100%' : 'auto' }}
          >
            <Tab label="Dashboard" />
            <Tab label="Docks" />
            <Tab label="Report" />
          </Tabs>
        </Stack>

        {/* Right Section */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent={isMobile ? 'center' : 'flex-end'}
          sx={{ width: '100%' }}
        >
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: '#FF0000',
              '&:hover': { backgroundColor: '#d32f2f' },
              textTransform: 'none',
              mr: 1,
            }}
          >
            Add
          </Button>

          <Button startIcon={<ReportProblemIcon />} sx={{ textTransform: 'none' }}>
            Report
          </Button>

          <Button startIcon={<CloudDownloadIcon />} sx={{ textTransform: 'none' }}>
            Download
          </Button>

          <IconButton
            sx={{
              backgroundColor: '#f44336',
              color: 'white',
              '&:hover': { backgroundColor: '#d32f2f' },
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
