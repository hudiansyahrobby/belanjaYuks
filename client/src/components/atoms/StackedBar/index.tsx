import React from "react";
import { Bar } from "react-chartjs-2";

interface Data {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

interface Options {
  scales: {
    yAxes: {
      stacked: boolean;
      ticks: {
        beginAtZero: boolean;
      };
    }[];
    xAxes: {
      stacked: boolean;
    }[];
  };
}

interface StackedBarProps {
  data: Data;
  options: Options;
}

const StackedBar: React.FC<StackedBarProps> = ({ data, options }) => (
  <Bar data={data} options={options} type="line" style={{ width: "100%" }} />
);

export default StackedBar;
