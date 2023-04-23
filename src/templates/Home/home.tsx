"use client";

import React, { useContext, useEffect } from "react";

import { DefaultTemplate } from "../default";
import { Banner, BestOffers, Categories, SignUpHome } from "./components";
import { UserDataContext } from "@/contexts/userDataLogin";

export const HomeTemplate: React.FC = () => {
    const { logined } = useContext(UserDataContext)

    useEffect(() => {
        document.title = "RM E-commerce - Home";
    }, []);

    return (
    <DefaultTemplate>
        <Banner />
        {!logined && <SignUpHome />}
        <BestOffers />
        <Categories />
    </DefaultTemplate>
)};
