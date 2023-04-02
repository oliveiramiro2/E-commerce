"use client";

import React from "react";
import { SiFireship } from "react-icons/si";
import clsx from "clsx";

import { IDataApi } from "@/interface";
import { arnekG } from "@/functions/fonts";
import { useShowInfo } from "./hooks/useShowInfo";

export const Product: React.FC<{ param: IDataApi }> = ({ param }) => {
    const { show } = useShowInfo();

    return (
        <div className="bg-pallet-black flex flex-col items-center gap-y-2 p-2 pr-3 pl-3 rounded-xl border-2 border-pallet-orange">
            <p
                className={`font-bold first-letter:capitalize text-lg text-pallet-white ${arnekG.className}`}
            >
                {param.title}
            </p>
            <img
                src={param.images[0]}
                alt="imagem produto"
                className="w-[20vw] max-md:w-[80vw] object-cover"
            />
            <p
                className={clsx(
                    `font-medium w-[20vw] hidden max-md:w-[80vw] text-center text-sm text-pallet-white first-letter:capitalize ${arnekG.className}`,
                    {
                        block: show,
                    }
                )}
            >
                {param.description}
            </p>
            <div className="flex gap-x-2">
                <SiFireship color="#f00" />
                <p
                    className={`font-bold text-sm text-pallet-white ${arnekG.className}`}
                >
                    R$ {param.price},00
                </p>
            </div>
        </div>
    );
};
