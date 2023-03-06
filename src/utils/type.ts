export type ConfigOptions = {
	chart: {};
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
};
export type ConfigOptionsAxesX = {
	axis: string;
	bottom: number;
	ticks: {
		value: number[];
		label: number[];
	}[];
};
