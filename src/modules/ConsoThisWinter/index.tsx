import {IdataResponse} from "pages/context";
import React, {useEffect, useState} from "react";

import {datavizConfig, labels} from "utils";
import LineChart, {IpPropsDataset} from "components/LineChart/LineChart";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const ConsoThisWinter: React.FC<IDataVizGlobal> = ({dataApi}) => {
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
				borderColor: !showSecondLine
					? "rgba(255, 0, 0, 1)"
					: "rgba(255, 0, 0, 0.2)",
				pointStyle: false,
				fill: false,
				borderWidth: !showSecondLine ? 4 : 2,
				tension: 0.5
			},
			{
				label: conso_normal,
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
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		setChartData(data);
	}, [showSecondLine]);

	return (
		<LineChart
			options={datavizConfig[0].options}
			data={data}
			plugins={datavizConfig[0].options}
			width={"500px"}
		/>
	);
};

export default ConsoThisWinter;
