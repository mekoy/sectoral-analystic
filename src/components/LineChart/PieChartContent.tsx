import React from "react";
import PieChart from "./piedaaviz";
import { ChartOptions } from "chart.js";

export const dataDaysDecm = {
  labels: ["Residentiel", "Industrie", "Tertiaire"],
  type: "doughnut",
  index: 0,
  datasets: [
    {
      label: "",
      data: [2565, 946, 1997],
      backgroundColor: [
        "rgb(32, 0, 125)",
        "rgba(54, 162, 235, 0.2)",
        "rgb(153, 216, 237)",
      ],
      borderWidth: 0,
    },
  ],
  options: {
    cutout: 60,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: true,
        position: "right",
        legend: {
          display: true,
          labels: {
            boxWidth: 12,
            boxHeight: 0,
            padding: 0,
            usePointStyle: true,
            filter: (legendItem: ChartOptions) => {
              console.log(legendItem, "legendItem modal");
              // switch (legendItem.text) {
              // 	case "Residentiel":
              // 		return {
              // 			borderRadius: (legendItem.borderRadius = 5),
              // 			lineWidth: (legendItem.lineWidth = 5),
              // 		};
              // 	case "Industrie":
              // 		return {
              // 			borderRadius: (legendItem.borderRadius = 5)
              // 		};
              // 	case "Tertiaire":
              // 		return {
              // 			borderRadius: (legendItem.borderRadius = 5)
              // 		};
              // 	default:
              // 		break;
              // }
            },
          },
        },
      },
    },
  },
};

export const PieChartContent: React.FC<{}> = () => {
  return (
    <PieChart
      id="pieChart"
      data={dataDaysDecm}
      options={dataDaysDecm.options}
      className={"wrapp-pie"}
    />
  );
};
