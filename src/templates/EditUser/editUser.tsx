"use client";

import React, { useEffect } from "react";

import { DefaultTemplate } from "../default";
import { LoginAndRegister } from "@/components";

export const EditUserTemlate: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - Editar perfil";
    }, []);

    return (
        <DefaultTemplate>
            <LoginAndRegister registerComponent editProfile />
        </DefaultTemplate>
    );
};
