import {IdataResponse} from "pages/context";
import React, {useEffect, useState} from "react";

import {datavizConfig, labels} from "utils";
import LineChart, {IpPropsDataset} from "components/LineChart";
import {optionDataConfigConsoCorrect} from "./optionDataConfigConsoCorrect";

interface IDataProps {
	dataApi: IdataResponse[];
	title?: string;
	line?: boolean;
	chartIndex?: number;
}

export const CurveCorrectedConsumption2022: React.FC<IDataProps> = ({
	title,
	line,
	dataApi,
	chartIndex
}) => {
	const [chartData, setChartData] = useState<IpPropsDataset>({
		labels: [],
		datasets: []
	});

	const [showSecondLine, setShowSecondLine] = useState(false);

	const conso_realisee = dataApi.map(
		(item: {conso_realisee: number}) => item.conso_realisee
	);

	const conso_condNormaleTemp = dataApi.map(
		(item: {conso_condNormaleTemp: number}) => item.conso_condNormaleTemp
	);

	const data = {
		labels,
		datasets: [
			{
				label: "Consommation réelle 2022",
				data: conso_realisee,
				borderColor: !showSecondLine
					? "rgba(255, 0, 0, 1)"
					: "rgba(255, 0, 0, 0.2)",
				pointStyle: false,
				fill: false,
				borderWidth: !showSecondLine ? 4 : 2,
				tension: 0.5
			},
			{
				label: "Consommation corrigée 2022",
				data: conso_condNormaleTemp,
				borderColor: "rgba(248, 81, 9, 1)",
				pointStyle: false,
				fill: false,
				borderWidth: 4,
				hidden: !showSecondLine,
				tension: 0.5
			}
		]
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSecondLine(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		setChartData(data);
	}, [showSecondLine]);

	return (
		<LineChart
			customClass="CurveCorrectedConsumption2022"
			title={title}
			line={line}
			options={optionDataConfigConsoCorrect[0].options}
			data={data}
			plugins={optionDataConfigConsoCorrect[0].options}
			chartIndex={chartIndex}
			height={200}
		/>
	);
};

export default CurveCorrectedConsumption2022;
