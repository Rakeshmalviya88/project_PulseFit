import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
    px="20px"
  >

    <br />
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: isActive ? '3px solid #FF2625' : 'none',
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/tracker"
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: isActive ? '3px solid #FF2625' : 'none',
        })}
      >
        Tracker
      </NavLink>

      <NavLink
        to="/login"
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: isActive ? '3px solid #FF2625' : 'none',
        })}
      >
        Login
      </NavLink>

      <NavLink
        to="/signup"
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: isActive ? '3px solid #FF2625' : 'none',
        })}
      >
        Sign up
      </NavLink>
    </Stack>
  </Stack>
);

export default Navbar;

