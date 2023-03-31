import React from "react";

import { arnekG, oswald, tiro } from "@/functions/fonts";

export const SignUpHome: React.FC = () => {
    return (
        <section className="w-screen min-h-[65vh] flex flex-col items-center pt-8">
            <div>
                <h2 className={`font-black text-3xl ${oswald.className}`}>
                    Faça seu cadastro
                </h2>
            </div>
            <div className="flex mt-8 justify-center gap-x-8">
                <div className="w-1/3 flex flex-col justify-center items-end gap-y-5">
                    <input
                        type="text"
                        className={`w-[20vw] outline-none border-[1.5px] border-pallet-purple p-3 pl-5 rounded-lg ${tiro.className}`}
                        placeholder="Digite seu e-mail"
                    />
                    <input
                        type="password"
                        className={`w-[20vw] outline-none border-[1.5px] border-pallet-purple p-3 pl-5 rounded-lg ${tiro.className}`}
                        placeholder="Digite sua senha"
                    />
                    <button
                        type="button"
                        className={`self-center relative left-[90px] rounded-xl p-2 pl-8 pr-8 bg-pallet-purple text-pallet-white tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                    >
                        Registrar
                    </button>
                </div>
                <div className="w-1/3 p-10">
                    <p
                        className={`font-extrabold text-2xl tracking-widest ${arnekG.className}`}
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
