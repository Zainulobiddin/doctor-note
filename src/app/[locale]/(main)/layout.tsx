'use client';
import MiniDrawer from "@/components/layout/side-bar/side-bar";
import ProtectedRoute from "@/components/protectedRoute/protectedRoute";
import ResponsiveNav from "@/components/ResponsiveNav/ResponsiveNav";
import { Box } from "@mui/material";

 // Илова кунед, агар дар он компонентҳои танҳо-клиент бошанд

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <ResponsiveNav>
        <MiniDrawer>
          <Box sx={{ display: "flex" }}>
            {children}
          </Box>
        </MiniDrawer>
      </ResponsiveNav>
    </ProtectedRoute>
  );
}
