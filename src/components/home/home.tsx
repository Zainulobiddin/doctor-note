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
import Container from "../container/container";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Fragment, useState } from "react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import photo1 from "#/photo11.png";
import photo3 from "#/photo33.png";
import photo4 from "#/photo44.png";
import phone1 from "#/phone1.png";
import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import loginPhoto from "#/login.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import logo from '#/logo.png';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [lang, setLang] = useState("");
  const [open, setOpen] = useState(false);
const swiperPhotos = [
  {
    id: 1,
    src: phone1,
    title: "Doctor Note — Ассистенти рақамии шумо дар назорати беморон",
    description: "Ба таври осон беморонро сабт намоед, назорат баред ва гузориш гиред",
    bg: "from-[#bbdefb] via-[#64b5f6] to-[#1e88e5]", // кабуди равшан → миёна → торик
  },
  {
    id: 2,
    src: photo1,
    title: "Назорати беморонро бо чанд клик анҷом диҳед",
    description: "Ҳисобот, дорухат ва ташхисҳоро бе қоғаз ва дарҳол дидан гиред.",
    bg: "from-[#b3e5fc] via-[#4fc3f7] to-[#0288d1]", // обии равшан → кабуди миёна → обии торик
  },
  {
    id: 3,
    src: photo3,
    title: "Ба ҳар бемор диққати шахсӣ диҳед — осон ва зуд.",
    description: "Барои ҳар бемор таърихи ҷудогона, ташхис ва табобат захира мешавад.",
    bg: "from-[#e1f5fe] via-[#81d4fa] to-[#039be5]", // обии паст → миёна → зич
  },
  {
    id: 4,
    src: photo4,
    title: "Маълумоти тиббӣ — ҳамеша дар дастрасии шумо.",
    description: "Новобаста аз макон — дар телефон, планшет ё компютер беморонро назорат кунед.",
    bg: "from-[#e3f2fd] via-[#90caf9] to-[#1565c0]", // сабуки кабуд → миёна → торик
  },
];



  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };

  const handleOpen = () => {
    setOpen(!open);
    console.log("salom");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] shadow-md fixed top-0 left-0 right-0 z-50 ">
        <Container>
          <header className="px-4 md:px-0 h-[80px] rounded-xl flex justify-between items-center ">
            <Image src={logo} alt="logo doctor note"  width={200} height={100} className="w-[120px] h-[120px] object-contain" />
            <Box className="flex items-center gap-4">
              <Box sx={{ height: 40 }} className="hidden md:flex">
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
                sx={{ height: 40, minWidth: 120, fontSize: "0.85rem" }}
                onClick={handleOpen}
              >
                Даромад
              </Button>
            </Box>
          </header>
        </Container>
      </section>

      <section className="pt-40 bg-gradient-to-r from-[#fdfbfb] to-[#f7f8f8]">
        <Container>
          <Swiper
            modules={[A11y, Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            loop={true}
            className="rounded-2xl shadow-lg"
          >
            {swiperPhotos.map((img) => (
              <SwiperSlide key={img.id}>
                <Box
                  className={`flex items-center justify-between gap-10 px-10 py-20 h-[480px] bg-gradient-to-r ${img.bg} rounded-2xl`}
                  sx={{
                    flexDirection: { xs: "column-reverse", md: "row" },
                    textAlign: { xs: "center", md: "left" },
                    px: { xs: 4, md: 10 },
                    py: { xs: 8, md: 20 },
                    height: { xs: "auto", md: "480px" },
                  }}
                >
                  <Box
                    className="flex flex-col gap-2"
                    sx={{ maxWidth: { xs: "100%", md: "50%" } }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 600,
                        color: "#2b2b2b",
                        fontSize: { xs: "1.8rem", md: "3rem" },
                      }}
                    >
                      {img.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mt: 2,
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        color: "#444",
                      }}
                    >
                      {img.description}
                    </Typography>
                  </Box>

                  <Image
                    className="rounded-xl object-contain max-h-[450px]"
                    src={img.src}
                    alt="photo doctors"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      // maxWidth: "450px",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box sx={{ py: 10 }}>
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
                  width={isMobile ? "90%" : "30%"}
                  textAlign="center"
                  px={3}
                  py={4}
                  borderRadius={4}
                  boxShadow={3}
                  bgcolor="#ffffff"
                  sx={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: 6,
                      background: "#f0f4f8",
                    },
                  }}
                >
                  <Box
                    fontSize={64}
                    color="#4dabf7"
                    mb={2}
                    className="w-[70px] m-auto p-[10px] flex items-center justify-center rounded-[15px] bg-[#e3f2fd]"
                  >
                    {icon}
                  </Box>
                  <Typography
                    color="#1e88e5"
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {title}
                  </Typography>
                  <Typography color="textSecondary" fontSize="0.95rem">
                    {description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </section>

      <footer className="bg-gray-900 py-3">
        <Container>
          <Box
            component="footer"
            sx={{
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "start",
              textAlign: { xs: "center", sm: "left" },
              color: "white",
            }}
          >
            <Box className="flex flex-col gap-2 items-start">
              <Typography variant="h4">Doctor Note</Typography>
              <Typography variant="body2" className="text-gray-400">
                Ассистенти рақамии назорати беморон.
              </Typography>
              <Box className="flex items-center gap-3 mt-2">
                <LocalPhoneIcon color="info" className="cursor-pointer " />
                <TelegramIcon color="info" className="cursor-pointer " />
                <EmailIcon color="info" className="cursor-pointer " />
                <InstagramIcon color="info" className="cursor-pointer " />
              </Box>
            </Box>

            <Box>
              <Box sx={{ display: "flex", gap: "1rem", mt: { xs: 2, sm: 0 } }}>
                <Link href="#" color="inherit">
                  Хизматҳо
                </Link>
                <Link href="#" color="inherit">
                  Тамос
                </Link>
                <Link href="#" color="inherit">
                  Шартҳо
                </Link>
              </Box>
              <Typography className="text-gray-400">
                © {new Date().getFullYear()} Ҳамаи ҳуқуқҳо ҳифз шудаанд.
              </Typography>
            </Box>
          </Box>
        </Container>
      </footer>

      <Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <Box className="md:w-[320px] h-[350px] flex flex-col gap-2">
              <Image
                src={loginPhoto}
                alt="image login"
                width={320}
                height={200}
              />
              <p className="text-[18px] font-semibold  ">Тарзи даромаданро интихоб кунед:</p>
              <Link href={'/login'}>
              <Button className="w-full" variant="contained">Даромад</Button>
              </Link>
              <Link href={'/register'}>
              <Button className="w-full" variant="outlined">Бақайдгирӣ</Button>
              </Link>
            </Box>
          </DialogContent>
        </Dialog>
      </Fragment>
    </>
  );
}

const features = [
  {
    icon: <LocalHospitalIcon sx={{ width: "60px", height: "60px" }} />,
    title: "Назорати беморон",
    description:
      "Сабти маълумоти бемор, ташхисҳо ва дорухатҳо дар як платформа.",
  },
  {
    icon: <AccessTimeIcon sx={{ width: "60px", height: "60px" }} />,
    title: "Огоҳии назоратӣ",
    description: "Система ба шумо ёдрас мекунад кай бемор бояд назорат шавад.",
  },
  {
    icon: <BarChartIcon sx={{ width: "60px", height: "60px" }} />,
    title: "Ҳисоботи оморӣ",
    description: "Гузориш ва диаграммаҳо барои таҳлили натиҷаҳои табобат.",
  },
  {
    icon: <SmartphoneIcon sx={{ width: "60px", height: "60px" }} />,
    title: "Дастрасӣ аз ҳама ҷо",
    description: "Платформа дар телефон ва компютер кор мекунад.",
  },
  {
    icon: <LockIcon sx={{ width: "60px", height: "60px" }} />,
    title: "Амнияти баланд",
    description: "Маълумоти беморон бо рамзгузорӣ муҳофизат мешавад.",
  },
  {
    icon: <LanguageIcon sx={{ width: "60px", height: "60px" }} />,
    title: "Забони тоҷикӣ",
    description: "Интерфейс бо тоҷикӣ ва русӣ — барои ҳамаи табибон мувофиқ.",
  },
];
