"use client";
import {
  Box,
  Card,
  CardHeader,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { People as UsersIcon } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import SearchIcon from "@mui/icons-material/Search";
import BasicTabs from "./tabs-patients/tabs-patients";
import { useEffect, useState } from "react";
import { usePatientsStore } from "@/app/store/patients/patients";

export default function Patients() {
  const [search, setSearch] = useState<string>("");
  const {searchPatients, getPatients} = usePatientsStore()
   const t = useTranslations("Patients");

  useEffect(() => {

    const delayDebounce = setTimeout(() => {
      if (search.trim() === '') {
        getPatients()
      } else {
        searchPatients(search)
      }
    }, 400)
    return () => clearTimeout(delayDebounce)

  }, [search])


  return (
    <div style={{ height: 'auto',  display: 'flex', flexDirection: 'column'}}>
      <Card
        sx={{
          backgroundColor: "white",
          border: "1px solid rgba(148, 163, 184, 0.6)",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          borderRadius: 4,
          overflow: "hidden",
          height: '100%',
          flexGrow: 1, display: 'flex', flexDirection: 'column'
        }}
      >
        <CardHeader
          sx={{
            // paddingTop: "20px",
            borderBottom: "1px solid #f1f5f9",
            backgroundColor: "rgba(248, 250, 252, 0.3)",
            p: { xs: 3, md: 3 },
          }}
          title={
            <Box className="flex justify-between items-center">
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
                    {t('Беморон')}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#64748b",
                  }}
                >
                 {t('list')}
                </Typography>
              </Box>

              <Box>
                <TextField
                  placeholder={t('search')}
                  variant="outlined"
                  value={search}
                  onChange={({ target }) => setSearch(target.value)}
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
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon
                          sx={{ width: 16, height: 16, color: "#94a3b8", cursor: 'pointer' }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          }
        />
        <Box sx={{ flexGrow: 1, }}>
        <BasicTabs />
        </Box>
      </Card>
    </div>
  );
}
