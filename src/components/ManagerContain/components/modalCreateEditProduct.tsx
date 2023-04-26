import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

import { oswald } from "@/functions/fonts";

export const ModalCreateEditProduct: React.FC = () => {
    useLayoutEffect(() => {
        gsap.from(".contain-modal-product", {
            scale: 0,
            opacity: 0,
            ease: "slow",
        });
    }, []);

    return (
        <div className="contain-modal-product">
            <p
                className={`font-black text-xl text-center self-center max-lg:right-0 ${oswald.className}`}
            >
                Deseja excluir o produto?
            </p>
        </div>
    );
};
