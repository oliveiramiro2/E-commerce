import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

import { arnekG, oswald, tiro } from "@/functions/fonts";
import { IPropsAddEditProduct } from "../interface";

export const ModalCreateEditProduct: React.FC<IPropsAddEditProduct> = ({
    add,
    data,
    handleSingle,
    closeModal,
}) => {
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
                {add ? "Adicionar" : "Editar"} produto
            </p>
            <form className="w-full h-[40vh] flex flex-col justify-around items-center pl-[5vw] pr-[5vw]">
                <div className="w-full flex justify-between gap-x-4">
                    <input
                        type="text"
                        placeholder="Nome"
                        className={`outline-none border border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                        value={data.title}
                        onChange={e => handleSingle(e.target.value, 0)}
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                        className={`outline-none border border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                        value={data.description}
                        onChange={e => handleSingle(e.target.value, 1)}
                    />
                </div>
                <div className="w-full flex justify-between">
                    <input
                        type="text"
                        placeholder="Preço"
                        className={`outline-none border border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                        value={data.price}
                        onChange={e => handleSingle(e.target.value.replace(/[^0-9.]/g, ""), 2)}
                    />
                    <select
                        className={`select text-center outline-none border border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                        value={data.category}
                        onChange={e => handleSingle(e.target.value, 3)}
                    >
                        <option value="ok">test</option>
                        <option value="1">test working?</option>
                    </select>
                </div>
                <div className="w-full flex justify-around">
                    <button
                        type="button"
                        className={`bg-green-500 w-[40%] rounded-md p-2 pb-1 hover:bg-green-400 transition-colors shadow-md shadow-gray-400 text-white font-bold tracker ${arnekG.className}`}
                        onClick={() => console.log(data)}
                    >
                        Adicionar
                    </button>
                    <button
                        type="button"
                        className={`bg-pallet-orange w-[40%] rounded-md p-2 pb-1 hover:bg-[#ff9748] transition-colors shadow-md shadow-gray-400 text-white font-bold ${arnekG.className}`}
                        onClick={() => {
                            gsap.to(".contain-modal-product", {
                                scale: 0,
                                opacity: 0,
                                ease: "slow",
                            });
                            setTimeout(() => {
                                closeModal(false);
                            }, 500);
                        }}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};
