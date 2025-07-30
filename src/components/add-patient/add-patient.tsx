"use client";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { Dispatch, SetStateAction } from "react";
import { Box, TextField } from "@mui/material";

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
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md" //  "lg" ||  "xl"
        fullWidth={true}
        sx={{
          "& .MuiDialog-paper": {
            width: "55%",
            minHeight: "680px",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Typography className="text-[#1e40af] font-bold" variant="h5">Иловаи бемори нав</Typography>
          <Typography sx={{ fontSize: "0.875rem", color: "#64748b",}}>
            {" "}
            Маълумоти асосӣ ва ташрифи аввалини беморро ворид кунед.
          </Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers className="flex flex-col justify-between">
          <Box className="flex items-center justify-end gap-4">
            <label>Номи пурра</label>
            <TextField
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.75rem",
                  width: "30rem",
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
              }}
            />
          </Box>

          <Box className="flex items-center justify-end gap-4">
            <label>Сурати бемор</label>
            <TextField
              variant="outlined"
              placeholder="URL-и суратро ворид кунед"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.75rem",
                  width: "30rem",
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
              }}
            />
          </Box>

          <Box className="flex items-center justify-end gap-4">
            <label>Синну сол</label>
            <TextField
              variant="outlined"
              type="date"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.75rem",
                  width: "30rem",
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
              }}
            />
          </Box>

          <Box className="flex items-center justify-end gap-4">
            <label>Суроға</label>
            <TextField
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.75rem",
                  width: "30rem",
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
              }}
            />
          </Box>

          <Box className="flex items-center justify-end gap-4">
            <label>Рақами телефон</label>
            <TextField
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.75rem",
                  width: "30rem",
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
              }}
            />
          </Box>

          <Box className="flex items-center justify-end gap-4">
            <label>Санаи ташрифи аввал</label>
            <TextField
              variant="outlined"
              type="date"
              // placeholder="Санаро интихоб кунед"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.75rem",
                  width: "30rem",
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
              }}
            />
          </Box>

          <Box className="flex items-center justify-end gap-4">
            <label>Ташхис</label>
            <TextField
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.75rem",
                  width: "30rem",
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
              }}
            />
          </Box>

          <Box className="flex items-center justify-end gap-4">
            <label>Аломатҳо</label>
            <TextField
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.75rem",
                  width: "30rem",
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
              }}
            />
          </Box>

          <Box className="flex items-center justify-end gap-4">
            <label>Дорухатҳо</label>
            <TextField
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.75rem",
                  width: "30rem",
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
              }}
            />
          </Box>

          <Box className="flex items-center justify-end gap-4">
            <label>Ҳолат</label>
            <select
              name=""
              id=""
              className="h-[2.75rem] w-[30rem] bg-slate-50/50 border rounded-[12px] pl-3 "
            >
              <option className="bg-slate-50/50" value="true">
                Шифо ёфт
              </option>
              <option className="bg-slate-50/50" value="false">
                Дар мушоҳида
              </option>
            </select>
          </Box>

        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            autoFocus
            onClick={handleClose}
          >
            Бекор кардан
          </Button>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Илова кардан
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Fragment>
  );
}
