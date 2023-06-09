"use client";

import React, { useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { bestOffers } from "@/services/api";
import { IDataApi } from "@/interface";
import { Product, SkeletonProducts } from "@/components";
import { oswald } from "@/functions/fonts";

export const BestOffers: React.FC = () => {
    const { data, isLoading } = useQuery<IDataApi[] | undefined>({
        queryKey: ["bestOffers"],
        queryFn: bestOffers,
    });

    gsap.registerPlugin(ScrollTrigger);
    const refBestOffers = useRef(null);

    useEffect(() => {
        if (isLoading) return;
        const element: any = refBestOffers.current;

        gsap.timeline({
            scrollTrigger: {
                trigger: element,
                scrub: 2,
                start: "center 55%",
                end: "center 45%",
            },
        })
            .from(element.querySelector("#homeBestOfferText"), {
                y: -100,
                opacity: 0,
                scaleX: 0.2,
            })
            .from(".product", {
                opacity: 0,
                scaleX: 0,
                ease: "slow",
            });
    }, [isLoading]);

    if (isLoading) {
        return (
            <div className="w-screen flex flex-col items-center justify-center">
                <h2
                    className={`font-black text-3xl relative right-5 max-lg:right-0 mb-8 ${oswald.className}`}
                >
                    Produtos em oferta
                </h2>
                <div className="w-full flex flex-wrap justify-between pr-10 pl-5 max-md:flex-row max-md:mb-8 max-md:gap-y-5 max-md:justify-center max-md:items-center">
                    <SkeletonProducts />
                    <SkeletonProducts />
                    <SkeletonProducts />
                </div>
            </div>
        );
    }

    return (
        <section
            ref={refBestOffers}
            className="w-screen flex flex-col items-center pt-8 mb-8"
        >
            <div>
                <h2
                    id="homeBestOfferText"
                    className={`font-black text-3xl relative right-5 max-lg:right-0 mb-8 ${oswald.className}`}
                >
                    Produtos em oferta
                </h2>
            </div>
            <div className="flex w-[85%] max-lg:w-[90%] max-md:flex-wrap max-md:gap-y-5 justify-between">
                {data !== undefined &&
                    data.map(value => <Product key={value.id} param={value} />)}
            </div>
        </section>
    );
};
