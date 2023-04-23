"use client";

import React from "react";

import { DefaultTemplate } from "../default";
import { LoginAndRegister } from "@/components";

export const EditUserTemlate: React.FC = () => {
    return (
        <DefaultTemplate>
            <LoginAndRegister registerComponent />
        </DefaultTemplate>
    );
};
