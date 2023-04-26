"use client";

import { useState } from "react";

export const useModalAddEditProduct = () => {
    const [openModalProduct, setOpenModalProduct] = useState<boolean>(false);

    return {
        openModalProduct, setOpenModalProduct,
    }
}
