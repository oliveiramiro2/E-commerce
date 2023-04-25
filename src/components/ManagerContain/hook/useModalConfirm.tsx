"use client";

import { useState } from "react";

export const useModalConfirm = () => {
    const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
    const [showLoading, setShowLoading] = useState<boolean>(false);

    return {
        showModalConfirm,
        showLoading,
        setShowLoading,
        setShowModalConfirm,
    };
};
