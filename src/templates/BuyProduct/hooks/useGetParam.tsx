import { useState } from "react"

export const useGetParam = () => {
    const [getParam, setGetParam] = useState<string>()

    return {
        getParam,
        setGetParam,
    }
}
