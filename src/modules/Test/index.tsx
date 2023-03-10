import React from 'react';
import { Line } from 'react-chartjs-2';
import  LineChart  from 'components/LineChart';
import { ScriptableContext } from 'chart.js';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 20, 30, 40, 50, 60, 70],
      borderColor: 'red',
      fill: false
    },
    {
      label: 'Dataset 2',
      data: [70, 60, 50, 40, 30, 20, 10],
      borderColor: 'blue',
      fill: false
    },
    {
      label: 'Background',
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: (context:ScriptableContext<"line">) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          // This can happen if the chart is not yet fully initialized
          return null;
        }
        const top = chartArea.top;
        const bottom = chartArea.bottom;
        const gradient = ctx.createLinearGradient(0, top, 0, bottom);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)'); // top color
        gradient.addColorStop(1, 'rgba(0, 0, 255, 0.2)'); // bottom color
        return gradient;
      },
      fill: true
    }
  ]
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const TwoLinesChart = () => {
  return (
    <div>
      <LineChart data={data} options={options} />
    </div>
  );
};

export default TwoLinesChart;