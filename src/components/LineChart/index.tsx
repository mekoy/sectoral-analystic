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

import CustomLegend from "../CustomLegend";

ChartJS.defaults.font.size = 13;
ChartJS.defaults;
export const chart = ChartJS.defaults;

type LineChartProps = {
	title?: React.ReactNode;
	line?: boolean;
	customClass?: string;
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
		borderColor?: any;
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
	height,
	title,
	line,
	customClass
}) => {
	//const chartRef = React.useRef<Chart>(null);
	return (
		<div className={customClass}>
			<Line options={options} data={data} width={width} height={height} />
			<div className="box legend">
				<CustomLegend data={data} title={title} line={line} />
			</div>
		</div>
	);
};

export default LineChart;
