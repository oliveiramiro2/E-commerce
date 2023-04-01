"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { bestOffers } from "@/services/api";
import { IDataApi } from "@/interface";
import { SkeletonProducts } from "@/components";

export const BestOffers: React.FC = () => {
    const { data, isLoading } = useQuery<IDataApi[] | undefined>({
        queryKey: ["bestOffers"],
        queryFn: bestOffers,
    });

    if (isLoading) {
        return (
            <div className="w-full h-[50vh] flex justify-between pr-10 pl-5">
                <SkeletonProducts />
                <SkeletonProducts />
                <SkeletonProducts />
            </div>
        );
    }

    return (
        <div>
            <ul>
                {data?.map((dataProducts) => (
                    <li key={dataProducts.id}>{dataProducts.title}</li>
                ))}
            </ul>
            renderizou
        </div>
    );
};
