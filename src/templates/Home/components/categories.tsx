import React from "react";

import { oswald } from "@/functions/fonts";

export const Categories: React.FC = () => {
    return (
        <section>
            <div>
                <h2
                    className={`font-black text-3xl relative right-5 max-lg:right-0 mb-8 ${oswald.className}`}
                >
                    Categorias
                </h2>
            </div>
        </section>
    );
};
