import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "components/Layout";
import Header from "components/Header";
import {Button, ButtonGroup, ButtonToolbar, Col} from "reactstrap";
import {BsChevronRight, BsChevronLeft} from "react-icons/bs";

import {ICurvesConsoContextType, useCurvesConsoContext} from "pages/context";
import DataVizModule20142019 from "modules/DataVizConso-2014-2019";
import DataVizConsumption2022 from "modules/DataVizConso-2022";

const App: React.FC<{}> = () => {
	const {dataFetch}: ICurvesConsoContextType = useCurvesConsoContext();
	const [componentIndex, setComponentIndex] = useState(0);

	const nextComponent = () => {
		setComponentIndex((prevIndex) =>
			prevIndex === components.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevComponent = () => {
		setComponentIndex((prevIndex) =>
			prevIndex === 0 ? components.length - 1 : prevIndex - 1
		);
	};

	const components = [
		<DataVizModule20142019 dataApi={dataFetch} />,
		<DataVizConsumption2022 dataApi={dataFetch} />
	];

	return (
		<Layout>
			<Header>
				<Col className="border w-100 py-4 text-xl-center">
					<h1 className="fw-bold">
						Analyse de la consommation de cet hiver 24-02-2023
					</h1>
				</Col>
			</Header>
			<>
				<ButtonToolbar className="justify-content-end">
					<ButtonGroup className="me-2">
						<Button color="link" outline size="lg" onClick={prevComponent}>
							<BsChevronLeft />
						</Button>
						<Button color="link" outline size="lg" onClick={nextComponent}>
							<BsChevronRight />
						</Button>
					</ButtonGroup>
				</ButtonToolbar>
				{dataFetch ? (
					components[componentIndex]
				) : (
					<div className="py-5 text-center">loadin.....</div>
				)}
			</>
		</Layout>
	);
};

export default App;
