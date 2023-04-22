"use client";

import { useState } from "react";

export const useIdBuy = () => {
    const [buyId, setBuyId] = useState<number | undefined>();
    const [buyAll, setBuyAll] = useState<boolean>(false);

    return {
        buyId,
        setBuyId,
        buyAll,
        setBuyAll,
    };
};
