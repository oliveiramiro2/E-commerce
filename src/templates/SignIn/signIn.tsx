"use client";

import React, { useEffect } from "react";

import { DefaultTemplate } from "../default";
import { LoginAndRegister } from "@/components";

export const SignInTemplate: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - Cadastro";
    }, []);

    return (
        <DefaultTemplate>
            <LoginAndRegister registerComponent />
        </DefaultTemplate>
    );
};
