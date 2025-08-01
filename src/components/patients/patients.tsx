"use client";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { People as UsersIcon } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { usePatientsStore } from "@/app/store/patients/patients";
import { useEffect } from "react";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function Patients() {
  const { getPatients, patients } = usePatientsStore();

  console.log("patients: ", patients);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
   {
  field: "fullName",
  headerName: "Full name",
  width: 120,
  sortable: false,
  renderCell: (params) => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
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
      headerName: "Birth Date",
      type: "number",
      width: 150,
    },
    { field: "phone", headerName: "Phone", width: 170 },
    { field: "diagnosis", headerName: "Diagnosis", width: 150 },
    { field: "symptoms", headerName: "Symptoms", width: 120 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => (
        <span
          style={{ color: params.value ? "green" : "blue", fontWeight: 600 }}
        >
          {params.value ? "Шифо ёфт" : "Дар мушоҳида"}
        </span>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
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
  }, []);

  return (
    <div>
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
                  <UsersIcon sx={{ width: 16, height: 16, color: "#2563eb" }} />
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
          <Paper sx={{ height: 400, width: "97%", margin: "0 auto" }}>
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
      </Card>
    </div>
  );
}
