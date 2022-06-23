import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';
import search from '../Imagens/search.png';
import logo from '../Imagens/jShop.png';
import carrito from '../Imagens/shopping-cart.png';
import vector from '../Imagens/Vector1.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#F8F3E9'
        },
        secondary: {
            main: '#3D3D3F'
        }
    }
})

const drawerWidth = 240;
const navItems = ['Categories', 'About', 'Shop', 'Contact'];

const Navbar = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={logo} alt='logo' />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', textTransform: 'capitalize', fontFamily: 'ABeeZee' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" style={{ boxShadow: 'none' }}>
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
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <img src={logo} alt='logo' />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#2C2A2B', textTransform: 'capitalize', fontFamily: 'ABeeZee' }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Search">
                                <IconButton sx={{ p: 1 }}>
                                    <img src={search} alt='searching' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Shop">
                                <IconButton sx={{ p: 1 }}>
                                    <img src={carrito} alt='Shop' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="See more">
                                <IconButton sx={{ p: 1 }}>
                                    <img src={vector} alt='More' />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </ThemeProvider>

    )
}

export default Navbar