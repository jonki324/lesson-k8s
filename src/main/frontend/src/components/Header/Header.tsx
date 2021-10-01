import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header: React.VFC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
