"use client";

import { useState } from "react";
import { IDataProduct } from "../interface";

const defaultValuesProduct: IDataProduct = {
    title: "",
    description: "",
    price: 0,
    category: 0,
    trySendErro: false,
}

export const useModalAddEditProduct = () => {
    const [openModalProduct, setOpenModalProduct] = useState<boolean>(false);
    const [addNew, setAddNew] = useState<boolean>(false);
    const [dataProduct, setDataProduct] =
        useState<IDataProduct>(defaultValuesProduct);

    return {
        openModalProduct,
        addNew,
        dataProduct,
        setOpenModalProduct,
        setAddNew,
        handleSingleData: (value: string, index: number) => {
            switch (index) {
                case 0:
                    setDataProduct({...dataProduct, title: value})
                    break;
                case 1:
                    setDataProduct({...dataProduct, description: value})
                    break;
                case 2:
                    setDataProduct({...dataProduct, price: Number(value)})
                    break;
                case 3:
                    setDataProduct({...dataProduct, category: Number(value)})
                    break;
                default:
                    setDataProduct({ ...dataProduct, trySendErro: true });
                    break;
            }
        },
        handleEditData: (value: IDataProduct) => setDataProduct(value),
        handleCleanData: () => setDataProduct(defaultValuesProduct)
    };
};
