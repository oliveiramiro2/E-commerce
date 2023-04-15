"use client";

import React, { createContext, useMemo, useState, useEffect } from "react";
import {
    IContextLoginData,
    IDataUser,
    ILoginData,
    ILoginTokens,
} from "@/interface";
import { getTokens, removeTokens } from "@/services/localStorage";
import { getLoginData } from "@/services/api";

export const UserDataContext = createContext<IContextLoginData>(
    {} as IContextLoginData
);

const UserDataLogin = ({ children }: { children: React.ReactNode }) => {
    const [allUserData, setAllUserData] = useState<ILoginData>({
        access_token: "",
        refresh_token: "",
        avatar: "",
        email: "",
        id: 0,
        name: "",
        password: "",
        role: "customer",
    });
    const [logined, setLogined] = useState<boolean>(false);
    const [checkedLogined, setCheckedLogined] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            /* Perform localStorage action */
            const tokens: ILoginTokens | false = getTokens();
            if (tokens !== false) {
                getLoginData(tokens.access_token)
                    .then((data: IDataUser) => {
                        setAllUserData({ ...tokens, ...data });
                        setLogined(true);
                    })
                    .catch(() => {
                        removeTokens();
                    })
                    .finally(() => setCheckedLogined(true));
            } else {
                setCheckedLogined(true);
            }
        }
    }, []);

    const valueContext = useMemo(
        () => ({
            allUserData,
            setAllUserData,
            logined,
            setLogined,
            checkedLogined,
        }),
        [allUserData, logined, checkedLogined]
    );

    return (
        <UserDataContext.Provider value={valueContext}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserDataLogin;
