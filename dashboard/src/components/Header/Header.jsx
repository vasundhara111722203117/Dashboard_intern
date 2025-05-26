import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DownloadIcon from '@mui/icons-material/Download';

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        color: '#000000',
        paddingX: 2,
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        {/* Left: Title */}
        <Typography variant="h6" fontWeight="bold">
          Dock Management
        </Typography>

        {/* Right: Icons */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <DownloadIcon sx={{ color: '#000' }} />
          </IconButton>

          <IconButton>
            <NotificationsNoneIcon sx={{ color: '#000' }} />
          </IconButton>

          <Avatar
            alt="User"
            src="https://i.pravatar.cc/40" // You can replace with your profile image
            sx={{ width: 36, height: 36 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;