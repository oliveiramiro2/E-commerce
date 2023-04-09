import React from "react";
import "../styles/globals.css";
import TesteProvider from "./context/teste";
import { ReactQueryProvider } from "@/contexts/reactQuery";

export const metadata = {
    title: "RM E-commerce",
    description: "A fake e-commerce create with next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="pt-br">
            <body>
            <ReactQueryProvider>
                <TesteProvider>
                    {children}
                </TesteProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
};

export default RootLayout;
