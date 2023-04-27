"use client";

import { useState } from "react";
import { IDataCategory } from "../interface";

const defaultValuesCategory: IDataCategory = {
    name: "",
    trySendErro: false,
};

export const useModalAddEditCategory = () => {
    const [openModalCategory, setOpenModalCategory] = useState<boolean>(false);
    const [addNewCategory, setAddNewCategory] = useState<boolean>(false);
    const [dataActionCategory, setDataActionCategory] = useState<IDataCategory>(
        defaultValuesCategory
    );
    const [editIdCategory, setEditIdCategory] = useState<number>(0);

    return {
        openModalCategory,
        addNewCategory,
        dataActionCategory,
        editIdCategory,
        setOpenModalCategory,
        setAddNewCategory,
        handleDataCategory: (name: string, trySendErro: boolean = false) =>
            setDataActionCategory({ name, trySendErro }),
        setEditIdCategory,
    };
};
