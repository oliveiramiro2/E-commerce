import React from "react";
import clsx from "clsx";

import { arnekG, oswald, tiro } from "@/functions/fonts";
import { useAddressControl } from "./hooks";

export const FinishedSeller: React.FC<{ close: Function }> = () => {
    const { errors, register, disabledInputs, zipCodeNotFound, zipCode } =
        useAddressControl();

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
                                "border-red-500":
                                    errors.CEP?.message || !zipCodeNotFound,
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
                    {!zipCodeNotFound && zipCode.length === 9 && (
                        <p
                            className={`text-red-500 font-semibold self-center relative top-3 ${tiro.className}`}
                        >
                            Desculpe, CEP não foi encontrado!
                        </p>
                    )}
                </div>
                {zipCodeNotFound ? (
                    <>
                        <div className="flex justify-around mt-10">
                            <div className="flex flex-col">
                                <input
                                    placeholder="Cidade"
                                    type="text"
                                    className={clsx(
                                        `outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                                        {
                                            "border-red-500":
                                                errors.city?.message,
                                        }
                                    )}
                                    disabled={disabledInputs.city}
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
                                            "border-red-500":
                                                errors.state?.message,
                                        }
                                    )}
                                    disabled={disabledInputs.state}
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
                                            "border-red-500":
                                                errors.street?.message,
                                        }
                                    )}
                                    disabled={disabledInputs.street}
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
                                            "border-red-500":
                                                errors.district?.message,
                                        }
                                    )}
                                    disabled={disabledInputs.district}
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
                                            "border-red-500":
                                                errors.number?.message,
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
                                    disabled={disabledInputs.complement}
                                    className={`outline-none border-[1.5px] border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`}
                                    {...register("complement")}
                                />
                            </div>
                        </div>
                        <div className="flex justify-around mt-10">
                            <button
                                className={`bg-green-500 pb-2 pt-3 pl-3 pr-3 w-28 flex items-center justify-center gap-x-1 rounded-md font-bolder text-center text-sm text-pallet-white first-letter:capitalize hover:bg-green-400 transition-colors shadow-md shadow-green-500 ${arnekG.className}`}
                                type="button"
                            >
                                Comprar
                            </button>
                            <button
                                className={`bg-pallet-orange pb-2 pt-3 pl-3 pr-3 w-28 flex items-center justify-center gap-x-1 rounded-md font-bolder text-center text-sm text-pallet-white first-letter:capitalize hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange ${arnekG.className}`}
                                type="button"
                            >
                                Voltar
                            </button>
                        </div>
                    </>
                ) : (
                    <p
                        className={`text-pallet-orange text-center mt-20 font-black text-sm ${arnekG.className}`}
                    >
                        Digite seu CEP
                    </p>
                )}
            </form>
        </div>
    );
};
