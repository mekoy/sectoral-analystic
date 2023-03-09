import {IdataResponse} from "pages/context";
import React, {useEffect, useState} from "react";

import {datavizConfig, labels} from "utils";
import LineChart, {IpPropsDataset} from "components/LineChart";
import {ScriptableContext} from "chart.js";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const ConsoDiffThisWinter: React.FC<IDataVizGlobal> = ({dataApi}) => {
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
				fill: showSecondLine && false,
				borderWidth: 2,
				tension: 0,
				backgroundColor: (context: ScriptableContext<"line">) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(166, 12, 12, 0.31);
					gradient.addColorStop(0, "rgba(201, 74, 74, 1)");
					gradient.addColorStop(1, "rgba(166, 12, 12, 0.31)");
					return gradient;
				}
			},
			{
				label: conso_normal,
				data: conso_condNormaleTemp,
				borderColor: "rgba(248, 81, 9, 1)",
				backgroundColor: "rgba(248, 81, 9, 1)",
				pointStyle: false,
				fill: showSecondLine && false,
				borderWidth: 2,
				tension: 0
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
		<div className="wrapp-content">
			<LineChart
				options={datavizConfig[0].options}
				data={data}
				plugins={datavizConfig[0].options}
				width={"500px"}
			/>
		</div>
	);
};

export default ConsoDiffThisWinter;
