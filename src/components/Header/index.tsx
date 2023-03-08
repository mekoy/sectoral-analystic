import React from "react";
import {Container, Row} from "reactstrap";

interface IHeader {
	children: React.ReactNode;
	clasName: string;
}
const Header: React.FC<IHeader> = ({children, clasName}) => {
	return (
		<Container className={clasName}>
			<Row md="4" sm="2" xs="1">
				{children}
			</Row>
		</Container>
	);
};

export default Header;
