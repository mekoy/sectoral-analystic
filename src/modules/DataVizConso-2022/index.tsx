import { IdataResponse } from "pages/context";
import React from "react";

import { datavizConfig, labels } from "utils";
import LineChart from "components/LineChart/LineChart";

interface IDataVizGlobal {
  dataApi: IdataResponse[];
}

const DataVizConsumption2022: React.FC<IDataVizGlobal> = ({ dataApi }) => {
  const conso_realized = "Consommation réalisée cet hiver";
  const conso_normal =
    "Consommation de cet hiver remise à condition normale de température";

  const data = {
    labels,
    datasets: [
      {
        label: conso_realized,
        data:
          dataApi &&
          dataApi.map(
            (item: { conso_realisee: number }) => item.conso_realisee
          ),
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 1)",
        fill: false,
        tension: 0.1,
        pointStyle: false,
      },
      {
        label: conso_normal,
        data:
          dataApi &&
          dataApi.map(
            (item: { conso_condNormaleTemp: number }) =>
              item.conso_condNormaleTemp
          ),
        borderColor: "rgba(248, 81, 9, 1)",
        backgroundColor: "rgba(248, 81, 9, 1)",
        pointStyle: false,
      },
    ],
  };

  let delayed: boolean;
  // const options = {
  // 	type: "line",
  // 	data: data,
  // 	options: {
  // 		responsive: true,
  // 		interaction: {
  // 			mode: "index" as const,
  // 			intersect: false
  // 		},
  // 		animation: {
  // 			onComplete: () => {
  // 				delayed = true;
  // 			},
  // 			delay: (context: any) => {
  // 				let delay = 0;
  // 				if (
  // 					context.type === "data" &&
  // 					context.mode === "default" &&
  // 					!delayed
  // 				) {
  // 					delay = context.dataIndex * 3000 + context.datasetIndex * 100;
  // 				}
  // 				return delay;
  // 			}
  // 		},
  // 		scales: {
  // 			x: {
  // 				stacked: true
  // 			},
  // 			y: {
  // 				stacked: true
  // 			}
  // 		}
  // 	}
  // };

  return (
    <LineChart
      options={datavizConfig[0].options}
      data={data}
      plugins={datavizConfig[0].options}
      width={"500px"}
    />
  );
};

export default DataVizConsumption2022;
