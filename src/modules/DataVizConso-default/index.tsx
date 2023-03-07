import {IdataResponse, IdataViz20142019} from "pages/context";
import React from "react";

import {datavizConfig, labels} from "utils";
import LineChart from "components/LineChart/LineChart";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const DataVizModuleDefault: React.FC<IDataVizGlobal> = ({dataApi}) => {
	const dataConsoDefault = dataApi.map((item) => {
		return item.conso_realisee;
	});
	const data = {
		labels,
		datasets: [
			{
				label: "",
				data: dataConsoDefault ? [] : dataConsoDefault,
				borderColor: "",
				backgroundColor: "",
				pointStyle: false
			}
		]
	};

	return (
		<LineChart
			options={datavizConfig[0].options}
			data={data}
			plugins={[]}
			width={"500px"}
		/>
	);
};

export default DataVizModuleDefault;
