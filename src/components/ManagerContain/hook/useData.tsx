"use client";

import { useEffect, useState } from "react";

import { ICategoryApi, IDataApi } from "@/interface";
import { IDataTable } from "../interface";

const options: any = [
    {value: 10},
    {value: 20},
    {value: 30},
    {value: 40},
    {value: 50},
]

export const useData = (
    dataProduct: IDataApi[],
    dataCategory: ICategoryApi[],
    numberItemsPagination: number
) => {
    const [data, setData] = useState<IDataTable[]>([]);
    const [allData, setAllData] = useState<IDataTable[]>([]);
    const [numPage, setNumPage] = useState<number>(1);
    const [numItems, setNumItems] = useState<number>(numberItemsPagination);
    const [page, setPage] = useState<number>(1);

    const auxData: IDataTable[] = [];
    let auxNumItems: number = 1;
    useEffect(() => {
        if (dataProduct.length > 1) {
            auxNumItems = dataProduct.length;
            setNumPage(Math.ceil(auxNumItems / numberItemsPagination));

            dataProduct.forEach(item => {
                const aux: IDataTable = { name: item.title, id: item.id };
                auxData.push(aux);
            });
            setAllData(auxData);
        } else {
            auxNumItems = dataCategory.length;
            setNumPage(Math.ceil(auxNumItems / numberItemsPagination));

            dataCategory.forEach(item => {
                const aux: IDataTable = { name: item.name, id: item.id };
                auxData.push(aux);
            });
            setAllData(auxData);
        }
    }, []);

    useEffect(() => {
        const aux: number = numItems * page - 1;
        const auxItems: any = [];
        allData.forEach((item, index) => {
            if (aux - index >= 0 && index > aux - numItems) {
                auxItems.push(item);
            }
        });
        setData(auxItems);
    }, [allData, page, numItems]);

    return {
        data,
        handleNewData: (name: string, id: number) =>
            setData([...data, { name, id }]),
        numPage,
        page,
        handleItemPerPage: (num: number) => {
            setNumPage(Math.ceil(auxNumItems / num))
            setNumItems(num)
        },
        handlePagPerIndex: (index: number) => setPage(index),
        handlePagMore: () => {
            if (page === numPage) return;
            setPage(page + 1);
        },
        handlePagMinus: () => {
            if (page === 1) return;
            setPage(page - 1);
        },
        options,
    };
};
