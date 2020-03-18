import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Box } from "@material-ui/core";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#8c8c8c" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <SportsCricketIcon
              style={{ marginRight: 5, marginTop: 2 }}
            ></SportsCricketIcon>
            CricLover
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography component="div">
        <Box
          textAlign="center"
          m={2}
          fontWeight="fontWeightBold"
          fontSize="h1.fontSize"
          fontFamily="Oleo Script"
          letterSpacing={3}
          color="#4d4d4d"
        >
          Fabulous 4
        </Box>
      </Typography>
    </div>
  );
};

export default NavBar;
