"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { DefaultTemplate } from "../default";
import { oswald } from "@/functions/fonts";
import { ManagerContain, SkeletonManagetTable } from "@/components";
import { IDataApi } from "@/interface";
import { allProductsWithoutParam } from "@/services/api";

export const ManagerProductsTemplate: React.FC = () => {
    const { data, isLoading } = useQuery<IDataApi[] | undefined>({
        queryKey: ["allProducts"],
        queryFn: allProductsWithoutParam,
        keepPreviousData: true,
    });

    useEffect(() => {
        document.title = "RM E-commerce - Gerenciar produtos";
    }, []);

    if (isLoading) return <SkeletonManagetTable />;

    return (
        <DefaultTemplate>
            <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Gerenciar produtos
                    </h3>
                </div>
                {data !== undefined && (
                    <ManagerContain
                        dataProduct={data}
                        dataCategory={[]}
                        numberItemsPagination={10}
                    />
                )}
            </section>
        </DefaultTemplate>
    );
};
