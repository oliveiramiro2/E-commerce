import React, { useEffect } from "react";

import { DefaultTemplate } from "../default";

export const BuyProduct: React.FC = () => {
    useEffect(() => {
        document.title = "RM E-commerce - comprar produto";
    }, []);

    return (
        <DefaultTemplate>
            <div>buyProduct</div>
        </DefaultTemplate>
    );
};
