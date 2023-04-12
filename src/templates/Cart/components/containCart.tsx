import React, { useContext } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";
import clsx from "clsx";

import { IDataApi } from "@/interface";
import { arnekG, oswald } from "@/functions/fonts";
import { useCountBuyItems, usePriceItems } from "../hooks";
import { CartUserContext } from "@/contexts/cartUser";
import { notify } from "@/functions/notifications";

export const ContainCart: React.FC<{ data: IDataApi }> = ({ data }) => {
    const { count, handleCountLess, handleCountPlus } = useCountBuyItems();
    const { handlePriceItems } = usePriceItems();
    const { cartData, setCartData } = useContext(CartUserContext);

    return (
        <div>
            <div className="relative top-8 left-7">
                <button
                    type="button"
                    onClick={() => {
                        const removeItem = cartData.filter(
                            item => item.id !== data.id
                        );
                        setCartData(removeItem);
                        notify(
                            "warning",
                            "Removido,",
                            "Item removido do carrinho!"
                        );
                    }}
                >
                    <FaWindowClose color="#f00" size={22} />
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
                <div className="flex flex-col justify-around">
                    <div className="flex mr-5 items-center gap-x-4">
                        <div className="bg-gray-100 border p-2 flex items-center gap-x-1 border-pallet-black rounded-sm">
                            <button
                                type="button"
                                onClick={() => {
                                    if (count !== 1)
                                        handlePriceItems(
                                            count,
                                            count - 1,
                                            data.price
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
                                    handlePriceItems(
                                        count,
                                        count + 1,
                                        data.price
                                    );
                                    handleCountPlus();
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
                                R$ {count * Number(data.price)}
                            </span>
                        </div>
                    </div>
                    <button
                        type="button"
                        className={`self-center rounded-xl p-1 pl-8 pr-8 mt-3 mr-2 bg-pallet-purple text-pallet-white tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};
