"use client";

import React, { useState } from "react";
import { ContentHeaderMobile, ContentHeaderDesktop } from "./components";

export const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <header className="w-screen min-h-20 border-b-2 border-pallet-black flex flex-col">
            <ContentHeaderDesktop
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            {showMenu && (
                <ContentHeaderMobile />
            )}
        </header>
    );
};
