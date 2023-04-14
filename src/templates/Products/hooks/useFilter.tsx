"use client";

import { useState } from "react"

import { ICategoriesOptions } from "../interfaces"

export const useFilter = () => {
    const [options, setOptions] = useState<ICategoriesOptions[]>([])
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<string>('')

    return {
        options,
        setOptions,
        name,
        setName,
        price,
        setPrice,
    }
}