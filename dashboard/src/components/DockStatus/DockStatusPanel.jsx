import React, { useRef, useState, useEffect } from 'react';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import DockCard from './DockCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const dockStatusData = [
  { id: 'D1', status: 'Available' },
  { id: 'D2', status: 'Available' },
  { id: 'D3', status: 'Available' },
  { id: 'D4', status: 'Available' },
  { id: 'D5', status: 'Warning' },
  { id: 'D6', status: 'Warning' },
  { id: 'D7', status: 'Available' },
  { id: 'D8', status: 'Available' },
  { id: 'D9', status: 'Available' },
  { id: 'D10', status: 'Busy' },
  { id: 'D11', status: 'Busy' },
  { id: 'D12', status: 'Busy' },
  { id: 'D13', status: 'Available' },
  { id: 'D14', status: 'Available' },
];

const DockStatusPanel = () => {
  const scrollRef = useRef(null);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const checkScroll = () => {
      const el = scrollRef.current;
      if (el) {
        setShowLeftIcon(el.scrollLeft > 0);
        setShowRightIcon(el.scrollLeft + el.clientWidth < el.scrollWidth);
      }
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) scrollEl.addEventListener('scroll', checkScroll);

    checkScroll();
    window.addEventListener('resize', checkScroll);

    return () => {
      if (scrollEl) scrollEl.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <Box position="relative" sx={{ mt: { xs: 2, sm: 4 }, px: { xs: 1, sm: 4 } }}>
      <Box
        ref={scrollRef}
        sx={{
          overflowX: 'auto',
          display: 'flex',
          gap: { xs: 1, sm: 2 },
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {dockStatusData.map((dock) => (
          <DockCard key={dock.id} dockId={dock.id} status={dock.status} />
        ))}
      </Box>

      {/* Left Arrow */}
      {showLeftIcon && (
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: 'absolute',
            top: '50%',
            left: { xs: -8, sm: -16 },
            transform: 'translateY(-50%)',
            backgroundColor: '#fff',
            boxShadow: 1,
            zIndex: 10,
            width: isMobile ? 28 : 40,
            height: isMobile ? 28 : 40,
            '& svg': { fontSize: isMobile ? 18 : 24 },
            '&:hover': { backgroundColor: '#f0f0f0' },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}

      {/* Right Arrow */}
      {showRightIcon && (
        <IconButton
          onClick={scrollRight}
          sx={{
            position: 'absolute',
            top: '50%',
            right: { xs: -8, sm: -16 },
            transform: 'translateY(-50%)',
            backgroundColor: '#fff',
            boxShadow: 1,
            zIndex: 10,
            width: isMobile ? 28 : 40,
            height: isMobile ? 28 : 40,
            '& svg': { fontSize: isMobile ? 18 : 24 },
            '&:hover': { backgroundColor: '#f0f0f0' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default DockStatusPanel;
