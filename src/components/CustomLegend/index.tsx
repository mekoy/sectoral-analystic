import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IpPropsDataset } from "components/LineChart";
import { Chart } from "chart.js";

interface LegendProps {
  title?: React.ReactNode;
  line?: boolean;
  customClass?: string;
  width?: string | number;
  height?: string | number;
  data: IpPropsDataset;
  chartIndex?: number;
  style?: {};
}

const CustomLegend: React.FC<LegendProps> = ({
  data,
  title,
  line,
  chartIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeToogle, setActiveToogle] = useState<boolean>(false);
  const currentIndex = Number(chartIndex);

  const handleClick = (label: string, index: number) => {
    const chart = Chart.instances[Number(chartIndex)];
    const dataset = chart.getDatasetMeta(
      chart.data.datasets.findIndex((d) => d.label === label)
    );
    dataset.hidden = !dataset.hidden;

    setActiveIndex(index);
    setActiveToogle(!activeToogle);

    if (currentIndex) chart.update();
    else chart.destroy();
    // console.log(chartIndex);
    // console.log(Chart.instances);
  };

  const legendItems = data.datasets.map((dataset, index) => {
    return (
      <div
        key={index}
        className="legend__content--item"
        onClick={() => handleClick(dataset.label, index)}
        style={{
          cursor: "pointer",
          opacity: activeIndex === index && activeToogle ? 0.9 : 1,
          textDecoration:
            activeIndex === index && activeToogle
              ? "line-through"
              : "none",
        }}
      >
        <div
          className={`${line ? "customLine" : "customEdge"}`}
          style={{
            backgroundColor: dataset.borderColor as string,
            marginRight: 5,
          }}
        />
        <div className="label_legend">{dataset.label}</div>
        <div className="showChart">
          <MdOutlineRemoveRedEye />
        </div>
      </div>
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
