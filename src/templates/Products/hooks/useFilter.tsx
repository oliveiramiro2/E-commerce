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
    const [filter, setFilter] = useState<string>('')

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
        filter,
        handleFilter: (fname: string, fprice: string, fminPrice: string, fmaxPrice: string, fcategory: string) => {
            let aux = ""
            if (fname !== '') aux += `&title=${fname}`
            if (fprice !== '' && fprice !== "0") aux += `&price=${fprice}`
            if (fminPrice !== '' && minPrice !== "0") aux += `&price_min=${fminPrice}`
            if (fmaxPrice !== '' && fmaxPrice !== "0") aux += `&price_max=${fmaxPrice}`
            if (fcategory !== '' && fcategory !== "0") aux += `&categoryId=${fcategory}`
            setFilter(aux)
        }
    }
}