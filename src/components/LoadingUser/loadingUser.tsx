"use client";

import React, { useEffect } from "react";
import LoadingIcons from "react-loading-icons";

import { arnekG } from "@/functions/fonts";
import { writeEffect } from "./functions";

export const LoadingUser: React.FC = () => {
    useEffect(() => {
        const elementText = document.querySelector("#dots");
        const intervalID = setInterval(() => {
            writeEffect(elementText);
        }, 2000);

        return () => {
            clearInterval(intervalID)
        }
    }, []);

    return (
        <div className="w-screen h-screen bg-white flex justify-center items-center">
            <div className="flex flex-col gap-y-1 justify-center items-center">
                <p
                    className={`text-pallet-purple font-black tracking-wider ${arnekG.className}`}
                >
                    Carregando dados<span id="dots">...</span>
                </p>
                <LoadingIcons.SpinningCircles
                    color="#a226d0"
                    alignmentBaseline="central"
                    height={50}
                    fill="#a226d0"
                />
            </div>
        </div>
    );
};
