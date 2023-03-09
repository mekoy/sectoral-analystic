import {Chart, LinearScaleOptions} from "chart.js";
import {ConfigOptions, ConfigOptionsAxesX, ConfigOptionsLegend} from "./type";
import dataItems from "../data/db_update.json";
import {animation} from "./animation";
import {actions} from "./actions";
import {externalTooltipHandler} from "./generateTooltipExternal";

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

//add label axes X label weeks
// chartJs config
export const datavizConfig = [
	{
		type: "scatter",
		options: {
			responsive: true,
			onClick: (indexValue: any) => indexValue,
			interaction: {
				mode: "index",
				intersect: false
			},
			animation,
			actions,
			plugins: {
				title: {
					display: true,
					text: "Puissance moyenne semaine en GW",
					color: "#ccc",
					font: {
						size: 14,
						weight: "normal",
						style: "normal"
					},
					align: "start",
					padding: {
						bottom: 20
					}
				},
				events: ["click"],
				tooltip: {
					enabled: true,
					position: "nearest",
					callbacks: {
						label: (context: ConfigOptions) => {
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
					title: {
						display: true,
						color: "rgb(0, 0, 0)",
						text: "Text custom",
						position: "start",
						padding: {
							top: 45,
							left: 25,
							right: 30
						},
						font: {
							size: 14,
							weight: "bold"
						}
					},
					labels: {
						boxWidth: 12,
						boxHeight: 0,
						padding: 20,
						filter: (legendItem: ConfigOptionsLegend) => {
							console.log(legendItem, "data");
							switch (legendItem.text) {
								case "Moyenne 2014-2019":
									return {
										borderRadius: (legendItem.borderRadius = 2)
									};
								case "Consommation corrigée 2022":
									return {
										borderRadius: (legendItem.borderRadius = 2)
									};
								case "Consommation réelle 2022":
									return {
										borderRadius: (legendItem.borderRadius = 2)
									};
								case "Entrainant une baisse de la consommation":
									return {
										borderRadius: (legendItem.borderRadius = 2)
									};
								case "Entrainant une hausse de la consommation":
									return {
										borderRadius: (legendItem.borderRadius = 2)
									};
								case "Entrainant une baisse de la consommation":
									return {
										borderRadius: (legendItem.borderRadius = 2)
									};
								default:
									break;
							}
						}
					},
					position: "right",
					align: "start"
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
		}
	}
];
