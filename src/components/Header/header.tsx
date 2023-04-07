"use client";

import React from "react";

import { ContentHeaderMobile, ContentHeaderDesktop } from "./components";
import { useShowMenu } from "./hooks/useShowMenu";

export const Header: React.FC = () => {
    const {show, handleShow} = useShowMenu();

    return (
    <header className="w-screen min-h-[10vh] border-b-2 border-pallet-black flex flex-col">
        <ContentHeaderDesktop showMenu={show} setShowMenu={handleShow} />
        {show && <ContentHeaderMobile />}
    </header>
)};
