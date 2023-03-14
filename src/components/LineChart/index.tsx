import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	ArcElement,
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
import {Row, Col} from "reactstrap";
import {useWindowSize} from "utils/hook/useWindowSize";

ChartJS.defaults.font.size = 12;
export const chart = ChartJS;
chart.defaults.font.family = "Nunito Sans sans-serif";

type LineChartProps = {
	title?: React.ReactNode;
	line?: boolean;
	customClass?: string;
	data: IpPropsDataset;
	options: {};
	plugins?: any;
	height?: number;
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
	ArcElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const LineChart: React.FC<LineChartProps> = ({
	data,
	options,
	title,
	line,
	customClass
}) => {
	const [width, height] = useWindowSize();
	return (
		<Row className={`${customClass}`}>
			<Col lg="9" md="9" sm="12" xs="12">
				<div className={`box custom`}>
					<Line
						id="chart-container"
						className="chart-container_box"
						options={options}
						data={data}
						height={width <= 390 ? 260 : 200}
					/>
				</div>
			</Col>
			<Col lg="3" md="3" sm="12" xs="12" className="legend">
				<CustomLegend data={data} title={title} line={line} />
			</Col>
		</Row>
	);
};

export default LineChart;
