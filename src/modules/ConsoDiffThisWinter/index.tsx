import {IdataResponse} from "pages/context";
import React from "react";

import {datavizConfig, labels} from "utils";
import LineChart from "components/LineChart/LineChart";
import {ScriptableContext} from "chart.js";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const ConsoDiffThisWinter: React.FC<IDataVizGlobal> = ({dataApi}) => {
	const conso_realized = "Conso réelle";
	const conso_normal = "Consommation corrigée";

	const conso_realisee = dataApi.map(
		(item: {conso_realisee: number}) => item.conso_realisee
	);

	const conso_condNormaleTemp = dataApi.map(
		(item: {conso_condNormaleTemp: number}) => item.conso_condNormaleTemp
	);

	const conso_diff = dataApi.map(
		(item: {conso_realisee: number; conso_condNormaleTemp: number}) =>
			item.conso_realisee - item.conso_condNormaleTemp
	);

	console.log(conso_realisee.filter((item) => item < 0));

	const data = {
		labels,
		datasets: [
			{
				label: conso_realized,
				data: conso_realisee,
				borderColor: "rgba(255, 0, 0, 1)",
				pointStyle: false,
				fill: "+1",
				borderWidth: 4,
				backgroundColor: (context: ScriptableContext<"line">) => {
					//background: linear-gradient(180deg, #C94A4A 1.65%, rgba(166, 12, 12, 0.31) 100%);
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(166, 12, 12, 0.31);
					gradient.addColorStop(0, "#C94A4A");
					gradient.addColorStop(1, "rgba(166, 12, 12, 0.31)");
					return gradient;
				}
			},
			{
				label: conso_normal,
				data: conso_condNormaleTemp,
				borderColor: "rgba(248, 81, 9, 1)",
				pointStyle: false,
				fill: "-1",
				borderWidth: 4,
				backgroundColor: (context: ScriptableContext<"line">) => {
					//background: linear-gradient(180deg, rgba(69, 255, 76, 0.7) 0%, rgba(69, 255, 76, 0.238) 100%);
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(69, 255, 76, 0.7);
					gradient.addColorStop(0, "rgba(69, 255, 76, 0.238)");
					gradient.addColorStop(1, "rgba(69, 255, 76, 0.7)");
					return gradient;
				}
			}
		]
	};

	return (
		<LineChart
			options={datavizConfig[0].options}
			data={data}
			plugins={datavizConfig[0].options}
			width={"500px"}
		/>
	);
};

export default ConsoDiffThisWinter;
