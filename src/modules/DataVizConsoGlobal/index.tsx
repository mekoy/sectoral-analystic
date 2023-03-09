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
	const dataWeekNovember = dataApi.filter((item) => {
		if (item.Mois === 11) {
			return item;
		}
	});
	const dataWeekNov = dataWeekNovember.map((weekNow) => {
		return weekNow;
	});

	const dataNovTem = dataWeekNov;

	console.log(dataNovTem, "dataNovTem");

	const data = {
		labels,
		datasets: [
			{
				type: "bar",
				label: "Moyenne 2014-2019",
				data: dataConsoReeel,
				barPercentage: 0,
				barThickness: 50,
				maxBarThickness: 8,
				minBarLength: 0,
				borderColor: "transparent",
				// backgroundColor: ["red"],
				backgroundColor: (context: ScriptableContext<"bar">) => {
					const ctx = context.chart;
					const data = context.dataset;
					const indexData = context.datasetIndex;
					console.log(ctx, "ctx");
					console.log(data, "data");
					return "green";
				},
				pointStyle: false,
				tension: 0,
				borderWidth: 1
			},
			{
				label: "Moyenne 2014-2019",
				data: dataConsoYearP,
				borderColor: "",
				backgroundColor: (context: ScriptableContext<"line">) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 194, 255, 0.9);
					gradient.addColorStop(0.3, "rgba(0, 194, 255)");
					gradient.addColorStop(0.8, "rgb(12, 104, 212)");
					return gradient;
				},
				fill: "1",
				pointStyle: false,
				tension: 0.5,
				borderWidth: 2
			},
			{
				label: "Consommation corrigée 2022",
				data: dataConsoNormaleTemp,
				borderColor: "rgba(248, 81, 9, 0.9)",
				backgroundColor: "rgba(248, 81, 9, 0.9)",
				fill: false,
				borderWidth: 3,
				pointStyle: false,
				tension: 0.7
			},
			{
				label: "Consommation réelle 2022",
				data: dataConsoReeel,
				borderColor: "rgba(255, 0, 0, 01)",
				backgroundColor: "rgba(255, 0, 0, 01)",
				fill: false,
				borderWidth: 1,
				pointStyle: false,
				tension: 0
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
