import { useState } from "react";

export const usePagination = () => {
    const [pagination, setPagination] = useState<number>(1);

    return {
        pagination,
        handleInputPagination: (value: string) =>
            setPagination(Number(value) === 0 ? 1 : Number(value) * 1),
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
