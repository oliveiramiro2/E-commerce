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
            <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Carrinho
                    </h3>
                    <span
                        className={`text-pallet-black self-center font-bold tracking-wide ${oswald.className}`}
                    >
                        Compre agora seus produtos agora!
                    </span>
                </div>
                <div
                    className="w-full flex flex-col self-center pb-5 pt-5 border-gray-200"
                >
                    {cartData.length > 0 ? (
                        cartData.map(item => (
                            <ContainCart key={item.id} data={item} />
                        ))
                    ) : (
                        <span
                            className={`text-pallet-orange font-black text-sm ${arnekG.className}`}
                        >
                            Você ainda não tem items no seu carrinho.
                        </span>
                    )}
                </div>
            </section>
        </DefaultTemplate>
    );
};
