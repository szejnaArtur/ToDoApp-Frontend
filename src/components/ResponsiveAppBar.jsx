import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import AuthenticationService from './AuthenticationService.js';

const ResponsiveAppBar = (props) => {

  const pages = [{
      name: 'Home',
      url: '/welcome/Buddy'
  },{
      name: 'Todos',
      url: '/todos'
  }];

  return (
    <AppBar>
      <Container maxWidth="xl" style={{
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
            {props.isUserLoggedIn && pages.map((page) => (
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
         
         {props.isUserLoggedIn ? <Button
                key="logout"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/logout" style={{
                  textDecoration: 'none',
                  color: "#fff"
                }} 
                onClick={() => {
                  AuthenticationService.logout();
                  props.click(AuthenticationService.isUserLoggedIn());
                }}>logout</Link>
              </Button> : <Button
                key="login"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/login" style={{
                  textDecoration: 'none',
                  color: "#fff"
                }}>Login</Link>
              </Button>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
