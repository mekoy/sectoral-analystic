import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "components/Layout";
import DataVizAceptedYear20142019 from "pages/CurvesConsoAcepted2014-2019";
import Header from "components/Header";
import {Col} from "reactstrap";

import {ICurvesConsoContextType, useCurvesConsoContext} from "pages/context";
import DataVizModule20142019 from "modules/DataVizConso-2014-2019";
import DataVizConsumption2022 from "modules/DataVizConso-2022";
import ChartsBySlider from "components/ChartsBySlider/ChartsBySlider";

const App: React.FC<{}> = () => {
	const {dataFetch}: ICurvesConsoContextType = useCurvesConsoContext();
	return (
		<Layout>
			<Header>
				<Col className="border w-100 py-4 text-xl-center">
					<h1 className="fw-bold">
						Analyse de la consommation de cet hiver 24-02-2023
					</h1>
				</Col>
			</Header>
			<ChartsBySlider>
				<div>
					<DataVizModule20142019 dataApi={dataFetch} />
				</div>
				<div>
					<DataVizConsumption2022 dataApi={dataFetch} />
				</div>
			</ChartsBySlider>
		</Layout>
	);
};

export default App;
