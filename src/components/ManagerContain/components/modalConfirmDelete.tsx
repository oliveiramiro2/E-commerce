"use client";

import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import LoadingIcons from "react-loading-icons";

import { arnekG, oswald } from "@/functions/fonts";
import { IPropsConfirmDelete } from "../interface";
import { deleteItem } from "../function";
import { notify } from "@/functions/notifications";

export const ModalConfirmDelete: React.FC<IPropsConfirmDelete> = ({
    handleClose,
    loading,
    showLoading,
    id,
    product,
}) => {
    useLayoutEffect(() => {
        gsap.from(".contain-modal-confirm", {
            scale: 0,
            opacity: 0,
            ease: "slow",
        });
    }, []);

    return (
        <div className="contain-modal-confirm h-full rounded-md flex flex-col justify-around">
            <p
                className={`font-black text-xl text-center self-center max-lg:right-0 ${oswald.className}`}
            >
                Deseja excluir o produto?
            </p>
            <div className="w-full flex justify-around mt-5">
                <button
                    type="button"
                    className={`bg-pallet-orange w-[40%] rounded-md p-2 pb-1 hover:bg-[#ff9748] transition-colors shadow-md shadow-gray-400 text-white font-bold ${arnekG.className}`}
                    disabled={loading}
                    onClick={() => {
                        showLoading(true);
                        deleteItem(product, id)
                            .then(data => {
                                if (data)
                                    notify(
                                        "success",
                                        "Sucesso,",
                                        "Produto deletado com sucesso!"
                                    );
                                else
                                    notify(
                                        "warning",
                                        "Erro,",
                                        "Desculpe, ocorreu algum erro e o produto não foi deletado!"
                                    );
                            })
                            .finally(() => {
                                gsap.to(".contain-modal-confirm", {
                                    scale: 0,
                                    opacity: 0,
                                    ease: "slow",
                                });
                                setTimeout(() => {
                                    showLoading(false);
                                    handleClose(false);
                                }, 500);
                            });
                    }}
                >
                    {loading ? (
                        <div className="relative left-3">
                            <LoadingIcons.SpinningCircles
                                color="#a226d0"
                                alignmentBaseline="central"
                                height={25}
                                fill="#fff"
                            />
                        </div>
                    ) : (
                        "Confirmar"
                    )}
                </button>
                <button
                    type="button"
                    className={`bg-green-500 w-[40%] rounded-md p-2 pb-1 hover:bg-green-400 transition-colors shadow-md shadow-gray-400 text-white font-bold tracker ${arnekG.className}`}
                    onClick={() => {
                        gsap.to(".contain-modal-confirm", {
                            scale: 0,
                            opacity: 0,
                            ease: "slow",
                        });
                        setTimeout(() => {
                            handleClose(false);
                        }, 500);
                    }}
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
};
