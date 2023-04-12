"use client";

import { useState } from "react";

export const usePriceItems = () => {
    const [priceItems, setPriceItems] = useState(0);

    return {
        priceItems,
        handlePriceItems: (oldItems: number, items: number, price: number) => {
            const newTotal = priceItems - oldItems * price + items * price;
            setPriceItems(newTotal);
        },
        handleFirstTime: (price: number) => {
            const oldPrice = priceItems
            setPriceItems(oldPrice + price)
        },
    };
};
