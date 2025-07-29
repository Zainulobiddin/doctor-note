"use client"
import { Button, TextField, Typography } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useState } from "react";
import Image from "next/image";
export default function Dashboard() {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


  
  return (
    <div>

      <section>

          <Typography variant="h4">Control panel</Typography>

          <div className="flex flex-col md:flex-row justify-between items-center py-5 ">
            <TextField
              id="outlined-basic"
              label="ҷустуҷӯ"
              placeholder="Ҷустуҷӯи бемор"
              variant="outlined"
              className="w-[300px] bg-white"
            />
            <Button onClick={handleClickOpen} variant="contained" className="flex gap-2">
                <PersonAddAltIcon /> <p>Add new patient</p>
            </Button>
          </div>

          <section className="flex flex-col md:flex-row gap-5 justify-between py-5">
            <div className="border border-[#ccc] p-5 w-[32%] flex flex-col justify-between rounded-lg bg-white">
              <div className="flex flex-col gap-2">
                <Typography variant="h6" className="text-blue-800 text-lg">
                  Ҳамаи беморон
                </Typography>
                <Typography className="text-gray-600">
                  Шумораи умумии беморон дар система.
                </Typography>
              </div>

              <Typography
                variant="h4"
                className="text-blue-600 text-5xl font-bold"
              >
                4
              </Typography>
            </div>
            
            <div className="border border-[#ccc] p-5 w-[32%] flex flex-col justify-between rounded-lg bg-white">
              <div className="flex flex-col gap-2">
                <Typography variant="h6" className="text-blue-800 text-lg">
                  Таъинотҳо барои имрӯз
                </Typography>
                <Typography className="text-gray-600">
                  Таъинотҳои ба нақша гирифташуда барои July 29th, 2025.
                </Typography>
              </div>

              <Typography
                variant="h4"
                className="text-blue-600 text-5xl font-bold"
              >
                0
              </Typography>
            </div>
            <div className="border border-[#ccc] p-5 w-[32%] flex flex-col justify-between rounded-lg bg-white">
              <div className="flex flex-col gap-2">
                <Typography variant="h6" className="text-blue-800 text-lg">
                  Беморон дар мушоҳида
                </Typography>
                <Typography className="text-gray-600">
                  Бемороне, ки ҳоло дар табобат қарор доранд.
                </Typography>
              </div>

              <Typography
                variant="h4"
                className="text-blue-600 text-5xl font-bold"
              >
                3
              </Typography>
            </div>
          </section>

          <section className="bg-white p-5 rounded-lg flex flex-col gap-4 my-5">
            <div className="flex flex-col gap-2">
              <Typography variant="h6" className="text-blue-800 text-lg">
                Беморон
              </Typography>
              <Typography className="text-gray-600">
                Рӯйхати ҳамаи беморон.
              </Typography>
            </div>

            <section className="flex flex-wrap gap-5">

              <div className="flex flex-col gap-3 border border-[#ccc] p-5 rounded-lg">
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full w-[70px] h-[70px]"
                    src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
                    alt="img user"
                    width={70}
                    height={70}
                  />
                  <div>
                    <Typography variant="h5" className="text-xl">
                      Аҳмад Саидов
                    </Typography>
                    <Typography className="font-semibold ">
                      Дар мушоҳида
                    </Typography>
                  </div>
                </div>

                <div>
                  <Typography className="text-blue-800 font-semibold">
                    Ташхиси охирин: <span className="text-gray-900">Грипп</span>
                  </Typography>
                  <Typography className="text-blue-800 font-semibold">
                    Ташрифи навбатӣ:{" "}
                    <span className="text-gray-900">2024-07-20</span>
                  </Typography>
                </div>
              </div>

              <div className="flex flex-col gap-3 border border-[#ccc] p-5 rounded-lg">
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full w-[70px] h-[70px]"
                    src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
                    alt="img user"
                    width={70}
                    height={70}
                  />
                  <div>
                    <Typography variant="h5" className="text-xl">
                      Аҳмад Саидов
                    </Typography>
                    <Typography className="font-semibold ">
                      Дар мушоҳида
                    </Typography>
                  </div>
                </div>

                <div>
                  <Typography className="text-blue-800 font-semibold">
                    Ташхиси охирин: <span className="text-gray-900">Грипп</span>
                  </Typography>
                  <Typography className="text-blue-800 font-semibold">
                    Ташрифи навбатӣ:{" "}
                    <span className="text-gray-900">2024-07-20</span>
                  </Typography>
                </div>
              </div>

              <div className="flex flex-col gap-3 border border-[#ccc] p-5 rounded-lg">
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full w-[70px] h-[70px]"
                    src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
                     alt="img user"
                    width={70}
                    height={70}
                  />
                  <div>
                    <Typography variant="h5" className="text-xl">
                      Аҳмад Саидов
                    </Typography>
                    <Typography className="font-semibold ">
                      Дар мушоҳида
                    </Typography>
                  </div>
                </div>

                <div>
                  <Typography className="text-blue-800 font-semibold">
                    Ташхиси охирин: <span className="text-gray-900">Грипп</span>
                  </Typography>
                  <Typography className="text-blue-800 font-semibold">
                    Ташрифи навбатӣ:{" "}
                    <span className="text-gray-900">2024-07-20</span>
                  </Typography>
                </div>
              </div>
            </section>
          </section>

      </section>
    </div>
  );
}
