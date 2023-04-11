"use client";

import React, { useEffect } from "react";

import { DefaultTemplate } from "../default";

export const CartTemplate: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - Carrinho";
    }, []);

    return (
        <DefaultTemplate>
            <div>cart</div>
        </DefaultTemplate>
    );
};
