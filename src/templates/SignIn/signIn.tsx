"use client";

import React, { useLayoutEffect } from "react";

import { DefaultTemplate } from "../default";

export const SignInTemplate: React.FC = () => {
    useLayoutEffect(() => {
        document.title = "RM E-commerce - Cadastro";
    }, []);

    return <DefaultTemplate>signIn</DefaultTemplate>;
};
