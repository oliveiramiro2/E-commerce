import React, { useContext } from "react";

import { ICategoryApi } from "@/interface";
import { oswald } from "@/functions/fonts";
import { useRedirect } from "@/hooks";
import { UserDataContext } from "@/contexts/userDataLogin";

export const ContainCategory: React.FC<{ data: ICategoryApi }> = ({ data }) => {
    const { push } = useRedirect();
    const { logined, setRedirectOnLogin } = useContext(UserDataContext)

    return (
        <button
            type="button"
            onClick={() => {
                if (!logined) setRedirectOnLogin(`redirecionar=produtos&categoria=${data.id}`)
                push(`produtos?categoria=${data.id}`)
            }}
            className="cursor-pointer"
        >
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
        </button>
    );
};
