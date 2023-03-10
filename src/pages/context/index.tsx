import axios, {AxiosError, AxiosResponse} from "axios";
import React, {createContext, useContext, useEffect, useState} from "react";

export type ICurvesConsoContextType = {
	dataFetch: IdataResponse[];
	isLoading: boolean;
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
export interface IIsLoading {
	isLoading: boolean;
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
export type ServerError = {errorMessage: string};

export const ContextProvider: React.FC<Props> = ({children}) => {
	const URL =
		"https://rte-bucket-1.s3.eu-west-3.amazonaws.com/db-1677614941538.json";
	const [dataFetching, SetDataFetching] = useState<IdataResponse[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const fetchData = async () => {
		await axios
			.get(URL, {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((response: AxiosResponse<any>) => {
				return response.data;
			})
			.then((response: AxiosResponse<IdataResponse[]>) => {
				SetDataFetching(response.data);
			})
			.catch((err) => {
				const serverError = err as AxiosError<ServerError>;
				if (serverError && serverError.response) {
					return {
						errorMessage: `${serverError.response}`
					};
				}
			})
			.finally(() => {
				setIsLoading(true);
			});
	};

	useEffect(() => {
		if (isLoading) {
			fetchData();
		}
	}, [isLoading]);

	const valueContext = {
		dataFetch: dataFetching,
		isLoading: isLoading
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
