import React from "react";

import { oswald, tiro } from "@/functions/fonts";
import { useAddressControl } from "./hooks";

export const FinishedSeller: React.FC<{ close: Function }> = () => {
    const { errors, register } = useAddressControl();

    return (
        <div>
            <div className="w-full flex justify-center">
                <h5 className={`font-black text-2xl ${oswald.className}`}>
                    Adicione seu endereço para entrega!
                </h5>
            </div>
            <form className="w-full">
                <div className="w-full flex flex-col justify-center items-center mt-5">
                    <label
                        htmlFor="CEP"
                        className={`font-semibold ${tiro.className}`}
                    >
                        CEP
                    </label>
                    <input
                        placeholder="Adicione seu CEP"
                        type="text"
                        className={`outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                        {...register("CEP")}
                        maxLength={9}
                    />
                    {errors.CEP && <p
                        className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                    >
                        {errors.CEP?.message}
                    </p>}
                </div>
            </form>
        </div>
    );
};
