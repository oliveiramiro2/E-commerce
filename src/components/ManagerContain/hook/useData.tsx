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
    const [allData, setAllData] = useState<IDataTable[]>([]);
    const [numPage, setNumPage] = useState<number>(1);
    const [numItems, setNumItems] = useState<number>(numberItemsPagination);
    const [page, setPag] = useState<number>(1);

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
    }, [allData, page, numPage]);

    return {
        data,
        handleNewData: (name: string, id: number) =>
            setData([...data, { name, id }]),
        numPage,
        handleNumPage: (num: number) => Math.ceil(auxNumItems / num),
        page,
        handleItemPerPage: (num: number) => setNumItems(num),
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
