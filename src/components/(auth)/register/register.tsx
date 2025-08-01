"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import { useAuth } from "@/app/store/(auth)/auth";

export default function Register() {
  const register = useAuth((state) => state.register);
  const [showPassword, setShowpassword] = useState<boolean>(false);
  const router = useRouter();

  const [formRegister, setFormRegister] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowpassword((prev) => !prev);
  };

  const isFormValid =
    formRegister.fullName.trim() &&
    formRegister.phoneNumber.trim() &&
    formRegister.email.trim() &&
    formRegister.password.trim();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isFormValid) {
      await register(formRegister);
      router.push("/login");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-[400px] h-[500px] border border-blue-500 rounded-2xl">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ "& > :not(style)": { m: 1, width: "35ch" } }}
        noValidate
        autoComplete="off"
        className="flex flex-col m-auto w-[300px] h-[100vh] items-center justify-center"
      >
        <Typography variant="h6" className="text-center font-bold ">
          Хушомадед ба{" "}
          <span className="text-blue-600 font-bold">Doctor Note</span>
        </Typography>

        <TextField
          className=""
          id="outlined-basic"
          label="Номи пурра"
          variant="outlined"
          onChange={({ target }) =>
            setFormRegister({ ...formRegister, fullName: target.value })
          }
        />

        <TextField
          className=""
          id="outlined-basic"
          label="Номери телефон"
          variant="outlined"
          onChange={({ target }) =>
            setFormRegister({ ...formRegister, phoneNumber: target.value })
          }
        />
        <TextField
          className=""
          id="outlined-basic"
          label="Емайл"
          variant="outlined"
          onChange={({ target }) =>
            setFormRegister({ ...formRegister, email: target.value })
          }
        />
        <TextField
          className=""
          id="outlined-basic"
          label="Парол"
          onChange={({ target }) =>
            setFormRegister({ ...formRegister, password: target.value })
          }
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

        <Button variant="contained" type="submit">
          пешниҳод
        </Button>
        <Box className="flex items-center justify-between">
          <h5>Оё аллакай ҳисоб доред? </h5>
          <Link href={"/login"} className="underline">
            Даромад инҷо
          </Link>
        </Box>
      </Box>
    </div>
  );
}
