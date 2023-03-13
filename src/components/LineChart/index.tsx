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
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

import CustomLegend from "../CustomLegend";
import { Row, Col } from "reactstrap";

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
  ArcElement,
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
  customClass,
}) => {
  return (
    <Row className={`${customClass}`}>
      <Col lg="9" md="9" sm="12" xs="12">
        <div className={`box custom`}>
          <Line options={options} data={data} width={width} height={height} />
        </div>
      </Col>
      <Col lg="3" md="3" sm="6" xs="12" className="legend">
        <CustomLegend data={data} title={title} line={line} />
      </Col>
    </Row>
  );
};

export default LineChart;
