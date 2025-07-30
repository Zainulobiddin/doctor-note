"use client";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { People as UsersIcon } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export default function Patients() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },

    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "latestDiagnosis", headerName: "Latest diagnosis", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "actions", headerName: "Actions", width: 130 },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

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
          <Paper sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
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
