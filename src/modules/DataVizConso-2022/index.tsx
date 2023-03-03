import { IdataResponse } from "pages/context";
import React from "react";

import { labels } from "utils";
import LineChart from "components/LineChart/LineChart";

interface IDataVizGlobal {
  dataApi: IdataResponse[];
}

const DataVizConsumption2022: React.FC<IDataVizGlobal> = ({ dataApi }) => {
  const dataList2022 = dataApi.filter((number) => {
    if (number.year === 2022) {
      return number.year;
    }
  });

  const conso_realized = "Consommation réalisée cet hiver";
  const conso_normal =
    "Consommation de cet hiver remise à condition normale de température";

  const data = {
    labels,
    datasets: [
      {
        label: conso_realized,
        data: dataList2022 && dataList2022.map((item) => item.conso_realisee),
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 1)",
        fill: false,
        tension: 0.1,
      },
      {
        label: conso_normal,
        data:
          dataList2022 &&
          dataList2022.map((item) => item.conso_realisee - item.climat),
        borderColor: "rgba(248, 81, 9, 1)",
        backgroundColor: "rgba(248, 81, 9, 1)",
      },
    ],
  };

  let delayed: boolean;
  const options = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      interaction: {
        mode: "index" as const,
        intersect: false,
      },
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context: any) => {
          let delay = 0;
          if (
            context.type === "data" &&
            context.mode === "default" &&
            !delayed
          ) {
            delay = context.dataIndex * 3000 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  };

  return <LineChart options={options} data={data} />;
};

export default DataVizConsumption2022;
