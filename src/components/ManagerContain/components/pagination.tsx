import React from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import clsx from "clsx";

import { IPropsPagination } from "../interface";

export const Pagination: React.FC<IPropsPagination> = ({
    page,
    numPage,
    handlePagMinus,
    handlePagMore,
    handlePagPerIndex,
}) => (
    <div className="flex justify-center mb-10">
        <button
            type="button"
            className={clsx("h-max", {
                invisible: page <= 1,
            })}
            onClick={() => handlePagMinus()}
            disabled={page <= 1}
        >
            <div className="bg-pallet-orange h-max rounded-md mr-2 p-2 hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange">
                <TiChevronLeft color="#fff" />
            </div>
        </button>
        <div className="flex gap-x-1">
            {page - 2 > 0 && (
                <button
                    className="text-white pl-3 pr-3 p-1 bg-pallet-orange rounded-md hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange"
                    type="button"
                    onClick={() => handlePagPerIndex(page - 2)}
                >
                    {page - 2}
                </button>
            )}
            {page - 1 > 0 && (
                <button
                    className="text-white pl-3 pr-3 p-1 bg-pallet-orange rounded-md hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange"
                    type="button"
                    onClick={() => handlePagPerIndex(page - 1)}
                >
                    {page - 1}
                </button>
            )}
            <button
                className="text-white pl-3 pr-3 p-1 rounded-md bg-[#ff9748] shadow-md shadow-pallet-orange"
                type="button"
                disabled
            >
                {page}
            </button>
            {page + 1 <= numPage && (
                <button
                    className="text-white pl-3 pr-3 p-1 bg-pallet-orange rounded-md hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange"
                    type="button"
                    onClick={() => handlePagPerIndex(page + 1)}
                >
                    {page + 1}
                </button>
            )}
            {page + 2 <= numPage && (
                <button
                    className="text-white pl-3 pr-3 p-1 bg-pallet-orange rounded-md hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange"
                    type="button"
                    onClick={() => handlePagPerIndex(page + 2)}
                >
                    {page + 2}
                </button>
            )}
        </div>
        <button
            type="button"
            className={clsx("h-max", {
                invisible: page === numPage,
            })}
            onClick={() => handlePagMore()}
            disabled={page === numPage}
        >
            <div className="bg-pallet-orange h-max rounded-md ml-2 p-2 hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange">
                <TiChevronRight color="#fff" />
            </div>
        </button>
    </div>
);
