import {IdataResponse} from "pages/context";
import React from "react";

import {datavizConfig, labels} from "utils";
import LineChart from "components/LineChart";

import {IOptionDataBackground} from "utils/type";
import dataItems from "../../data/db_update.json";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const DataVizConsoEffetClimat: React.FC<IDataVizGlobal> = ({dataApi}) => {
	const labelEffetClimatBaisse = "Entrainant une baisse de la consommation";
	const labelEffetClimatHause = "Entrainant une hausse de la consommation";

	const consoEffetClimat = dataApi.map(
		(item) => item.conso_realisee - item.conso_condNormaleTemp
	);

	const data = {
		labels,
		datasets: [
			{
				label: labelEffetClimatBaisse,
				data: consoEffetClimat,
				borderColor: "transparent",
				pointStyle: false,
				fill: {
					below: "rgba(32, 192, 11, 0.9)",
					value: -376
				},
				borderWidth: 1,
				tension: 0,
				backgroundColor: (context: IOptionDataBackground) => {
					console.log(context, "context");
					if (context.raw >= -376) {
						return "rgba(32, 192, 11, 0.9)";
					} else {
						return "rgba(255, 0, 0, 01)";
					}
				}
			},
			{
				label: labelEffetClimatHause,
				data: consoEffetClimat,
				borderColor: "transparent",
				pointStyle: false,
				backgroundColor: "rgba(255, 0, 0, 01)"
			}
		]
	};

	return (
		<div className="wrapp-content">
			<LineChart
				options={datavizConfig[0].options}
				data={data}
				plugins={datavizConfig[0].options}
			/>
		</div>
	);
};

export default DataVizConsoEffetClimat;
