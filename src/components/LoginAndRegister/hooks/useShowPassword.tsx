"use client";

import { useState } from "react";

export const useShowPassword = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return {
        showPassword,
        setShowPassword,
    };
};
