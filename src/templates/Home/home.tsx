import React from "react";

import { DefaultTemplate } from "../default";
import { Banner, SignInHome } from "./components";

export const HomeTemplate: React.FC = () => (
    <DefaultTemplate>
        <Banner />
        <SignInHome />
    </DefaultTemplate>
);
