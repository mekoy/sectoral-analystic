import {Chart, LinearScaleOptions, TooltipItem} from "chart.js";
import {ConfigOptions, ConfigOptionsAxesX} from "utils/type";
import dataItems from "data/db_update.json";
import {animation} from "utils/animation";
import {actions} from "utils/actions";

const monthLabelX = dataItems.data.filter((month) => {
	if (month.Mois) {
		return month.Mois;
	}
});

export const labels = ["Oct", "Nov", "Dec", "Jan", "Fev", "Mars"];

export const optionDataConfigConsumption2022 = [
	{
		type: "scatter",
		options: {
			responsive: true,
			maintainAspectRatio: true,
			showScale: false,
			resizeDelay: 0,
			layout: {
				padding: {
					left: 10,
					right: 0,
					top: 0,
					bottom: 10
				}
			},
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
					color: "rgba(129, 134, 139, 0.6)",
					font: {
						size: 12,
						weight: 400,
						style: "normal"
					},
					align: "start",
					padding: {
						bottom: 20,
						left: 15
					}
				},
				events: ["click"],
				tooltip: {
					enabled: true,
					position: "nearest",
					backgroundColor: "rgba(255, 255, 255, 0.8)",
					titleColor: "#000000",
					bodyColor: "#000000",
					borderColor: "#000000",
					titleFont: {weight: 700, size: 15},
					titleAlign: "left",
					boxWidth: 10,
					boxHeight: 2,
					padding: 10,
					borderWidth: 1,
					cornerRadius: 2,
					bodyFont: {
						size: 12
					},
					callbacks: {
						title: (tooltipItem: TooltipItem<"line">[]) => {
							return `${tooltipItem[0].label} Semaine ${tooltipItem[0].dataIndex}`;
						},
						label: (context: ConfigOptions) => {
							return ` ${context.dataset.label} - ${Math.floor(
								context.raw / 1000
							)} GW`;
						}
					}
				},
				legend: {
					display: true,
					title: {
						display: true,
						color: "rgb(0, 0, 0)",
						position: "start",
						font: {
							size: 14,
							weight: "bold"
						}
					},
					labels: {
						boxWidth: 10,
						boxHeight: 0,
						padding: 5
					},
					position: "top",
					align: "start"
				}
			},
			scales: {
				x: {
					grid: {
						display: true,
						drawOnChartArea: false,
						drawTicks: true
					},
					labels: (context: {scale: ConfigOptionsAxesX}) => {
						if (context.scale.ticks) {
							return monthLabelX.map((week) => {
								if (week.Mois === "1") {
									return " ";
								} else if (context.scale.width < 640) {
									return week.MenthMob;
								} else {
									return week.Mois;
								}
							});
						}
					},
					ticks: {
						beginAtZero: true,
						padding: 20,
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
						padding: 0,
						beginAtZero: true,
						// Get labels scales Y in GW
						callback: function (value: number, index: number, ticks: number[]) {
							return value / 1000;
						}
					}
				}
			}
		}
	}
];
