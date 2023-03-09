import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "components/Layout";
import Header from "components/Header";
import {Button, ButtonGroup, ButtonToolbar, Col} from "reactstrap";
import {BsChevronRight, BsChevronLeft} from "react-icons/bs";

import {ICurvesConsoContextType, useCurvesConsoContext} from "pages/context";
import DataVizModule20142019 from "modules/DataVizConso-2014-2019";
import DataVizModuleGlobal from "modules/DataVizConsoGlobal";
import ConsoDiffThisWinter from "modules/ConsoDiffThisWinter";
import ConsoThisWinter from "modules/ConsoThisWinter";
import LayoutClimatConsoDiff from "pages/LayoutClimatConsoDiff";
import LayoutSobrietyConso from "pages/LayoutSobrietyConso";

const App: React.FC<{}> = () => {
	const {dataFetch}: ICurvesConsoContextType = useCurvesConsoContext();
	console.log(dataFetch, "dataFetch");

	const [componentIndex, setComponentIndex] = useState(0);

	const nextComponent = () => {
		setComponentIndex((prevIndex: number) =>
			prevIndex === components.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevComponent = () => {
		setComponentIndex((prevIndex: number) =>
			prevIndex === 0 ? components.length - 1 : prevIndex - 1
		);
	};

	const components = [
		<ConsoThisWinter dataApi={dataFetch} />,
		<ConsoDiffThisWinter dataApi={dataFetch} />,
		<LayoutClimatConsoDiff dataApi={dataFetch} />,
		<DataVizModule20142019 dataApi={dataFetch} />,
		<LayoutSobrietyConso dataApi={dataFetch} />,
		<DataVizModuleGlobal dataApi={dataFetch} />
	];

	return (
		<Layout>
			<Header clasName="head-wrapp py-4 text-white">
				<Col className="w-100 py-4 text-xl-left">
					<div className="header-title">Bilan de l’hiver - 2022/2023</div>
				</Col>
			</Header>
			<>
				<div className="wrapp-content-gobal">
					<div className="py-3 bg_button_wrapp w-100">
						<ButtonToolbar className="justify-content-end bg_button_wrapp w-100">
							<ButtonGroup className="me-2">
								<Button color="link" outline size="lg" onClick={prevComponent}>
									<BsChevronLeft />
								</Button>
								<Button color="link" outline size="lg" onClick={nextComponent}>
									<BsChevronRight />
								</Button>
							</ButtonGroup>
						</ButtonToolbar>
					</div>
					{dataFetch ? (
						components[componentIndex]
					) : (
						<div className="py-5 text-center">loadin.....</div>
					)}
				</div>
			</>
		</Layout>
	);
};

export default App;
