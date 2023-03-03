import {IdataResponse, IdataViz20142019} from "pages/context";
import React from "react";

import {labels} from "utils";
import LineChart from "components/LineChart/LineChart";

interface IDataVizGlobal {
	dataApi: IdataResponse[];
}

const DataVizModule20142019: React.FC<IDataVizGlobal> = ({dataApi}) => {
	let elementsInvalides = 0;
	const filtrerParID = (obj: IdataViz20142019) => {
		// if is year?
		if (obj.year !== undefined && obj.year <= 2019 && !isNaN(obj.year)) {
			return true;
		} else {
			return elementsInvalides++;
		}
	};

	const greaterThanSeven = dataApi.filter(filtrerParID);

	const greaterThanSevenMoy2014 = greaterThanSeven.filter((number) => {
		if (number.year <= 2019) {
			if (number.year === 2014) {
				return [number].map((list) => list.consumption_average);
			}
		}
	});

	const greaterThanSevenMoy2015 = greaterThanSeven.filter((number) => {
		if (number.year <= 2019) {
			if (number.year === 2015) {
				return [number].map((list) => list.consumption_average);
			}
		}
	});
	const greaterThanSevenMoy2016 = greaterThanSeven.filter((number) => {
		if (number.year <= 2019) {
			if (number.year === 2016) {
				return [number].map((list) => list.consumption_average);
			}
		}
	});
	const greaterThanSevenMoy2017 = greaterThanSeven.filter((number) => {
		if (number.year <= 2019) {
			if (number.year === 2016) {
				return [number].map((list) => list.consumption_average);
			}
		}
	});
	const greaterThanSevenMoy2018 = greaterThanSeven.filter((number) => {
		if (number.year <= 2019) {
			if (number.year === 2016) {
				return [number].map((list) => list.consumption_average);
			}
		}
	});
	const greaterThanSevenMoy2019 = greaterThanSeven.filter((number) => {
		if (number.year <= 2019) {
			if (number.year === 2016) {
				return [number].map((list) => list.consumption_average);
			}
		}
	});

	// data moyen year 2014
	const initialValueTotal2014 = 0;
	const sumWithInitial2014 = greaterThanSevenMoy2014.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.consumption_average / 19,
		initialValueTotal2014
	);

	// data moyen year 2015
	const initialValueTotal2015 = 0;
	const sumWithInitial2015 = greaterThanSevenMoy2015.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.consumption_average / 19,
		initialValueTotal2015
	);
	// data moyen year 2016
	const initialValueTotal2016 = 0;
	const sumWithInitial2016 = greaterThanSevenMoy2016.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.consumption_average / 19,
		initialValueTotal2016
	);
	// data moyen year 2017
	const initialValueTotal2017 = 0;
	const sumWithInitial2017 = greaterThanSevenMoy2017.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.consumption_average / 19,
		initialValueTotal2017
	);
	// data moyen year 2018
	const initialValueTotal2018 = 0;
	const sumWithInitial2018 = greaterThanSevenMoy2018.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.consumption_average / 19,
		initialValueTotal2018
	);
	// data moyen year 2019
	const initialValueTotal2019 = 0;
	const sumWithInitial2019 = greaterThanSevenMoy2019.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.consumption_average / 19,
		initialValueTotal2019
	);

	//total count moy 2014 - 2019
	const dataTotalMoy = [
		sumWithInitial2014,
		sumWithInitial2015,
		sumWithInitial2016,
		sumWithInitial2017,
		sumWithInitial2018,
		sumWithInitial2019
	];

	const greaterThanSeven2014 = greaterThanSeven.filter((number) => {
		if (number.year === 2014) {
			return {
				year: number.year
			};
		}
	});

	const greaterThanSeven2015 = greaterThanSeven.filter((number) => {
		if (number.year === 2015) {
			return number.year;
		}
	});
	const greaterThanSeven2016 = greaterThanSeven.filter((number) => {
		if (number.year === 2016) {
			return number.year;
		}
	});
	const greaterThanSeven2017 = greaterThanSeven.filter((number) => {
		if (number.year === 2017) {
			return number.year;
		}
	});
	const greaterThanSeven2018 = greaterThanSeven.filter((number) => {
		if (number.year === 2018) {
			return number.year;
		}
	});
	const greaterThanSeven2019 = greaterThanSeven.filter((number) => {
		if (number.year === 2019) {
			return number.year;
		}
	});

	const data = {
		labels,
		label: "Filled",
		datasets: [
			{
				label: "Dataset consomation normale 2014 - 2019",
				data: dataTotalMoy,
				borderColor: "rgb(0, 0, 0,0.9)",
				backgroundColor: "rgb(0, 0, 0,0.9)",
				Filled: true
			},
			{
				label: "Dataset 2014",
				data: greaterThanSeven2014.map((years) => years.consumption_average),
				borderColor: "rgb(0, 0, 0,0.2)",
				backgroundColor: "rgb(0, 0, 0,0.2)",
				Filled: false
			},
			{
				label: "Dataset 2015",
				data: greaterThanSeven2015.map((years) => years.consumption_average),
				borderColor: "rgb(19, 100, 133,0.2)",
				backgroundColor: "rgb(19, 100, 133,0.2)",
				Filled: true
			},
			{
				label: "Dataset 2016",
				data: greaterThanSeven2016.map((years) => years.consumption_average),
				borderColor: "rgb(47, 180, 30,0.2)",
				backgroundColor: "rgb(47, 180, 30,0.2)"
			},
			{
				label: "Dataset 2017",
				data: greaterThanSeven2017.map((years) => years.consumption_average),
				borderColor: "rgb(555, 19, 133,0.2)",
				backgroundColor: "rgb(555, 19, 133,0.2)"
			},
			{
				label: "Dataset 2018",
				data: greaterThanSeven2018.map((years) => years.consumption_average),
				borderColor: "rgb(79, 15, 13, 0.2)",
				backgroundColor: "rgb(79, 15, 13,0.2)"
			},
			{
				label: "Dataset 2019",
				data: greaterThanSeven2019.map((years) => years.consumption_average),
				borderColor: "rgb(68, 19, 133,0.2)",
				backgroundColor: "rgb(68, 19, 133,0.2)"
			}
		]
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const
			},
			title: {
				display: true,
				text: "Consommation attendu 2014 - 2019"
			}
		}
	};

	return <LineChart options={options} data={data} />;
};

export default DataVizModule20142019;
