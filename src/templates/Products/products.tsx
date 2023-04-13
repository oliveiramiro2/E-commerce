"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { DefaultTemplate } from "../default";
import { oswald } from "@/functions/fonts";
import { allProducts } from "@/services/api";
import { IDataApi } from "@/interface";
import { Product, SkeletonProducts } from "@/components";

export const ProductsTemplate: React.FC = () => {
    const { data, isLoading } = useQuery<IDataApi[] | undefined>({
        queryKey: ["allProducts"],
        queryFn: allProducts,
    });

    useEffect(() => {
        document.title = "RM E-commerce - Comprar";
    }, []);

    if (isLoading) {
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
                <div className="pl-6 pr-6">
                    <div>filter</div>
                    <div className="w-full flex flex-wrap gap-y-10 justify-between">
                        {data?.map(item => (
                            <Product key={item.id} param={item} />
                        ))}
                    </div>
                </div>
            </section>
        </DefaultTemplate>
    );
};
