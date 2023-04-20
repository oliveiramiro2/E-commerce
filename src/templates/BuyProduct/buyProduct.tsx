"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

import { DefaultTemplate } from "../default";
import { arnekG, oswald } from "@/functions/fonts";
import { buyProduct } from "@/services/api";
import { IDataApi } from "@/interface";
import { useCount, useGetParam } from "./hooks";
import { useRedirect } from "@/hooks";
import { CountManyItems, LoadingUser } from "@/components";

export const BuyProductTemplate: React.FC = () => {
    const { getParam, setGetParam } = useGetParam();
    const { data, isLoading } = useQuery<IDataApi | undefined>({
        queryKey: ["buyProduct", getParam],
        queryFn: () => buyProduct(getParam),
        keepPreviousData: true,
    });
    const path = useSearchParams();
    const { back } = useRedirect();
    const { count, handleCountLess, handleCountMore } = useCount();

    useEffect(() => {
        document.title = "RM E-commerce - Comprar produto";
        if (path.toString().split("idProduto=")[1] !== undefined) {
            if (path.toString().split("idProduto=")[1] === "") back();
            setGetParam(Number(path.toString().split("idProduto=")[1]));
        }
    }, []);

    useEffect(() => {
        if (!isLoading) {
            gsap.registerPlugin(ScrollTrigger);

            const sectionsImgs = gsap.utils.toArray(".imgsSnap");

            gsap.to(sectionsImgs, {
                xPercent: -100 * (sectionsImgs.length + 1.2),
                ease: Power1.easeIn,
                scrollTrigger: {
                    trigger: ".contain",
                    pin: true,
                    scrub: 1,
                },
            });
        }
    }, [isLoading]);

    if (isLoading) return <LoadingUser />;

    return (
        <DefaultTemplate>
            <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center pl-6 pr-6">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-center text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Comprar {data?.title}
                    </h3>
                </div>
                <div>
                    <div id="contain" className="flex bg-white contain">
                        {data?.images !== undefined &&
                            data?.images.map((item: string) => (
                                <div
                                    key={item}
                                    className={clsx(
                                        "relative w-[100vw] flex justify-center",
                                        {
                                            "left-[100vw]":
                                                data?.images.length > 1,
                                        }
                                    )}
                                >
                                    <img
                                        className="h-[95vh] rounded-lg imgsSnap"
                                        src={item}
                                        alt="produto"
                                        height={window.innerHeight}
                                    />
                                </div>
                            ))}
                    </div>
                    <CountManyItems
                        price={data?.price || 0}
                        count={count}
                        handleCountLess={handleCountLess}
                        handleCountMore={handleCountMore}
                        handlePriceItems={() => {}}
                    />
                    <p className={`font-bold text-sm ${arnekG.className}`}>
                        {data?.description}
                    </p>
                </div>
                buyProduct
            </section>
        </DefaultTemplate>
    );
};
