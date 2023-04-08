import React from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-loading-skeleton/dist/skeleton.css";
import "react-notifications-component/dist/theme.css";
import "animate.css";

import { Footer, Header } from "@/components";
import RootLayout from "@/app/layout";
import ECommProvider from "@/context";

export const DefaultTemplate: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <ECommProvider>
        <RootLayout>
            <main className="bg-white min-h-screen w-screen flex flex-col items-center">
                <ReactNotifications />
                <Header />
                {children}
                <Footer />
            </main>
        </RootLayout>
    </ECommProvider>
);
