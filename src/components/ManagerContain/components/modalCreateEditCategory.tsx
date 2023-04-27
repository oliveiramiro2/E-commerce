"use client";

import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import LoadingIcons from "react-loading-icons";

import { arnekG, oswald, tiro } from "@/functions/fonts";
import { IPropsAddEditCategory } from "../interface";
import { createCategory } from "../function";

export const ModalCreateEditCategory: React.FC<IPropsAddEditCategory> = ({
    add,
    dataCategory,
    handleData,
    requestIsLoading,
    setRequestIsLoading,
    closeModal,
    setIdNewItem,
    /* editId, */
}) => {
    useLayoutEffect(() => {
        gsap.from(".contain-modal-category", {
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
                {add ? "Adicionar" : "Editar"} categoria
            </p>
            <form className="w-full h-[40vh] flex flex-col justify-around items-center pl-[5vw] pr-[5vw]">
                <div className="w-full flex justify-center items-center gap-x-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Nome"
                            className={clsx(
                                `outline-none border border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                {
                                    "border-red-500":
                                        dataCategory.name === "" &&
                                        dataCategory.trySendErro,
                                }
                            )}
                            value={dataCategory.name}
                            onChange={e => handleData(e.target.value)}
                        />
                        {dataCategory.name === "" &&
                            dataCategory.trySendErro && (
                                <p
                                    className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                                >
                                    Preencha o nome do produto.
                                </p>
                            )}
                    </div>
                </div>
                <div className="w-full flex justify-around">
                    <button
                        type="button"
                        disabled={requestIsLoading}
                        className={`bg-green-500 w-[40%] rounded-md p-2 pb-1 hover:bg-green-400 transition-colors shadow-md shadow-gray-400 text-white font-bold tracker ${arnekG.className}`}
                        onClick={async () => {
                            let requestWasRigth = false
                            if (add) {
                                const created = await createCategory(
                                    dataCategory,
                                    handleData,
                                    setRequestIsLoading,
                                    setIdNewItem,
                                );
                                requestWasRigth = created !== false;
                            } /* else {
                                const edited = await editTheProduct(
                                    dataProduct,
                                    handleSingle,
                                    cleanData,
                                    setRequestIsLoading,
                                    editId,
                                    setProductEdited,
                                )
                                requestWasRigth = edited;
                            } */
                            if (requestWasRigth) {
                                requestWasRigth = false;
                                gsap.to(".contain-modal-product", {
                                    scale: 0,
                                    opacity: 0,
                                    ease: "slow",
                                });
                                setTimeout(() => {
                                    closeModal(false);
                                }, 500);
                            }
                        }}
                    >
                        {requestIsLoading ? (
                            <div className="flex items-center justify-center">
                                <LoadingIcons.SpinningCircles
                                    color="#a226d0"
                                    alignmentBaseline="middle"
                                    height={25}
                                    fill="#fff"
                                />
                            </div>
                        ) : add ? (
                            "Adicionar"
                        ) : (
                            "Editar"
                        )}
                    </button>
                    <button
                        type="button"
                        className={`bg-pallet-orange w-[40%] rounded-md p-2 pb-1 hover:bg-[#ff9748] transition-colors shadow-md shadow-gray-400 text-white font-bold ${arnekG.className}`}
                        onClick={() => {
                            gsap.to(".contain-modal-category", {
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
