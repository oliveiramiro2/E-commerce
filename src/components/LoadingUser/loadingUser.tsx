import React from "react";
import LoadingIcons from "react-loading-icons";

import { arnekG } from "@/functions/fonts";

export const LoadingUser: React.FC = () => (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
        <div>
            <p
                className={`text-pallet-purple font-black tracking-wider ${arnekG.className}`}
            >
                Carregando dados....
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
