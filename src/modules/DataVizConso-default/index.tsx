import { IdataResponse, IdataViz20142019 } from "pages/context";
import React from "react";

import { datavizConfig, labels } from "utils";
import LineChart from "components/LineChart/LineChart";

interface IDataVizGlobal {
  dataApi: IdataResponse[];
}

const DataVizModuleDefault: React.FC<IDataVizGlobal> = ({}) => {
  const data = {
    labels,
    label: "",
    datasets: [
      {
        label: "",
        data: [],
        borderColor: "rgb(0, 0, 0,0.2)",
        backgroundColor: "rgb(0, 0, 0,0.2)",
        pointStyle: false,
      },
    ],
  };

  return (
    <LineChart
      options={datavizConfig[0].options}
      data={data}
      plugins={datavizConfig[0].options}
      width={"500px"}
    />
  );
};

export default DataVizModuleDefault;
