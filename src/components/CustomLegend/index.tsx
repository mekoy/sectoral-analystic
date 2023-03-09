import { Chart, ChartData, ChartOptions, LegendOptions } from "chart.js";
import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface LegendItemProps {
  label?: string;
  color?: string;
  line?: boolean;
}

const LegendItem: React.FC<LegendItemProps> = ({
  label,
  color,
  line,
}) => {
  return (
    <div className="legend__content--item">
      <div
        className={`${line ? "customLine" : "customEdge"}`}
        style={{
          backgroundColor: color,
        }}
      />
      <div>{label}</div>
      <div className="showChart"><MdOutlineRemoveRedEye/></div>
    </div>
  );
};

interface LegendProps {
  title?: React.ReactNode;
  data: ChartData;
  line?: boolean;
  legendOptions?: ChartOptions;
}

const CustomLegend: React.FC<LegendProps> = ({ data, title, line, legendOptions }) => {
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
    <div className="legend__content">
      <h4>{title}</h4>
      {legendItems}
    </div>
  );
};

export default CustomLegend;
