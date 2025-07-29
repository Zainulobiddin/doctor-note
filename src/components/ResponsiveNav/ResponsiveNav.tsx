// src/components/ResponsiveNav/ResponsiveNav.tsx
"use client"; // Маҳз дар ин ҷо директиваи client-side лозим аст

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileBottomNav from "../mobile-bottom-nav/mobile-bottom-nav";
import MiniDrawer from "../layout/side-bar/side-bar";

export default function ResponsiveNav({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return (
      <>
        {children}
        <MobileBottomNav />
      </>
    );
  }

  return (
    <MiniDrawer>
      {children}
    </MiniDrawer>
  );
}
