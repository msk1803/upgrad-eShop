// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const Navbar = ({ isLoggedIn, isAdmin }) => {
  const handleLogout = () => {
   
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/">
          upGrad Eshop
        </Typography>
        {isLoggedIn ? (
          <>
            <Input
              type="text"
              placeholder="Search"
           
            />
            <Button component={Link} to="/home">
              Home
            </Button>
            {isAdmin && (
              <Button component={Link} to="/add-products">
                Add Products
              </Button>
            )}
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button component={Link} to="/login">
              Login
            </Button>
            <Button component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
