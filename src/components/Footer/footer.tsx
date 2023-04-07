import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import { tiro } from "@/functions/fonts";

export const Footer: React.FC = () => {
    return (
        <footer className="w-screen min-h-[15vh] bg-pallet-purple flex relative bottom-0 justify-between items-center">
            <nav className="h-full">
                <ul className="flex h-full gap-x-8 items-center pl-10 max-md:flex-col max-md:gap-y-5 max-md:pt-3 max-md:pb-3">
                    <li>
                        <Link
                            href="/"
                            className={`text-pallet-white font-medium hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={`text-pallet-white font-medium hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                        >
                            Comprar
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={`text-pallet-white font-medium hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                        >
                            Carrinho
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="h-full">
                <ul className="flex h-full gap-x-8 items-center">
                    <li className="bg-[#cf5df8] rounded-[10px]">
                        <Link href="/">
                            <AiFillInstagram
                                color="#fff"
                                size={25}
                                className="shadow-md shadow-[#cf5df8] rounded-[10px]"
                            />
                        </Link>
                    </li>
                    <li className="bg-[#cf5df8] rounded-[10px]">
                        <Link href="/">
                            <AiFillFacebook
                                color="#fff"
                                size={25}
                                className="shadow-md shadow-[#cf5df8] rounded-[10px]"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="h-full max-md:w-1/4">
                <ul className="flex h-full gap-x-8 items-center pr-14 max-md:flex-col max-md:gap-y-5 max-md:pt-3 max-md:pb-3">
                    <li>
                        <Link
                            href="/"
                            className={`text-pallet-white font-medium text-sm hover:border-b hover:transition-colors border-pallet-blue ${tiro.className}`}
                        >
                            Política de privacidade
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={`text-pallet-white font-medium text-sm hover:border-b hover:transition-colors border-pallet-blue ${tiro.className}`}
                        >
                            Termos de serviço
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};
