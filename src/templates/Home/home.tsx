"use client";

import React, { useEffect } from "react";

import { DefaultTemplate } from "../default";
import { Banner, BestOffers, Categories, SignUpHome } from "./components";

export const HomeTemplate: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - Home";
    }, []);

    return (
    <DefaultTemplate>
        <Banner />
        <SignUpHome />
        <BestOffers />
        <Categories />
    </DefaultTemplate>
)};
