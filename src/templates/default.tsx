import React from "react";

import { Footer, Header } from "@/components";

export const DefaultTemplate: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <div className="bg-white min-h-screen w-screen flex flex-col items-center">
        <Header />
        {children}
        <Footer />
    </div>
);
