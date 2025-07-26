"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowpassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowpassword((prev) => !prev);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "35ch" } }}
        noValidate
        autoComplete="off"
        className="flex flex-col m-auto w-[300px] h-[100vh] items-center justify-center"
      >
        <Typography variant="h6" className="text-center font-bold ">
          Wellcome to{" "}
          <span className="text-blue-600 font-bold">Nazorat Med</span>
        </Typography>
        <TextField
          className=""
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          className=""
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained">
          Log in
        </Button>
         <Box className="flex items-center justify-between">
          <h5  className="text-red-500 font-semibold">If you don`t have an account</h5>
          <Link href={'/register'}>
          <button className="underline ">Sign Up</button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
