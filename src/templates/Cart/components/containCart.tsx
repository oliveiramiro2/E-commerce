import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";
import clsx from "clsx";

import { IDataApi } from "@/interface";
import { arnekG } from "@/functions/fonts";
import { CountBuyItens } from "../hooks";

export const ContainCart: React.FC<{ data: IDataApi }> = ({ data }) => {
    const { count, handleCountLess, handleCountPlus } = CountBuyItens();

    return (
        <div>
            <div className="relative top-8 left-7">
                <button type="button">
                    <FaWindowClose color="#f00" size={24} />
                </button>
            </div>
            <div className="bg-white border flex items-center justify-between border-gray-300 ml-6 mr-6 mb-2 pl-1 rounded-md">
                <div className="flex items-center m-5 ml-6">
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
                <div className="flex mr-5 items-center gap-x-4">
                    <div className="bg-gray-100 border p-2 flex items-center gap-x-1 border-pallet-black rounded-sm">
                        <button
                            type="button"
                            onClick={handleCountLess}
                            disabled={count === 1}
                            className={clsx("cursor-pointer", {
                                "cursor-default": count === 1,
                            })}
                        >
                            <FiMinus color="#000" size={22} />
                        </button>
                        <span
                            className={`text-pallet-black bg-white rounded-lg text-center pl-2 pr-2 font-black ${arnekG.className}`}
                        >
                            {count}
                        </span>
                        <button
                            type="button"
                            onClick={handleCountPlus}
                            className="cursor-pointer"
                        >
                            <FiPlus color="#000" size={22} />
                        </button>
                    </div>
                    <div>
                        <span
                            className={`text-pallet-black font-black text-sm ${arnekG.className}`}
                        >
                            R$ {count * Number(data.price)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
