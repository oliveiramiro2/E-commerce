import React from "react";

import "../styles/globals.css";
import ECommProvider from "@/contexts";
import "react-loading-skeleton/dist/skeleton.css";
import "react-notifications-component/dist/theme.css";
import "animate.css";

export const metadata = {
    title: "RM E-commerce",
    description: "A fake e-commerce create with next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="pt-br">
            <body>
                <ECommProvider>
                    {children}
                </ECommProvider>
            </body>
        </html>
    );
};

export default RootLayout;
