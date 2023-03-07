import {IdataResponse} from "pages/context";
import React from "react";

import {datavizConfig, labels} from "utils";
import LineChart from "components/LineChart/LineChart";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const DataVizModule20142019: React.FC<IDataVizGlobal> = ({dataApi}) => {
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
				backgroundColor: "rgba(0, 194, 255,0.9)",
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
				borderColor: "rgba(255, 0, 0, 0.1)",
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

export default DataVizModule20142019;
