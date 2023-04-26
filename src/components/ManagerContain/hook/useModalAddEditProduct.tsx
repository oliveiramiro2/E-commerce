"use client";

import { useState } from "react";

export const useModalAddEditProduct = () => {
    const [openModalProduct, setOpenModalProduct] = useState<boolean>(false);
    const [addNew, setAddNew] = useState<boolean>(false);

    return {
        openModalProduct,
        addNew,
        setOpenModalProduct,
        setAddNew,
    }
}
