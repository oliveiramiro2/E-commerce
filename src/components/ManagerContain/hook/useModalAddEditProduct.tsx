"use client";

import { useState } from "react";
import { IDataProduct } from "../interface";

const defaultValuesProduct: IDataProduct = {
    title: "",
    description: "",
    price: "",
    category: 0,
    trySendErro: false,
};

export const useModalAddEditProduct = () => {
    const [openModalProduct, setOpenModalProduct] = useState<boolean>(false);
    const [addNew, setAddNew] = useState<boolean>(false);
    const [dataActionProduct, setDataActionProduct] =
        useState<IDataProduct>(defaultValuesProduct);

    return {
        openModalProduct,
        addNew,
        dataActionProduct,
        setOpenModalProduct,
        setAddNew,
        handleSingleData: (value: string, index: number) => {
            switch (index) {
                case 0:
                    setDataActionProduct({
                        ...dataActionProduct,
                        title: value,
                    });
                    break;
                case 1:
                    setDataActionProduct({
                        ...dataActionProduct,
                        description: value,
                    });
                    break;
                case 2:
                    setDataActionProduct({
                        ...dataActionProduct,
                        price: value,
                    });
                    break;
                case 3:
                    setDataActionProduct({
                        ...dataActionProduct,
                        category: Number(value),
                    });
                    break;
                default:
                    setDataActionProduct({
                        ...dataActionProduct,
                        trySendErro: true,
                    });
                    break;
            }
        },
        handleEditData: (value: IDataProduct) => setDataActionProduct(value),
        handleCleanData: () => setDataActionProduct(defaultValuesProduct),
    };
};
