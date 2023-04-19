"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { FiMinus, FiPlus } from "react-icons/fi";

import { DefaultTemplate } from "../default";
import { arnekG, oswald } from "@/functions/fonts";
import { buyProduct } from "@/services/api";
import { IDataApi } from "@/interface";
import { useCount, useGetParam } from "./hooks";
import { useRedirect } from "@/hooks";
import { LoadingUser } from "@/components";
import { MaskCoin } from "@/functions/maskCoin";

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
        document.title = "RM E-commerce - comprar produto";
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
                xPercent: -100 * (sectionsImgs.length - 1),
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
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Comprar {data?.title}
                    </h3>
                </div>
                <div>
                    <div id="contain" className="contain flex bg-white">
                        {data?.images !== undefined &&
                            data?.images.map((item: string) => (
                                <div key={item} className="w-[95vw] flex justify-center imgsSnap">
                                    <img
                                        className="rounded-lg"
                                        src={item}
                                        alt="produto"
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="flex mr-5 items-center gap-x-4">
                        <div className="bg-gray-100 border p-2 flex items-center gap-x-1 border-pallet-black rounded-sm">
                            <button
                                type="button"
                                onClick={() => {
                                    handleCountLess();
                                }}
                                disabled={count === 1}
                                className={clsx("cursor-pointer", {
                                    "cursor-no-drop": count === 1,
                                })}
                            >
                                <FiMinus color="#000" size={22} />
                            </button>
                            <span
                                className={`text-pallet-black bg-white rounded-lg relative top-1 text-center pl-2 pr-2 font-black ${arnekG.className}`}
                            >
                                {count}
                            </span>
                            <button
                                type="button"
                                onClick={() => {
                                    handleCountMore();
                                }}
                                className="cursor-pointer"
                            >
                                <FiPlus color="#000" size={22} />
                            </button>
                        </div>
                        <div>
                            <span
                                className={`text-pallet-black font-black text-sm min-w-[50px] ${arnekG.className}`}
                            >
                                {MaskCoin(count * Number(data?.price))}
                            </span>
                        </div>
                    </div>
                    <p className={`font-bold text-sm ${arnekG.className}`}>
                        {data?.description}
                    </p>
                </div>
                buyProduct
            </section>
        </DefaultTemplate>
    );
};
