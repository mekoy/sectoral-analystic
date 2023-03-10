import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	ArcElement,
	PointElement,
	Title,
	Tooltip,
	Legend,
	Filler
} from "chart.js";
import {Doughnut} from "react-chartjs-2";

ChartJS.defaults.font.size = 13;
ChartJS.defaults.font.family = "Nunito Sans";
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
	id: string;
	className?: string;
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
	PointElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const PieChart: React.FC<LineChartProps> = ({
	data,
	options,
	width,
	height,
	id,
	className,
	customClass
}) => {
	return (
		<div className={customClass}>
			<Doughnut
				id={id}
				options={options}
				data={data}
				width={width}
				height={height}
				className={className}
			/>
		</div>
	);
};

export default PieChart;
