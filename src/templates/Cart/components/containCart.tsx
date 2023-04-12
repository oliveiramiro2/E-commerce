import React from "react";

import { IDataApi } from "@/interface";
import { arnekG } from "@/functions/fonts";

export const ContainCart: React.FC<{ data: IDataApi }> = ({ data }) => (
    <div className="bg-white border flex items-center border-gray-300 ml-6 mr-6 mb-2 pl-1 rounded-lg">
        <div className="flex items-center m-5">
            <img
                alt="produto"
                src={data.images[0]}
                className="w-32 h-24 rounded-lg shadow-lg shadow-black"
            />
            <div className="flex flex-col self-start ml-5 gap-y-1">
                <p
                    className={`text-pallet-orange font-black text-lg ${arnekG.className}`}
                >
                    {data.title}
                </p>
                <p
                    className={`text-pallet-black font-medium text-sm ${arnekG.className}`}
                >
                    {data.description}
                </p>
            </div>
        </div>
    </div>
);
