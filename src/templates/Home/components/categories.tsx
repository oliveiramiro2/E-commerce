"use client";

import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    gsap.registerPlugin(ScrollTrigger);
    const refCategories = useRef(null);

    useEffect(() => {
        if (isLoading) return;
        const element: any = refCategories.current;

        gsap.timeline({
            scrollTrigger: {
                trigger: element,
                scrub: 2,
                start: "bottom 75%",
                end: "bottom 75%",
            },
        })
            .from(element.querySelector("#homeBestOfferText"), {
                y: -100,
                opacity: 0,
                scaleX: 0.2,
            })
            .from(".category", {
                opacity: 0,
                scaleY: 0,
                ease: "slow",
            });
    }, [isLoading]);

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
        <section
            ref={refCategories}
            className="w-screen flex flex-col justify-center items-center mb-5"
        >
            <div id="homeBestOfferText">
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
