import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { DefaultTemplate } from "../default";
import { oswald } from "@/functions/fonts";
import { buyProduct } from "@/services/api";
import { IDataApi } from "@/interface";

export const BuyProductTemplate: React.FC = () => {
    const { data } = useQuery<IDataApi | undefined>({
        queryKey: ["buyProduct"],
        queryFn: () => buyProduct(1),
        keepPreviousData: true,
    });

    useEffect(() => {
        document.title = "RM E-commerce - comprar produto";
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
                buyProduct
            </section>
        </DefaultTemplate>
    );
};
