"use client";

import React, { useContext, useEffect } from "react";

import { DefaultTemplate } from "../default";
import { LoginAndRegister } from "@/components";
import { RegisterHomeContext } from "@/contexts/registerUserHome";

export const SignUpTemplate: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - Entrar";
    }, []);
    const { userData } = useContext(RegisterHomeContext);

    console.log(userData, "singup component")

    return (
        <DefaultTemplate>
            <LoginAndRegister registerComponent={false} />
        </DefaultTemplate>
    );
};
