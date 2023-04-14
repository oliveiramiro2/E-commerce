"use client";

import { useState } from "react"

import { ICategoriesOptions } from "../interfaces"

export const useFilter = () => {
    const [options, setOptions] = useState<ICategoriesOptions[]>([])

    return {
        options,
        setOptions,
    }
}