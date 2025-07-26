"use client"

import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, InputAdornment, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";


export default function Register() {
  const [showPassword, setShowpassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowpassword((prev) => !prev)
  }

  return (
    <div className="flex flex-col items-center justify-center">
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
          label="Full Name"
          variant="outlined"
        />
        <TextField
          className=""
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
        />
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
          type={showPassword ? 'text' : 'password'}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton  onClick={handleClickShowPassword}>
                  {showPassword ?  <VisibilityOff /> : <Visibility />}
                </IconButton>
                 </InputAdornment>

            )
          }}
        />
        <TextField
          className=""
          id="outlined-basic"
          label=""
          variant="outlined"
          type="date"
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={""}>Man</MenuItem>
              <MenuItem value={""}>Woman</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button variant="contained">
          Submit
        </Button>
        <Box className="flex items-center justify-between">
          <h5>Have already an account? </h5>
          <Link href={'/login'}>
          <button className="underline ">Login here</button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
