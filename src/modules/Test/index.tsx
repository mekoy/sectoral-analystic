import React from 'react';
import { Line } from 'react-chartjs-2';

import  LineChart  from 'components/LineChart';
import { ScriptableContext } from 'chart.js';



interface ChartData {
  label: string;
  data: number[];
  backgroundColor?: any;
  borderColor?: string;
  fill?: any;
}

interface Props {
  data: {
    labels: string[];
    datasets: ChartData[];
  };
}

const TwoLinesChart: React.FC<Props> = ({ data }) => {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      fillBetweenLines: {
        topFillColor: 'rgba(255, 0, 0, 0.2)',
        bottomFillColor: 'rgba(0, 255, 0, 0.2)',
      },
    },
  };

  return (
    <LineChart
      data={data}
      options={options}
      plugins={[
        {
          afterDatasetsDraw: (chart: any) => {
            const ctx = chart.ctx;
            const topDatasetIndex = chart.getDatasetMeta(0).index;
            const bottomDatasetIndex = chart.getDatasetMeta(1).index;

            const topLine = chart.getDatasetMeta(topDatasetIndex).dataset;
            const bottomLine = chart.getDatasetMeta(bottomDatasetIndex).dataset;

            const topPoints = topLine._children;
            const bottomPoints = bottomLine._children;

            ctx.save();
            ctx.fillStyle = chart.options.plugins.fillBetweenLines.topFillColor;
            ctx.beginPath();
            ctx.moveTo(topPoints[0].x, topPoints[0].y);

            for (let i = 1; i < topPoints.length; i++) {
              ctx.lineTo(topPoints[i].x, topPoints[i].y);
            }

            ctx.lineTo(topPoints[topPoints.length - 1].x, bottomPoints[bottomPoints.length - 1].y);

            for (let i = bottomPoints.length - 1; i >= 0; i--) {
              ctx.lineTo(bottomPoints[i].x, bottomPoints[i].y);
            }

            ctx.closePath();
            ctx.fill();
            ctx.restore();
          },
        },
      ]}
    />
  );
};

export default TwoLinesChart;
