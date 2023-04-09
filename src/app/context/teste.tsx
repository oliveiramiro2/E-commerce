"use client";

import React, { createContext, useMemo, useState } from "react";
import { IContextDataRegisterHome, IDataRegisterHome } from "@/interface";

export const TesteContext = createContext<IContextDataRegisterHome>(
    {} as IContextDataRegisterHome
);

const TesteProvider = ({ children }) => {
    const [userData, setUserData] = useState<IDataRegisterHome>(
        {email: '', password: ''}
    );

    const valueContext = useMemo(
        () => ({
            userData,
            setUserData,
        }),
        [userData]
    );

    return (
        <TesteContext.Provider value={valueContext}>
            {children}
        </TesteContext.Provider>
    );
};

export default TesteProvider;
