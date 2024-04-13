import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";

import Txt from "../../commonElements/Txt";
import Btn from "../../commonElements/Btn";
import WarnTxt from "../../commonElements/WarnTxt";
import DivBox from "../../commonElements/DivBox";
import InputBox from "../../commonElements/InputBox";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("submit");
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <DivBox
      sx={{ position: "relative", width: "100vw", border: "1px solid black" }}
    >
      <DivBox
        className="flex-center-center"
        sx={{ border: "1px solid blue", height: "35vh", width: "100%" }}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "auto" }}>
          <DivBox
            className="flex-column-center"
            width={{
              xs: "85vw",
              sm: "70vw",
              md: "60vw",
              lg: "55vw",
              xl: "35vw",
            }}
            gap="0.75rem"
          >
            <Txt variant="h6" gutterbomb={true} textAlign="left" width="100%">
              Log In
            </Txt>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">
                Email *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                endAdornment={<InputAdornment position="end">@</InputAdornment>}
                label="Email"
                size="medium"
                error={!!errors.email}
              />
              {errors.email && <WarnTxt>{errors.email.message}</WarnTxt>}
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                error={!!errors.password}
                size="medium"
              />
              {errors.password && <WarnTxt>{errors.password.message}</WarnTxt>}
            </FormControl>
            <Btn type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Btn>
          </DivBox>
        </form>
      </DivBox>
    </DivBox>
  );
};

export default Login;
