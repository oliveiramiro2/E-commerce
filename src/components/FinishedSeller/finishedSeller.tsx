import React from "react";

import { oswald, tiro } from "@/functions/fonts";

export const FinishedSeller: React.FC<{ close: Function }> = () => {
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
                        name="CEP"
                        placeholder="Adicione seu CEP"
                        type="text"
                        className={`outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                    />
                </div>
            </form>
        </div>
    );
};
