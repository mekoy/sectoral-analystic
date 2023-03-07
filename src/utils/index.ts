import { Chart } from "chart.js";
import { ConfigOptions, ConfigOptionsAxesX, ConfigOptionsLegend } from "./type";
import dataItems from "../data/db_update.json";
import {animation} from "./animation";

const DISPLAY = true;
const BORDER = true;
const CHART_AREA = false;
const TICKS = true;
console.log(dataItems, "dataItems");

const monthLabelX = dataItems.data.filter((month) => {
  if (month.Mois) {
    return month.Mois;
  }
});

export const labels = ["Oct", "Nov", "Dec", "Jan", "Fev", "Mars"];

//get years for Data
export const yearsFull = (back: number): { label: string; year: number }[] => {
  const year: number = new Date().getFullYear();
  return Array.from({ length: back }, (v: number, i: number) => {
    return {
      label: "year",
      year: year - back + i - 3,
    };
  });
};
const plugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart: Chart, args: any, options: { color: "#000" }) => {
    const { ctx } = chart;
    console.log(ctx, "ctx");
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = options.color || "#b65555";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};
//add label axes X label weeks
// chartJs config
export const datavizConfig = [
	{
		options: {
			responsive: true,
			onClick: (indexValue: any) => indexValue,
			animation,
			plugins: {
				customCanvasBackgroundColor: {
					color: "lightGreen"
				},
				events: ["click"],
				tooltip: {
					callbacks: {
						label: (context: ConfigOptions) => {
							// console.log(context, "legent");
							if (context.dataIndex === 0) {
								return (context.label = "" + context.formattedValue);
							}
							if (context.dataIndex) {
								return context.formattedValue;
							}
						}
					}
				},
				legend: {
					display: true,
					labels: {
						filter: (legendItem: ConfigOptionsLegend) => {
							switch (legendItem.text) {
                case "Consommation années 2014 - 2019":
                  return (legendItem.fontColor = "rgb(0,0,0)");

                case "Consommation corrigée 2022":
                  return (legendItem.fontColor = "rgb(173, 52, 4)");

                case "Consommation réalisée cet hiver":
                  return (legendItem.fontColor = "rgba(255, 0, 0, 1)");

                case "Consommation remise à condition normale de température":
                  return (legendItem.fontColor = "rgba(248, 81, 9, 1)");

                default:
                  break;
              }
						},
						boxWidth: 0,
						boxHeight: 0,
						padding: 15
					},
					position: "right"
				}
			},
			scale: {
				x: {
					labels: (context: {scale: ConfigOptionsAxesX}) => {
						if (context.scale.ticks) {
							return monthLabelX.map((week) => {
								return week.semaine;
							});
						}
					}
				},
				y: {
					grid: {
						drawBorder: false
					},
					ticks: {
						beginAtZero: false
					}
				}
			}
		},
		plugins: [plugin]
	}
];
