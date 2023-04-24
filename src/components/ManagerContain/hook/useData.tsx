"use client";

import { useEffect, useState } from "react";

import { ICategoryApi, IDataApi } from "@/interface";
import { IDataTable } from "../interface";

export const useData = (
    dataProduct: IDataApi[],
    dataCategory: ICategoryApi[]
) => {
    const auxData: IDataTable[] = [];
    useEffect(() => {
        if (dataProduct.length > 1) {
            dataProduct.forEach(item => {
                const aux: IDataTable = { name: item.title, id: item.id };
                auxData.push(aux);
            });
        } else {
            dataCategory.forEach(item => {
                const aux: IDataTable = { name: item.name, id: item.id };
                auxData.push(aux);
            });
        }
    }, []);

    const [data, setData] = useState<IDataTable[]>(auxData);

    return {
        data,
        handleNewData: (name: string, id: number) =>
            setData([...data, { name, id }]),
    };
};
