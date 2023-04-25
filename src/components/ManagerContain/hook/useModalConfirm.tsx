"use client";

import { useState } from "react";

export const useModalConfirm = () => {
    const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
    const [showLoading, setShowLoading] = useState<boolean>(false);
    const [idItem, setIdItem] = useState<number>(0);

    return {
        showModalConfirm,
        showLoading,
        setShowLoading,
        setShowModalConfirm,
        idItem,
        setIdItem,
    };
};
