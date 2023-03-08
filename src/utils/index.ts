import {
	Chart,
	ChartArea,
	ChartData,
	CoreScaleOptions,
	LegendElement,
	LegendOptions,
	LinearScaleOptions
} from "chart.js";
import {ConfigOptions, ConfigOptionsAxesX, ConfigOptionsLegend} from "./type";
import dataItems from "../data/db_update.json";
import {animation} from "./animation";

const monthLabelX = dataItems.data.filter((month) => {
	if (month.Mois) {
		return month.Mois;
	}
});

export const labels = ["Oct", "Nov", "Dec", "Jan", "Fev", "Mars"];

//get years for Data
export const yearsFull = (back: number): {label: string; year: number}[] => {
	const year: number = new Date().getFullYear();
	return Array.from({length: back}, (v: number, i: number) => {
		return {
			label: "year",
			year: year - back + i - 3
		};
	});
};

const plugin = {
	id: "customCanvasBackgroundColor",
	beforeDraw: (chart: Chart, args: any, options: {color: "#000"}) => {
		const {ctx} = chart;
		console.log(ctx, "ctx");
		ctx.save();
		ctx.globalCompositeOperation = "destination-over";
		ctx.fillStyle = options.color || "#b65555";
		ctx.fillRect(0, 0, chart.width, chart.height);
		ctx.restore();
	}
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
							console.log(legendItem, "data");
							switch (legendItem.text) {
								case "Moyenne 2014-2019":
									return {
										fontColor: (legendItem.fontColor = "rgb(0,0,0)"),
										lineWidth: (legendItem.lineWidth = 0),
										borderRadius: (legendItem.borderRadius = 4)
									};
								case "Consommation corrigée 2022":
									return {
										fontColor: (legendItem.fontColor = "rgba(248, 81, 9, 1)"),
										lineWidth: (legendItem.lineWidth = 0),
										borderRadius: (legendItem.borderRadius = 4)
									};
								case "Consommation réelle 2022":
									return {
										fontColor: (legendItem.fontColor = "rgba(255, 0, 0, 1)"),
										lineWidth: (legendItem.lineWidth = 0),
										borderRadius: (legendItem.borderRadius = 4)
									};
								case "Entrainant une baisse de la consommation":
									return {
										fontColor: (legendItem.fontColor =
											"rgba(32, 192, 11, 0.9)"),
										lineWidth: (legendItem.lineWidth = 10),
										borderRadius: (legendItem.borderRadius = 4)
									};
								case "Entrainant une hausse de la consommation":
									return {
										fontColor: (legendItem.fontColor = "rgba(255, 0, 0, 1)"),
										lineWidth: (legendItem.lineWidth = 10),
										borderRadius: (legendItem.borderRadius = 4)
									};
								default:
									break;
							}
						},
						boxWidth: 15,
						boxHeight: 15,
						padding: 15
					},
					position: "right",
					maxHeight: 30,
					align: "start",
					padding: 30
				}
			},
			scale: {
				gridLines: {
					color: "rgb(105, 12, 12)",
					lineWidth: 1
				},
				x: {
					labels: (context: {scale: ConfigOptionsAxesX}) => {
						if (context.scale.ticks) {
							return monthLabelX.map((week) => {
								if (week.Mois === "1") {
									return " ";
								}
								return week.Mois;
							});
						}
					}
				},
				y: {
					beforeFit: (context: LinearScaleOptions) => {
						// console.log(context, "context++");
						if (context.axis === "y") {
							return {};
						}
					}
				}
			}
		},
		plugins: [plugin]
	}
];
