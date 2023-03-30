import React from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const DefaultTemplate: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <div className="bg-white min-h-screen w-screen flex flex-col items-center">
        <Header />
        {children}
        <Footer />
    </div>
);
