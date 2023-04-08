"use client";

import React, { createContext, useMemo, useState } from "react";
import { IContextDataRegisterHome, IDataRegisterHome } from "@/interface";

export const RegisterHomeContext = createContext<IContextDataRegisterHome>(
    {} as IContextDataRegisterHome
);

const RegisterHomeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
        <RegisterHomeContext.Provider value={valueContext}>
            {children}
        </RegisterHomeContext.Provider>
    );
};

export default RegisterHomeProvider;
