import {IdataResponse} from "pages/context";
import React, {useState} from "react";
import {
	MdOutlineArrowCircleLeft,
	MdOutlineArrowCircleRight
} from "react-icons/md";
import {ButtonToolbar, ButtonGroup, Button} from "reactstrap";
import CurveActualConsumption2022 from "modules/CurveActualConsumption2022/ChartActualConsumption2022";
import CurveCorrectedConsumption2022 from "modules/CurveCorrectedConsumption2022/CurveCorrectedConsumption2022";
import CurveDiffConsumption2022 from "modules/CurveDiffConsumption2022/CurveDiffConsumption2022";

interface IDataViz {
	dataViz?: React.ReactNode;
	dataApi: IdataResponse[];
}

const ClimateEffect: React.FC<IDataViz> = ({dataViz, dataApi}) => {
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
		<CurveActualConsumption2022
			dataApi={dataApi}
			title={"Consommation"}
			line={true}
			chartIndex={1}
		/>,
		<CurveCorrectedConsumption2022
			dataApi={dataApi}
			title={"Consommation"}
			line={true}
			chartIndex={3}
		/>,
		<>
			<CurveDiffConsumption2022
				dataApi={dataApi}
				title={"Consommation"}
				line={true}
				chartIndex={5}
			/>
		</>
	];

	return (
		<>
			<ButtonToolbar className="customToolbar justify-content-end">
				<ButtonGroup className="me-2">
					<Button
						color="link"
						outline
						size="lg"
						className="px-1 arrow"
						onClick={prevComponent}
						disabled={componentIndex === 0}
					>
						<MdOutlineArrowCircleLeft />
					</Button>
					<Button
						color="link"
						outline
						size="lg"
						className="px-1 arrow"
						onClick={nextComponent}
						disabled={componentIndex === components.length - 1}
					>
						<MdOutlineArrowCircleRight />
					</Button>
				</ButtonGroup>
			</ButtonToolbar>
			<div className="p-0 components__warpper">
				{dataApi && components[componentIndex]}
				{dataViz}
			</div>
		</>
	);
};

export default ClimateEffect;
