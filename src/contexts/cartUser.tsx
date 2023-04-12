"use client";

import React, { createContext, useMemo, useState } from "react";
import { IContextCartData, IDataApi } from "@/interface";

export const CartUserContext = createContext<IContextCartData>(
    {} as IContextCartData
);

const CartUser = ({ children }: { children: React.ReactNode }) => {
    const [cartData, setCartData] = useState<IDataApi[]>([] as IDataApi[]);

    const valueContext = useMemo(
        () => ({
            cartData,
            setCartData,
        }),
        [cartData]
    );

    return (
        <CartUserContext.Provider value={valueContext}>
            {children}
        </CartUserContext.Provider>
    );
};

export default CartUser;
