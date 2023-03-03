import React from "react";
import ButtonDefault from "components/Button";
import {Container} from "reactstrap";
import NavDataviz from "components/Nav";

interface IDataViz {
	dataViz: React.ReactNode;
}
const DataVizAceptedYear20142019: React.FC<IDataViz> = ({dataViz}) => {
	return (
		<Container className="border py-2">
			<NavDataviz>
				{/* (2014 - 2029) */}
				<ButtonDefault
					color="blue"
					label="Consommation attendue "
					size="xs"
					className="btn btn-info m-lg-2 py-2 m-lg-2"
					onClick={() => console.log("click button")}
				/>
				<ButtonDefault
					color="red"
					label="consommation réalisée en 2022"
					size="xs"
					className="btn btn-info m-lg-2 py-2 m-lg-2 ml-2"
					onClick={() => console.log("click button")}
				/>
			</NavDataviz>
			{dataViz}
		</Container>
	);
};

export default DataVizAceptedYear20142019;
