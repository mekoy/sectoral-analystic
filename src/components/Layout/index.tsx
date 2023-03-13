import React from "react";
import {Container} from "reactstrap";

interface ILayout {
	children: React.ReactNode;
	classname?: string;
}

const Layout: React.FC<ILayout> = ({children, classname}) => {
	return (
		<Container className={`wrapp__content ${classname}`}>
			{children}
		</Container>
	);
};

export default Layout;
