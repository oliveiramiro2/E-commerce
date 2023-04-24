"use client";

import React, { useEffect } from "react";

import { DefaultTemplate } from "../default";

export const ManagerProductsTemplate: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - Gerenciar produtos";
    }, []);

    return (
        <DefaultTemplate>
            <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center">
                managerProducts
            </section>
        </DefaultTemplate>
    );
};
