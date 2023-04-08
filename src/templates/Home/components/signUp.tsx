"use client";

import React, { useContext } from "react";
import Link from "next/link";

import { arnekG, oswald, tiro } from "@/functions/fonts";
import { RegisterHomeContext } from "@/contexts/registerUserHome";

export const SignUpHome: React.FC = () => {
    const { userData, setUserData } = useContext(RegisterHomeContext);

    return (
        <section className="w-screen min-h-[65vh] flex flex-col items-center pt-8">
            <div>
                <h2
                    className={`font-black text-3xl relative right-5 max-lg:right-0 ${oswald.className}`}
                >
                    Faça seu cadastro
                </h2>
            </div>
            <div className="flex mt-8 justify-center gap-x-8 pl-5 pr-5 max-sm:flex-wrap-reverse max-sm:mb-8">
                <div className="flex flex-col w-[30%] max-lg:w-[40%] justify-center items-end gap-y-5 max-sm:w-[90%] max-sm:items-center">
                    <input
                        type="email"
                        className={`min-w-[90%] max-sm:w-[90%] outline-none border-[1.5px] border-pallet-purple p-3 pl-5 rounded-lg ${tiro.className}`}
                        placeholder="Digite seu e-mail"
                        onChange={e =>
                            setUserData({ ...userData, email: e.target.value })
                        }
                        defaultValue={userData.email}
                    />
                    <input
                        type="password"
                        className={`min-w-[90%] max-sm:w-[90%] outline-none border-[1.5px] border-pallet-purple p-3 pl-5 rounded-lg ${tiro.className}`}
                        placeholder="Digite sua senha"
                        onChange={e =>
                            setUserData({ ...userData, password: e.target.value })
                        }
                        defaultValue={userData.password}
                    />
                    <button
                        type="button"
                        className={`self-center rounded-xl p-2 pl-8 pr-8 bg-pallet-purple text-pallet-white tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                    onClick={() => console.log(userData, "saiu")}
                    >
                        <Link href="/cadastro">Registrar</Link>
                    </button>
                </div>
                <div className="p-10 w-[40%] max-sm:w-[80%] max-md:pl-2 max-md:pr-2">
                    <p
                        className={`font-extrabold text-2xl max-lg:text-lg tracking-widest ${arnekG.className}`}
                    >
                        Faça seu cadastro para usar nosso e-commerce e realizar
                        compras com facilidade. Compre e receba seus produtos no
                        conforto de sua casa, e tudo online e simplificado.
                    </p>
                </div>
            </div>
        </section>
    );
};
