import {Chart} from "chart.js";
import {ConfigOptions, ConfigOptionsAxesX, ConfigOptionsLegend} from "./type";
import dataItems from "../data/db_update.json";

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
			animations: {
				tension: {
					duration: 1000,
					easing: "easeInSine",
					from: 2,
					to: 0.3,
					loop: false
				}
			},
			animation: {
				onprogress: (context: {
					chart: {};
					initProgress: {value: 0};
					progress: {value: number};
					initial: boolean;
					numSteps: number;
					currentStep: number;
				}) => {
					let value = 15;
					if (context.initial) {
						value = context.currentStep / context.numSteps;
					} else {
						value = context.currentStep / context.numSteps;
					}
				}
			},
			plugins: {
				customCanvasBackgroundColor: {
					color: "lightGreen"
				},
				events: ["click"],
				title: {
					display: true,
					text: "",
					callbacks: {
						label: (context: {}) => console.log(context, "context")
					}
				},
				tooltip: {
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
					labels: {
						filter: (legendItem: ConfigOptionsLegend) => {
							if (legendItem.datasetIndex === 0) {
								return (legendItem.fontColor = "rgb(0,0,0)");
							}
							if (legendItem.datasetIndex === 1) {
								return (legendItem.fontColor = "rgb(173, 52, 4)");
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
							console.log(context.scale.ticks, "context");
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
