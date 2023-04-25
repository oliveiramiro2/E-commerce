"use client";

import { useState } from "react";

export const useModalConfirm = () => {
    const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);

    return {
        showModalConfirm,
        setShowModalConfirm,
    };
};
