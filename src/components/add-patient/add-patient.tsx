"use client";

import {
  Button,
  Typography,
  Box,
  TextField,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Stack,
  Divider,
  Container,
  Avatar,
  SelectChangeEvent,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ChangeEvent, useState } from "react";
import {
  PersonAdd,
  Save,
  Cancel,
  Person,
  LocalHospital,
} from "@mui/icons-material";
import { NewPatient, usePatientsStore } from "@/app/store/patients/patients";

export default function AddPatients() {
  const theme = useTheme();
  const { addPatient } = usePatientsStore();
  const [formData, setFormData] = useState<NewPatient>({
    id: "",
    fullName: "",
    image: "",
    birthDate: "",
    address: "",
    phone: "",
    dateFirstVisit: "",
    diagnosis: "",
    symptoms: "",
    recipes: "",
    status: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setFormData({ ...formData, status: event.target.value === "true" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newPatient: NewPatient = {
      id: formData.get("id") as string,
      fullName: formData.get("fullName") as string,
      image: formData.get("image") as string,
      birthDate: formData.get("birthDate") as string,
      address: formData.get("address") as string,
      phone: formData.get("phone") as string,
      dateFirstVisit: formData.get("dateFirtVisit") as string,
      diagnosis: formData.get("diagnosis") as string,
      symptoms: formData.get("symptoms") as string,
      recipes: formData.get("recipes") as string,
      status: false,
    };

    addPatient(newPatient);
    handleCancel();
  };

  const handleCancel = () => {
    setFormData({
      id: "",
      fullName: "",
      image: "",
      birthDate: "",
      address: "",
      phone: "",
      dateFirstVisit: "",
      diagnosis: "",
      symptoms: "",
      recipes: "",
      status: false,
    });
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(248, 250, 252, 0.6)",
      borderRadius: 2,
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(248, 250, 252, 0.9)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
        },
      },
      "&.Mui-focused": {
        backgroundColor: "white",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
          borderWidth: "2px",
        },
      },
    },
    "& .MuiInputLabel-root": {
      fontWeight: 500,
      color: theme.palette.text.secondary,
      "&.Mui-focused": {
        color: theme.palette.primary.main,
        fontWeight: 600,
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: '100%',
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 4,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={3}>
            <Avatar
              sx={{
                width: 56,
                height: 56,
                backgroundColor: theme.palette.primary.main,
                color: "white",
              }}
            >
              <PersonAdd fontSize="large" />
            </Avatar>
            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
                color="text.primary"
                sx={{
                  fontSize: { xs: "1.75rem", md: "2.125rem" },
                  mb: 0.5,
                }}
              >
                Иловаи бемори нав
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: "1.05rem", lineHeight: 1.6 }}
              >
                Маълумоти асосӣ ва ташрифи аввалини беморро ворид кунед
              </Typography>
            </Box>
          </Stack>
        </Paper>

        {/* Main Form Card */}
        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <form onSubmit={handleSubmit}>
              {/* Personal Information Section */}
              <Box sx={{ mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: theme.palette.info.main,
                      color: "white",
                    }}
                  >
                    <Person fontSize="small" />
                  </Avatar>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color="text.primary"
                    sx={{ fontSize: "1.25rem" }}
                  >
                    Маълумоти шахсӣ
                  </Typography>
                </Stack>
                <Divider
                  sx={{
                    mb: 3,
                    backgroundColor: theme.palette.primary.main,
                    height: 2,
                  }}
                />

                {/* Personal Info Fields */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {/* First Row - Name and Birth Date */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 3,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="Номи пурра"
                        variant="outlined"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Номи пурраро ворид кунед"
                        sx={textFieldSx}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="Санаи таваллуд"
                        variant="outlined"
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        sx={textFieldSx}
                      />
                    </Box>
                  </Box>

                  {/* Second Row - Phone and Image */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 3,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="Рақами телефон"
                        variant="outlined"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+992 XX XXX XXXX"
                        sx={textFieldSx}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="Сурати бемор (URL)"
                        variant="outlined"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        sx={textFieldSx}
                      />
                    </Box>
                  </Box>

                  {/* Third Row - Address */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 3,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="Суроға"
                        variant="outlined"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        // multiline
                        // rows={3}
                        placeholder="Суроғаи пурраро ворид кунед"
                        sx={textFieldSx}
                      />
                    </Box>
                    {/* <Box sx={{ minWidth: 520 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Ҷинс
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={}
                          label="Ҷинс"
                          // onChange={handleChange}
                        >
                          <MenuItem value={""}>Мард</MenuItem>
                          <MenuItem value={""}>Зан</MenuItem>
                        </Select>
                      </FormControl>
                    </Box> */}
                  </Box>
                </Box>
              </Box>

              {/* Medical Information Section */}
              <Box sx={{ mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: theme.palette.success.main,
                      color: "white",
                    }}
                  >
                    <LocalHospital fontSize="small" />
                  </Avatar>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color="text.primary"
                    sx={{ fontSize: "1.25rem" }}
                  >
                    Маълумоти тиббӣ
                  </Typography>
                </Stack>
                <Divider
                  sx={{
                    mb: 3,
                    backgroundColor: theme.palette.success.main,
                    height: 2,
                  }}
                />

                {/* Medical Info Fields */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {/* First Row - Visit Date and Status */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 3,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="Санаи ташрифи аввал"
                        variant="outlined"
                        type="date"
                        name="dateFirtVisit"
                        value={formData.dateFirstVisit}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        sx={textFieldSx}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <FormControl fullWidth sx={textFieldSx}>
                        <InputLabel
                          sx={{
                            fontWeight: 500,
                            color: theme.palette.text.secondary,
                            "&.Mui-focused": {
                              color: theme.palette.primary.main,
                              fontWeight: 600,
                            },
                          }}
                        >
                          Ҳолат
                        </InputLabel>
                        <Select
                          value={formData.status ? "true" : "false"}
                          label="Ҳолат"
                          onChange={handleSelectChange}
                          sx={{
                            backgroundColor: "rgba(248, 250, 252, 0.6)",
                            borderRadius: 2,
                            "&:hover": {
                              backgroundColor: "rgba(248, 250, 252, 0.9)",
                            },
                            "&.Mui-focused": {
                              backgroundColor: "white",
                            },
                          }}
                        >
                          <MenuItem value="false">
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: "50%",
                                  backgroundColor: theme.palette.warning.main,
                                }}
                              />
                              Дар мушоҳида
                            </Box>
                          </MenuItem>
                          <MenuItem value="true">
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: "50%",
                                  backgroundColor: theme.palette.success.main,
                                }}
                              />
                              Шифо ёфт
                            </Box>
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>

                  {/* Diagnosis Field */}
                  <Box>
                    <TextField
                      fullWidth
                      label="Ташхис"
                      variant="outlined"
                      name="diagnosis"
                      value={formData.diagnosis}
                      onChange={handleChange}
                      multiline
                      rows={3}
                      placeholder="Ташхисро тафсил диҳед"
                      sx={textFieldSx}
                    />
                  </Box>

                  {/* Symptoms Field */}
                  <Box>
                    <TextField
                      fullWidth
                      label="Аломатҳо"
                      variant="outlined"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      placeholder="Аломатҳоро тафсил диҳед"
                      sx={textFieldSx}
                    />
                  </Box>

                  {/* Prescriptions Field */}
                  <Box>
                    <TextField
                      fullWidth
                      label="Дорухатҳо"
                      variant="outlined"
                      name="recipes"
                      value={formData.recipes}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      placeholder="Дорухатҳо ва дастурҳоро ворид кунед"
                      sx={textFieldSx}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Action Buttons */}
              <Box>
                <Divider sx={{ my: 3 }} />
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent={{ xs: "stretch", sm: "flex-end" }}
                  alignItems="center"
                >
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Cancel />}
                    onClick={handleCancel}
                    size="large"
                    sx={{
                      minWidth: { xs: "100%", sm: 140 },
                      height: 48,
                      borderRadius: 2.5,
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 600,
                      borderWidth: 2,
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        borderWidth: 2,
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(239, 68, 68, 0.15)",
                      },
                    }}
                  >
                    Бекор кардан
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Save />}
                    size="large"
                    type="submit"
                    sx={{
                      minWidth: { xs: "100%", sm: 140 },
                      height: 48,
                      borderRadius: 2.5,
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 700,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      boxShadow: `0 4px 15px ${theme.palette.primary.main}40`,
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                        transform: "translateY(-2px)",
                        boxShadow: `0 8px 25px ${theme.palette.primary.main}50`,
                      },
                    }}
                  >
                    Илова кардан
                  </Button>
                </Stack>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
