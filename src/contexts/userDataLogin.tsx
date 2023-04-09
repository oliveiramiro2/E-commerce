"use client";

import React, { createContext, useMemo, useState } from "react";
import { IContextLoginData, ILoginData } from "@/interface";

export const UserDataContext = createContext<IContextLoginData>(
    {} as IContextLoginData
);

const UserDataLogin = ({ children }: { children: React.ReactNode }) => {
    const [allUserData, setAllUserData] = useState<ILoginData>({
        access_token: '',
        refresh_token: '',
        avatar: '',
        email: '',
        id: 0,
        name: '',
        password: '',
        role: 'customer',
    })
    const [logined, setLogined] = useState<boolean>(false)

    const valueContext = useMemo(
        () => ({
            allUserData,
            setAllUserData,
            logined,
            setLogined
        }),
        [allUserData, logined]
    );

    return (
        <UserDataContext.Provider value={valueContext}>
            {children}
        </UserDataContext.Provider>
    );
}

export default UserDataLogin