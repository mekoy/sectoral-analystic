import {IdataResponse} from "pages/context";
import React, {useState} from "react";

import {datavizConfig, labels} from "utils";
import LineChart, {IpPropsDataset} from "components/LineChart";

import {IOptionDataBackground} from "utils/type";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
	title?: string;
	line?: boolean;
}

const CurveDiffConsoEffetClimat: React.FC<IDataVizGlobal> = ({
	title,
	dataApi,
	line
}) => {
	const [chartData, setChartData] = useState<IpPropsDataset>({
		labels: [],
		datasets: []
	});

	const [showSecondLine, setShowSecondLine] = useState(false);
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
				borderColor: "rgba(32, 192, 11, 0.9)",
				pointStyle: false,
				fill: {
					below: "rgba(32, 192, 11, 0.9)",
					value: -376
				},
				borderWidth: 0,
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
				borderColor: "rgba(255, 0, 0, 01)",
				pointStyle: false,
				backgroundColor: "rgba(255, 0, 0, 01)",
				borderWidth: 0
			}
		]
	};

	return (
		<div className="">
			<LineChart
				customClass="CurveDiffConsoEffetClimat"
				line={line}
				title={title}
				options={datavizConfig[0].options}
				data={data}
				plugins={datavizConfig[0].options}
			/>
		</div>
	);
};

export default CurveDiffConsoEffetClimat;
