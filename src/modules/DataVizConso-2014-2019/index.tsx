import {IdataResponse} from "pages/context";
import React from "react";

import {datavizConfig, labels} from "utils";
import LineChart from "components/LineChart/LineChart";
import {ScriptableContext} from "chart.js";

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

	const data = {
		labels,
		datasets: [
			{
				label: "Moyenne 2014-2019",
				data: dataConsoYearP,
				borderColor: "",
				backgroundColor: "",
				fill: false,
				pointStyle: false,
				tension: 0,
				borderWidth: 2
			},
			{
				label: "Consommation corrigée 2022",
				data: dataConsoNormaleTemp,
				borderColor: "rgba(248, 81, 9, 0.9)",
				backgroundColor: "",
				fill: false,
				borderWidth: 3,
				pointStyle: false,
				tension: 0.7
			}
		]
	};

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

export default DataVizModule20142019;
