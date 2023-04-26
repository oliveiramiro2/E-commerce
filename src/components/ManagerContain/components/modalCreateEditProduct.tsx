import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

import { arnekG, oswald, tiro } from "@/functions/fonts";

export const ModalCreateEditProduct: React.FC = () => {
    useLayoutEffect(() => {
        gsap.from(".contain-modal-product", {
            scale: 0,
            opacity: 0,
            ease: "slow",
        });
    }, []);

    return (
        <div className="contain-modal-product flex flex-col justify-center min-h-[50vh]">
            <p
                className={`font-black text-xl text-center self-center max-lg:right-0 ${oswald.className}`}
            >
                Adicionar produto
            </p>
            <form className="w-full h-[40vh] flex flex-col justify-around items-center pl-[5vw] pr-[5vw]">
                <div className="w-full flex justify-between">
                    <input
                        type="text"
                        placeholder="Nome"
                        className={`outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                        className={`outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                    />
                </div>
                <div className="w-full flex justify-between">
                    <input
                        type="text"
                        placeholder="Preço"
                        className={`outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                    />
                    <select
                        className={`select text-center outline-none border-2 border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                    >
                        <option value="ok">test</option>
                    </select>
                </div>
                <div className="w-full flex justify-around">
                    <button
                        type="button"
                        className={`bg-green-500 w-[40%] rounded-md p-2 pb-1 hover:bg-green-400 transition-colors shadow-md shadow-gray-400 text-white font-bold tracker ${arnekG.className}`}
                    >
                        Adicionar
                    </button>
                    <button
                        type="button"
                        className={`bg-pallet-orange w-[40%] rounded-md p-2 pb-1 hover:bg-[#ff9748] transition-colors shadow-md shadow-gray-400 text-white font-bold ${arnekG.className}`}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};
