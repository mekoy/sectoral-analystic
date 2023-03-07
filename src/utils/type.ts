import {ChartArea, ChartData} from "chart.js";

export type ConfigOptions = {
	chart: any;
	dataIndex: number;
	formattedValue: string;
	label: string;
	parsed: {x: number; y: number};
	datasetIndex: number;
	dataset: {
		label: string;
		data: string[] | number[];
		borderColor: string;
		backgroundColor: string;
		Filled: boolean;
	};
};

export type ConfigOptionsLegend = {
	datasetIndex: number;
	fillStyle: string;
	hidden: boolean;
	lineCap: string;
	pointStyle: string | undefined;
	strokeStyle: string;
	text: string;
	textAlign: string | undefined;
	fontColor: string;
	borderRadius: number;
	lineWidth: number;
};
export type ConfigOptionsAxesX = {
	axis: string;
	data: ChartArea;
	bottom: number;
	ticks: {
		value: number[];
		label: number[];
	}[];
};
