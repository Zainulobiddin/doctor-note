"use client";

import { useState } from "react";
import Link from "next/link";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
  IconButton,
  Typography,
  Drawer as MuiDrawer,
  CssBaseline,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const drawerWidth = 220;
const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
  { text: "Patients", icon: <GroupIcon />, href: "/patients" },
  { text: "Add Patient", icon: <GroupAddIcon />, href: "/add-patient" },
  { text: "Appointments", icon: <CalendarMonthIcon />, href: "/appointments" },
  { text: "Reports", icon: <BarChartIcon />, href: "/reports" },
  { text: "Settings", icon: <SettingsIcon />, href: "/settings" },
  {text: 'Profile', icon: <AccountCircleIcon />, href: '/profile' }
];
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  // 90 305 12 96

  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)", background: '#fdfbfb' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{
              marginRight: 5,
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "8px",
              transition: "0.3s ease",
              "&:hover": {
                backgroundColor: "#004ba0",
                color: "#ffeb3b",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Container> */}
            <Box className="max-w-[1200px] m-auto flex items-center justify-between w-full px-1 py-1">
              <Typography
                variant="h4"
                noWrap
                component="div"
                className="text-gray-800"
              >
                Doctor Note
              </Typography>

              <Box className="flex items-center gap-2">
                <Box sx={{ height: 40 }} className="hidden md:flex">
                  <FormControl fullWidth sx={{ height: "100%" }}>
                    <InputLabel id="language-select-label" shrink={true}>
                      Забон
                    </InputLabel>

                    <Select
                      value={lang}
                      label="Забон"
                      onChange={handleChange}
                      color="primary"
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{
                        height: "100%",
                        minHeight: 40,
                        fontSize: "0.85rem",
                        pt: 0.5,
                      }}
                      renderValue={(selected) => {
                        if (!selected) {
                          return (
                            <Box display="flex" alignItems="center" gap={1}>
                              <LanguageIcon color="action" fontSize="small" />
                              Забон
                            </Box>
                          );
                        }

                        return (
                          <Box display="flex" alignItems="center" gap={1}>
                            <LanguageIcon color="action" fontSize="small" />
                            {selected === "tj"
                              ? "tj"
                              : selected === "tu"
                              ? "ru"
                              : ""}
                          </Box>
                        );
                      }}
                    >
                      <MenuItem value={"tj"}>ru</MenuItem>
                      <MenuItem value={"tu"}>tj</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <IconButton color="primary">
                  <NotificationsNoneIcon />
                </IconButton>
                <IconButton color="primary">
                  <AccountCircleIcon/>
                </IconButton>
                  
              </Box>
            </Box>
          {/* </Container> */}
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="mt-10 "></DrawerHeader>
        {/* <Divider /> */}

        <List className="">
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <Link href={item.href} passHref>
                <ListItemButton className="hover:bg-gray-300 w-[220px]">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText className="text-blue-900 font-bold" primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        className="bg-gradient-to-r from-[#fdfbfb] to-[#f7f8f8]"
        sx={(theme) => ({
          flexGrow: 1,
          padding: theme.spacing(3),
          marginTop: `66px`,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        })}
      >
        {children}
      </Box>
    </Box>
  );
}
