"use client";

import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LockIcon from "@mui/icons-material/Lock";
import LanguageIcon from "@mui/icons-material/Language";
// import Link from "next/link";
import Container from "../container/container";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import photo1 from "#/photo1.jpg"
import photo2 from "#/photo2.jpg"
import photo3 from "#/photo3.jpg"
import photo4 from "#/photo4.png"



export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [lang, setLang] = useState("");

  const swiperPhotos = [
    {
      id: 1,
      src: photo1,
      title: "Назорати беморонро бо чанд клик анҷом диҳед",
    },
    {
      id: 2,
      src: photo2,
      title: "Сабти осони ташхис, доруҳо ва санаҳои назорат",
    },
    {
      id: 3,
      src: photo3,
      title: "Ба ҳар бемор диққати инфиродӣ диҳед — бо ёрии Doctor Note",
    },
    {
      id: 4,
      src: photo4,
      title: "Аз даст надодани санаҳои муҳим — ҳеҷ гоҳ дигар фаромӯш намешавад",
    },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };
  return (
    <>
      <Container>

        <header className=" py-5 flex justify-between items-center">
          <Typography variant="h4">DoctorNote</Typography>
          <Box className="flex items-center gap-4">
            <Box sx={{ height: 40 }}>
              {" "}
              {/* пасттар шуд */}
              <FormControl fullWidth sx={{ height: "100%" }}>
                <InputLabel id="language-select-label" shrink={true}>
                  Забон
                </InputLabel>

                <Select
                  value={lang}
                  label="Забон"
                  onChange={handleChange}
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

            <Button
              variant="outlined"
              color="success"
              sx={{ height: 40, minWidth: 120, fontSize: "0.85rem" }}
            >
              Даромад
            </Button>
          </Box>
        </header>

        <Swiper
          modules={[A11y, Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {swiperPhotos.map((img) => (
            <SwiperSlide key={img.id}>
              <Image className="w-[80%] m-auto h-[500px] " src={img.src} alt="photo doctors" width={0} height={1000} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Box sx={{ py: 8 }}>
          {/* Hero Section */}
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Doctor Note — Ассистенти рақамии шумо дар назорати беморон
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={4}>
              Ба таври осон беморонро сабт намоед, назорат баред ва гузориш
              гиред
            </Typography>
          </Box>

          {/* Features Section */}
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
          >
            Чаро Doctor Note?
          </Typography>

          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={4}
            mt={4}
          >
            {features.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                width={isMobile ? "100%" : "30%"}
                textAlign="center"
                px={2}
                py={3}
                borderRadius={3}
                boxShadow={2}
                bgcolor="background.paper"
              >
                <Box fontSize={50} color="success.main" mb={1}>
                  {icon}
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {title}
                </Typography>
                <Typography color="text.secondary">{description}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}

const features = [
  {
    icon: <LocalHospitalIcon />,
    title: "Назорати беморон",
    description:
      "Сабти маълумоти бемор, ташхисҳо ва дорухатҳо дар як платформа.",
  },
  {
    icon: <AccessTimeIcon />,
    title: "Огоҳии назоратӣ",
    description: "Система ба шумо ёдрас мекунад кай бемор бояд назорат шавад.",
  },
  {
    icon: <BarChartIcon />,
    title: "Ҳисоботи оморӣ",
    description: "Гузориш ва диаграммаҳо барои таҳлили натиҷаҳои табобат.",
  },
  {
    icon: <SmartphoneIcon />,
    title: "Дастрасӣ аз ҳама ҷо",
    description: "Платформа дар телефон ва компютер кор мекунад.",
  },
  {
    icon: <LockIcon />,
    title: "Амнияти баланд",
    description: "Маълумоти беморон бо рамзгузорӣ муҳофизат мешавад.",
  },
  {
    icon: <LanguageIcon />,
    title: "Забони тоҷикӣ",
    description: "Интерфейс бо тоҷикӣ ва русӣ — барои ҳамаи табибон мувофиқ.",
  },
];
