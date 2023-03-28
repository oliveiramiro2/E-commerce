"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tiro_Devanagari_Hindi } from "next/font/google";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const tiro = Tiro_Devanagari_Hindi({ subsets: ["latin"], weight: "400" });

export const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <header className="w-screen min-h-20 border-b-2 border-pallet-black flex flex-col">
            <div className="w-screen h-20 bg-pallet-white flex justify-between items-center">
                <Link href="/" className="absolute left-3">
                    <Image
                        src="/imgs/ecom.png"
                        alt="logo"
                        width={180}
                        height={20}
                    />
                </Link>
                <div />
                <nav className="h-full flex justify-center items-center max-md:hidden">
                    <ul className="flex gap-x-20">
                        <li
                            className={`text-pallet-black font-medium text-lg hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            className={`text-pallet-black font-medium text-lg hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                        >
                            <Link href="/">Comprar</Link>
                        </li>
                        <li
                            className={`text-pallet-black font-medium text-lg hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                        >
                            <Link href="/">Carrinho</Link>
                        </li>
                    </ul>
                </nav>
                <div />
                <button
                    type="button"
                    className="bg-pallet-orange hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange absolute right-5 h-5 p-8 pt-4 pb-4 rounded-md flex justify-center items-center max-md:hidden"
                >
                    <span className="text-pallet-white font-bold tracking-wider">
                        Login
                    </span>
                </button>
                {showMenu ? (
                    <AiOutlineClose
                        className="text-rose-600 cursor-pointer mr-6 hidden max-md:block"
                        size={25}
                        onClick={() => setShowMenu(false)}
                    />
                ) : (
                    <AiOutlineMenu
                        className="text-pallet-orange cursor-pointer mr-6 hidden max-md:block"
                        size={25}
                        onClick={() => setShowMenu(true)}
                    />
                )}
            </div>
            {showMenu && (
                <div className="bg-black pt-2 pb-2 hidden max-md:block">
                    <nav>
                        <ul className="flex flex-col gap-y-1 items-center">
                            <li className="border-b w-full border-gray-800 pt-2 pb-5 pl-5">
                                <Link
                                    className={`text-pallet-white font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="border-b w-full border-gray-800 pt-3 pb-5 pl-5">
                                <Link
                                    className={`text-pallet-white font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                                    href="/"
                                >
                                    Comprar
                                </Link>
                            </li>
                            <li className="border-b w-full border-gray-800 pt-3 pb-5 pl-5">
                                <Link
                                    className={`text-pallet-white font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                                    href="/"
                                >
                                    Carrinho
                                </Link>
                            </li>
                            <button
                                className="bg-pallet-orange hover:bg-[#ff9748] transition-colors shadow shadow-pallet-white h-5 p-20 mt-2 mb-2 pt-4 pb-4 rounded-lg flex justify-center items-center"
                                type="button"
                            >
                                <p className="text-pallet-white font-bold tracking-wider">Login</p>
                            </button>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};
