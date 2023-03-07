import {IdataResponse} from "pages/context";
import React from "react";

import {datavizConfig, labels} from "utils";
import LineChart from "components/LineChart/LineChart";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const DataVizConsumption2022: React.FC<IDataVizGlobal> = ({dataApi}) => {
	const conso_realized = "Conso réelle";
	const conso_normal = "Consommation corrigée";

	const data = {
		labels,
		datasets: [
			{
				label: conso_realized,
				data:
					dataApi &&
					dataApi.map((item: {conso_realisee: number}) => item.conso_realisee),
				borderColor: "rgba(255, 0, 0, 1)",
				backgroundColor: "rgba(255, 0, 0, 1)",
				fill: false,
				tension: 0.1,
				pointStyle: false
			},
			{
				label: conso_normal,
				data:
					dataApi &&
					dataApi.map(
						(item: {conso_condNormaleTemp: number}) =>
							item.conso_condNormaleTemp
					),
				borderColor: "rgba(248, 81, 9, 1)",
				backgroundColor: "rgba(248, 81, 9, 1)",
				pointStyle: false
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

export default DataVizConsumption2022;
