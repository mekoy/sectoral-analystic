import {IdataResponse} from "pages/context";
import React from "react";
import {labels} from "utils";
import LineChart from "components/LineChart";
import {optionDataConfigConsumption2022} from "./optionDataConfigConsumption2022";

interface IDataProps {
	dataApi: IdataResponse[];
	title?: string;
	line?: boolean;
}

const ChartActualConsumption2022: React.FC<IDataProps> = ({
	title,
	line,
	dataApi
}) => {
	const conso_realisee = dataApi.map((item) => item.conso_realisee);

	const data = {
		labels,
		datasets: [
			{
				label: "Consommation effective 2022",
				data: conso_realisee,
				borderColor: "rgba(255, 0, 0, 1)",
				pointStyle: false,
				fill: false,
				borderWidth: 3,
				tension: 0.5
			}
		]
	};

	return (
		<LineChart
			customClass="ChartActualConsumption2022"
			title={title}
			line={line}
			options={optionDataConfigConsumption2022[0].options}
			data={data}
			plugins={optionDataConfigConsumption2022[0].options}
		/>
	);
};

export default ChartActualConsumption2022;
