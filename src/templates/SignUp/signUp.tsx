"use client";

import React, { useLayoutEffect } from "react";

import { DefaultTemplate } from "../default";
import { LoginAndRegister } from "@/components";

export const SignUpTemplate: React.FC = () => {
    useLayoutEffect(() => {
        document.title = "RM E-commerce - Entrar";
    }, []);

    return (
        <DefaultTemplate>
            <LoginAndRegister />
        </DefaultTemplate>
    );
};
