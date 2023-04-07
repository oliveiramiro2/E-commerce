"use client";

import React, { useLayoutEffect } from "react";

import { DefaultTemplate } from "../default";
import { LoginAndRegister } from "@/components";

export const SignInTemplate: React.FC = () => {
    useLayoutEffect(() => {
        document.title = "RM E-commerce - Cadastro";
    }, []);

    return (
        <DefaultTemplate>
            <LoginAndRegister />
        </DefaultTemplate>
    );
};
