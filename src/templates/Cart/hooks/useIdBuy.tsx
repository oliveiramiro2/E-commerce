"use client";

import { useState } from "react";

export const useIdBuy = () => {
    const [buyId, setBuyId] = useState<number | undefined>();
    const [buyAll, setBuyAll] = useState<boolean>(false);
    const [priceBuying, setPriceBuying] = useState<number>(0);
    const [numberItems, setNumberItems] = useState<number>(0);

    return {
        buyId,
        setBuyId,
        buyAll,
        setBuyAll,
        priceBuying,
        setPriceBuying,
        numberItems,
        setNumberItems,
    };
};
