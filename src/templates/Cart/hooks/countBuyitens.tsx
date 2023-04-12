"use client";

import {useState} from 'react'

export const CountBuyItens = () => {
    const [count, setCount] = useState<number[]>([]);

    return {
        count,
        setCount,
    }
}