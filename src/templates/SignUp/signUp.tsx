"use client";

import React, { useContext, useEffect } from "react";

import { DefaultTemplate } from "../default";
import { LoginAndRegister } from "@/components";
import { TesteContext } from "@/app/context/teste";

export const SignUpTemplate: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - Entrar";
    }, []);
    const { userData } = useContext(TesteContext);

    console.log(userData, "singup component")

    return (
        <DefaultTemplate>
            <LoginAndRegister registerComponent={false} />
        </DefaultTemplate>
    );
};
