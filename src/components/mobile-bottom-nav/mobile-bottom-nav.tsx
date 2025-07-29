"use client";

import { SyntheticEvent, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useRouter } from "next/navigation";


export default function MobileBottomNav() {
  const [value, setValue] = useState("recents");
  const router = useRouter();
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    if (newValue === "recents") router.push("/dashboard");
    if (newValue === "favorites") router.push("/patients");
    if (newValue === "like") router.push("/add-patient");
    if (newValue === "folder") router.push("/appointments");
    if (newValue === "nearby") router.push("/reports");
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999 }}
    >
      <BottomNavigationAction
        // label="Dashboard"
        value="recents"
        icon={<DashboardIcon />}
      />
      <BottomNavigationAction
        // label="Patients"
        value="favorites"
        icon={<GroupIcon />}
      />
      <BottomNavigationAction
        // label="Add Patient"
        value="like"
        icon={<GroupAddIcon />}
      />
      <BottomNavigationAction
        // label="Appointments"
        value="folder"
        icon={<CalendarMonthIcon />}
      />
      <BottomNavigationAction
        // label="Reports"
        value="nearby"
        icon={<BarChartIcon />}
      />
    </BottomNavigation>
  );
}
