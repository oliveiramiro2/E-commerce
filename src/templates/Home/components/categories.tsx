"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { oswald } from "@/functions/fonts";
import { categories } from "@/services/api";
import { ICategoryApi } from "@/interface";
import { ContainCategory } from "./containCategory";

export const Categories: React.FC = () => {
    const { data, isLoading } = useQuery<ICategoryApi[] | undefined>({
        queryFn: () => categories(""),
        queryKey: ["allCategories"],
    });

    if (isLoading) return <div>loading...</div>;

    return (
        <section className="w-screen flex flex-col justify-center items-center mb-5">
            <div>
                <h2
                    className={`font-black text-3xl relative right-5 max-lg:right-0 mb-8 ${oswald.className}`}
                >
                    Categorias
                </h2>
            </div>
            <div className="flex w-[86%] overflow-x-hidden">
                <div className="w-full flex gap-x-5">
                {data !== undefined &&
                    data.map(value => (
                        <ContainCategory key={value.id} data={value} />
                    ))}
                </div>
            </div>
        </section>
    );
};
