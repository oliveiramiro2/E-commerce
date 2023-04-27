"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";

import { DefaultTemplate } from "@/templates/default";
import { oswald } from "@/functions/fonts";

export const SkeletonManagetTable: React.FC = () => (
    <DefaultTemplate>
        <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center">
            <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                <h3
                    className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                >
                    Gerenciar produtos
                </h3>
            </div>
            <div className="w-[97vw] bg-white rounded-md mt-5 mb-10 self-center border border-blue-200">
                <Skeleton count={1} className="w-full h-14" />
                <Skeleton count={6} className="w-full h-10" />
            </div>
        </section>
    </DefaultTemplate>
);
