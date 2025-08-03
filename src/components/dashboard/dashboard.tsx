"use client";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,

  Container,
} from "@mui/material";
import {
  People as UsersIcon,
  CalendarToday as CalendarIcon,
  MonitorHeart as ActivityIcon,
} from "@mui/icons-material";
import { useTranslations } from "next-intl";
import ApexChart from "../pie-chart/pie-chart";



export default function Dashboard() {
   const t = useTranslations("Dashboard");
  return (
    <Box
    className='flex flex-col gap-5'
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
                      {t('allPatients')}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#64748b",
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {t('countPatients')}
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
                    {t('today')}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {t('date')} July 29th, 2025.
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
                    {t('Беморон дар мушоҳида')}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {t('tabobat')}
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
      </Container>
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
      <ApexChart />
      </Container>
    </Box>
  );
}
