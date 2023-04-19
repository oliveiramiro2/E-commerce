import { useState } from "react";

export const useCount = () => {
    const [count, setCount] = useState<number>(1);

    return {
        count,
        handleCountLess: () => {
            if (count !== 1) {
                setCount(count - 1);
            }
        },
        handleCountMore: () => setCount(count + 1),
    };
};
