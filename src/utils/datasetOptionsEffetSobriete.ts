import {Chart, LinearScaleOptions} from "chart.js";
import {ConfigOptions, ConfigOptionsAxesX} from "./type";
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

//add label axes X label weeks
// chartJs config
export const datavizConfigEffetSobriety = [
	{
		options: {
			responsive: true,

			showScale: false,
			interaction: {
				mode: "index",
				intersect: false
			},
			actions,
			plugins: {
				fillBetween: {
					above: "rgba(0, 255, 0, 0.2)",
					below: "rgba(255, 0, 0, 0.2)"
				},
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
				externalTooltipHandler,
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
					// title: {
					// 	display: true,
					// 	color: "rgb(0, 0, 0)",
					// 	text: "Text custom",
					// 	padding: {
					// 		top: 45,
					// 		left: 25,
					// 		right: 30
					// 	},
					// 	font: {
					// 		size: 14,
					// 		weight: "bold"
					// 	}
					// },
					labels: {
						boxWidth: 0,
						boxHeight: 0,
						padding: 20
						// filter: (legendItem: ConfigOptionsLegend) => {
						// 	//console.log(legendItem, "data");
						// 	switch (legendItem.text) {
						// 		case "Moyenne 2014-2019":
						// 			return {
						// 				borderRadius: (legendItem.borderRadius = 2)
						// 			};
						// 		case "Consommation corrigée 2022":
						// 			return {
						// 				borderRadius: (legendItem.borderRadius = 2)
						// 			};
						// 		case "Consommation réelle 2022":
						// 			return {
						// 				borderRadius: (legendItem.borderRadius = 2)
						// 			};
						// 		case "Entrainant une baisse de la consommation":
						// 			return {
						// 				borderRadius: (legendItem.borderRadius = 2)
						// 			};
						// 		case "Entrainant une hausse de la consommation":
						// 			return {
						// 				borderRadius: (legendItem.borderRadius = 2)
						// 			};
						// 		case "Entrainant une baisse de la consommation":
						// 			return {
						// 				borderRadius: (legendItem.borderRadius = 2)
						// 			};
						// 		default:
						// 			break;
						// 	}
						// },
						// generateLabels: (chart: Chart) => {
						// 	const data = chart.data;
						// 	if (data.labels && data.datasets) {
						// 		return data.datasets.map((dataset, i) => {
						// 			return {
						// 				text: dataset.label || "",
						// 				fillStyle: dataset.borderColor || "",
						// 				hidden: chart.getDatasetMeta(i).hidden,
						// 				index: i
						// 			};
						// 		});
						// 	}
						// 	return [];
						// }
						// Use our custom legend item component
					},
					position: "right",
					align: "start"
				}
			},
			scales: {
				x: {
					grid: {
						display: true
					},
					labels: (context: {scale: ConfigOptionsAxesX}) => {
						console.log(context, "context+++++");
						if (context.scale.ticks) {
							return monthLabelX.map((week) => {
								if (week.Mois === "1") {
									return " ";
								} else if (context.scale.width <= 768) {
									return week.MenthMob;
								} else {
									return week.Mois;
								}
							});
						}
					},
					ticks: {
						padding: 30,
						autoSkip: false,
						maxRotation: 0,
						minRotation: 0
					}
				},
				y: {
					stackWeight: 1,
					beforeFit: (context: LinearScaleOptions) => {
						if (context.axis === "y") {
							return {};
						}
					},
					grid: {
						drawBorder: false,
						drawTicks: true,
						drawOnChartArea: true
					},
					gridLines: {
						display: false
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
