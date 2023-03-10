import {PieChartContentWeekNov} from "components/LineChart/PieChartContentWeekNov";
import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

const styleCustom: {
	week: React.CSSProperties;
	weekBottomLabel: React.CSSProperties;
} = {
	weekBottomLabel: {
		position: "absolute",
		left: "60.13%",
		right: "34.07%",
		top: "76.85%",
		bottom: "17.48%",
		width: "158px",
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
	week: {
		position: "absolute",
		left: "65.1%",
		right: "36.92%",
		top: "11.15%",
		bottom: "22.45%",
		border: "1px dashed rgb(97, 97, 97)",
		borderRadius: "5px",
		width: "50px"
	}
};

const WeekNovember: React.FC<{}> = ({}) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const ModalWeek44Nov = () => {
		return (
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>
					Répartition de l'éffort de sobiété
				</ModalHeader>
				<ModalBody>
					<PieChartContentWeekNov />
				</ModalBody>
			</Modal>
		);
	};
	return (
		<>
			<div style={styleCustom.weekBottomLabel} onClick={toggle}>
				Etude semaine de novembre
			</div>
			<div style={styleCustom.week}></div>
			<ModalWeek44Nov />
		</>
	);
};

export default WeekNovember;
