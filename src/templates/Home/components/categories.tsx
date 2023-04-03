"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { oswald } from "@/functions/fonts";
import { categories } from "@/services/api";
import { ICategoryApi } from "@/interface";

export const Categories: React.FC = () => {
    const { data, isLoading } = useQuery<ICategoryApi[] | undefined>({
        queryFn: () => categories(""),
        queryKey: ["allCategories"],
    });

    if (isLoading) return <div>loading...</div>;

    return (
        <section>
            <div>
                <h2
                    className={`font-black text-3xl relative right-5 max-lg:right-0 mb-8 ${oswald.className}`}
                >
                    Categorias
                </h2>
            </div>
            <ul>
                {data !== undefined &&
                    data.map(value => <li key={value.id}>{value.name}</li>)}
            </ul>
        </section>
    );
};
