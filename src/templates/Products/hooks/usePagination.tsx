import { useState } from "react";

export const usePagination = () => {
    const [pagination, setPagination] = useState<number>(1);
    const [inputPagination, setInputPagination] = useState<number>(1);

    return {
        pagination,
        handleInputPagination: (value: string) =>
            setInputPagination(Number(value) === 0 ? 1 : Number(value) * 1),
        handleSearchInput: () => setPagination(inputPagination),
        handlePagination: (more: boolean) => {
            if (more) {
                setPagination(pagination + 1);
                return;
            }
            if (!more && pagination !== 1) {
                setPagination(pagination - 1);
            }
        },
    };
};
