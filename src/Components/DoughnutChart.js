import * as React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Direct", "Referral", "Social"],
  datasets: [
    {
      label: "# of Votes",
      data: [55, 30, 15],
      backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],

      borderWidth: 5,
    },
  ],
};

export function DoughnutChart() {
  return <Doughnut data={data} />;
}
