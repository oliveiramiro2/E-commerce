import React, { useContext } from "react";
import Link from "next/link";

import { ICategoryApi } from "@/interface";
import { oswald } from "@/functions/fonts";
import { UserDataContext } from "@/contexts/userDataLogin";

export const ContainCategory: React.FC<{ data: ICategoryApi }> = ({ data }) => {
    const { logined } = useContext(UserDataContext);

    return (
    <Link href={logined ? "/" : "/entrar"} className="cursor-pointer">
        <div className="w-24 h-26 flex flex-col justify-between items-center rounded-lg pb-2 shadow-xl shadow-gray-500 bg-gradient-to-r to-pallet-orange via-pallet-white from-pallet-purple">
            <p
                className={`font-medium text-pallet-black first-letter:capitalize ${oswald.className}`}
            >
                {data.name}
            </p>
            <img
                src={data.image}
                alt="imagem categoria"
                className="w-20 h-20"
            />
        </div>
    </Link>
)};
