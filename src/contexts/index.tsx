"use client";

import React from "react";

import RegisterHomeProvider from "./registerUserHome";
import { ReactQueryProvider } from "./reactQuery";

const ECommProvider = ({
    children,
}) => <RegisterHomeProvider><ReactQueryProvider>{children}</ReactQueryProvider></RegisterHomeProvider>;

export default ECommProvider;
