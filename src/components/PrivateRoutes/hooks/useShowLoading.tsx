"use client";

import { useState } from "react";

export const useShowLoading = () => {
    const [showLoading, setShowLoading] = useState<boolean>(true);

    return {
        showLoading,
        setShowLoading,
    };
};
