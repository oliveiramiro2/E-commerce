import React, { useContext, useEffect } from "react";

import { oswald } from "@/functions/fonts";
import { useLoginOrRegister, useLoginRegister } from "./hooks";
import { loginInvalid, loginValid } from "./functions";
import { CheckBoxUser, InputUser } from "./components";
import { RegisterHomeContext } from "@/context/registerUserHome";

export const LoginAndRegister: React.FC<{ registerComponent: boolean }> = ({
    registerComponent,
}) => {
    const { errors, handleSubmit, register } =
        useLoginRegister(registerComponent);
    const { dataInputs } = useLoginOrRegister(registerComponent);
    const { userData } = useContext(RegisterHomeContext);

    /* useEffect(() => {
        setUserData({email: '', password: ''})
    }, []) */

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
                    {dataInputs.map(item => (
                        <InputUser
                            key={item.id}
                            index={item.id}
                            data={{
                                ...item,
                                register,
                                errors,
                                registerForm: registerComponent,
                            }}
                        />
                    ))}
                    {registerComponent && (
                        <CheckBoxUser register={register} />
                    )}
                    <button
                        type="button"
                        className={`self-center rounded-lg p-2 pl-8 pr-8 mt-2 bg-pallet-purple text-pallet-white font-semibold tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                        onClick={handleSubmit(loginValid, loginInvalid)}
                    >
                        {registerComponent ? "Fazer cadastro" : "Entrar"}
                    </button>
                </form>
            </div>
        </section>
    );
};
