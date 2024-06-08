/** @format */

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import navLinks from "./navLinks.json"; 

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  margin: theme.spacing(1.5),
  "&.active": {
    fontWeight: "bold",
  },
}));

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}>
            Kanya-Utthan
          </Typography>
          {navLinks.map((link) => (
            <StyledNavLink
              key={link.path}
              to={link.path}
              exact>
              {link.label}
            </StyledNavLink>
          ))}
          <Button color="inherit" onClick={()=>navigate("/sign-in")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
