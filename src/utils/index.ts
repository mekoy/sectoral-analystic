import {Scale, Chart} from "chart.js";
import {ConfigOptions} from "./type";

const DISPLAY = true;
const BORDER = true;
const CHART_AREA = false;
const TICKS = true;

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
// chartJs config

export const datavizConfig = [
	{
		options: {
			responsive: true,
			maintainAspectRatio: false,
			onClick: (indexValue: any) => indexValue,
			animations: {
				x: {
					duration: 0
				},
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
			interaction: {
				mode: "point",
				axis: "x",
				intersect: false
			},
			layout: {
				padding: {
					left: 0,
					right: 10,
					top: 0,
					bottom: 0
				}
			},
			plugins: {
				customCanvasBackgroundColor: {
					color: "lightGreen"
				},
				events: ["click"],
				title: {
					display: true,
					text: "Consommation attendu 2014 - 2019",
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
					display: false,
					usePointStyle: false,
					labels: {}
				},
				formatter: {
					callbacks: {
						label: (context: any) => context
					}
				},
				hover: {
					mode: "index",
					intersect: true,
					footerFontStyle: "normal",
					cursor: "pointer"
				}
			},
			scale: {
				x: {
					grid: {
						display: DISPLAY,
						drawBorder: BORDER,
						drawOnChartArea: CHART_AREA,
						drawTicks: TICKS
					},
					gridLines: {
						borderDash: [8, 4],
						display: DISPLAY
					},
					linear: {
						ticks: {
							callback: {
								label: (context: any) => context
							}
						}
					}
				},
				y: {
					grid: {
						drawBorder: false
					},
					ticks: {
						beginAtZero: true
					}
				}
			}
		},
		plugins: [plugin]
	}
];
