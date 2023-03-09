import React, { useState } from "react";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import { ButtonToolbar, ButtonGroup, Button } from "reactstrap";
import { IdataResponse } from "pages/context";
import CurveSynthesis from "modules/CurveSynthesis";

interface IDataViz {
  dataViz?: React.ReactNode;
  dataApi: IdataResponse[];
}

const Synthesis: React.FC<IDataViz> = ({ dataViz, dataApi }) => {
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
    <CurveSynthesis dataApi={dataApi} title={"Consommation"} line={true} />,
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

export default Synthesis;
