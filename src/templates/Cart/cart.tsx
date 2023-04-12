"use client";

import React, { useContext, useEffect } from "react";

import { DefaultTemplate } from "../default";
import { CartUserContext } from "@/contexts/cartUser";
import { arnekG, oswald } from "@/functions/fonts";
import { ContainCart } from "./components";

export const CartTemplate: React.FC = () => {
    const { cartData } = useContext(CartUserContext);

    useEffect(() => {
        document.title = "RM E-commerce - Carrinho";
    }, []);

    return (
        <DefaultTemplate>
            <section className="w-screen min-h-[88vh]">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Carrinho
                    </h3>
                    <span
                        className={`text-pallet-black font-bold tracking-wide hover:border-b hover:border-pallet-blue ${arnekG.className}`}
                    >
                        Compre agora seus produtos agora!
                    </span>
                </div>
                <div className="w-full">
                    {cartData.map((item) => (
                        <ContainCart key={item.id} data={item} />
                    ))}
                </div>
            </section>
        </DefaultTemplate>
    );
};
