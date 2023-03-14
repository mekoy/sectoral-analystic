import {IdataResponse} from "pages/context";
import React from "react";

import {labels} from "utils";
import LineChart from "components/LineChart";
import {ScriptableContext} from "chart.js";
import {IOptionDataBackground} from "utils/type";
import {optionDataConfigConsoEffetSobrietyDecrease} from "./optionDataConfigConsoEffetSobrietyDecrease";

interface IDataProps {
	dataApi: IdataResponse[];
	title?: string;
	line?: boolean;
	height?: number;
	chartIndex?: number;
}

const CurveConsoEffectOfSobrietyDecrease: React.FC<IDataProps> = ({
	title,
	line,
	dataApi,
	height,
	chartIndex
}) => {
	const labelEffetSobrietyBaisse = "Entrainant une baisse de la consommation";
	const consoEffetSobriete = dataApi.map((item) => item.EffetSobriete);

	const data = {
		labels,
		datasets: [
			{
				label: labelEffetSobrietyBaisse,
				data: consoEffetSobriete,
				borderColor: "rgba(12, 164, 212, 1)",
				pointStyle: false,
				fill: {
					below: "rgba(12, 164, 212,0.8)",
					value: 0
				},
				tension: 0,
				borderWidth: 1,
				backgroundColor: (
					context: ScriptableContext<"line"> & IOptionDataBackground
				) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(12, 164, 212, 1);
					gradient.addColorStop(1, "rgba(12, 164, 212, 1)");
					gradient.addColorStop(0, "rgba(12, 104, 212, 0.6)");
					if (context.raw) {
						return gradient;
					}
					return gradient;
				}
			}
		]
	};

	return (
		<LineChart
			customClass="CurveConsoEffectOfSobrietyDecrease"
			title={title}
			line={line}
			options={optionDataConfigConsoEffetSobrietyDecrease[0].options}
			data={data}
			plugins={optionDataConfigConsoEffetSobrietyDecrease[0].options}
			chartIndex={chartIndex}
			height={100}
		/>
	);
};

export default CurveConsoEffectOfSobrietyDecrease;
