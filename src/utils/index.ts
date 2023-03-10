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
				filler: {
					propagate: false
				},
				title: {
					display: true,
					text: "Puissance moyenne semaine en GW",
					color: "rgba(129, 134, 139, 0.8)",
					font: {
						size: 12,
						weight: 400,
						style: "normal"
					},
					align: "start",
					padding: {
						bottom: 15,
						left: 10
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
					display: false,
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
							//console.log(legendItem, "data");
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
						},
						generateLabels: (chart: Chart) => {
							const data = chart.data;
							if (data.labels && data.datasets) {
								return data.datasets.map((dataset, i) => {
									return {
										text: dataset.label || "",
										fillStyle: dataset.borderColor || "",
										hidden: chart.getDatasetMeta(i).hidden,
										index: i
									};
								});
							}
							return [];
						}
						// Use our custom legend item component
					},
					position: "right",
					align: "start"
				},
				fillBetween: {
					backgroundColorTop: "rgba(75, 192, 192, 0.4)",
					backgroundColorBottom: "rgba(255, 99, 132, 0.4)",
					boundaryLabels: {
						show: true
					}
				}
			},
			scales: {
				x: {
					grid: {
						display: false
					},
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
					stackWeight: 1,
					beforeFit: (context: LinearScaleOptions) => {
						// console.log(context, "context++");
						if (context.axis === "y") {
							return {};
						}
					},
					grid: {
						drawBorder: false,
						drawTicks: true,
						drawOnChartArea: true
					},
					ticks: {
						beginAtZero: true,
						// Get labels scales Y in GW
						callback: function (value: number, index: number, ticks: any) {
							return value / 1000;
						}
					}
				}
			}
		}
	}
];
