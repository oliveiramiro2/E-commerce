"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form/dist/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { oswald, tiro } from "@/functions/fonts";

const schemaRegister = z
    .object({
        name: z.string().min(2, "O campo nome é obrigatório!"),
        email: z.string().email("Por favor, digite um email válido!"),
        password: z
            .string()
            .min(8, "Sua senha deve ter no mínimo 8 caracteres!"),
        confirmPassword: z
            .string()
            .min(8, "Sua senha deve ter no mínimo 8 caracteres!"),
    })
    .refine(fields => fields.password === fields.confirmPassword, {
        path: ["confirmPassword"],
        message: "As senhas devem ser iguais!",
    });

type formProps = z.infer<typeof schemaRegister>;

export const LoginAndRegister: React.FC<{ registerComponent: boolean }> = ({
    registerComponent,
}) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<formProps>({
        criteriaMode: "all",
        mode: "all",
        resolver: zodResolver(schemaRegister),
        reValidateMode: "onChange",
        defaultValues: {
            confirmPassword: "",
            email: "",
            password: "",
            name: "",
        },
    });

    const loginValid: SubmitHandler<formProps> = (data) => {
        console.log(data.confirmPassword)
        return data;
    };

    const loginInvalid: SubmitErrorHandler<formProps> = (data) => {
        console.log(data.email?.message, 'aaa')
        return data;
    };

    return (
        <section className="w-screen min-h-[72vh] flex justify-center">
            <div className="w-[80%] max-md:w-[90%] flex flex-col items-center mb-8">
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
                                className={`w-full outline-none border-2 border-pallet-purple p-1 pl-2 rounded-lg ${tiro.className}`}
                                placeholder="Digite seu nome"
                                {...register("name")}
                            />
                            {errors.name?.message && (
                                <p className={`text-red-500 font-semibold self-center ${tiro.className}`}>{errors.name?.message}</p>
                            )}
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
                            className={`w-full outline-none border-2 border-pallet-purple p-1 pl-2 rounded-lg ${tiro.className}`}
                            placeholder="Digite seu email"
                            {...register("email")}
                        />
                        {errors.email?.message && (
                            <p className={`text-red-500 font-semibold self-center ${tiro.className}`}>{errors.email?.message}</p>
                        )}
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
                            className={`w-full outline-none border-2 border-pallet-purple p-1 pl-2 rounded-lg ${tiro.className}`}
                            placeholder="Digite sua senha"
                            {...register("password")}
                        />
                        {errors.password?.message && (
                            <p className={`text-red-500 font-semibold self-center ${tiro.className}`}>{errors.password?.message}</p>
                        )}
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
                                className={`w-full outline-none border-2 border-pallet-purple p-1 pl-2 rounded-lg ${tiro.className}`}
                                placeholder="Repita sua senha"
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword?.message && (
                                <p className={`text-red-500 font-semibold self-center ${tiro.className}`}>{errors.confirmPassword?.message}</p>
                            )}
                        </div>
                    )}
                    <button
                        type="button"
                        className={`self-center rounded-lg p-2 pl-8 pr-8 bg-pallet-purple text-pallet-white tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                        onClick={handleSubmit(loginValid, loginInvalid)}
                    >
                        {registerComponent ? "Fazer cadastro" : "Entrar"}
                    </button>
                </form>
            </div>
        </section>
    );
};
