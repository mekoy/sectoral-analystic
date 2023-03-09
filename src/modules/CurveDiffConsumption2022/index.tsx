import { IdataResponse } from "pages/context";
import React, { useEffect, useState } from "react";

import { datavizConfig, labels } from "utils";
import LineChart, { IpPropsDataset } from "components/LineChart";
import { ScriptableContext } from "chart.js";

interface IDataProps {
  dataApi: IdataResponse[];
  title?: string;
  line?: boolean;
}

export const CurveDiffConsumption2022: React.FC<IDataProps> = ({
  title,
  dataApi,
  line,
}) => {
  const [chartData, setChartData] = useState<IpPropsDataset>({
    labels: [],
    datasets: [],
  });

  const [showSecondLine, setShowSecondLine] = useState(false);

  const conso_realized = "Consommation réelle 2022";
  const conso_normal = "Consommation corrigée 2022";

  const conso_realisee = dataApi.map(
    (item: { conso_realisee: number }) => item.conso_realisee
  );

  const conso_condNormaleTemp = dataApi.map(
    (item: { conso_condNormaleTemp: number }) => item.conso_condNormaleTemp
  );

  const data = {
    labels,
    datasets: [
      {
        label: conso_realized,
        data: conso_realisee,
        borderColor: "rgba(255, 0, 0, 1)",
        pointStyle: false,
        borderWidth: 3,
        tension: 0.5,
        fill: false,
      },
      {
        label: conso_normal,
        data: conso_condNormaleTemp,
        borderColor: "rgba(248, 81, 9, 1)",
        pointStyle: false,
        borderWidth: 3,
        tension: 0.5,
        fill: false,
      },
      // {
      //   label: "Entrainant une baisse de la consommation",
      //   data: conso_condNormaleTemp,
      //   borderColor: "rgba(4, 154, 46, 1)",
      //   pointStyle: false,
      //   borderWidth: 4,
      //   tension: 0.5,
      //   fill: showSecondLine ? "+1" : false,
      //   backgroundColor: (context: ScriptableContext<"line">) => {
      //     const ctx = context.chart.ctx;
      //     const gradient = ctx.createLinearGradient(4, 154, 46, 1);
      //     gradient.addColorStop(0, "rgba(3, 152, 9, 0.34)");
      //     gradient.addColorStop(1, "rgba(4, 154, 46, 1)");
      //     return gradient;
      //   },
      // },
      // {
      //   label: "Entrainant une hausse de la consommation",
      //   data: conso_condNormaleTemp,
      //   borderColor: "rgba(201, 74, 74, 1)",
      //   pointStyle: false,
      //   borderWidth: 4,
      //   tension: 0.5,
      //   fill: showSecondLine ? "-1" : false,
      //   backgroundColor: (context: ScriptableContext<"line">) => {
      //     const ctx = context.chart.ctx;
      //     const gradient = ctx.createLinearGradient(201, 74, 74, 1);
      //     gradient.addColorStop(0, "rgba(166, 12, 12, 0.31)");
      //     gradient.addColorStop(1, "rgba(201, 74, 74, 1)");
      //     return gradient;
      //   },
      // },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondLine(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setChartData(data);
  }, [showSecondLine]);

  return (
    <LineChart
      customClass="CurveDiffConsumption2022"
      line={line}
      title={title}
      options={datavizConfig[0].options}
      data={data}
      plugins={datavizConfig[0].options}
    />
  );
};

export default CurveDiffConsumption2022;
