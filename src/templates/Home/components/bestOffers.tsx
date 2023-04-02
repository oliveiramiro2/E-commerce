"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { bestOffers } from "@/services/api";
import { IDataApi } from "@/interface";
import { Product, SkeletonProducts } from "@/components";
import { oswald } from "@/functions/fonts";

export const BestOffers: React.FC = () => {
    const { data, isLoading } = useQuery<IDataApi[] | undefined>({
        queryKey: ["bestOffers"],
        queryFn: bestOffers,
    });

    if (isLoading) {
        return (
            <div className="w-full h-[50vh] flex flex-wrap justify-between pr-10 pl-5">
                <SkeletonProducts />
                <SkeletonProducts />
                <SkeletonProducts />
            </div>
        );
    }

    return (
        <section className="w-screen min-h-[65vh] flex flex-col items-center pt-8">
            <div>
                <h2
                    className={`font-black text-3xl relative right-5 max-lg:right-0 mb-8 ${oswald.className}`}
                >
                    Produtos em oferta
                </h2>
            </div>
            {/* <ul>
                {data?.map((dataProducts) => (
                    <li key={dataProducts.id}>{dataProducts.title}</li>
                ))}
            </ul> */}
            <div className="flex w-[85%] justify-between">
                {data !== undefined &&
                    data.map(value => <Product param={value} />)}
            </div>
        </section>
    );
};
