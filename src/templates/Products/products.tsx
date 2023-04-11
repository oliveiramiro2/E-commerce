"use client";

import React, { useEffect } from "react";

import { DefaultTemplate } from "../default";

export const ProductsTemplate: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - Comprar";
    }, []);

    return (
        <DefaultTemplate>
            <div>products</div>
        </DefaultTemplate>
    );
};
