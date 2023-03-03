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
