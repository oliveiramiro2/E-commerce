"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { bestOffers } from "@/services/api";
import { IDataApi } from "@/interface";

export const BestOffers: React.FC = () => {
    const { data, isLoading } = useQuery<IDataApi[] | undefined>({
        queryKey: ["bestOffers"],
        queryFn: bestOffers,
    });

    if (isLoading) {
        return (
            <div className="w-full h-[50vh] flex justify-between pr-10 pl-5">
                <div className="w-[28%]">
                    <SkeletonTheme>
                        <div className="w-[100%] h-[55%]">
                            <Skeleton
                                className="w-[90%] h-[95%]"
                                containerClassName="w-[100%] h-[95%] flex justify-center"
                            />
                        </div>
                        <p>
                            <Skeleton count={3} />
                        </p>
                    </SkeletonTheme>
                </div>
                <div className="w-[28%]">
                    <SkeletonTheme>
                        <div className="w-[100%] h-[55%]">
                            <Skeleton
                                className="w-[90%] h-[95%]"
                                containerClassName="w-[100%] h-[95%] flex justify-center"
                            />
                        </div>
                        <p>
                            <Skeleton count={3} />
                        </p>
                    </SkeletonTheme>
                </div>
                <div className="w-[28%]">
                    <SkeletonTheme>
                        <div className="w-[100%] h-[55%]">
                            <Skeleton
                                className="w-[90%] h-[95%]"
                                containerClassName="w-[100%] h-[95%] flex justify-center"
                            />
                        </div>
                        <p>
                            <Skeleton count={3} />
                        </p>
                    </SkeletonTheme>
                </div>
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
