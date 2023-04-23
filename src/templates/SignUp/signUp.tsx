"use client";

import React, { useEffect } from "react";

import { DefaultTemplate } from "../default";
import { LoginAndRegister } from "@/components";

export const SignUpTemplate: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - Cadastro";
    }, []);

    return (
        <DefaultTemplate>
            <LoginAndRegister registerComponent editProfile={false} />
        </DefaultTemplate>
    );
};
