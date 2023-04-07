import React from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";

import { oswald, tiro } from "@/functions/fonts";

export const LoginAndRegister: React.FC<{ registerComponent: boolean }> = ({
    registerComponent,
}) => {
    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = useForm({});

    const loginValid = (data: FieldValues) => {
        return data;
    };
    const loginInvalid = (data: FieldValues) => {
        return data;
    };

    return (
        <section className="w-screen min-h-[72vh] flex justify-center">
            <div className="w-[80%] max-md:w-[90%] flex flex-col items-center">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex justify-center mb-3 mt-3">
                    <h3
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        {registerComponent ? "Cadastrar" : "Entrar"}
                    </h3>
                </div>
                <form className="flex flex-col gap-y-4 w-full items-center">
                    {registerComponent && (
                        <div className="flex flex-col w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] items-center">
                            <label
                                htmlFor="name"
                                className={`ml-2 font-semibold self-start ${tiro.className}`}
                            >
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                className={`w-full outline-none border-2 border-pallet-purple p-1 pl-2 pt-2 rounded-lg ${tiro.className}`}
                                placeholder="Digite seu nome"
                            />
                        </div>
                    )}
                    <div className="flex flex-col w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] items-center">
                        <label
                            htmlFor="email"
                            className={`ml-2 font-semibold self-start ${tiro.className}`}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`w-full outline-none border-2 border-pallet-purple p-1 pl-2 pt-2 rounded-lg ${tiro.className}`}
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div className="flex flex-col w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] items-center">
                        <label
                            htmlFor="senha"
                            className={`ml-2 font-semibold self-start ${tiro.className}`}
                        >
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            className={`w-full outline-none border-2 border-pallet-purple p-1 pl-2 pt-2 rounded-lg ${tiro.className}`}
                            placeholder="Digite sua senha"
                        />
                    </div>
                    {registerComponent && (
                        <div className="flex flex-col w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] items-center">
                            <label
                                htmlFor="senha2"
                                className={`ml-2 font-semibold self-start ${tiro.className}`}
                            >
                                Confirme sua senha
                            </label>
                            <input
                                type="password"
                                id="senha2"
                                className={`w-full outline-none border-2 border-pallet-purple p-1 pl-2 pt-2 rounded-lg ${tiro.className}`}
                                placeholder="Repita sua senha"
                            />
                        </div>
                    )}
                    <button
                        type="button"
                        className={`self-center rounded-lg p-2 pl-8 pr-8 bg-pallet-purple text-pallet-white tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                        onClick={() => handleSubmit(loginValid, loginInvalid)}
                    >
                        {registerComponent ? "Fazer cadastro" : "Entrar"}
                    </button>
                </form>
            </div>
        </section>
    );
};
