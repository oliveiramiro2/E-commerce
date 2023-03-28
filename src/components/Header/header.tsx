import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tiro_Devanagari_Hindi } from "next/font/google";

const tiro = Tiro_Devanagari_Hindi({ subsets: ["latin"], weight: "400" });

export const Header: React.FC = () => {
    return (
        <header className="bg-pallet-white w-screen h-20 border-b-2 border-pallet-black flex justify-between items-center">
            <Link href="/" className="absolute left-3">
                <Image
                    src="/imgs/ecom.png"
                    alt="logo"
                    width={180}
                    height={20}
                />
            </Link>
            <div />
            <nav className="h-full flex justify-center items-center">
                <ul className="flex gap-x-20">
                    <li
                        className={`text-pallet-blue font-medium text-lg hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                    >
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className={`text-pallet-blue font-medium text-lg hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                    >
                        <Link href="/">Comprar</Link>
                    </li>
                    <li
                        className={`text-pallet-blue font-medium text-lg hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                    >
                        <Link href="/">Carrinho</Link>
                    </li>
                </ul>
            </nav>
            <div />
            <button
                type="button"
                className="bg-pallet-orange hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange absolute right-5 h-5 p-8 pt-4 pb-4 rounded-md flex justify-center items-center"
            >
                <span className="text-pallet-white font-bold tracking-wider">
                    Login
                </span>
            </button>
        </header>
    );
};
