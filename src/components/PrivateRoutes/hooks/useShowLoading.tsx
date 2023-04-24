"use client";

import { useState } from "react";

export const useShowLoading = () => {
    const [showLoading, setShowLoading] = useState<boolean>(false);

    return {
        showLoading,
        setShowLoading,
    };
};
