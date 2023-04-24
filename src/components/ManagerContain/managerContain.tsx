"use client";

import React from "react";

import { IProps } from "./interface";
import { useData } from "./hook";

export const ManagerContain: React.FC<IProps> = ({
    dataCategory,
    dataProduct,
}) => {
    const { data } = useData(dataProduct, dataCategory);

    return (
        <section className="w-[97vw] bg-white mt-5 mb-10 p-2 self-center rounded-lg border border-gray-300">
            {data.map(item => (
                <p key={item.id}>{item.name}</p>
            ))}
            <p>paginação</p>
        </section>
    );
};
