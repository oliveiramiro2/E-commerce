"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { DefaultTemplate } from "../default";
import { arnekG, oswald } from "@/functions/fonts";
import { buyProduct } from "@/services/api";
import { IDataApi } from "@/interface";
import { useGetParam } from "./hooks";
import { useRedirect } from "@/hooks";

export const BuyProductTemplate: React.FC = () => {
    const { getParam, setGetParam } = useGetParam();
    const { data } = useQuery<IDataApi | undefined>({
        queryKey: ["buyProduct", getParam],
        queryFn: () => buyProduct(getParam),
        keepPreviousData: true,
    });
    const path = useSearchParams();
    const { back } = useRedirect();

    useEffect(() => {
        document.title = "RM E-commerce - comprar produto";
        if (path.toString().split("idProduto=")[1] !== undefined) {
            if (path.toString().split("idProduto=")[1] === "") back();
            setGetParam(Number(path.toString().split("idProduto=")[1]));
        }
    }, []);

    return (
        <DefaultTemplate>
            <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Comprar {data?.title}
                    </h3>
                </div>
                <div>
                    <div className="flex snap-x snap-mandatory snap-center">
                        {data?.images !== undefined &&
                            data?.images.length > 1 &&
                            data?.images.map((item: string) => (
                                <img className="imgsSnap" key={item} src={item} alt="produto" />
                            ))}
                    </div>
                    <p className={`font-bold text-sm ${arnekG.className}`}>
                        {data?.price}
                    </p>
                    <p className={`font-bold text-sm ${arnekG.className}`}>
                        {data?.description}
                    </p>
                </div>
                buyProduct
            </section>
        </DefaultTemplate>
    );
};
