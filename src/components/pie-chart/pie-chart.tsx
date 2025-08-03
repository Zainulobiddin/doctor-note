"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ApexChart: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      width: 380,
      type: "pie", 
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series: number[] = [44, 55, 13, 43, 22];

  return (
    <div>
      <h2>Pie Chart</h2>
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="pie"
        width={380}
      />
    </div>
  );
};

export default ApexChart;
