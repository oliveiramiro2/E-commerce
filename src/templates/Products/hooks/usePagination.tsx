import { useState } from "react"

export const usePagination = () => {
    const [pagination, setPagination] = useState<number>(1)

    return {
        pagination,
        setPagination,
    }
}
