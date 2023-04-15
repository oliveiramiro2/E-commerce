"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { APP_ROUTES } from "@/constants/appRoutes";
import { UserDataContext } from "@/contexts/userDataLogin";

export const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
    const { logined } = useContext(UserDataContext)
    const { push } = useRouter();

    useEffect(() => {
        if (logined) {
            push(APP_ROUTES.public.signIn);
        }
    }, [logined, push]);

    return (
        <>
            {!logined && null}
            {logined && children}
        </>
    );
};
