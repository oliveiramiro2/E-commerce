import { useState } from 'react'

export const useShowInfo = () => {
    const [showInfo, setShowInfo] = useState<boolean>(false);

    return {
        show: showInfo,
        handleShow: () => setShowInfo(true),
        handleHide: () => setShowInfo(false),
    }
};

