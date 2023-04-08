import React from "react";

import { IPropsInput } from "../interfaces";
import { tiro } from "@/functions/fonts";

export const InputUser: React.FC<{data: IPropsInput}> = ({ data }) => (
    <div className="flex flex-col w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] items-center">
        <label
            htmlFor={data.name}
            className={`ml-2 font-semibold self-start ${tiro.className}`}
        >
            {data.label}
        </label>
        <input
            type={data.type}
            id={data.name}
            className={`w-full outline-none border-2 border-pallet-purple p-1 pl-2 rounded-lg ${tiro.className}`}
            placeholder={data.placeholder}
            {...data.register("name")}
        />
        {data.errors?.name?.message && (
            <p
                className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
            >
                {data.errors?.name?.message}
            </p>
        )}
    </div>
);
