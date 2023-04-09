"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const ReactQueryProvider = ({
    children,
}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
