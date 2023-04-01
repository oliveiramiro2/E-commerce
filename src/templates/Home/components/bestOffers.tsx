"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { allProjects } from "@/services/api";

export const BestOffers: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: allProjects,
    });

    if (isLoading) return <div>loading...</div>;

    return (
        <div>
            <ul>
                {data?.map((dataProducts: any) => (
                    <li key={dataProducts.id}>{dataProducts.title}</li>
                ))}
            </ul>
            renderizou
        </div>
    );
};
