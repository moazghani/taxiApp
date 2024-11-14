import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Container, useMediaQuery } from '@mui/material';
import { AccountCircle, Menu as MenuIcon, Login as LoginIcon, PersonAdd as PersonAddIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openDropdown = Boolean(anchorEl);

  const isMobile = useMediaQuery('(max-width:768px)'); // Mobile view detection

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: 'linear-gradient(45deg, #222222, #333333, #444444)', color: '#fff', width: '100%', zIndex: 1200 }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Left-aligned navigation buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                <ListItem button component={Link} to="/home">
                  <ListItemText primary="Home" sx={{ color: '#fff' }} />
                </ListItem>
                <ListItem button component={Link} to="/about">
                  <ListItemText primary="About" sx={{ color: '#fff' }} />
                </ListItem>
                <ListItem button component={Link} to="/contact">
                  <ListItemText primary="Contact" sx={{ color: '#fff' }} />
                </ListItem>
              </List>
            </Box>

            {/* Centered logo */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
              <img 
                src="/SMAZ logo.png" 
                alt="SMAZ Logo" 
                style={{ width: '40px', height: '40px', borderRadius: '10%' }} 
              />
            </Box>

            {/* Right-aligned user menu icon */}
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
              {isMobile ? (
                <IconButton color="inherit" onClick={toggleMobileMenu}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <>
                  <IconButton color="inherit" onClick={handleDropdownClick}>
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleDropdownClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    <MenuItem onClick={handleDropdownClose} component={Link} to="/login">
                      <LoginIcon sx={{ marginRight: '8px' }} />
                      Login
                    </MenuItem>
                    <MenuItem onClick={handleDropdownClose} component={Link} to="/register">
                      <PersonAddIcon sx={{ marginRight: '8px' }} />
                      Register
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer anchor="left" open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <Box sx={{ width: 250, backgroundColor: '#222222', color: '#fff', height: '100%' }}>
          <List>
            <ListItem button component={Link} to="/home" onClick={toggleMobileMenu}>
              <ListItemText primary="Home" sx={{ color: '#fff' }} />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={toggleMobileMenu}>
              <ListItemText primary="About" sx={{ color: '#fff' }} />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={toggleMobileMenu}>
              <ListItemText primary="Contact" sx={{ color: '#fff' }} />
            </ListItem>
          </List>
          
          {/* Login and Register buttons at the bottom with icons */}
          <Box sx={{ position: 'absolute', bottom: 0, width: '100%', borderTop: '1px solid #444444' }}>
            <List>
              <ListItem button component={Link} to="/login" onClick={toggleMobileMenu} sx={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
                <LoginIcon sx={{ marginRight: '8px', color: '#fff' }} />
                <ListItemText primary="Login" sx={{ color: '#fff', textAlign: 'center' }} />
              </ListItem>
              <ListItem button component={Link} to="/register" onClick={toggleMobileMenu} sx={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
                <PersonAddIcon sx={{ marginRight: '8px', color: '#fff' }} />
                <ListItemText primary="Register" sx={{ color: '#fff', textAlign: 'center' }} />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
