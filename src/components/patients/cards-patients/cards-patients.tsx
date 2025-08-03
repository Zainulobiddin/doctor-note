"use client";

import Image from "next/image";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { usePatientsStore } from "@/app/store/patients/patients";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function CardsPatients() {
  const { getPatients, patients } = usePatientsStore();
  const t = useTranslations("cards");

  useEffect(() => {
    getPatients();
  }, [getPatients]);

  return (
    <div>
      {/* Patients Section */}
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
        {patients.map((patient) => (
          <Card
            key={patient.id}
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
                    src={patient.image}
                    alt="Patient avatar"
                    width={64}
                    height={64}
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #f1f5f9",
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
                    {patient.fullName}
                  </Typography>
                  <Chip
                    label={patient.status ? t("healed") : t("observation")}
                    size="small"
                    sx={{
                      // ""
                      color: patient.status ? "#007a29" : "blue",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      height: "auto",
                      "& .MuiChip-label": {
                        px: 1,
                        py: 0.25,
                      },
                      "&:hover": {
                        backgroundColor: patient.status ? "#dcfce7" : "#aad4ec",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#1d4ed8",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                    }}
                  >
                    {t("last")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#334155",
                      fontSize: "0.875rem",
                    }}
                  >
                    {patient.diagnosis}
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
                    {t("come")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#334155",
                      fontSize: "0.875rem",
                    }}
                  >
                    {patient.dateFirstVisit}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
        {/* Patient Card 1 */}
      </Box>
    </div>
  );
}
