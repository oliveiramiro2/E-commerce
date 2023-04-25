"use client";

import React from "react";
import { SlPencil } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FcSearch } from "react-icons/fc";

import { IProps } from "./interface";
import { useData } from "./hook";
import { tiro, arnekG } from "@/functions/fonts";
import { Pagination } from "./components";

export const ManagerContain: React.FC<IProps> = ({
    dataCategory,
    dataProduct,
    numberItemsPagination = 1,
}) => {
    const {
        data,
        page,
        numPage,
        handlePagPerIndex,
        handlePagMore,
        handlePagMinus,
    } = useData(dataProduct, dataCategory, numberItemsPagination);

    return (
        <div>
            <div className="flex mt-10 justify-between">
                <button
                    type="button"
                    className={`font-bold text-lg flex items-center gap-x-1 border border-blue-200 p-1 pr-2 rounded-md bg-white hover:bg-gray-100 transition-colors text-center ${tiro.className}`}
                >
                    <FiPlus color="#32f34c" size={22} />
                    Adicionar {dataProduct.length > 1 ? "Produto" : "Categoria"}
                </button>
                <div className="flex items-center relative right-[7vw]">
                    <input
                        type="text"
                        className={`w-40 outline-none border-l-2  border-t-2  border-b-2 border-pallet-purple p-1 pl-2 rounded-l-lg ${tiro.className}`}
                        placeholder="Procure um nome"
                    />
                    <FcSearch size={25} className="bg-white border-r-2  border-t-2  border-b-2 border-pallet-purple rounded-r-lg h-[35.1px] w-8" />
                </div>
                <div />
            </div>
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
            <Pagination
                page={page}
                numPage={numPage}
                handlePagPerIndex={handlePagPerIndex}
                handlePagMinus={handlePagMinus}
                handlePagMore={handlePagMore}
            />
        </div>
    );
};
