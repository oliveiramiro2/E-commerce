import React from "react";

import { tiro } from "@/functions/fonts";

export const FinishedSeller: React.FC<{ close: Function }> = () => {
    return (
        <div>
            <h5>Adicione seu endereço para entrega!</h5>
            <form>
                <div>
                    <label htmlFor="CEP">CEP</label>
                    <input
                        name="CEP"
                        placeholder="Adicione seu CEP"
                        type="text"
                        className={`outline-none border-[1.5px] border-pallet-purple p-3 pl-5 rounded-lg ${tiro.className}`}
                    />
                </div>
            </form>
        </div>
    );
};
