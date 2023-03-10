import React, { useState } from "react";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import { ButtonToolbar, ButtonGroup, Button } from "reactstrap";

import CurveConsoMoy20142019 from "modules/CurveConsoMoy20142019";
import { IdataResponse } from "pages/context";
import CurveConsoEffectOfSobriety from "modules/CurveConsoEffectOfSobriety";
import CurveConsoEffectOfSobrietyDecrease from "modules/CurveConsoEffectOfSobrietyDecrease";
import CurveConsoEffectOfSobrietySecond from "modules/CurveConsoEffectOfSobrietySecond";

interface IDataViz {
  dataViz?: React.ReactNode;
  dataApi: IdataResponse[];
}

const EffectOfSobriety: React.FC<IDataViz> = ({ dataViz, dataApi }) => {
  const [componentIndex, setComponentIndex] = useState(0);

  const nextComponent = () => {
    setComponentIndex((prevIndex: number) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevComponent = () => {
    setComponentIndex((prevIndex: number) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  const components = [
    <CurveConsoMoy20142019
      dataApi={dataApi}
      title={"Consommation"}
      line={true}
    />,
    <>
    <CurveConsoEffectOfSobriety
      dataApi={dataApi}
      title={"Consommation"}
      line={true}
    />
    <CurveConsoEffectOfSobriety
      dataApi={dataApi}
      title={"Effet de la sobriété"}
    />
    </>,
    <>
      <CurveConsoEffectOfSobrietySecond
        dataApi={dataApi}
        title={"Consommation"}
        line={true}
      />
      ,
      <CurveConsoEffectOfSobrietyDecrease
        dataApi={dataApi}
        title={"Effet de la sobriété"}
      />
    </>,
  ];

  return (
    <>
      <ButtonToolbar className="justify-content-end toolbar">
        <ButtonGroup className="me-2">
          <Button
            color="link"
            outline
            size="lg"
            className="px-1 arrow"
            onClick={prevComponent}
            disabled={componentIndex === 0}
          >
            <MdOutlineArrowCircleLeft />
          </Button>
          <Button
            color="link"
            outline
            size="lg"
            className="px-1 arrow"
            onClick={nextComponent}
            disabled={componentIndex === components.length - 1}
          >
            <MdOutlineArrowCircleRight />
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <div className="p-0 components__warpper">
        {dataApi ? (
          components[componentIndex]
        ) : (
          <div className="py-5 text-center">loadin.....</div>
        )}
        {dataViz}
      </div>
    </>
  );
};

export default EffectOfSobriety;
