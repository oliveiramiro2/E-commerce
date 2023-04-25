"use client";

import React from "react";
import { SlPencil } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";

import { IProps } from "./interface";
import { useData } from "./hook";
import { tiro, arnekG } from "@/functions/fonts";
import { Pagination } from "./components";

export const ManagerContain: React.FC<IProps> = ({
    dataCategory,
    dataProduct,
    numberItemsPagination = 1,
}) => {
    const { data, page, numPage } = useData(
        dataProduct,
        dataCategory,
        numberItemsPagination
    );

    return (
        <div>
            <table className="rounded-md border-separate border-tools-table-outline w-[97vw] bg-white mt-5 mb-10 self-center border border-blue-200">
                <thead>
                    <tr className="h-14">
                        <th
                            className={`font-bold text-center ${tiro.className}`}
                        >
                            Nome do produto
                        </th>
                        <th
                            className={`font-bold text-center border-l border-r border-blue-200 ${tiro.className}`}
                        >
                            Editar
                        </th>
                        <th
                            className={`font-bold text-center ${tiro.className}`}
                        >
                            Excluir
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr
                            key={item.id}
                            className="h-10 rounded-sm odd:bg-slate-100 border border-blue-200 border-separate border-tools-table-outline bg-white"
                        >
                            <td
                                className={`border-t border-blue-200 pl-2 font-medium ${arnekG.className}`}
                            >
                                {item.name}
                            </td>
                            <td className="text-center border-t border-l border-r border-blue-200">
                                <button type="button">
                                    <SlPencil color="#e68a00" size={20} />
                                </button>
                            </td>
                            <td className="border-t border-blue-200 text-center">
                                <button type="button">
                                    <FaRegTrashAlt color="#ff6666" size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination page={page} numPage={numPage} />
        </div>
    );
};
