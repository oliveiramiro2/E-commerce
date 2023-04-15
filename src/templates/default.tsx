import React from "react";
import { ReactNotifications } from "react-notifications-component";
import { usePathname } from "next/navigation";

import { Footer, Header } from "@/components";
import { checkRoute } from "@/functions/checkRoute";

export const DefaultTemplate: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const path = usePathname();
    const isPublicRoute = checkRoute(path);

    return (
        <div className="bg-white min-h-screen w-screen flex flex-col items-center">
            {isPublicRoute && (
                <>
                    <ReactNotifications />
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
            {!isPublicRoute && (
                <>
                    <ReactNotifications />
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </div>
    );
};
