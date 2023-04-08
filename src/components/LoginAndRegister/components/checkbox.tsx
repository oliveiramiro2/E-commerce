import React from "react";
import { UseFormRegister } from "react-hook-form/dist/types/form";

import { formProps } from "../interfaces";
import { tiro } from "@/functions/fonts";

export const CheckBoxUser: React.FC<{
    register: UseFormRegister<formProps>;
}> = ({ register }) => (
    <div className="flex w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] mt-5 items-center pl-3">
        <input
            type="checkbox"
            id="tipo"
            className="accent-pallet-purple scale-125 relative top-[2px]"
            placeholder="Repita sua senha"
            {...register("type")}
        />
        <label
            htmlFor="tipo"
            className={`ml-2 font-semibold self-start relative top-[2px] ${tiro.className}`}
        >
            Administrador
        </label>
    </div>
);
