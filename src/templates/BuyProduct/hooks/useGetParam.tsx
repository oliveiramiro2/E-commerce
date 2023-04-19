"use client";

import { useState } from "react"

export const useGetParam = () => {
    const [getParam, setGetParam] = useState<number>(1)

    return {
        getParam,
        setGetParam,
    }
}
