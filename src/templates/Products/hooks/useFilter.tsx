"use client";

import { useState } from "react"

import { ICategoriesOptions } from "../interfaces"

export const useFilter = () => {
    const [options, setOptions] = useState<ICategoriesOptions[]>([])
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [minPrice, setMinPrice] = useState<string>('')
    const [maxPrice, setMaxPrice] = useState<string>('')
    const [category, setCategory] = useState<string>('')

    return {
        options,
        setOptions,
        name,
        setName,
        price,
        setPrice,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        category,
        setCategory,
    }
}