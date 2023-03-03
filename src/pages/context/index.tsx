import React, {createContext, useContext, useEffect, useState} from "react";
import {yearsFull} from "utils";

export type ICurvesConsoContextType = {
	fetchData: () => void;
	dataFetch: IdataResponse[];
	dataFetch_2022: IdataResponse[];
	yearsList: {label: string; year: number}[];
};
export interface IdataResponse {
	climat: number;
	consumption_average: number;
	conso_realisee: number;
	consumption_moy: number;
	consumption_norm_2022: number;
	consumption_norm_moy: number;
	day_week: string;
	sobriety: number;
	target_date: string;
	week: number;
	year: number;
	data_annee_2022: IdataViz2022[];
}
export interface IdataViz2022 {
	Annee: number;
	Mois: number;
	semaine: number;
	conso_realisee: number;
	conso_condNormaleTemp: number;
	conso_moyAnneePrec: number;
}
export interface IdataViz20142019 {
	consumption_norm_moy: number;
	week: number;
	year: number;
}

interface Props {
	children: React.ReactNode;
}

export const CurvesConsoContext = createContext<ICurvesConsoContextType>(
	{} as ICurvesConsoContextType
);
export const ContextProvider: React.FC<Props> = ({children}) => {
	const [data, setData] = useState<IdataResponse[]>([]);
	const yearsList = yearsFull(7);

	const fetchData = () => {
		fetch("http://localhost:8080/data", {
			mode: "cors",
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((response: IdataResponse[]) => setData(response))
			.catch((error) => {
				throw new Error("Failed dataviz", error);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const valueContext = {
		fetchData,
		dataFetch: data,
		dataFetch_2022: data,
		yearsList
	};

	return (
		<CurvesConsoContext.Provider value={valueContext}>
			{children}
		</CurvesConsoContext.Provider>
	);
};

export const useCurvesConsoContext = () => {
	return useContext(CurvesConsoContext) as ICurvesConsoContextType;
};
