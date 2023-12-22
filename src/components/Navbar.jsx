import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import '../index.css'




const pages = ['All words', 'Test', 'About us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor:'#58cc02'}} sx={{ fontFamily: ['Poppins', 'sans-serif'] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Avatar sx={{mr:3}} alt="My Image" src="data:image/png;base64,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" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: ['Poppins', 'sans-serif']
            }}
          >
            DUOLINGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: ['Poppins', 'sans-serif'],
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
