import Link from "next/link";
import React from "react";
import { Tiro_Devanagari_Hindi } from "next/font/google";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const tiro = Tiro_Devanagari_Hindi({ subsets: ["latin"], weight: "400" });

export const Footer: React.FC = () => {
    return (
        <footer className="w-screen h-20 bg-pallet-purple flex relative bottom-0 justify-between">
            <nav>
                <ul className="flex h-20 gap-x-8 items-center pl-10">
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
            <nav>
                <ul className="flex h-20 gap-x-8 items-center">
                    <li>
                        <Link href="/">
                            <AiFillInstagram color="#fff" size={25} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <AiFillFacebook color="#fff" size={25} />
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="flex h-20 gap-x-8 items-center pr-7">
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
