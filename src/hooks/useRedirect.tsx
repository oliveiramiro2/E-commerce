"use client";

import { useRouter } from 'next/navigation'

export const useRedirect = () => {
    const { push } = useRouter()

    return {
        push
    }
}
