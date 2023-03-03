import React from "react";
import {Container} from "reactstrap";
interface INavDataViz {
	children: React.ReactNode;
}
const NavDataviz: React.FC<INavDataViz> = ({children}) => {
	return <Container className="border py-2">{children}</Container>;
};

export default NavDataviz;
