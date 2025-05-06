import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ["HOME", "EXCHANGE RATES (LIVE)", "ABOUT", "ERROR PAGE"];

function DrawerAppBar({ window, darkMode, onToggleDarkMode }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const handleNavItemClick = (page) => {
      switch (page) {
        case 'HOME':
          navigate('/');
          break;
        case 'EXCHANGE RATES (LIVE)':
          navigate('/exchange-rates');
          break;
        case 'ABOUT':
          navigate('/about');
          break;
        case 'ERROR PAGE':
          navigate('/error_page');
          break;
        default:
          navigate('/');
          break;
      }
    };
  
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{ textAlign: 'center' }}
                  onClick={() => handleNavItemClick(item)}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
      
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex',paddingTop: '45px' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Loan Calculator
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, alignItems: 'center' }}>
              {navItems.map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: 'white',
                    backgroundColor: page === 'HOME' ? 'rgba(255,255,255,0.15)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.25)',
                    },
                    borderRadius: 1,
                    fontWeight: '500',
                    fontSize: '15px',
                    textTransform: 'none',
                  }}
                  onClick={() => handleNavItemClick(page)}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <Switch checked={darkMode} onChange={onToggleDarkMode} />
            </Box>
          </Toolbar>
        </AppBar>
  
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    );
  }
  
  DrawerAppBar.propTypes = {
    window: PropTypes.func,
    darkMode: PropTypes.bool.isRequired,
    onToggleDarkMode: PropTypes.func.isRequired,
  };
  
  export default DrawerAppBar;