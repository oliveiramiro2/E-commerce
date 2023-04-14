"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import clsx from "clsx";

import { DefaultTemplate } from "../default";
import { oswald, tiro } from "@/functions/fonts";
import { allProducts } from "@/services/api";
import { IDataApi } from "@/interface";
import { Product, SkeletonProducts } from "@/components";
import { usePagination } from "./hooks";
import { notify } from "@/functions/notifications";
import { Filters } from "./components";

export const ProductsTemplate: React.FC = () => {
    const {
        pagination,
        inputPagination,
        handleInputPagination,
        handlePagination,
        handleSearchInput,
    } = usePagination();
    const { data, isLoading, isFetching } = useQuery<IDataApi[] | undefined>({
        queryKey: ["allProducts", pagination],
        queryFn: () => allProducts(pagination - 1),
        keepPreviousData: true,
    });

    useEffect(() => {
        document.title = "RM E-commerce - Comprar";
    }, []);

    if (isLoading || isFetching) {
        return (
            <DefaultTemplate>
                <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center">
                    <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                        <h3
                            className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                        >
                            Produtos
                        </h3>
                    </div>
                    <div className="w-full flex flex-wrap justify-between pl-6 pr-6">
                        <SkeletonProducts />
                        <SkeletonProducts />
                        <SkeletonProducts />
                    </div>
                </section>
            </DefaultTemplate>
        );
    }

    return (
        <DefaultTemplate>
            <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Produtos
                    </h3>
                </div>
                <div className="pl-6 pr-6 mb-10">
                    <Filters />
                    <div className="w-full flex flex-wrap gap-y-10 justify-between">
                        {data?.map(item => (
                            <Product key={item.id} param={item} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center mb-10">
                    <button
                        type="button"
                        className={clsx("h-max", {
                            invisible: pagination <= 1,
                        })}
                        onClick={() => handlePagination(false)}
                        disabled={pagination <= 1}
                    >
                        <div className="bg-pallet-orange h-max rounded-md mr-2 p-2 hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange">
                            <TiChevronLeft color="#fff" />
                        </div>
                    </button>
                    <div>
                        <input
                            type="text"
                            value={inputPagination}
                            className={`w-14 text-center outline-none border-2 border-pallet-orange p-1 pl-1 rounded-lg ${tiro.className}`}
                            onChange={e =>
                                handleInputPagination(
                                    e.target.value.replace(/[^0-9.]/g, "")
                                )
                            }
                            onBlur={handleSearchInput}
                            onFocus={() =>
                                notify(
                                    "info",
                                    "Atenção,",
                                    "Ao inserir a página desejada clique em outro lugar da tela para ir para a página desejada!"
                                )
                            }
                        />
                    </div>
                    <button
                        type="button"
                        className="h-max"
                        onClick={() => handlePagination(true)}
                    >
                        <div className="bg-pallet-orange h-max rounded-md ml-2 p-2 hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange">
                            <TiChevronRight color="#fff" />
                        </div>
                    </button>
                </div>
            </section>
        </DefaultTemplate>
    );
};
