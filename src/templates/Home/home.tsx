import React from "react";

import { DefaultTemplate } from "../default";
import { Banner, BestOffers, SignUpHome } from "./components";

export const HomeTemplate: React.FC = () => (
    <DefaultTemplate>
        <Banner />
        <SignUpHome />
        <BestOffers />
    </DefaultTemplate>
);
