import React from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

import { IPropsPagination } from "../interface";

export const Pagination: React.FC<IPropsPagination> = ({
    page,
    numPage,
}) => (
    <div className="flex items-center mb-10">
        <button
            type="button"
            /* className={clsx("h-max", {
                            invisible: pagination <= 1,
                        })}
                        onClick={() => handlePagination(false)}
                        disabled={pagination <= 1} */
        >
            <div className="bg-pallet-orange h-max rounded-md mr-2 p-2 hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange">
                <TiChevronLeft color="#fff" />
            </div>
        </button>
        <div className="flex gap-x-1">
            {page - 2 > 0 && (
                <button
                    className="p-1 bg-pallet-orange rounded-md hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange"
                    type="button"
                >
                    {page - 2}
                </button>
            )}
            {page - 1 > 0 && (
                <button
                    className="p-1 bg-pallet-orange rounded-md hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange"
                    type="button"
                >
                    {page - 1}
                </button>
            )}
            <button
                className="p-1 bg-pallet-orange rounded-md hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange"
                type="button"
            >
                {page}
            </button>
            {page + 2 <= numPage && (
                <button
                    className="p-1 bg-pallet-orange rounded-md hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange"
                    type="button"
                >
                    {page + 2}
                </button>
            )}
            {page + 1 <= numPage && (
                <button
                    className="p-1 bg-pallet-orange rounded-md hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange"
                    type="button"
                >
                    {page + 1}
                </button>
            )}
        </div>
        <button type="button" className="h-max">
            <div className="bg-pallet-orange h-max rounded-md ml-2 p-2 hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange">
                <TiChevronRight color="#fff" />
            </div>
        </button>
    </div>
);
