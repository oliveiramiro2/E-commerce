"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { oswald } from "@/functions/fonts";
import { categories } from "@/services/api";
import { ICategoryApi } from "@/interface";
import { ContainCategory } from "./containCategory";
import { SkeletonCategory } from "./skeletonCategory";

export const Categories: React.FC = () => {
    const { data, isLoading } = useQuery<ICategoryApi[] | undefined>({
        queryFn: () => categories(""),
        queryKey: ["allCategories"],
    });

    if (isLoading) {
        return (
            <div className="w-screen flex flex-col justify-center items-center mb-5">
                <div>
                    <h2
                        className={`font-black text-3xl relative right-5 max-lg:right-0 mb-8 ${oswald.className}`}
                    >
                        Categorias
                    </h2>
                </div>
                <div className="flex w-[86%] overflow-x-hidden pb-8">
                    <div className="w-full flex gap-5 justify-center items-center">
                        <SkeletonCategory />
                        <SkeletonCategory />
                        <SkeletonCategory />
                        <SkeletonCategory />
                        <SkeletonCategory />
                        <SkeletonCategory />
                        <SkeletonCategory />
                        <SkeletonCategory />
                        <SkeletonCategory />
                        <SkeletonCategory />
                        <SkeletonCategory />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="w-screen flex flex-col justify-center items-center mb-5">
            <div>
                <h2
                    className={`font-black text-3xl relative right-5 max-lg:right-0 mb-8 ${oswald.className}`}
                >
                    Categorias
                </h2>
            </div>
            <div className="flex w-[86%] overflow-x-hidden pb-8">
                <div className="w-full flex gap-5 justify-center items-center flex-wrap">
                    {data !== undefined &&
                        data.map(value => (
                            <ContainCategory key={value.id} data={value} />
                        ))}
                </div>
            </div>
        </section>
    );
};
