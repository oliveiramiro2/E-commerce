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
        <div className="contain-modal-confirm min-h-36 w-36 rounded-md">
            <p
                className={`font-black text-xl self-center max-lg:right-0 ${oswald.className}`}
            >
                Deseja excluir o produto?
            </p>
            <div className="w-full flex justify-around mt-5">
                <button
                    type="button"
                    className={`bg-pallet-orange rounded-md p-2 hover:bg-[#ff9748] transition-colors shadow-md shadow-gray-400 ${arnekG.className}`}
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
                                }, 1000);
                            });
                    }}
                >
                    {loading ? (
                        <LoadingIcons.SpinningCircles
                            color="#a226d0"
                            alignmentBaseline="central"
                            height={50}
                            fill="#a226d0"
                        />
                    ) : (
                        "Confirmar"
                    )}
                </button>
                <button
                    type="button"
                    className={`bg-green-500 rounded-md p-2 hover:bg-green-400 transition-colors shadow-md shadow-gray-400 ${arnekG.className}`}
                    onClick={() => {
                        gsap.to(".contain-modal-confirm", {
                            scale: 0,
                            opacity: 0,
                            ease: "slow",
                        });
                        setTimeout(() => {
                            handleClose(false);
                        }, 1000);
                    }}
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
};
