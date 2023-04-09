"use client";

import React from "react";

import RegisterHomeProvider from "./registerUserHome";
import { ReactQueryProvider } from "./reactQuery";
import UserDataLogin from "./userDataLogin";

const ECommProvider = ({ children }: { children: React.ReactNode }) => (
    <UserDataLogin>
        <RegisterHomeProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
        </RegisterHomeProvider>
    </UserDataLogin>
);

export default ECommProvider;
