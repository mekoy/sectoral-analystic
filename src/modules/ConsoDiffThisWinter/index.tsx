import { IdataResponse } from "pages/context";
import React, { useEffect, useState } from "react";

import { datavizConfig, labels } from "utils";
import LineChart, { IpPropsDataset } from "components/LineChart/LineChart";

interface IDataVizGlobal {
  dataApi: IdataResponse[];
}

const ConsoDiffThisWinter: React.FC<IDataVizGlobal> = ({ dataApi }) => {
  const [chartData, setChartData] = useState<IpPropsDataset>({
    labels: [],
    datasets: [],
  });

  const [showSecondLine, setShowSecondLine] = useState(false);

  const conso_realized = "Consommation réalisée cet hiver";
  const conso_normal =
    "Consommation de cet hiver remise à condition normale de température";

    const conso_realisee = dataApi.map(
      (item: { conso_realisee: number }) => item.conso_realisee
    );
  
    const conso_condNormaleTemp = dataApi.map(
      (item: { conso_condNormaleTemp: number }) => item.conso_condNormaleTemp
    );

  const conso_diff = dataApi.map(
    (item: { conso_realisee: number; conso_condNormaleTemp: number }) =>
      item.conso_realisee - item.conso_condNormaleTemp
  );

  console.log(conso_realisee.filter((item) => item < 0));
  

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: conso_realisee,
        borderColor:  "rgba(255, 0, 0, 1)",
        pointStyle: false,
        fill: true,
        borderWidth: !showSecondLine ? 4 : 2,
      },
      {
        label: "",
        data: conso_condNormaleTemp,
        borderColor: "rgba(248, 81, 9, 1)",
        pointStyle: false,
        fill: false,
        borderWidth: 4,
        hidden: !showSecondLine,
      },
      {
        label: "",
        data: conso_diff.filter((item) => item > 0),
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "linear-gradient(180deg, #C94A4A 0%, rgba(166, 12, 12, 0.31) 100%)",
        pointStyle: false,
        fill: true,
        borderWidth: 4,
      },
      {
        label: "",
        data: conso_diff.filter((item) => item < 0),
        borderColor: "rgba(248, 81, 9, 1)",
        backgroundColor: "linear-gradient(180deg, rgba(69, 255, 76, 0.7) 0%, rgba(69, 255, 76, 0.238) 98.89%)",
        pointStyle: false,
        fill: true,
        borderWidth: 4,
        //hidden: !showSecondLine,
      },
    ],
  };
  

  const options = {
    responsive: true,
    // interaction: {
    //   mode: "index" as const,
    //   intersect: false,
    // },
    // stacked: false,
    plugins: {
      title: {
        display: true,
        text: conso_normal,
      },
      legend: {
        display: false,
        usePointStyle: false,
        labels: false,
      },
    },
    animation: {
      duration: 3000,
      easing: "easeOutQuart",
    },
    scales: {
      // x: {
      //   min: 1,
      //   max: 52,
      // },
      // y: {
      //   min: 40000,
      //   max: 52000,
      // },
    },
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSecondLine(true);
  //   }, 6000);

  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   setChartData(data);
  // }, [showSecondLine]);

  return (
    <LineChart options={options} data={data} plugins={{}} width={"600px"} />
  );
};

export default ConsoDiffThisWinter;
