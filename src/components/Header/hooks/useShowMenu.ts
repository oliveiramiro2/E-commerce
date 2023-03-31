import { useState } from 'react'

export const useShowMenu = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return {
        show: showMenu,
        handleShow: () => setShowMenu(!showMenu)
    }
}

