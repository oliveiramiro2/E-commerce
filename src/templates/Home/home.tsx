import React from "react";

import { DefaultTemplate } from "../default";
import { Banner, SignUpHome } from "./components";

export const HomeTemplate: React.FC = () => (
    <DefaultTemplate>
        <Banner />
        <SignUpHome />
    </DefaultTemplate>
);
