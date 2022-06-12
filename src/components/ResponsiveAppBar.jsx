import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import { fontWeight } from '@mui/system';

const ResponsiveAppBar = () => {

  const pages = [{
      name: 'Home',
      url: '/welcome/Buddy'
  },{
      name: 'Todos',
      url: '/todos'
  }];

  const options = [{
    name: 'Login',
    url: '/login'
},{
    name: 'Logout',
    url: '/logout'
}];


  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#1976D2",
      }}>
        <Toolbar disableGutters>

          <div style={{
            color: '#ccc',
            marginRight: '30px'
          }}>
            TODO-APP
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.url} style={{
                  textDecoration: 'none',
                  color: "#fff"
                }}>{page.name}</Link>
              </Button>
            ))}
          </Box>
         
            {options.map((option) => (
              <Button
                key={option.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={option.url} style={{
                  textDecoration: 'none',
                  color: "#fff"
                }}>{option.name}</Link>
              </Button>
            ))}
          

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
