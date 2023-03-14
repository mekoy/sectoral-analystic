import React, {useState} from "react";
import {
	MdOutlineArrowCircleLeft,
	MdOutlineArrowCircleRight
} from "react-icons/md";
import {ButtonToolbar, ButtonGroup, Button} from "reactstrap";

import CurveConsoMoy20142019 from "modules/CurveConsoMoy20142019/CurveConsoMoy20142019";
import {IdataResponse} from "pages/context";
import CurveConsoEffectOfSobriety from "modules/CurveConsoEffectOfSobriety/CurveConsoEffectOfSobriety";
import CurveConsoEffectOfSobrietyDecrease from "modules/CurveConsoEffectOfSobrietyDecrease/CurveConsoEffectOfSobrietyDecrease";
import CurveConsoEffectOfSobrietySecond from "modules/CurveConsoEffectOfSobrietySecond/CurveConsoEffectOfSobrietySecond";

interface IDataViz {
	dataViz?: React.ReactNode;
	dataApi: IdataResponse[];
}

const EffectOfSobriety: React.FC<IDataViz> = ({dataViz, dataApi}) => {
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
		<CurveConsoMoy20142019
			dataApi={dataApi}
			title={"Consommation"}
			line={true}
			chartIndex={3}
		/>,
		<>
			<CurveConsoEffectOfSobriety
				dataApi={dataApi}
				title={"Consommation"}
				line={true}
				chartIndex={6}
			/>
			<CurveConsoEffectOfSobriety
				dataApi={dataApi}
				title={"Effet de la sobriété"}
				chartIndex={7}
			/>
		</>,
		<>
			<CurveConsoEffectOfSobrietySecond
				dataApi={dataApi}
				title={"Consommation"}
				line={true}
				chartIndex={10}
			/>
			<CurveConsoEffectOfSobrietyDecrease
				dataApi={dataApi}
				title={"Effet de la sobriété"}
				height={80}
				chartIndex={11}
			/>
		</>
	];

	return (
		<>
			<ButtonToolbar className="customToolbar justify-content-end toolbar">
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

export default EffectOfSobriety;
