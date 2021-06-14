import { ChartData } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

interface StackedBarProps {
  data: ChartData | ((canvas: HTMLCanvasElement) => ChartData);
}

const chartOptions = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const StackedBar: React.FC<StackedBarProps> = ({ data }) => (
  <Bar
    data={data}
    options={chartOptions}
    type="line"
    // style={{ display: "block", overflowX: "auto", whiteSpace: "nowrap" }}
  />
);

export default StackedBar;
