import React from "react";
import clsx from "clsx";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { IPropsInput } from "../interfaces";
import { tiro } from "@/functions/fonts";
import { errorMessage } from "../functions";
import { useShowPassword } from "../hooks";

export const InputUser: React.FC<{ data: IPropsInput; index: number }> = ({
    data,
    index,
}) => {
    const { setShowPassword, showPassword } = useShowPassword();

    return (
        <div className="flex flex-col w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] items-center">
            <label
                htmlFor={data.name}
                className={`ml-1 font-semibold self-start ${tiro.className}`}
            >
                {data.label}
            </label>
            <div className="flex items-center justify-center">
                <input
                    type={
                        data.name !== "confirmPassword" &&
                        data.name !== "password"
                            ? data.type
                            : showPassword
                            ? "text"
                            : "password"
                    }
                    id={data.name}
                    className={clsx(
                        `w-[37vw] max-xl:w-[49vw] max-lg:w-[57.5vw] max-md:w-[74vw] max-sm:w-[84vw] outline-none border-2 border-pallet-purple p-1 pl-2 rounded-lg ${tiro.className}`,
                        {
                            "border-red-500": !!errorMessage(
                                data.errors,
                                index,
                                data.registerForm
                            ),
"ml-[14px]":  data.name === "confirmPassword" ||
                        data.name === "password"
                        }
                    )}
                    placeholder={data.placeholder}
                    {...data.register(data.name)}
                />
                {(data.name === "confirmPassword" ||
                    data.name === "password") && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {!showPassword ? (
                                <AiFillEye className="text-pallet-purple self-end relative right-6" />
                            ) : (
                                <AiFillEyeInvisible className="text-pallet-purple self-end relative right-6" />
                            )}
                        </button>
                    )}
            </div>

            {errorMessage(data.errors, index, data.registerForm) && (
                <p
                    className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                >
                    {errorMessage(data.errors, index, data.registerForm)}
                </p>
            )}
        </div>
    );
};
