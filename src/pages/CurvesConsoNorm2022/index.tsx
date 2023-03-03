import {IdataResponse} from "pages/context";
import React from "react";

interface IDataViz2022 {
	dataApi: IdataResponse[];
}
const CurveConsoNormMoyen: React.FC<IDataViz2022> = ({dataApi}) => {
	// const data2022List = dataApi.filter((list) => list.data_annee_2022)[0];
	// console.log(data2022List, "data2022++");

	return <div>CurveConsoNormMoyen</div>;
};

export default CurveConsoNormMoyen;
