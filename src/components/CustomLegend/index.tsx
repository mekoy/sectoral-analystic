import React, {useState} from "react";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {IpPropsDataset} from "components/LineChart";

interface LegendItemProps {
	label?: string;
	color?: string;
	line?: boolean;
}

const LegendItem: React.FC<LegendItemProps> = ({label, color, line}) => {
	return (
		<div className="legend__content--item">
			<div
				className={`${line ? "customLine" : "customEdge"}`}
				style={{
					backgroundColor: color
				}}
			/>
			<div className="label_legend">{label}</div>
			<div className="showChart">
				<MdOutlineRemoveRedEye />
			</div>
		</div>
	);
};

interface LegendProps {
	title?: React.ReactNode;
	line?: boolean;
	customClass?: string;
	width?: string | number;
	height?: string | number;
	data: IpPropsDataset;
}

const CustomLegend: React.FC<LegendProps> = ({data, title, line}) => {
	const [hiddenDatasets, setHiddenDatasets] = useState<string[]>([]);

	const toggleVisibility = (label: string) => {
		if (hiddenDatasets.includes(label)) {
			setHiddenDatasets(hiddenDatasets.filter((l) => l !== label));
		} else {
			setHiddenDatasets([...hiddenDatasets, label]);
		}
	};

	const legendItems = data.datasets.map((dataset, index) => {
		return (
			<LegendItem
				line={line}
				key={index}
				label={dataset.label}
				color={dataset.borderColor as string}
			/>
		);
	});

	return (
		<div className="box_legend">
			<div className="legend__content">
				<h4 className="legend_content_title">{title}</h4>
				{legendItems}
			</div>
		</div>
	);
};

export default CustomLegend;
