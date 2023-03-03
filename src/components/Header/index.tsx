import React from "react";
import {Container, Row} from "reactstrap";

interface IHeader {
	children: React.ReactNode;
}
const Header: React.FC<IHeader> = ({children}) => {
	return (
		<Container className="py-0 pb-5">
			<Row md="4" sm="2" xs="1">
				{children}
			</Row>
		</Container>
	);
};

export default Header;
