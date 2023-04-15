import React, { useContext } from "react";
import { ReactNotifications } from "react-notifications-component";
import { usePathname } from "next/navigation";

import { Footer, Header, LoadingUser, PrivateRoutes } from "@/components";
import { checkRoute } from "@/functions/checkRoute";
import { UserDataContext } from "@/contexts/userDataLogin";

export const DefaultTemplate: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const path = usePathname();
    const isPublicRoute = checkRoute(path);
    const { checkedLogined } = useContext(UserDataContext);

    if (!checkedLogined) {
        return <LoadingUser />;
    }

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
                <PrivateRoutes>
                    <ReactNotifications />
                    <Header />
                    {children}
                    <Footer />
                </PrivateRoutes>
            )}
        </div>
    );
};
