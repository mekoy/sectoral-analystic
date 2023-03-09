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

const CurveConsoMoy20142019: React.FC<IDataProps> = ({
  title,
  line,
  dataApi,
}) => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [chartData, setChartData] = useState<IpPropsDataset>({
    labels: [],
    datasets: [],
  });

  const dataConsoYearP = dataApi.map((item) => item.conso_moyAnneePrec);
  const dataConsoNormaleTemp = dataApi.map(
    (item) => item.conso_condNormaleTemp
  );
  const dataConsoReeel = dataApi.map((item) => item.conso_realisee);

  const data = {
    labels,
    datasets: [
      {
        label: "Consommation Moyenne 2014-2019",
        data: dataConsoYearP,
        borderColor: "rgba(0, 0, 0, 0.7)",
        backgroundColor: "rgba(126, 126, 126, 0.7)",
        fill: false,
        pointStyle: false,
        tension: 0.5,
        borderWidth: 2,
      },
      {
        label: "Consommation effective 2022",
        data: dataConsoReeel,
        borderColor: !showSecondLine
          ? "rgba(255, 0, 0, 1)"
          : "rgba(255, 0, 0, 0.2)",
        backgroundColor: "rgba(255, 0, 0, 1)",
        fill: false,
        pointStyle: false,
        tension: 0.5,
        borderWidth: 2,
      },
      {
        label: "Consommation corrigée 2022",
        data: dataConsoNormaleTemp,
        borderColor: "rgba(248, 81, 9, 1)",
        backgroundColor: "rgba(248, 81, 9, 1)",
        fill: false,
        borderWidth: 3,
        pointStyle: false,
        tension: 0.7,
      },
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
      customClass="CurveConsoMoy20142019"
      title={title}
      line={line}
      options={datavizConfig[0].options}
      data={data}
      plugins={datavizConfig[0].options}
    />
  );
};

export default CurveConsoMoy20142019;
