"use client";

import React, { useEffect } from "react";
import LoadingIcons from "react-loading-icons";

import { arnekG } from "@/functions/fonts";

export const LoadingUser: React.FC = () => {
    const writeEffect = (elementT: Element | null) => {
        if (elementT === null) return;

        const elementText = elementT;
        const text = elementText.innerHTML.split("");
        elementText.innerHTML = "";

        setTimeout(() => {
            text.forEach((value, index) => {
                setTimeout(() => {
                    elementText.innerHTML += value;
                }, 400 * index);
            });
        }, 400);
    };

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
            <div>
                <p
                    className={`text-pallet-purple font-black tracking-wider ${arnekG.className}`}
                >
                    Carregando dados<span id="dots">...</span>
                </p>
                <LoadingIcons.Bars
                    color="#a226d0"
                    alignmentBaseline="central"
                    height={50}
                    fill="#a226d0"
                />
            </div>
        </div>
    );
};
