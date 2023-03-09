import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Filler
} from "chart.js";
import {Line} from "react-chartjs-2";

ChartJS.defaults.font.size = 13;
ChartJS.defaults;
export const chart = ChartJS.defaults;
type LineChartProps = {
	width?: string | number;
	height?: string | number;
	data: IpPropsDataset;
	options: {};
	plugins?: any;
};
export interface IpPropsDataset {
	labels: string[];
	datasets: {
		label: string;
		data: number[] | {};
		borderColor?: string;
		backgroundColor?: any; // TODO
		fill?: boolean | string | number | object;
		opacity?: number;
		hidden?: boolean;
	}[];
}

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const LineChart: React.FC<LineChartProps> = ({
	data,
	options,
	width,
	height
}) => {
	return <Line options={options} data={data} width={width} height={height} />;
};

export default LineChart;
