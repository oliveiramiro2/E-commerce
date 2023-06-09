"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { ICategoryApi } from "@/interface";
import { categories } from "@/services/api";
import { ManagerContain, SkeletonManagetTable } from "@/components";
import { DefaultTemplate } from "../default";
import { oswald } from "@/functions/fonts";

export const ManagerCategoriesTemplate: React.FC = () => {
    const { data, isLoading } = useQuery<ICategoryApi[] | undefined>({
        queryFn: () => categories(""),
        queryKey: ["allCategories"],
    });

    useEffect(() => {
        document.title = "RM E-commerce - Gerenciar categorias";
    }, []);

    if (isLoading) return <SkeletonManagetTable />;

    return (
        <DefaultTemplate>
            <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Gerenciar categorias
                    </h3>
                </div>
                {data !== undefined && (
                    <ManagerContain
                        dataProduct={[]}
                        dataCategory={data}
                        numberItemsPagination={10}
                    />
                )}
            </section>
        </DefaultTemplate>
    );
};
