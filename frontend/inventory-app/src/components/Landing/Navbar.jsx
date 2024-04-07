import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuDrawer from "./Drawer";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          px: { sm: "0", md: "5rem", lg: "13rem" },
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography color="secondary" variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: '600', fontStyle: 'initial'}}>
            Inventory
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{
                display: {sm: 'none', xs: 'none', md: 'block', lg: 'block', xl: 'block'}
            }}
          >
            <Button color="secondary">About</Button>
            <Button color="secondary">Contact</Button>
            <Button variant="contained" 
            sx={{background: '#FF5733'}}
            >Login</Button>
          </Stack>
          <MenuDrawer/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
