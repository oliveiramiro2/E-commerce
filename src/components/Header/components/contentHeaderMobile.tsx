import React from "react";
import Link from "next/link";
import { FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";

import { tiro } from "@/functions/fonts";

export const ContentHeaderMobile: React.FC = () => {
    return (
        <div className="bg-black pt-2 pb-2 hidden max-md:block">
            <nav>
                <ul className="flex flex-col gap-y-1 items-center">
                    <li className="border-b w-full border-gray-800 pt-2 pb-5 pl-5">
                        <Link
                            className={`text-pallet-white w-[74px] flex gap-x-2 font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                            href="/"
                        >
                            <FaHome
                                size={18}
                                className="relative top-[1px]"
                                color="#f7f8f9"
                            />{" "}
                            Home
                        </Link>
                    </li>
                    <li className="border-b w-full border-gray-800 pt-3 pb-5 pl-5">
                        <Link
                            className={`text-pallet-white w-24 flex gap-x-2 font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                            href="/"
                        >
                            <FaShoppingBag
                                className="relative top-[1px]"
                                color="#f7f8f9"
                            />{" "}
                            Comprar
                        </Link>
                    </li>
                    <li className="border-b w-full border-gray-800 pt-3 pb-5 pl-5">
                        <Link
                            className={`text-pallet-white flex w-24 gap-x-2 font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                            href="/"
                        >
                            <FaShoppingCart
                                className="relative top-[1px]"
                                color="#f7f8f9"
                            />{" "}
                            Carrinho
                        </Link>
                    </li>
                    <button
                        className="bg-pallet-orange hover:bg-[#ff9748] transition-colors shadow shadow-pallet-white h-5 p-20 mt-2 mb-2 pt-4 pb-4 rounded-lg flex justify-center items-center"
                        type="button"
                    >
                        <Link
                            href="/"
                            className="text-pallet-white flex gap-x-1 font-bold tracking-wider"
                        >
                            <BiLogIn
                                className="relative top-1"
                                size={18}
                                color="#f7f8f9"
                            />
                            Login
                        </Link>
                    </button>
                </ul>
            </nav>
        </div>
    );
};
