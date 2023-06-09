"use client";

import React, { useContext, useEffect } from "react";

import { APP_ROUTES } from "@/constants/appRoutes";
import { UserDataContext } from "@/contexts/userDataLogin";
import { useRedirect } from "@/hooks";
import { LoadingUser } from "../LoadingUser/loadingUser";
import { checkAdminRoutes } from "@/functions/checkRoute";
import { useShowLoading } from "./hooks";

export const PrivateRoutes = ({
    children,
    path,
}: {
    children: React.ReactNode;
    path: string;
}) => {
    const { logined, redirectOnLogin, allUserData } =
        useContext(UserDataContext);
    const { push } = useRedirect();
    const { setShowLoading, showLoading } = useShowLoading();

    useEffect(() => {
        setShowLoading(true);
        if (!logined) {
            if (redirectOnLogin.split("redirecionar=")[1] !== undefined) {
                push(`${APP_ROUTES.public.signIn}?${redirectOnLogin}`);
            } else {
                push(APP_ROUTES.public.signIn);
            }
        } else if (checkAdminRoutes(path)) {
            if (allUserData.role !== "admin") {
                push(APP_ROUTES.public.home);
            } else {
                setShowLoading(false);
            }
        } else if (!checkAdminRoutes(path)) {
            setShowLoading(false);
        }
    }, [logined, push, showLoading]);

    return (
        <>
            {!logined && showLoading && <LoadingUser />}
            {logined && !showLoading && children}
        </>
    );
};
