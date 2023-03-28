import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Tiro_Devanagari_Hindi } from "next/font/google";

import { IPropsContentHeaderDesktop } from "@/interface";

const tiro = Tiro_Devanagari_Hindi({ subsets: ["latin"], weight: "400" });

export const ContentHeaderDesktop: React.FC<IPropsContentHeaderDesktop> = ({
    showMenu,
    setShowMenu,
}) => {
    return (
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
    );
};
