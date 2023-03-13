import { Chart } from "chart.js";

export const fillBetweenLinesPlugin = {
  id: "fillBetweenLines",
  afterDatasetsDraw: (chart: Chart) => {
    const ctx = chart.ctx;
    const datasets = chart.data.datasets;
    const xAxis = chart.scales["x-axis-0"];
    const yAxis = chart.scales["y-axis-0"];
    const threshold = 40; // change this value to change the fill threshold
    console.log("dddd", chart);

    // for (let i = 0; i < datasets.length - 1; i++) {
    //   const dataset1 = datasets[i];
    //   const dataset2 = datasets[i + 1];
    //   const line1 = dataset1.metaData[0]._model;
    //   const line2 = dataset2.metaData[0]._model;

    //   ctx.save();
    //   ctx.beginPath();
    //   ctx.moveTo(line1.x, yAxis.getPixelForValue(threshold));
    //   ctx.lineTo(line1.x, line1.y);

    //   for (let j = 1; j < dataset1.metaData.length; j++) {
    //     const point1 = dataset1.metaData[j]._model;
    //     const point2 = dataset2.metaData[j - 1]._model;

    //     if (point1.y >= threshold && point2.y < threshold) {
    //       const x = xAxis.getPixelForValue(point1.x);
    //       const y = yAxis.getPixelForValue(threshold);
    //       ctx.lineTo(x, y);
    //     }

    //     ctx.lineTo(point1.x, point1.y);
    //   }

    //   ctx.lineTo(line1.x, yAxis.getPixelForValue(threshold));

    //   for (let j = dataset2.metaData.length - 2; j >= 0; j--) {
    //     const point1 = dataset2.metaData[j]._model;
    //     const point2 = dataset1.metaData[j + 1]._model;

    //     if (point1.y >= threshold && point2.y < threshold) {
    //       const x = xAxis.getPixelForValue(point1.x);
    //       const y = yAxis.getPixelForValue(threshold);
    //       ctx.lineTo(x, y);
    //     }

    //     ctx.lineTo(point1.x, point1.y);
    //   }

    //   ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    //   ctx.fill();

    //   ctx.restore();
    // }
  },
};
