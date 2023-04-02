"use client";

import React from "react";
import { SiFireship } from "react-icons/si";
import clsx from "clsx";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

import { IDataApi } from "@/interface";
import { arnekG } from "@/functions/fonts";
import { useShowInfo } from "./hooks/useShowInfo";

export const Product: React.FC<{ param: IDataApi }> = ({ param }) => {
    const { show, handleShow, handleHide } = useShowInfo();

    return (
        <div
            className="bg-pallet-black flex flex-col h-min items-center gap-y-2 p-2 pr-3 pl-3 rounded-xl border-2 border-pallet-orange shadow-lg shadow-pallet-orange"
            onMouseOver={handleShow}
            onFocus={handleShow}
            onMouseOut={handleHide}
            onBlur={handleHide}
        >
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
                    `font-medium w-[20vw] max-md:w-[80vw] text-center text-sm text-pallet-white first-letter:capitalize ${arnekG.className}`,
                    {
                        "flex": show,
                        "hidden": !show,
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
            <div className="w-full flex justify-around mb-4">
                <Link href="/">
                    <button
                        type="button"
                        className={clsx(
                            `bg-pallet-orange pt-3 p-2 pl-4 pr-3 min-w-[35%] items-center gap-x-1 rounded-md font-bolder text-center text-sm text-pallet-white first-letter:capitalize hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange ${arnekG.className}`,
                            {
                                "flex": show,
                                "hidden": !show,
                            }
                        )}
                    >
                        <FaShoppingCart
                            color="#f7f8f9"
                            className="relative bottom-[3px]"
                        />{" "}
                        Carrinho
                    </button>
                </Link>
                <Link href="/">
                    <button
                        type="button"
                        className={clsx(
                            `bg-pallet-orange pt-3 p-2 pl-4 pr-3 min-w-[35%] items-center gap-x-1 rounded-md font-bolder text-center text-sm text-pallet-white first-letter:capitalize hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange ${arnekG.className}`,
                            {
                                "flex": show,
                                "hidden": !show,
                            }
                        )}
                    >
                        <FaShoppingBag
                            color="#f7f8f9"
                            className="relative bottom-[3px]"
                        />{" "}
                        Comprar
                    </button>
                </Link>
            </div>
        </div>
    );
};
