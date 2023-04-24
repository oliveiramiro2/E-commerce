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
        <section className="w-screen h-52 bg-white border-gray-200">
            {data.map(item => (
                <p key={item.id}>{item.name}</p>
            ))}
            <p>paginação</p>
        </section>
    );
};
