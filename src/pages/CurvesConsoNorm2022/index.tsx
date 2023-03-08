import ConsoDiffThisWinter from "modules/ConsoDiffThisWinter";
import DataVizConsoEffetClimat from "modules/DataVizConsoEffetClimat";
import {IdataResponse} from "pages/context";
import React from "react";

interface IDataViz2022 {
	dataApi: IdataResponse[];
}
const LayoutClimatConsoDiff: React.FC<IDataViz2022> = ({dataApi}) => {
	return (
		<>
			<ConsoDiffThisWinter dataApi={dataApi} />
			<DataVizConsoEffetClimat dataApi={dataApi} />
		</>
	);
};

export default LayoutClimatConsoDiff;
