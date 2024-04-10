import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Paper,
  Button
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{ position: "relative", width: "100vw", border: "1px solid black" }}
    >
      <Box
        className="flex-center-center"
        sx={{ border: "1px solid blue", height: "35vh" }}
      >
        <Box
          className="flex-column-base"
          sx={{ height: "auto", width: "50vw", padding: "2rem", gap: "0.5rem" }}
        >
          <TextField
           sx={{width: '100%'}}
            size="small"
            required
            id="outlined-required"
            label="EmailID"
            placeholder="EmailID"
          />
          <FormControl
            size="small"
            sx={{ m: 1, width: "100%" }}
            variant="outlined"
          >
            <InputLabel required htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              placeholder="Password"
            />
          </FormControl>

          <Button sx={{width :'100%'}} variant="contained" size="medium">
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
