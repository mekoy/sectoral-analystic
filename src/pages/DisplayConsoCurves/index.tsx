import React, { useState } from "react";
import ButtonDefault from "components/Button";
import { IdataResponse } from "pages/context";
import ClimateEffect from "../ClimateEffect";
import EffectOfSobriety from "pages/EffectOfSobriety";
import Synthesis from "pages/Synthesis";

interface IDataViz {
  dataViz?: React.ReactNode;
  dataApi: IdataResponse[];
}
const ConsoWithChart: React.FC<IDataViz> = ({ dataViz, dataApi }) => {
  const [currentPageIndex, setCurrentPagIndex] = useState(0);
  const pages = [
    <ClimateEffect dataApi={dataApi} />,
    <EffectOfSobriety dataApi={dataApi} />,
    <Synthesis dataApi={dataApi} />,
  ];

  const labelsButton = ["Effet du climat", "Effet de la sobriété", "Synthèse"];

  const displayButtons = labelsButton.map((label, index) => {
    return (
      <ButtonDefault
        key={index}
        label={label}
        size="sm"
        className={`custom m-lg-1 ${currentPageIndex === index && "active"}`}
        onClick={() => setCurrentPagIndex(index)}
      />
    );
  });

  return (
    <div
      className={`box wrapp__content page-${currentPageIndex}`}
      style={{ position: "relative", width: "75%" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>{displayButtons}</div>
      </div>
      <div className="p-0" style={{ position: "relative" }}>
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
