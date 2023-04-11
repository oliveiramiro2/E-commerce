import React from "react";
import clsx from "clsx";

import { IPropsInput } from "../interfaces";
import { tiro } from "@/functions/fonts";
import { errorMessage } from "../functions";

export const InputUser: React.FC<{ data: IPropsInput; index: number }> = ({
    data,
    index,
}) => (
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
            className={clsx(`w-full outline-none border-2 border-pallet-purple p-1 pl-2 rounded-lg ${tiro.className}`, {
                "border-red-500": !!errorMessage(data.errors, index, data.registerForm)
            })}
            placeholder={data.placeholder}
            {...data.register(data.name)}
        />

        {errorMessage(data.errors, index, data.registerForm) && (
            <p
                className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
            >
                {errorMessage(data.errors, index, data.registerForm)}
            </p>
        )}
    </div>
);
