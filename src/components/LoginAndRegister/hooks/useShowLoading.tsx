import { useState } from "react";

export const useShowLoading = () => {
    const [showIconLoading, setShowIconLoading] = useState<boolean>(false);

    return { showIconLoading, setShowIconLoading };
};
