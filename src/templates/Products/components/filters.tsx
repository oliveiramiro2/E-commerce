import React from "react";

import { oswald, tiro } from "@/functions/fonts";

export const Filters: React.FC = () => {
    return (
        <section className="w-full bg-white mb-5 pt-6 pb-6 pl-1 rounded-xl flex flex-col gap-y-5">
            <p className={`font-black text-lg ${oswald.className}`}>
                Filtar Por:
            </p>
            <div className="flex justify-between flex-wrap gap-y-5">
                <div>
                    <p
                        className={`ml-1 font-semibold self-start ${tiro.className}`}
                    >
                        Nome
                    </p>
                    <input
                        type="text"
                        className={`outline-none border-2 border-pallet-orange p-1 pl-1 rounded-lg ${tiro.className}`}
                    />
                </div>
                <div>
                    <p
                        className={`ml-1 font-semibold self-start ${tiro.className}`}
                    >
                        Preço
                    </p>
                    <input
                        type="text"
                        className={`outline-none border-2 border-pallet-orange p-1 pl-1 rounded-lg ${tiro.className}`}
                    />
                </div>
                <div>
                    <p
                        className={`ml-1 font-semibold self-start ${tiro.className}`}
                    >
                        Faixa de preço
                    </p>
                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor="min"
                            className={`font-medium font-sm ${tiro.className}`}
                        >
                            Mínimo
                        </label>
                        <input
                            type="text"
                            className={`outline-none border-2 border-pallet-orange p-1 pl-1 rounded-lg ${tiro.className}`}
                            id="min"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="max"
                            className={`font-medium font-sm ${tiro.className}`}
                        >
                            Maximo
                        </label>
                        <input
                            type="text"
                            className={`outline-none border-2 border-pallet-orange p-1 pl-1 rounded-lg ${tiro.className}`}
                            id="max"
                        />
                    </div>
                </div>
                <div>
                    <p
                        className={`ml-1 font-semibold self-start ${tiro.className}`}
                    >
                        Categoria
                    </p>
                    <input
                        type="text"
                        className={`text-center outline-none border-2 border-pallet-orange p-1 pl-1 rounded-lg ${tiro.className}`}
                    />
                </div>
            </div>
            <button
                type="button"
                className={`self-center rounded-lg p-2 pl-8 pr-8 mt-2 bg-pallet-purple text-pallet-white font-semibold tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
            >
                Filtrar
            </button>
        </section>
    );
};
