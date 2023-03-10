import {IdataResponse} from "pages/context";
import React, {useEffect, useState} from "react";

import {labels} from "utils";
import LineChart from "components/LineChart";
import {ScriptableContext} from "chart.js";
import {optionDataConfigConsoEffetSobriety} from "./optionDataConfigConsoEffetSobriety";

interface IDataProps {
	dataApi: IdataResponse[];
	title?: string;
	line?: boolean;
}

const CurveConsoEffectOfSobriety: React.FC<IDataProps> = ({
	title,
	line,
	dataApi
}) => {
	const [showSecondLine, setShowSecondLine] = useState(false);

	const dataConsoYearP = dataApi.map((item) => item.conso_moyAnneePrec);
	const dataConsoNormaleTemp = dataApi.map(
		(item) => item.conso_condNormaleTemp
	);
	const dataConsoReeel = dataApi.map((item) => item.conso_realisee);

	const data = {
		labels,
		datasets: [
			{
				label: "Consommation Moyenne 2014-2019",
				data: dataConsoYearP,
				borderColor: "rgba(0, 0, 0, 0.7)",
				backgroundColor: "",
				fill: false,
				pointStyle: false,
				tension: 0.5,
				borderWidth: 2
			},
			{
				label: "Consommation effective 2022",
				data: dataConsoReeel,
				borderColor: !showSecondLine
					? "rgba(255, 0, 0, 1)"
					: "rgba(255, 0, 0, 0.2)",
				backgroundColor: "rgba(255, 0, 0, 1)",
				fill: false,
				pointStyle: false,
				tension: 0.5,
				borderWidth: 2
			},
			{
				label: "Consommation corrigée 2022",
				data: dataConsoNormaleTemp,
				borderColor: "rgba(248, 81, 9, 1)",
				backgroundColor: "rgba(248, 81, 9, 1)",
				fill: false,
				borderWidth: 3,
				pointStyle: false,
				tension: 0.7
			},
			{
				label: "Entrainant une baisse de la consommation",
				data: dataConsoYearP,
				borderColor: "rgba(12, 164, 212, 1)",
				backgroundColor: (context: ScriptableContext<"line">) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(12, 164, 212, 1);
					gradient.addColorStop(1, "rgba(12, 164, 212, 1)");
					gradient.addColorStop(0, "rgba(12, 104, 212, 0)");
					return gradient;
				},
				fill: "-1",
				pointStyle: false,
				tension: 0.5,
				borderWidth: 1
			}
		]
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSecondLine(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<LineChart
			customClass="CurveConsoEffectOfSobriety"
			title={title}
			line={line}
			options={optionDataConfigConsoEffetSobriety[0].options}
			data={data}
			plugins={optionDataConfigConsoEffetSobriety[0].options}
		/>
	);
};

export default CurveConsoEffectOfSobriety;
