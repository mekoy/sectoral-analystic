import React, {createContext, useContext, useEffect, useState} from "react";
import {yearsFull} from "utils";

export type ICurvesConsoContextType = {
	fetchData: () => void;
	dataFetch: IdataResponse[];
	dataFetch_2022: IdataResponse[];
	yearsList: {label: string; year: number}[];
};
export interface IdataResponse {
	conso_realisee: number;
	conso_condNormaleTemp: number;
	conso_moyAnneePrec: number;
	Annee: number;
	Mois: number;
	semaine: string;
	EffetClimat: number;
	EffetSobriete: number;
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
	conso_moyAnneePrec: number;
}

interface Props {
	children: React.ReactNode;
}

export const CurvesConsoContext = createContext<ICurvesConsoContextType>(
	{} as ICurvesConsoContextType
);

export const ContextProvider: React.FC<Props> = ({children}) => {
	// https://rte-bucket-1.s3.eu-west-3.amazonaws.com/db-1677614941538.json
	const URL = "http://localhost:8080/data";
	const [data, setData] = useState<IdataResponse[]>([]);
	const yearsList = yearsFull(7);
	const fetchData = async () => {
		fetch(URL, {
			mode: "cors",
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json"
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((response: IdataResponse[]) => setData(response))
			.catch((error: any) => {
				console.log(error);
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
