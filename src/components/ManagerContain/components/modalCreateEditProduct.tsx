import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { NumericFormat } from "react-number-format";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import LoadingIcons from "react-loading-icons";
import clsx from "clsx";

import { arnekG, oswald, tiro } from "@/functions/fonts";
import { IPropsAddEditProduct } from "../interface";
import { ICategoryApi } from "@/interface";
import { categories } from "@/services/api";
import { createProduct } from "../function";

export const ModalCreateEditProduct: React.FC<IPropsAddEditProduct> = ({
    add,
    dataProduct,
    handleSingle,
    closeModal,
    cleanData,
    requestIsLoading,
    setRequestIsLoading,
}) => {
    const { data, isLoading } = useQuery<ICategoryApi[] | undefined>({
        queryFn: () => categories(""),
        queryKey: ["allCategories"],
    });

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
                    <div>
                        <input
                            type="text"
                            placeholder="Nome"
                            className={clsx(
                                `outline-none border border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                {
                                    "border-red-500":
                                        dataProduct.title === "" &&
                                        dataProduct.trySendErro,
                                }
                            )}
                            value={dataProduct.title}
                            onChange={e => handleSingle(e.target.value, 0)}
                        />
                        {dataProduct.title === "" &&
                            dataProduct.trySendErro && (
                                <p
                                    className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                                >
                                    Preencha o nome do produto.
                                </p>
                            )}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Descrição"
                            className={clsx(
                                `outline-none border border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                {
                                    "border-red-500":
                                        dataProduct.description === "" &&
                                        dataProduct.trySendErro,
                                }
                            )}
                            value={dataProduct.description}
                            onChange={e => handleSingle(e.target.value, 1)}
                        />
                        {dataProduct.description === "" &&
                            dataProduct.trySendErro && (
                                <p
                                    className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                                >
                                    Preencha a descrição do produto.
                                </p>
                            )}
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div>
                        <NumericFormat
                            value={dataProduct.price}
                            placeholder="Preço"
                            prefix="R$ "
                            decimalSeparator=","
                            thousandSeparator="."
                            decimalScale={2}
                            allowNegative={false}
                            className={clsx(
                                `outline-none border border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                {
                                    "border-red-500":
                                        dataProduct.price === "" &&
                                        dataProduct.trySendErro,
                                }
                            )}
                            onValueChange={e => handleSingle(e.floatValue, 2)}
                        />
                        {dataProduct.price === "" &&
                            dataProduct.trySendErro && (
                                <p
                                    className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                                >
                                    Preencha o preço do produto.
                                </p>
                            )}
                    </div>
                    {isLoading ? (
                        <Skeleton count={1} />
                    ) : (
                        <div>
                            <select
                                className={clsx(
                                    `select text-center outline-none border border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                    {
                                        "border-red-500":
                                            dataProduct.category === 0 &&
                                            dataProduct.trySendErro,
                                    }
                                )}
                                value={dataProduct.category}
                                onChange={e => handleSingle(e.target.value, 3)}
                            >
                                <option value="0">Categoria</option>
                                {data?.map(item => (
                                    <option value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            {dataProduct.category === 0 &&
                                dataProduct.trySendErro && (
                                    <p
                                        className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                                    >
                                        Selecione a categoria do produto.
                                    </p>
                                )}
                        </div>
                    )}
                </div>
                <div className="w-full flex justify-around">
                    <button
                        type="button"
                        disabled={requestIsLoading}
                        className={`bg-green-500 w-[40%] rounded-md p-2 pb-1 hover:bg-green-400 transition-colors shadow-md shadow-gray-400 text-white font-bold tracker ${arnekG.className}`}
                        onClick={async () => {
                            if (add) {
                                const created = await createProduct(
                                    dataProduct,
                                    handleSingle,
                                    cleanData,
                                    setRequestIsLoading,
                                );
                                if (created) {
                                    gsap.to(".contain-modal-product", {
                                        scale: 0,
                                        opacity: 0,
                                        ease: "slow",
                                    });
                                    setTimeout(() => {
                                        closeModal(false);
                                    }, 500);
                                }
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
                        ) : (
                            "Adicionar"
                        )}
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
