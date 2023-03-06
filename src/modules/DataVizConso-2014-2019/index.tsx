import {IdataResponse} from "pages/context";
import React from "react";

import {datavizConfig, labels} from "utils";
import LineChart from "components/LineChart/LineChart";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const DataVizModule20142019: React.FC<IDataVizGlobal> = ({dataApi}) => {
	const dataItems: IdataResponse[] = dataApi;
	const dataConsoYearP = dataItems.map((item) => {
		return item.conso_moyAnneePrec;
	});
	const dataConsoNormaleTemp = dataItems.map((item) => {
		return item.conso_condNormaleTemp;
	});

	const data = {
		labels,
		datasets: [
			{
				label: "Consommation années 2014 - 2019",
				data: dataConsoYearP,
				borderColor: "",
				backgroundColor: "",
				Filled: true,
				pointStyle: false,
				tension: 0.2
			},
			{
				label: "Consommation corrigée 2022",
				data: dataConsoNormaleTemp,
				borderColor: "rgb(204, 88, 10)",
				backgroundColor: "rgb(204, 88, 10)",
				Filled: true,
				pointStyle: false,
				tension: 0.2
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
