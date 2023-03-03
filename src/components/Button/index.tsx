import React from "react";
import {Button} from "reactstrap";

interface IButton {
	className?: string;
	color: string;
	label: string;
	onClick: () => void;
	size: string;
}

const ButtonDefault: React.FC<IButton> = ({
	color,
	label,
	onClick,
	size,
	className
}) => {
	return (
		<Button color={color} className={className} onClick={onClick} size={size}>
			{label}
		</Button>
	);
};

export default ButtonDefault;
