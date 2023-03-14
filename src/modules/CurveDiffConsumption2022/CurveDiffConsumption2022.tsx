import {IdataResponse} from "pages/context";
import React, {useEffect, useState} from "react";
import {labels} from "utils";
import LineChart, {IpPropsDataset} from "components/LineChart";
import {optionDataConfigEffetClimatDiff} from "./optionDataConfigEffetClimatDiff";

interface IDataProps {
	dataApi: IdataResponse[];
	title?: string;
	line?: boolean;
}

export const CurveDiffConsumption2022: React.FC<IDataProps> = ({
	title,
	dataApi,
	line
}) => {
	const [chartData, setChartData] = useState<IpPropsDataset>({
		labels: [],
		datasets: []
	});

	const [showSecondLine, setShowSecondLine] = useState(false);

	const conso_realized = "Consommation réelle 2022";
	const conso_normal = "Consommation corrigée 2022";

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
				label: conso_realized,
				data: conso_realisee,
				borderColor: "rgba(255, 0, 0, 1)",
				pointStyle: false,
				borderWidth: 3,
				tension: 0.5,
				fill: false
			},
			{
				label: conso_normal,
				data: conso_condNormaleTemp,
				borderColor: "rgba(248, 81, 9, 1)",
				pointStyle: false,
				borderWidth: 3,
				tension: 0.5,
				fill: false
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
			customClass="CurveDiffConsumption2022"
			line={line}
			title={title}
			options={optionDataConfigEffetClimatDiff[0].options}
			data={data}
			plugins={optionDataConfigEffetClimatDiff[0].options}
		/>
	);
};

export default CurveDiffConsumption2022;
