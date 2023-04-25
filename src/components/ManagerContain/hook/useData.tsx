"use client";

import { useEffect, useState } from "react";

import { ICategoryApi, IDataApi } from "@/interface";
import { IDataTable } from "../interface";

export const useData = (
    dataProduct: IDataApi[],
    dataCategory: ICategoryApi[],
    numberItemsPagination: number
) => {
    const [data, setData] = useState<IDataTable[]>([]);
    const [numPage, setNumPage] = useState<number>(1);
    const [page, setPag] = useState<number>(1);

    const auxData: IDataTable[] = [];
    let numItems: number = 1;
    useEffect(() => {
        if (dataProduct.length > 1) {
            numItems = dataProduct.length;
            setNumPage(Math.ceil(numItems / numberItemsPagination));

            dataProduct.forEach(item => {
                const aux: IDataTable = { name: item.title, id: item.id };
                auxData.push(aux);
            });
            setData(auxData);
        } else {
            numItems = dataCategory.length;
            setNumPage(Math.ceil(numItems / numberItemsPagination));

            dataCategory.forEach(item => {
                const aux: IDataTable = { name: item.name, id: item.id };
                auxData.push(aux);
            });
            setData(auxData);
        }
    }, []);

    return {
        data,
        handleNewData: (name: string, id: number) =>
            setData([...data, { name, id }]),
        numPage,
        handleNumPage: (num: number) => Math.ceil(numItems / num),
        page,
        handlePagPerIndex: (index: number) => setPag(index),
        handlePagMore: () => {
            if (page === numPage) return;
            setPag(page + 1);
        },
        handlePagMinus: () => {
            if (page === 1) return;
            setPag(page - 1);
        },
    };
};
