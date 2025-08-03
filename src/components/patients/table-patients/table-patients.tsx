"use client";

import { usePatientsStore } from "@/app/store/patients/patients";
import { useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, CardContent, IconButton } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TablePatients() {
  const { getPatients, patients } = usePatientsStore();
  const t = useTranslations("TablePatients");

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "fullName",
      headerName: t('fullname'),
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src={params.row.image}
            alt={params.row.fullName}
            width={32}
            height={32}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span>{params.row.fullName}</span>
        </div>
      ),
    },

    {
      field: "birthDate",
      headerName: t('birthday'),
      type: "number",
      width: 150,
    },

    { field: "phone", headerName: t('phone'), width: 170 },
    { field: "diagnosis", headerName: t("Diagnosis"), width: 150 },
    {
      field: "status",
      headerName: t('Status'),
      width: 130,
      renderCell: (params) => (
        <span
          style={{ color: params.value ? "green" : "blue", fontWeight: 600 }}
        >
          {params.value ? t('healed') : t('observation')}
        </span>
      ),
    },
    {
      field: "actions",
      headerName: t("Actions"),
      width: 120,
      renderCell: () => (
        <Box>
          <IconButton color="primary">
            <EditSquareIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteForeverIcon />
          </IconButton>
          <IconButton color="secondary">
            <RemoveRedEyeIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  useEffect(() => {
    getPatients();
  }, [getPatients]);

  return (
    <div style={{ height: "auto", width: "100%", overflow: "auto" }}>
      <CardContent sx={{ p: { xs: 3, md: 0 } }}>
        <Paper sx={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={patients}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </CardContent>
    </div>
  );
}
