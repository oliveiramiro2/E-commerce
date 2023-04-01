"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { bestOffers } from "@/services/api";
import { IDataApi } from "@/interface";

export const BestOffers: React.FC = () => {
    const { data, isLoading } = useQuery<IDataApi[] | undefined>({
        queryKey: ["bestOffers"],
        queryFn: bestOffers,
    });

    if (isLoading) return <div>loading...</div>;

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
