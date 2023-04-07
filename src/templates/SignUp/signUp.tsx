"use client";

import React, { useLayoutEffect } from "react";

import { DefaultTemplate } from "../default";

export const SignUpTemplate: React.FC = () => {
    useLayoutEffect(() => {
        document.title = "RM E-commerce - Entrar";
    }, []);

    return <DefaultTemplate>signUp</DefaultTemplate>;
};
