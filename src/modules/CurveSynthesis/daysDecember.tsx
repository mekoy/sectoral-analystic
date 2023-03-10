import {PieChartContent} from "components/LineChart/PieChartContent";
import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

const styleCustom: {
	daysNov: React.CSSProperties;
	dayBottomLabel: React.CSSProperties;
} = {
	dayBottomLabel: {
		position: "absolute",
		left: "78.13%",
		right: "34.07%",
		top: "76.85%",
		bottom: "17.48%",
		width: "120px",
		fontFamily: "Nunito Sans",
		fontStyle: "normal",
		fontWeight: 700,
		fontSize: "12px",
		lineHeight: "24px",
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
		left: "83.9%",
		right: "36.92%",
		top: "8.15%",
		bottom: "22.45%",
		border: "1px dashed rgb(97, 97, 97)",
		borderRadius: "5px",
		width: "10px"
	}
};

const DaysDecember: React.FC<{}> = ({}) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const ModalDaysDecem = () => {
		return (
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>
					Répartition de l'éffort de sobiété
				</ModalHeader>
				<ModalBody>
					<PieChartContent />
				</ModalBody>
			</Modal>
		);
	};

	return (
		<>
			<div style={styleCustom.dayBottomLabel} onClick={toggle}>
				Etude 12 décembre
			</div>
			<div style={styleCustom.daysNov}></div>
			<ModalDaysDecem />
		</>
	);
};

export default DaysDecember;
