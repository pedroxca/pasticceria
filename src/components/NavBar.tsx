import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';



function NavBar() {

  interface Page {
    display: string;
    path: string;
  }

  const pages: Page[] = [
    {
      display: 'Trabalhe Conosco',
      path: 'work-with-us'
    },
    {
      display: 'Quem Somos',
      path: 'about'
    },
    {
      display: 'Nossos Produtos',
      path: 'products'
    }];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position='sticky' color='primary' >

      <Container maxWidth="xl"
      >
        <Toolbar
          disableGutters
        >
          <Button variant='text' component={RouterLink} end to='/' sx={{ my: 2, color: 'white', ":hover": "none" }}
          >
            <BakeryDiningIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />

            <Typography
              variant="h6"
              noWrap
              component="a"

              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Montserrat',
                fontWeight: 300,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Coffee Shops Tia Rosa
            </Typography>
          </Button>

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
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Button
                    sx={{ color: 'white', display: 'block' }}
                    href={`${page.path}`}
                    component={RouterLink} to={`${page.path}`}
                    variant='text'
                  >

                    <Typography textAlign="center">
                      {page.display}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button variant='text' component={RouterLink} end to='/' sx={{display: { xs: 'flex', md: 'none' }, color: 'white', ":hover": "none" }}
          >
            <BakeryDiningIcon sx={{ mr: 1 }}
            />

            <Typography
              variant="h6"
              noWrap
              component="a"

              sx={{
                mr: 2,
                fontFamily: 'Montserrat',
                fontWeight: 300,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Coffee Shops Tia Ros
            </Typography>
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection: 'row-reverse', } }}>
            {pages.map((page) => (
              <Button
              variant='text'
                key={page.path}
                onClick={handleCloseNavMenu}
                component={RouterLink} to={`${page.path}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.display}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )

}
export default NavBar;
