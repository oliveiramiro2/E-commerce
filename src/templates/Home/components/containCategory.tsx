import React, { useContext } from "react";

import { ICategoryApi } from "@/interface";
import { oswald } from "@/functions/fonts";
import { useRedirect } from "@/hooks";
import { UserDataContext } from "@/contexts/userDataLogin";

export const ContainCategory: React.FC<{ data: ICategoryApi }> = ({ data }) => {
    const { push } = useRedirect();
    const { logined, setRedirectOnLogin } = useContext(UserDataContext);

    return (
        <button
            type="button"
            onClick={() => {
                if (!logined)
                    setRedirectOnLogin(
                        `redirecionar=produtos&categoria=${data.id}`
                    );
                push(`produtos?categoria=${data.id}`);
            }}
            className="category cursor-pointer"
        >
            <div className="max-w-[120px] h-[150px] pl-2 pr-2 flex flex-col justify-between items-center rounded-sm pb-2 shadow-xl shadow-gray-400 bg-gradient-to-r to-[#f2f2f2] via-[#e6e6e6] from-[#d9d9d9]">
                <p
                    className={`font-medium max-w-[120px] h-5 text-center text-pallet-black first-letter:capitalize ${oswald.className}`}
                >
                    {data.name}
                </p>
                <img
                    src={data.image}
                    alt="imagem categoria"
                    className="w-auto h-[120px]"
                />
            </div>
        </button>
    );
};
