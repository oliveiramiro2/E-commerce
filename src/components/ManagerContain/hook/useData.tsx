"use client";

import { useEffect, useState, useCallback } from "react";

import { ICategoryApi, IDataApi } from "@/interface";
import {
    IDataCategory,
    IDataProduct,
    IDataTable,
    IOptions,
} from "../interface";

const options: IOptions[] = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
];

export const useData = (
    dataProduct: IDataApi[],
    dataCategory: ICategoryApi[],
    numberItemsPagination: number,
    showLoading: boolean,
    idItem: number,
    dataActionProduct: IDataProduct,
    editId: number,
    dataActionCategory: IDataCategory,
    editIdCategory: number
) => {
    const [data, setData] = useState<IDataTable[]>([]);
    const [allData, setAllData] = useState<IDataTable[]>([]);
    const [lenghtItems, setLenghtItems] = useState<number>(1);
    const [numPage, setNumPage] = useState<number>(1);
    const [numItems, setNumItems] = useState<number>(numberItemsPagination);
    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState<string>("");
    const [idNewItem, setIdNewItem] = useState<number>(0);
    const [productEdited, setProductEdited] = useState<boolean>(false);

    const auxData: IDataTable[] = [];
    useEffect(() => {
        if (dataProduct.length > 1) {
            setLenghtItems(dataProduct.length);
            setNumPage(Math.ceil(dataProduct.length / numberItemsPagination));

            dataProduct.forEach(item => {
                const aux: IDataTable = { name: item.title, id: item.id };
                auxData.push(aux);
            });
            setAllData(auxData);
        } else {
            setLenghtItems(dataCategory.length);
            setNumPage(Math.ceil(dataCategory.length / numberItemsPagination));

            dataCategory.forEach(item => {
                const aux: IDataTable = { name: item.name, id: item.id };
                auxData.push(aux);
            });
            setAllData(auxData);
        }
    }, []);

    const handleDataPerPagination = useCallback(() => {
        const aux: number = numItems * page - 1;
        const auxItems: IDataTable[] = [];
        allData.forEach((item, index) => {
            if (aux - index >= 0 && index > aux - numItems) {
                auxItems.push(item);
            }
        });
        setData(auxItems);
        window.scrollTo({ top: 0 });
    }, [allData, page, numItems]);

    useEffect(() => {
        if (showLoading) {
            const auxId: number =
                dataProduct.length > 1 ? idItem : editIdCategory;
            const aux = allData.filter(item => item.id !== auxId);
            setAllData(aux);
        }
    }, [showLoading]);

    useEffect(() => {
        if (idNewItem !== 0) {
            const aux = [
                ...allData,
                {
                    name:
                        dataProduct.length > 1
                            ? dataActionProduct.title
                            : dataActionCategory.name,
                    id: idNewItem,
                },
            ];
            setAllData(aux);
        }
    }, [idNewItem]);

    useEffect(() => {
        if (productEdited) {
            const aux: IDataTable[] = [];
            allData.forEach(item => {
                if (item.id !== editId) {
                    aux.push({ name: item.name, id: item.id });
                }
            });
            aux.push({
                name:
                    dataProduct.length > 1
                        ? dataActionProduct.title
                        : dataActionCategory.name,
                id: editId,
            });
            setAllData(aux);
        }
    }, [productEdited]);

    useEffect(() => {
        handleDataPerPagination();
    }, [handleDataPerPagination]);

    useEffect(() => {
        if (search.length > 0) {
            const aux: IDataTable[] = [];
            allData.forEach(item => {
                if (item.name.toLowerCase().includes(search.toLowerCase()))
                    aux.push(item);
            });
            setData(aux);
        } else {
            handleDataPerPagination();
        }
    }, [search]);

    return {
        data,
        numPage,
        numItems,
        page,
        options,
        search,
        handleNewData: (name: string, id: number) =>
            setData([...data, { name, id }]),
        handleItemPerPage: (num: number) => {
            setPage(1);
            setNumPage(Math.ceil(lenghtItems / num));
            setNumItems(num);
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
        setSearch,
        setIdNewItem,
        setProductEdited,
    };
};
