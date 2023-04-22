import React from "react";
import clsx from "clsx";

import { oswald, tiro } from "@/functions/fonts";
import { useAddressControl } from "./hooks";

export const FinishedSeller: React.FC<{ close: Function }> = () => {
    const { errors, register } = useAddressControl();

    return (
        <div>
            <div className="w-full flex justify-center">
                <h5 className={`font-black text-2xl ${oswald.className}`}>
                    Adicione seu endereço para entrega!
                </h5>
            </div>
            <form className="w-full">
                <div className="w-full flex flex-col justify-center items-center mt-5">
                    <label
                        htmlFor="CEP"
                        className={`font-semibold ${tiro.className}`}
                    >
                        CEP
                    </label>
                    <input
                        placeholder="CEP"
                        type="text"
                        className={clsx(
                            `outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                            {
                                "border-red-500": errors.CEP?.message,
                            }
                        )}
                        {...register("CEP")}
                        maxLength={9}
                    />
                    {errors.CEP?.message && (
                        <p
                            className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                        >
                            {errors.CEP?.message}
                        </p>
                    )}
                </div>
                <div className="flex justify-around mt-10">
                    <div className="flex flex-col">
                        <input
                            placeholder="Cidade"
                            type="text"
                            className={clsx(
                                `outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                {
                                    "border-red-500": errors.city?.message,
                                }
                            )}
                            {...register("city")}
                        />
                        {errors.city?.message && (
                            <p
                                className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                            >
                                {errors.city?.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <input
                            placeholder="Estado"
                            type="text"
                            className={clsx(
                                `outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                {
                                    "border-red-500": errors.state?.message,
                                }
                            )}
                            {...register("state")}
                        />
                        {errors.state?.message && (
                            <p
                                className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                            >
                                {errors.state?.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex justify-around mt-10">
                    <div className="flex flex-col">
                        <input
                            placeholder="Rua"
                            type="text"
                            className={clsx(
                                `outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                {
                                    "border-red-500": errors.street?.message,
                                }
                            )}
                            {...register("street")}
                        />
                        {errors.street?.message && (
                            <p
                                className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                            >
                                {errors.street?.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <input
                            placeholder="Bairro"
                            type="text"
                            className={clsx(
                                `outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                {
                                    "border-red-500": errors.district?.message,
                                }
                            )}
                            {...register("district")}
                        />
                        {errors.district?.message && (
                            <p
                                className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                            >
                                {errors.district?.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex justify-around mt-10">
                    <div className="flex flex-col">
                        <input
                            placeholder="Número da casa"
                            type="text"
                            className={clsx(
                                `outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                {
                                    "border-red-500": errors.number?.message,
                                }
                            )}
                            {...register("number")}
                        />
                        {errors.number?.message && (
                            <p
                                className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                            >
                                {errors.number?.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <input
                            placeholder="Complemento"
                            type="text"
                            className={`outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                            {...register("complement")}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
