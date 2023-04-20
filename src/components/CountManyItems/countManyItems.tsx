import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import clsx from "clsx";

import { MaskCoin } from "@/functions/maskCoin";
import { ICountManyProps } from "./interface";
import { arnekG } from "@/functions/fonts";

export const CountManyItems: React.FC<ICountManyProps> = ({
    price,
    count,
    handleCountLess,
    handleCountMore,
    handlePriceItems,
}) => (
    <div>
        <div className="flex mr-5 items-center gap-x-4">
            <div className="bg-gray-100 border p-2 flex items-center gap-x-1 border-pallet-black rounded-sm">
                <button
                    type="button"
                    onClick={() => {
                        if (count !== 1)
                            handlePriceItems(
                                count,
                                count - 1,
                                Number(price)
                            );
                        handleCountLess();
                    }}
                    disabled={count === 1}
                    className={clsx("cursor-pointer", {
                        "cursor-no-drop": count === 1,
                    })}
                >
                    <FiMinus color="#000" size={22} />
                </button>
                <span
                    className={`text-pallet-black bg-white rounded-lg relative top-1 text-center pl-2 pr-2 font-black ${arnekG.className}`}
                >
                    {count}
                </span>
                <button
                    type="button"
                    onClick={() => {
                        handlePriceItems(count, count + 1, Number(price));
                        handleCountMore();
                    }}
                    className="cursor-pointer"
                >
                    <FiPlus color="#000" size={22} />
                </button>
            </div>
            <div>
                <span
                    className={`text-pallet-black font-black text-sm min-w-[50px] ${arnekG.className}`}
                >
                    {MaskCoin(count * Number(price))}
                </span>
            </div>
        </div>
    </div>
);
