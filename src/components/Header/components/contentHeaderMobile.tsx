import React from "react";
import Link from "next/link";
import { Tiro_Devanagari_Hindi } from "next/font/google";

const tiro = Tiro_Devanagari_Hindi({ subsets: ["latin"], weight: "400" });

export const ContentHeaderMobile: React.FC = () => {
    return (
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
                        <p className="text-pallet-white font-bold tracking-wider">
                            Login
                        </p>
                    </button>
                </ul>
            </nav>
        </div>
    );
};
