"use client";

import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Chip,
  Container,
  InputAdornment,
} from "@mui/material";
import {
  PersonAdd as UserPlusIcon,
  People as UsersIcon,
  CalendarToday as CalendarIcon,
  MonitorHeart as ActivityIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import AddPatients from "../add-patient/add-patient";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    // <AddPatients open={open} setOpen={setOpen} />
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: { xs: 2, md: 3, lg: 4 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "80rem",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 4,
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(148, 163, 184, 0.6)",
            p: { xs: 3, md: 4 },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#2563eb",
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIcon sx={{ width: 20, height: 20, color: "white" }} />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.875rem" },
                  fontWeight: 700,
                  color: "#1e293b",
                  letterSpacing: "-0.025em",
                }}
              >
                Control panel
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "20rem" },
                }}
              >
                <TextField
                  placeholder="Ҷустуҷӯи бемор"
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "2.75rem",
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon
                          sx={{ width: 16, height: 16, color: "#94a3b8" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Button
                onClick={handleClickOpen}
                variant="contained"
                startIcon={<UserPlusIcon sx={{ width: 16, height: 16 }} />}
                sx={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  px: 3,
                  py: 1.5,
                  height: "2.75rem",
                  borderRadius: 3,
                  textTransform: "none",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: "#1d4ed8",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                Иловаи бемори нав
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Statistics Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "white",
              border: "1px solid rgba(148, 163, 184, 0.6)",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              borderRadius: 4,
              overflow: "hidden",
              transition: "all 0.2s",
              "&:hover": {
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardHeader
              sx={{
                pb: 1.5,
                "& .MuiCardHeader-content": {
                  overflow: "visible",
                },
              }}
              title={
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: "#dbeafe",
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <UsersIcon
                        sx={{ width: 24, height: 24, color: "#2563eb" }}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        color: "#1e40af",
                        mt: 2,
                      }}
                    >
                      Ҳамаи беморон
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#64748b",
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                      }}
                    >
                      Шумораи умумии беморон дар система.
                    </Typography>
                  </Box>
                </Box>
              }
            />

            <CardContent>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "2.25rem",
                  fontWeight: 700,
                  color: "#2563eb",
                  mb: 1,
                }}
              >
                4
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "white",
              border: "1px solid rgba(148, 163, 184, 0.6)",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              borderRadius: 4,
              overflow: "hidden",
              transition: "all 0.2s",
              "&:hover": {
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardHeader
              sx={{
                pb: 1.5,
                "& .MuiCardHeader-content": {
                  overflow: "visible",
                },
              }}
              title={
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: "#d1fae5",
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CalendarIcon
                        sx={{ width: 24, height: 24, color: "#059669" }}
                      />
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "#1e40af",
                      mt: 2,
                    }}
                  >
                    Таъинотҳо барои имрӯз
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Таъинотҳои ба нақша гирифташуда барои July 29th, 2025.
                  </Typography>
                </Box>
              }
            />
            <CardContent>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "2.25rem",
                  fontWeight: 700,
                  color: "#059669",
                  mb: 1,
                }}
              >
                0
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "white",
              border: "1px solid rgba(148, 163, 184, 0.6)",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              borderRadius: 4,
              overflow: "hidden",
              transition: "all 0.2s",
              "&:hover": {
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardHeader
              sx={{
                pb: 1.5,
                "& .MuiCardHeader-content": {
                  overflow: "visible",
                },
              }}
              title={
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: "#fef3c7",
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ActivityIcon
                        sx={{ width: 24, height: 24, color: "#d97706" }}
                      />
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "#1e40af",
                      mt: 2,
                    }}
                  >
                    Беморон дар мушоҳида
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Бемороне, ки ҳоло дар табобат қарор доранд.
                  </Typography>
                </Box>
              }
            />
            <CardContent>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "2.25rem",
                  fontWeight: 700,
                  color: "#d97706",
                  mb: 1,
                }}
              >
                3
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Patients Section */}
        <Card
          sx={{
            backgroundColor: "white",
            border: "1px solid rgba(148, 163, 184, 0.6)",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <CardHeader
            sx={{
              borderBottom: "1px solid #f1f5f9",
              backgroundColor: "rgba(248, 250, 252, 0.3)",
              p: { xs: 3, md: 4 },
            }}
            title={
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: "#dbeafe",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <UsersIcon
                      sx={{ width: 16, height: 16, color: "#2563eb" }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "#1e40af",
                    }}
                  >
                    Беморон
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#64748b",
                  }}
                >
                  Рӯйхати ҳамаи беморон.
                </Typography>
              </Box>
            }
          />

          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  lg: "repeat(3, 1fr)",
                  xl: "repeat(3, 1fr)",
                },
                gap: 3,
              }}
            >
              {/* Patient Card 1 */}
              <Card
                sx={{
                  border: "1px solid rgba(148, 163, 184, 0.6)",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <Image
                        className="rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                        alt="Patient avatar"
                        width={64}
                        height={64}
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #f1f5f9",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          right: -4,
                          width: 20,
                          height: 20,
                          backgroundColor: "#10b981",
                          borderRadius: "50%",
                          border: "2px solid white",
                        }}
                      />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: "#1e293b",
                          mb: 0.5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Аҳмад Саидов
                      </Typography>
                      <Chip
                        label="Дар мушоҳида"
                        size="small"
                        sx={{
                          backgroundColor: "#dcfce7",
                          color: "#15803d",
                          fontSize: "0.75rem",
                          height: "auto",
                          "& .MuiChip-label": {
                            px: 1,
                            py: 0.25,
                          },
                          "&:hover": {
                            backgroundColor: "#dcfce7",
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташхиси охирин:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        Грипп
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташрифи навбатӣ:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        2024-07-20
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Patient Card 2 */}
              <Card
                sx={{
                  border: "1px solid rgba(148, 163, 184, 0.6)",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <Image
                        className="rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                        alt="Patient avatar"
                        width={64}
                        height={64}
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #f1f5f9",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          right: -4,
                          width: 20,
                          height: 20,
                          backgroundColor: "#10b981",
                          borderRadius: "50%",
                          border: "2px solid white",
                        }}
                      />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: "#1e293b",
                          mb: 0.5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Аҳмад Саидов
                      </Typography>
                      <Chip
                        label="Дар мушоҳида"
                        size="small"
                        sx={{
                          backgroundColor: "#dcfce7",
                          color: "#15803d",
                          fontSize: "0.75rem",
                          height: "auto",
                          "& .MuiChip-label": {
                            px: 1,
                            py: 0.25,
                          },
                          "&:hover": {
                            backgroundColor: "#dcfce7",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташхиси охирин:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        Грипп
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташрифи навбатӣ:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        2024-07-20
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Patient Card 3 */}
              <Card
                sx={{
                  border: "1px solid rgba(148, 163, 184, 0.6)",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <Image
                        className="rounded-full"
                        src="/placeholder.svg?height=64&width=64"
                        alt="Patient avatar"
                        width={64}
                        height={64}
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #f1f5f9",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          right: -4,
                          width: 20,
                          height: 20,
                          backgroundColor: "#10b981",
                          borderRadius: "50%",
                          border: "2px solid white",
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: "#1e293b",
                          mb: 0.5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Аҳмад Саидов
                      </Typography>
                      <Chip
                        label="Дар мушоҳида"
                        size="small"
                        sx={{
                          backgroundColor: "#dcfce7",
                          color: "#15803d",
                          fontSize: "0.75rem",
                          height: "auto",
                          "& .MuiChip-label": {
                            px: 1,
                            py: 0.25,
                          },
                          "&:hover": {
                            backgroundColor: "#dcfce7",
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташхиси охирин:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        Грипп
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташрифи навбатӣ:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        2024-07-20
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  border: "1px solid rgba(148, 163, 184, 0.6)",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <Image
                        className="rounded-full"
                        src="/placeholder.svg?height=64&width=64"
                        alt="Patient avatar"
                        width={64}
                        height={64}
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #f1f5f9",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          right: -4,
                          width: 20,
                          height: 20,
                          backgroundColor: "#10b981",
                          borderRadius: "50%",
                          border: "2px solid white",
                        }}
                      />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: "#1e293b",
                          mb: 0.5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Аҳмад Саидов
                      </Typography>
                      <Chip
                        label="Дар мушоҳида"
                        size="small"
                        sx={{
                          backgroundColor: "#dcfce7",
                          color: "#15803d",
                          fontSize: "0.75rem",
                          height: "auto",
                          "& .MuiChip-label": {
                            px: 1,
                            py: 0.25,
                          },
                          "&:hover": {
                            backgroundColor: "#dcfce7",
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташхиси охирин:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        Грипп
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташрифи навбатӣ:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        2024-07-20
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Patient Card 2 */}
              <Card
                sx={{
                  border: "1px solid rgba(148, 163, 184, 0.6)",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <Image
                        className="rounded-full"
                        src="/placeholder.svg?height=64&width=64"
                        alt="Patient avatar"
                        width={64}
                        height={64}
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #f1f5f9",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          right: -4,
                          width: 20,
                          height: 20,
                          backgroundColor: "#10b981",
                          borderRadius: "50%",
                          border: "2px solid white",
                        }}
                      />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: "#1e293b",
                          mb: 0.5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Аҳмад Саидов
                      </Typography>
                      <Chip
                        label="Дар мушоҳида"
                        size="small"
                        sx={{
                          backgroundColor: "#dcfce7",
                          color: "#15803d",
                          fontSize: "0.75rem",
                          height: "auto",
                          "& .MuiChip-label": {
                            px: 1,
                            py: 0.25,
                          },
                          "&:hover": {
                            backgroundColor: "#dcfce7",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташхиси охирин:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        Грипп
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташрифи навбатӣ:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        2024-07-20
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Patient Card 3 */}
              <Card
                sx={{
                  border: "1px solid rgba(148, 163, 184, 0.6)",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <Image
                        className="rounded-full"
                        src="/placeholder.svg?height=64&width=64"
                        alt="Patient avatar"
                        width={64}
                        height={64}
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #f1f5f9",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          right: -4,
                          width: 20,
                          height: 20,
                          backgroundColor: "#10b981",
                          borderRadius: "50%",
                          border: "2px solid white",
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: "#1e293b",
                          mb: 0.5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Аҳмад Саидов
                      </Typography>
                      <Chip
                        label="Дар мушоҳида"
                        size="small"
                        sx={{
                          backgroundColor: "#dcfce7",
                          color: "#15803d",
                          fontSize: "0.75rem",
                          height: "auto",
                          "& .MuiChip-label": {
                            px: 1,
                            py: 0.25,
                          },
                          "&:hover": {
                            backgroundColor: "#dcfce7",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташхиси охирин:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        Грипп
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1d4ed8",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        Ташрифи навбатӣ:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          fontSize: "0.875rem",
                        }}
                      >
                        2024-07-20
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>
      </Container>
      {open && <AddPatients open={open} setOpen={setOpen} />}
    </Box>
  );
}
