import {IdataResponse} from "pages/context";
import React from "react";

import {datavizConfig, labels} from "utils";
import LineChart from "components/LineChart/LineChart";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const DataVizModuleGlobal: React.FC<IDataVizGlobal> = ({dataApi}) => {
	const dataItems: IdataResponse[] = dataApi;
	const dataConsoYearP = dataItems.map((item) => {
		return item.conso_moyAnneePrec;
	});
	const dataConsoNormaleTemp = dataItems.map((item) => {
		return item.conso_condNormaleTemp;
	});

	const dataConsoReel = dataItems.map((item) => {
		return item.conso_realisee;
	});

	const data = {
		labels,
		datasets: [
			{
				label: "Consommation années 2014 - 2019",
				data: dataConsoYearP,
				borderColor: "",
				backgroundColor: "",
				fill: false,
				pointStyle: false,
				tension: 0.7
			},
			{
				label: "Consommation realisée 2022",
				data: dataConsoReel,
				borderColor: "rgb(214, 19, 19)",
				backgroundColor: "",
				fill: false,
				pointStyle: false,
				tension: 0.7
			},
			{
				label: "Consommation corrigée 2022",
				data: dataConsoNormaleTemp,
				borderColor: "rgb(204, 88, 10)",
				backgroundColor: "",
				fill: false,
				pointStyle: false,
				tension: 0.7
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
