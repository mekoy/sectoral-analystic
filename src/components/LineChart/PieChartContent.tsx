import React from "react";
import PieChart from "./piedaaviz";
import {ConfigOptionsLegend} from "utils/type";

export const dataDaysDecm = {
	labels: ["Residentiel", "Industrie", "Tertiaire"],
	type: "pie",
	index: 0,
	datasets: [
		{
			label: "",
			data: [2565, 946, 1997],
			backgroundColor: [
				"rgb(32, 0, 125)",
				"rgba(54, 162, 235, 0.2)",
				"rgb(153, 216, 237)"
			],
			borderWidth: 0
		}
	],
	options: {
		plugins: {
			tooltip: {
				enabled: true
			},
			legend: {
				display: true,
				position: "right",
				legend: {
					display: false,
					labels: {
						boxWidth: 12,
						boxHeight: 0,
						padding: 20,
						filter: (legendItem: ConfigOptionsLegend) => {
							console.log(legendItem, "legendItem modal");
							switch (legendItem.text) {
								case "Residentiel":
									return {
										borderRadius: (legendItem.borderRadius = 2)
									};
								case "Industrie":
									return {
										borderRadius: (legendItem.borderRadius = 2)
									};
								case "Tertiaire":
									return {
										borderRadius: (legendItem.borderRadius = 2)
									};
								default:
									break;
							}
						}
					}
				}
			}
		}
	}
};

export const PieChartContent: React.FC<{}> = () => {
	return (
		<PieChart
			id="pieChart"
			data={dataDaysDecm}
			options={dataDaysDecm.options}
			className={"wrapp-pie"}
		/>
	);
};
