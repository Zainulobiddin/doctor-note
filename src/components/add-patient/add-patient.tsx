"use client";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment, Dispatch, SetStateAction } from "react";

type AddPatientsProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddPatients({ open, setOpen }: AddPatientsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      height: "2.75rem",
      width: isMobile ? "100%" : "30rem",
      backgroundColor: "rgba(248, 250, 252, 0.5)",
      borderRadius: 3,
      "& fieldset": {
        borderColor: "#e2e8f0",
      },
      "&:hover fieldset": {
        borderColor: "#93c5fd",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#93c5fd",
        boxShadow: "0 0 0 3px rgba(147, 197, 253, 0.1)",
      },
    },
  };

  const rowStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "stretch" : "center",
    justifyContent: "flex-end",
    gap: "0.75rem",
    marginBottom: "0.4rem",
  };

  return (
    <Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: isMobile ? "100%" : "55%",
            minHeight: isMobile ? "auto" : "680px",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Typography className="text-[#1e40af] font-bold" variant="h5">
            Иловаи бемори нав
          </Typography>
          <Typography sx={{ fontSize: "0.875rem", color: "#64748b" }}>
            Маълумоти асосӣ ва ташрифи аввалини беморро ворид кунед.
          </Typography>
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <Box sx={rowStyle}>
            <label>Номи пурра</label>
            <TextField variant="outlined" sx={inputStyle} />
          </Box>

          <Box sx={rowStyle}>
            <label>Сурати бемор</label>
            <TextField
              variant="outlined"
              placeholder="URL-и суратро ворид кунед"
              sx={inputStyle}
            />
          </Box>

          <Box sx={rowStyle}>
            <label>Синну сол</label>
            <TextField variant="outlined" type="date" sx={inputStyle} />
          </Box>

          <Box sx={rowStyle}>
            <label>Суроға</label>
            <TextField variant="outlined" sx={inputStyle} />
          </Box>

          <Box sx={rowStyle}>
            <label>Рақами телефон</label>
            <TextField variant="outlined" sx={inputStyle} />
          </Box>

          <Box sx={rowStyle}>
            <label>Санаи ташрифи аввал</label>
            <TextField variant="outlined" type="date" sx={inputStyle} />
          </Box>

          <Box sx={rowStyle}>
            <label>Ташхис</label>
            <TextField variant="outlined" sx={inputStyle} />
          </Box>

          <Box sx={rowStyle}>
            <label>Аломатҳо</label>
            <TextField variant="outlined" sx={inputStyle} />
          </Box>

          <Box sx={rowStyle}>
            <label>Дорухатҳо</label>
            <TextField variant="outlined" sx={inputStyle} />
          </Box>

          <Box sx={rowStyle}>
            <label>Ҳолат</label>
            <select
              className="h-[2.75rem] rounded-[12px] pl-3 border bg-slate-50/50"
              style={{ width: isMobile ? "100%" : "30rem" }}
            >
              <option value="true">Шифо ёфт</option>
              <option value="false">Дар мушоҳида</option>
            </select>
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "space-between", p: 2 }}>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Бекор кардан
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Илова кардан
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Fragment>
  );
}
