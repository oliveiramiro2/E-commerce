"use client";

import { useRouter } from 'next/navigation'

export const useRedirect = () => {
    const { push, back } = useRouter()

    return {
        push,
        back,
    }
}
