import React from "react";
import "animate.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-notifications-component/dist/theme.css";

import "../styles/globals.css";
import ECommProvider from "@/contexts";

export const metadata = {
    title: "RM E-commerce",
    description: "A fake e-commerce create with next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="pt-br">
        <body>
            <ECommProvider>
                {children}
            </ECommProvider>
        </body>
    </html>
);

export default RootLayout;
