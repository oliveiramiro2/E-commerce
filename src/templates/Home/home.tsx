import React from "react";

import { DefaultTemplate } from "../default";
import { Banner, BestOffers, Categories, SignUpHome } from "./components";

export const HomeTemplate: React.FC = () => (
    <DefaultTemplate>
        <Banner />
        <SignUpHome />
        <BestOffers />
        <Categories />
    </DefaultTemplate>
);
