import React from "react";
import "./globals.css";

export const metadata = {
    title: "RM E-commerce",
    description: "A fake e-commerce create with next app",
};

const RootLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}

export default RootLayout
