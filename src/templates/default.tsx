import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from "react-notifications-component";

import { Footer, Header } from "@/components";
import RootLayout from "@/app/layout";

export const DefaultTemplate: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <RootLayout>
        <main className="bg-white min-h-screen w-screen flex flex-col items-center">
            <ReactNotifications />
            <Header />
            {children}
            <Footer />
        </main>
    </RootLayout>
);
