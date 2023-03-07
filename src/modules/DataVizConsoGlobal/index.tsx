import {IdataResponse} from "pages/context";
import React from "react";

import {datavizConfig, labels} from "utils";
import LineChart from "components/LineChart/LineChart";
import {ScriptableContext} from "chart.js";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const DataVizModuleGlobal: React.FC<IDataVizGlobal> = ({dataApi}) => {
	const dataConsoYearP = dataApi.map((item) => {
		return item.conso_moyAnneePrec;
	});
	const dataConsoNormaleTemp = dataApi.map((item) => {
		return item.conso_condNormaleTemp;
	});
	const dataConsoReeel = dataApi.map((item) => {
		return item.conso_realisee;
	});

	const data = {
		labels,
		datasets: [
			{
				label: "Moyenne 2018-2020",
				data: dataConsoYearP,
				borderColor: "",
				backgroundColor: (context: ScriptableContext<"line">) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 194, 255, 0.9);
					gradient.addColorStop(0.3, "rgba(0, 194, 255)");
					gradient.addColorStop(0.8, "rgb(12, 104, 212)");
					return gradient;
				},
				fill: "+1",
				pointStyle: false,
				tension: 0.5,
				borderWidth: 2
			},

			{
				label: "Consommation corrigée",
				data: dataConsoNormaleTemp,
				borderColor: "rgba(248, 81, 9, 0.9)",
				backgroundColor: "",
				fill: "-1",
				borderWidth: 3,
				pointStyle: false,
				tension: 0.7
			},
			{
				label: "Conso réelle",
				data: dataConsoReeel,
				borderColor: "rgba(255, 0, 0, 01)",
				backgroundColor: "",
				fill: false,
				pointStyle: false,
				tension: 0.5,
				borderWidth: 2
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

export default DataVizModuleGlobal;
