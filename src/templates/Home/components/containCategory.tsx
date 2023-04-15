import React from "react";
import Link from "next/link";

import { ICategoryApi } from "@/interface";
import { oswald } from "@/functions/fonts";

export const ContainCategory: React.FC<{ data: ICategoryApi }> = ({ data }) => {
    return (
        <Link href="/produtos" className="cursor-pointer">
            <div className="min-w-[100px] max-w-[120px] pl-2 pr-2 flex flex-col justify-between items-center rounded-lg pb-2 shadow-xl shadow-gray-500 bg-gradient-to-r to-pallet-orange via-pallet-white from-pallet-purple">
                <p
                    className={`font-medium text-center text-pallet-black first-letter:capitalize ${oswald.className}`}
                >
                    {data.name}
                </p>
                <img
                    src={data.image}
                    alt="imagem categoria"
                    className="w-auto h-20"
                />
            </div>
        </Link>
    );
};
