import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
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
		data: number[];
		borderColor: string;
		backgroundColor: string;
		fill?: boolean;
		opacity?: number;
	}[];
}

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
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
