"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { oswald, tiro } from "@/functions/fonts";
import { ICategoryApi } from "@/interface";
import { categories } from "@/services/api";
import { ICategoriesOptions } from "../interfaces";
import { useFilter } from "../hooks";
import { notify } from "@/functions/notifications";

const cartegoriesData: ICategoriesOptions[] = [
    { id: 0, name: "Selecione uma categoria" },
];

export const Filters: React.FC<{ handleFilter: Function }> = ({
    handleFilter,
}) => {
    const {
        options,
        setOptions,
        name,
        setName,
        price,
        setPrice,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        category,
        setCategory,
    } = useFilter();
    const { data, isLoading } = useQuery<ICategoryApi[] | undefined>({
        queryFn: () => categories(""),
        queryKey: ["allCategories"],
    });

    if (isLoading) {
        <SkeletonTheme>
            <div className="w-full h-40 mb-5 pt-6 pb-6 pl-1 rounded-xl">
                <Skeleton
                    className="w-20 h-20"
                    containerClassName="w-[100%] h-[100%] flex justify-center"
                />
            </div>
        </SkeletonTheme>;
    }

    useEffect(() => {
        if (!isLoading) {
            data?.forEach(item =>
                cartegoriesData.push({ id: item.id, name: item.name })
            );
            setOptions(cartegoriesData);
        }
    }, [isLoading]);

    return (
        <section className="w-full min-w-[95vw] self-center bg-white mb-5 pt-6 pb-6 pl-1 pr-1 rounded-xl flex flex-col gap-y-5">
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
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Digite o nome do produto"
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
                        value={price}
                        onChange={e =>
                            setPrice(e.target.value.replace(/[^0-9.]/g, ""))
                        }
                        placeholder="Digite o preço de um produto"
                    />
                </div>
                <div>
                    <p
                        className={`ml-1 font-semibold self-start ${tiro.className}`}
                    >
                        Faixa de preço
                    </p>
                    <div className="flex flex-col mb-2">
                        <input
                            type="text"
                            className={`outline-none border-2 border-pallet-orange p-1 pl-1 rounded-lg ${tiro.className}`}
                            value={minPrice}
                            onChange={e =>
                                setMinPrice(
                                    e.target.value.replace(/[^0-9.]/g, "")
                                )
                            }
                            placeholder="Digite o preço mínimo"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            className={`outline-none border-2 border-pallet-orange p-1 pl-1 rounded-lg ${tiro.className}`}
                            value={maxPrice}
                            onChange={e =>
                                setMaxPrice(
                                    e.target.value.replace(/[^0-9.]/g, "")
                                )
                            }
                            placeholder="Digite o preço maximo"
                        />
                    </div>
                </div>
                <div>
                    <p
                        className={`ml-1 font-semibold self-start ${tiro.className}`}
                    >
                        Categoria
                    </p>
                    <select
                        className={`text-center outline-none border-2 border-pallet-orange p-1 pl-1 rounded-lg ${tiro.className}`}
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        {options.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-full flex justify-evenly">
                <button
                    type="button"
                    className={`self-center rounded-lg p-2 pl-8 pr-8 mt-2 bg-pallet-purple text-pallet-white font-semibold text-sm tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                    onClick={() => {
                        handleFilter(name, price, minPrice, maxPrice, category);
                        notify(
                            "success",
                            "Sucesso,",
                            "Filtro aplicado com sucesso!"
                        );
                    }}
                >
                    Filtrar
                </button>
                <button
                    type="button"
                    className={`self-center rounded-lg p-2 pl-8 pr-8 mt-2 bg-pallet-purple text-pallet-white font-semibold text-sm tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                    onClick={() => {
                        handleFilter("", "", "", "", "");
                        setName("");
                        setPrice("");
                        setMinPrice("");
                        setMaxPrice("");
                        setCategory("0");
                        notify(
                            "success",
                            "Sucesso,",
                            "Filtro retirado com sucesso!"
                        );
                    }}
                >
                    Limpar filtro
                </button>
            </div>
        </section>
    );
};
