import DataVizModule20142019 from "modules/DataVizConso-2014-2019";
import DataVizConsoEffetSobriety from "modules/DataVizConsoEffetSobriety";
import {IdataResponse} from "pages/context";
import React from "react";

interface IDataViz2022 {
	dataApi: IdataResponse[];
}
const LayoutSobrietyConso: React.FC<IDataViz2022> = ({dataApi}) => {
	return (
		<>
			<DataVizModule20142019 dataApi={dataApi} />
			<DataVizConsoEffetSobriety dataApi={dataApi} />
		</>
	);
};

export default LayoutSobrietyConso;
