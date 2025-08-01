"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/store/(auth)/auth";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



export default function Login() {
  const [showPassword, setShowpassword] = useState(false);
  const router = useRouter();
  const login = useAuth((state) => state.login);
  const [formLogin, setFormLogin] = useState({
    fullName: "",
    password: "",
  });

  const isFormValid =
    formLogin.fullName.trim() && formLogin.password.trim();

  const handleClickShowPassword = () => {
    setShowpassword((prev) => !prev);
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (isFormValid) {
     const success =  await login(formLogin);
     if (success) {
       router.push("/dashboard");
     } else {
      alert("Маълумоти нодуруст");
     }
    }
  }


  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ "& > :not(style)": { m: 1, width: "35ch" } }}
        noValidate
        autoComplete="off"
        className="flex flex-col m-auto w-[400px] h-[500px] px-4 items-center justify-center border border-blue-500 rounded-2xl"
      >
        <Typography variant="h6" className="text-center font-bold ">
          Хушомадед ба{" "}
          <span className="text-blue-600 font-bold">Doctor Note</span>
        </Typography>
        <TextField
          className=""
          id="outlined-basic"
          label="номи пурра"
          variant="outlined"
          onChange={({ target }) => setFormLogin({ ...formLogin, fullName: target.value })}
        />
        <TextField
          className=""
          id="outlined-basic"
          label="Парол"
          variant="outlined"
          onChange={({ target }) => setFormLogin({ ...formLogin, password: target.value })  }
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
        <Button variant="contained" type="submit" className="w-[400x]">
          Даромадан
        </Button>
         <Box className="flex flex-col items-center justify-between">
          <h5  className="text-red-500 font-semibold">Агар шумо ҳисоб надошта бошед <ArrowDropDownIcon/> </h5>
          <Link href={'/register'}>
          <Button variant="outlined" className="w-[270px]">
          Қайд гирифтан
          </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
