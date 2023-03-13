import React, { useState } from "react";
import ButtonDefault from "components/Button";
import { IdataResponse } from "pages/context";
import ClimateEffect from "../ClimateEffect";
import EffectOfSobriety from "pages/EffectOfSobriety";

interface IDataViz {
  dataViz?: React.ReactNode;
  dataApi: IdataResponse[];
}
const ConsoWithChart: React.FC<IDataViz> = ({ dataViz, dataApi }) => {
  const [currentPageIndex, setCurrentPagIndex] = useState(0);
  const pages = [
    <ClimateEffect dataApi={dataApi} />,
    <EffectOfSobriety dataApi={dataApi} />,
  ];

  const labelsButton = ["Effet météo", "Effet de la sobriété"];

  const displayButtons = labelsButton.map((label, index) => {
    return (
      <ButtonDefault
        key={index}
        label={label}
        size="sm"
        className={`custom m-1 ${currentPageIndex === index && "active"}`}
        onClick={() => setCurrentPagIndex(index)}
      />
    );
  });

  return (
    <div className={`wrapp__chart page-${currentPageIndex}`}>
      <div className="customButtons d-flex justify-content-between align-items-center">
        {displayButtons}
      </div>
      <div className="p-0">
        {dataApi ? (
          pages[currentPageIndex]
        ) : (
          <div className="py-5 text-center">loadin.....</div>
        )}
        {dataViz}
      </div>
    </div>
  );
};

export default ConsoWithChart;
