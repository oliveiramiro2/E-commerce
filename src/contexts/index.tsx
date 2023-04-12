"use client";

import React from "react";

import RegisterHomeProvider from "./registerUserHome";
import { ReactQueryProvider } from "./reactQuery";
import UserDataLogin from "./userDataLogin";
import CartUser from "./cartUser";

const ECommProvider = ({ children }: { children: React.ReactNode }) => (
    <UserDataLogin>
        <CartUser>
            <RegisterHomeProvider>
                <ReactQueryProvider>{children}</ReactQueryProvider>
            </RegisterHomeProvider>
        </CartUser>
    </UserDataLogin>
);

export default ECommProvider;
