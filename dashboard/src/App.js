import React from 'react';
import { Box, Container } from '@mui/material';

import DashboardPage from './pages/Dashboardpage';

const App = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Top Header */}
    

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
        <DashboardPage />
      </Container>
    </Box>
  );
};

export default App;