import {Chart, ChartArea} from "chart.js";

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
	index: number;
	labels: {
		boxWidth: number;
		boxHeight: number;
	};
};
export type ConfigOptionsAxesX = {
	chart: Chart;
	data: ChartArea;
	axis: string;
	width: number;
	bottom: number;
	labelRotation: number;
	ticks: {
		value: number;
		label: number | string;
	}[];
};
export type IOptionDataBackground = {
	dataIndex: number;
	active: boolean;
	element: {};
	index: number;
	pared: {x: number; y: number};
	raw: number;
	xStarted: boolean;
	yStarted: boolean;
};
