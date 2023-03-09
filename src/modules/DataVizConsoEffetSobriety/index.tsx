import {IdataResponse} from "pages/context";
import React from "react";

import {datavizConfig, labels} from "utils";
import LineChart from "components/LineChart/LineChart";

import {IOptionDataBackground} from "utils/type";
import {ScriptableContext} from "chart.js/dist/types/index";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const DataVizConsoEffetSobriety: React.FC<IDataVizGlobal> = ({dataApi}) => {
	const labelEffetSobrietyBaisse = "Entrainant une baisse de la consommation";

	const consoEffetSobriete = dataApi.map((item) => item.EffetSobriete);

	const data = {
		labels,
		datasets: [
			{
				label: labelEffetSobrietyBaisse,
				data: consoEffetSobriete,
				borderColor: "transparent",
				pointStyle: false,
				fill: {
					below: "rgba(12, 164, 212,0.8)",
					value: 0
				},
				tension: 0,
				backgroundColor: (
					context: ScriptableContext<"line"> & IOptionDataBackground
				) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 12, 164, 212);
					gradient.addColorStop(1, "rgba(12, 164, 212,0.6)");
					gradient.addColorStop(0.9, "rgb(34, 167, 216,0.9)");
					if (context.raw) {
						return gradient;
					}
					return gradient;
				}
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

export default DataVizConsoEffetSobriety;
