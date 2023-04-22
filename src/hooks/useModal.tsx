import { useState } from "react";

export const useModal = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return {
        openModal,
        handleCloseModal: setOpenModal(false),
        handleOpenModal: setOpenModal(true),
    };
};
