import {PieChartContent} from "components/LineChart/PieChartContent";
import ChartModal from "components/Modal";
import React, {useState} from "react";

const styleCustom: {
	daysNov: React.CSSProperties;
	dayBottomLabel: React.CSSProperties;
} = {
	dayBottomLabel: {
		position: "absolute",
		left: "63.13%",
		right: "34.07%",
		top: "66.85%",
		bottom: "26.48%",
		width: "120px",
		fontFamily: "Nunito Sans",
		fontStyle: "normal",
		fontWeight: 700,
		fontSize: "11px",
		lineHeight: "25px",
		color: "rgb(75, 84, 97)",
		border: " 2px solid rgb(75, 84, 97)",
		background: "rgb(255, 255, 255)",
		textAlign: "center",
		borderRadius: "50px",
		zIndex: 80,
		cursor: "pointer"
	},
	daysNov: {
		position: "absolute",
		left: "68%",
		right: "36.92%",
		top: "7.15%",
		bottom: "32.45%",
		border: "1px dashed rgb(97, 97, 97)",
		borderRadius: "5px",
		width: "10px"
	}
};

const DaysDecember: React.FC<{}> = ({}) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const ModalDaysDecem = () => {
		const title= "Répartition de l'éffort de sobiété";
		return (
			<ChartModal title={title} isOpen={modal} toggle={toggle} ><PieChartContent /></ChartModal>
		);
	};

	return (
		<div className="DaysDecember">
			<div style={styleCustom.dayBottomLabel} onClick={toggle}>
				Etude 12 décembre
			</div>
			<div style={styleCustom.daysNov}>
			<ModalDaysDecem />
			</div>
		</div>
	);
};

export default DaysDecember;
